import { Request, Response } from "express";
import { getTasks, getCompletedTasks, saveTask, saveTasks } from "./TaskController";
import { Task } from "./Task";

export default [
    {
        path: "/task",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const tasks = await getTasks();
            res.send(tasks);
        }
    },
    {
        path: "/task/completed",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const tasks = await getCompletedTasks();
            res.send(tasks);
        }
    },
    {
        path: "/task",
        method: "post",
        handler: async (req: Request, res: Response) => {
            if (req.body.isArray()) {
                const tasks: Task[] = req.body;
                await saveTasks(tasks);
                res.sendStatus(200);
            }  
            else {
                const task: Task = req.body;
                const id = await saveTask(task);
                res.send(id.toString());
            }
        }
    }
]