import express from "express";
import { searchMovies } from "./controllers/searchAllMoviesSelect";
import { searchMovieId } from "./controllers/searchMovieId";
import { createComents } from "./controllers/createComments";
import { searchAllComments } from "./controllers/searchAllComments";
import { searchCommentsIdmovies } from "./controllers/searchCommentsIdMovies";
import { destroyComments } from "./controllers/destroyComments";
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
