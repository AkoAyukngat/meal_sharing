const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET api/reviews/:

router.get("/", async function (req, res) {
  const reviews = await knex.select("*").table("review");
  res.json(reviews);
});

//POST api/reviews/:

router.get("/", async function (req, res) {
  const addReview = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    meal_id: req.body.meal_id,
    ratings: req.body.ratings,
    created_date: req.body.created_date,
  };
  await knex("review").insert(addReview);
  await knex("review").insert(req.body);
  res.json("New review added");
});

//GET api/reviews/{id}:

router.get("/:id", async function (req, res) {
  const getReviewsById = await knex("review").where({
    id: req.params.id,
  });
  res.json(getReviewsById);
});

//PUT api/reviews/{id}:

router.put("/:id", async function (req, res) {
  const updateReviewById = await knex("review")
    .where({ id: req.params.id })
    .update({ description: req.query.description });
  res.json(`Review with this:${updateReviewById} has been updated`);
});

//DELETE api/reviews/{id}:

router.delete("/:id", async function (req, res) {
  const deleteReviewById = await knex("review")
    .where({
      id: req.params.id,
    })
    .delete();
  res.json(`Review with id ${deleteReviewById} was deleted`);
});

module.exports = router;
