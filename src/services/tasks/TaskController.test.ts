import { initializeDbConnection, closeDbConnection } from "../../database";
import { Task } from "./Task";
import { saveTask, getTasks } from "./TaskController";

var task1 = new Task();
task1.name = "testing task";

describe("TaskController", () => {
    beforeAll(async () => {
        await initializeDbConnection();
    });

    afterAll(async () => {
        await closeDbConnection();
    });

    test("save tasks", async () => {
        await saveTask(task1);
        expect(task1.id).not.toEqual(0);
    });

    test("get all tasks", async () => {
        const tasks = await getTasks();
        expect(tasks).toBeTruthy();
    });
})