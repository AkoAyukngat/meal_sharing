const express = require("express");
const router = express.Router();
const knex = require("../database");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//GET api/reservations/:

// router.get("/", async function (req, res) {
//   const reservations = await knex.select("*").table("reservation");
//   res.json(reservations);
// });

router.get("/", async (request, response) => {
  try {
    const availableMeals = await knex.raw(
      "SELECT meal.*,sum(reservation.number_of_guests) Total FROM meal INNER JOIN reservation on meal.id = reservation.meal_id GROUP BY meal.id HAVING Total < max_reservations"
      //"SELECT r.meal_id, m.max_reservations, sum(number_of_guests) total_reservations FROM meal m inner join reservation r on m.id = r.meal_id group by r.meal_id having total_reservations < m.max_reservations"
    );
    let mealsAvailableForReservation = availableMeals[0];

    const mealsWithoutReservation = await knex.raw(
      "SELECT * FROM meal where meal.id not in(select meal_id from Reservation)"
    );
    mealsWithoutReservation[0].forEach((item) => {
      mealsAvailableForReservation.push(item);
    });
    response.json(mealsAvailableForReservation);
  } catch (error) {
    throw error;
  }
});

//POST api/reservations/:
router.post("/", async function (req, res) {
  const addReservation = {
    name: req.body.name,
    number_of_guests: req.body.number_of_guests,
    meal_id: req.body.meal_id,
    phone_number: req.body.phone_number,
    email: req.body.email,
    created_date: req.body.created_date,
  };
  const insertReservation = await knex("reservation").insert(addReservation);
  res.send(
    `Successful!, reservation id: ${insertReservation}. Please return to meals`
  );
});

//GET api/reservations/{id}:

router.get("/:id", async function (req, res) {
  const getReservationById = await knex("reservation").where({
    id: req.params.id,
  });
  res.json(getReservationById);
});

//PUT api/reservations/{id}:

router.put("/:id", async function (req, res) {
  const updateReservationById = await knex("reservation")
    .where({ id: req.params.id })
    .update({ number_of_guests: req.query.number_of_guests });
  res.json(`Reservation with this:${updateReservationById} has been updated`);
});

//DELETE api/reservations/{id}:

router.delete("/:id", async function (req, res) {
  const deleteReservationById = await knex("reservation")
    .where({
      id: req.params.id,
    })
    .delete();
  res.json(`Reservation with id ${deleteReservationById} was deleted`);
});

module.exports = router;
