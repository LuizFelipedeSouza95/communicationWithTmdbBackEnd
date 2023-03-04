import express from "express";
import { searchMovies } from "./controllerMovies/searchAllMoviesSelect";
import { searchMovieId } from "./controllerMovies/searchMovieId";
import { createComents } from "./controllerComments/createComments";
import { searchAllComments } from "./controllerComments/searchAllComments";
import { searchCommentsIdmovies } from "./controllerComments/searchCommentsIdMovies";
import { destroyComments } from "./controllerComments/destroyComments";
import { serve, setup } from "swagger-ui-express";
import * as swagger from "./swagger.json";

const router = express.Router();
const searchMovie = new searchMovies();
const searchId = new searchMovieId();
const saveComent = new createComents();
const searchComent = new searchAllComments();
const searchCommentId = new searchCommentsIdmovies();
const destroyCommentId = new destroyComments();

router.use("/docs", serve, setup(swagger));

router.get("/searchMovies", searchMovie.searchMovies);
router.get("/searchMovieId/", searchId.searchMovieId);
router.post("/createComents", saveComent.createComents);
router.get("/searchAllComments", searchComent.searchAllComments);
router.get("/searchCommentsId", searchCommentId.searchCommentsIdmovies);
router.delete("/destroyComment/:idComment", destroyCommentId.destroyComments);

export { router };
