import Movie from "../Models/Movie.js";
import express from "express";

const router = express.Router();

router.post("/add-movie", async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
    });

    const movie = await newMovie.save();
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/get-all", async (req, res) => {
  try {
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/get-single", async (req, res) => {
  let movieId = req.query.id;
  try {
    let movie = await Movie.findById(movieId);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/get-paginated", async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const movie = await Movie.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
