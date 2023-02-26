import { Request, Response } from "express";
import axios from 'axios';
require("dotenv").config();

export class searchMovieId {
  async searchMovieId(req: Request, res: Response) {
    const { id } = req.query;
    const API_KEY = process.env.API_KEY
    const URL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`;
    try {
      const result = await axios.get(URL_API);
      const response = result.data;
      const filtroDados = {
        id: response.id,
        original_title: response.original_title,
        overview: response.overview,
        poster_path: response.poster_path,
        vote_average: response.vote_average,
        original_language: response.original_language,
        release_date: response.release_date
     }
     if (id == null) {
      return res.status(404).json("You need to pass two movie");
    } else if (response == "") {
      return res.status(504).json("No movie registered");
    } else {
      return filtroDados
      ? res.status(200).json(filtroDados)
      : res.status(204).send();
    }

    } catch (error) {
      return res.status(204).json()
    }
  }
}