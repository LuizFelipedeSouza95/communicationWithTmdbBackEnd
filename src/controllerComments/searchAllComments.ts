import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";
export class searchAllComments {
  async searchAllComments(req: Request, res: Response) {
    const comment = await prismaClient.comments.findMany();
    return comment.length > 0
      ? res.status(200).json(comment)
      : res.status(204).send();
  }
}
