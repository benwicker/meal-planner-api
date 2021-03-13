import { Request, Response } from "express";
import { checkConnection } from "./MiscController"

export default [
  {
    path: "/wake",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.sendStatus(200);
    }
  },
  {
    path: "/check-connection",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const conn = await checkConnection();  
      res.send(conn);
    }
  },
]