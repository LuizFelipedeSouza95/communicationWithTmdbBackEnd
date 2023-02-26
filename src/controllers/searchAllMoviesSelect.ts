import { Request, Response } from "express";
import axios from 'axios';
require("dotenv").config();

export class searchMovies {
  async searchMovies(req: Request, res: Response) {
    const {search} = req.query
    const API_KEY = process.env.API_KEY
    const URL_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-br&query=${search}`;
    try {
      const result = await axios.get(URL_API);
      const resposta = result.data.results;
      const APIfiltrada = resposta.map(
        ({
          id,
          original_title,
          overview,
          poster_path,
          title,
          vote_average,
        }) => {
          return {
            id,
            original_title,
            overview,
            poster_path,
            title,
            vote_average,
          };
        }
      );
      return APIfiltrada.length > 0
      ? res.status(200).json(APIfiltrada)
      : res.status(204).send();
    } catch (error) {
      return res.status(404).json("error when searching for movies!")
    }
  }
}
