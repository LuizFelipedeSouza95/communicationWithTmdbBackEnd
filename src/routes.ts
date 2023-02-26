import express from "express";
import { searchMovies } from "./controllers/searchAllMoviesSelect";
import { searchMovieId } from "./controllers/searchMovieId";
import { createComents } from "./controllers/createComents";
import { searchAllComments } from "./controllers/searchAllComments"
import { searchCommentsIdmovies } from "./controllers/searchCommentsIdMovies"
//import * as swagger from "./swagger.json";

const router = express.Router();
const searchMovie = new searchMovies();
const searchId = new searchMovieId()
const saveComent = new createComents()
const searchComent = new searchAllComments()
const searchCommentId = new searchCommentsIdmovies()

//router.use("/api/pokemon/docs", serve, setup(swagger));
router.get("/searchMovies", searchMovie.searchMovies);
router.get("/searchMovieId/", searchId.searchMovieId)
router.post("/createComents", saveComent.createComents)
router.get("/searchAllComments", searchComent.searchAllComments)
router.get("/searchCommentsId", searchCommentId.searchCommentsIdmovies)

export { router };
