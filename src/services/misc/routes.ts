import { Request, Response } from "express";

export default [
  {
    path: "/wake",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendStatus(200);
    }
  },
]