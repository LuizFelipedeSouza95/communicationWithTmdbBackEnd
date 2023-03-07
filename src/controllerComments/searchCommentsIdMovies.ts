import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";
export class searchCommentsIdmovies {
  async searchCommentsIdmovies(req: Request, res: Response) {
    const idMovie: string = req.query.idMovie as string;
    const comment = await prismaClient.comments.findMany({
      where: {
        idMovie: parseInt(idMovie),
      },
    });

    return comment
      ? res.status(200).json([comment])
      : res.status(200).json("Selected coment does not exist");
  }
}
