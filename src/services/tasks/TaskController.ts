import { Task } from "./Task";
import { getRepository } from "typeorm";

export const saveTask = async (task: Task) => {
    await getRepository(Task).save(task);
    return task.id;    
};

export const saveTasks = async (tasks: Task[]) => {
    await getRepository(Task).save(tasks);
    return;
}

export const getTasks = async () => {
    const tasks = await getRepository(Task).find();
    return tasks;
};

export const getCompletedTasks = async () => {
    const tasks = await getRepository(Task).find({ where: { isCompleted: true }});
    return tasks;
};