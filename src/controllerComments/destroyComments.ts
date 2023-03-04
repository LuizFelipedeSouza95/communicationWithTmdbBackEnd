import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";
export class destroyComments {
  async destroyComments(req: Request, res: Response) {
    const { idComment } = req.params;
    const comment = await prismaClient.comments.delete({
      where: {
        id: parseInt(idComment),
      },
    });
    return res.status(204).send();
  }
}
