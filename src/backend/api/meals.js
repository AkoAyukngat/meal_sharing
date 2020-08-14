const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET api/meals/ query parameters:

router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit,
  } = req.query;
  const meals = await knex.select("*").table("meal");

  const missingQueryParametersInRequest = Object.keys(req.query).length === 0;
  if (missingQueryParametersInRequest) {
    res.json(meals);
  }

  if (maxPrice) {
    const mealsMaxPrice = await knex
      .select("*")
      .table("meal")
      .where("price", "<", maxPrice);
    res.json(mealsMaxPrice);
  } else if (title) {
    const inquiredMeals = await knex
      .select("*")
      .table("meal")
      .where("title", "like", `%${title}%`);
    res.json(inquiredMeals);
  } else if (availableReservations === "true") {
    const mealsWithAvailableReservations = await knex
      .select("*")
      .sum({
        sumTotal: "reservation.number_of_guests",
      })
      .table("meal")
      .join("reservation", {
        "meal.id": "reservation.meal_id",
      })
      .groupBy("meal.title")
      .having("sumTotal", ">", "max_reservations");
    res.json(mealsWithAvailableReservations);
  } else if (createdAfter) {
    const mealsCreatedDate = await knex
      .select("*")
      .table("meal")
      .where("created_date", "<", createdAfter);
    res.json(mealsCreatedDate);
  } else if (limit) {
    const mealsLimit = await knex.select("*").table("meal").limit(limit);
    res.json(mealsLimit);
  }
});

//POST  to api/meals/:

router.post("/", async function (req, res) {
  const addMeal = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    due_date: req.body.due_date,
    max_reservations: req.body.max_reservations,
    price: req.body.price,
    created_date: req.body.created_date,
    image: req.body.image,
  };
  const insertMeal = await knex("meal").insert(addMeal);
  res.send(`New Meal Added ${insertMeal}`);
});

//GET api/meals/{id}:

router.get("/:id", async function (req, res) {
  const getMealById = await knex("meal").where({ id: req.params.id });
  res.json(getMealById);
});

//PUT api/meals/{id}:

router.put("/:id", async function (req, res) {
  const updateMealById = await knex("meal")
    .where({ id: req.params.id })
    .update({ title: req.query.title });
  res.json(`meal with this:${updateMealById} has been updated`);
});

//DELETE api/meals/{id}:

router.delete("/:id", async function (req, res) {
  const deleteMealById = await knex("meal")
    .where({
      id: req.params.id,
    })
    .delete();
  res.json(`Meal with id ${deleteMealById} was deleted`);
});

module.exports = router;
