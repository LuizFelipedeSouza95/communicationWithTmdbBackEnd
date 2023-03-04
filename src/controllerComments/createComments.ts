import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";
export class createComents {
  async createComents(req: Request, res: Response) {
    try {
      const { idMovie, name, coment } = req.body;

      const comment = await prismaClient.comments.create({
        data: {
          idMovie,
          name,
          coment,
        },
      });

      return res.status(201).json(comment);
    } catch (error) {
      return res.status(404).json("insertion error!");
    }
  }
}
