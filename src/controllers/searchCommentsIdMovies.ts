import { Request, Response } from "express";
import fs from "fs";
require("dotenv").config();

const readFile = async () => {
  const content = fs.readFileSync("./src/coments.json", "utf-8");
  return JSON.parse(content);
};

export class searchCommentsIdmovies {
  async searchCommentsIdmovies(req: Request, res: Response) {
    const { idMovie } = req.query;
    const content = await readFile();
    
    const getIds = async () => {
      const ids = content.filter((id) => id.idMovie === idMovie);
      return ids;
    };

    const searchComment = await getIds();

    searchComment.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1);

    if (idMovie == null) {
      return res.status(404).json("You need to pass two Comment");
    } else if (content == "") {
      return res.status(500).json("No coment registered");
    } else if (!searchComment) {
      return res.status(404).json("Selected coment does not exist");
    } else {
      return res.status(200).json(searchComment);
    }
  }
}
