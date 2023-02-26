import { Request, Response } from "express";
import axios from 'axios';
import fs from "fs";
require("dotenv").config();

const readFile = async () => {
  const content = fs.readFileSync("./src/coments.json", "utf-8");
  return JSON.parse(content);
};

const whiteFile = async (content) => {
  const updateFile = JSON.stringify(content);
  fs.writeFileSync("./src/coments.json", updateFile, "utf-8");
};

export class createComents {
  async createComents(req: Request, res: Response) {
    try {
      const { idMovie, name, coment } = req.body;
      const content = await readFile();
      const createdAt = new Date();

      var ultimoItem = content[content.length - 1];

      const getIdComents = async () => {
        if (ultimoItem == undefined) {
          ultimoItem = 1;
          return ultimoItem;
        } else {
          const id = ultimoItem.id + 1;
          return id;
        }
      };
  
      const id = await getIdComents();

      const coments = {
        id,
        idMovie,
        name,
        coment,
        createdAt
      }

      if (idMovie == "") {
        return res.status(404).json("You need to pass two Comment");
      } else if (content == "") {
        return res.status(500).json("No coment registered");
      } else {
        content.push(coments);
        whiteFile(content);
        return res.status(201).json(coments);
      }

    } catch (error) {
      return res.status(404).json("insertion error!")
    }
  }
}