import { Request, Response } from "express";
import fs from "fs";
require("dotenv").config();

const readFile = async () => {
  const content = fs.readFileSync("./src/coments.json", "utf-8");
  return JSON.parse(content);
};

export class searchAllComments {
  async searchAllComments(req: Request, res: Response) {
    const content = await readFile();
    const ordered_comments = content.sort((a, b) =>
      a.createdAt > b.createdAt ? -1 : 1
    );
    return ordered_comments.length > 0
      ? res.status(200).json(content)
      : res.status(204).send();
  }
}
