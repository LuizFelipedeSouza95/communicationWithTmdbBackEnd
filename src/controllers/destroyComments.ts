import { Request, Response } from "express";
import fs from "fs";

const readFile = async () => {
  const content = fs.readFileSync("./src/coments.json", "utf-8");
  return JSON.parse(content);
};

const writeFile = async (content) => {
  const updateFile = JSON.stringify(content);
  fs.writeFileSync("./src/coments.json", updateFile, "utf-8");
};

export class destroyComments {
  async destroyComments(req: Request, res: Response) {
    const { idComment } = req.params;
    const content = await readFile();
    const searchComment = content.find(
      (comment) => comment.id === JSON.parse(idComment)
    );

    if (!idComment) {
      return res.status(404).json("You need to pass a comment ID");
    } else if (content.length === 0) {
      return res.status(500).json("No comments registered");
    } else if (!searchComment) {
      return res.status(404).json("Selected comment does not exist");
    } else {
      content.splice(content.indexOf(searchComment), 1);
      writeFile(content);
      return res.status(202).json("Comment destroyed");
    }
  }
}
