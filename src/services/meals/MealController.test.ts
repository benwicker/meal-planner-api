import { initializeDbConnection, closeDbConnection } from "../../database"
import { saveMeal, getMeals, getMealByDateRange, isMealsWithRecipe } from "./MealController";
import { Meal } from "./Meal";

var testMeal: Meal = {
    id: 0,
    name: "test meal",
    recipeId: 11,
    day: new Date()
}

describe("MealsController", () => {
    beforeAll(async () => {
        await initializeDbConnection();
    });

    afterAll(async () => {
        await closeDbConnection();
    });

    test("add a meal", async () => {
        await saveMeal(testMeal);
        expect(testMeal.id).not.toEqual(0);
    });

    test("get all meals", async () => {
        const meals = await getMeals();
        expect(meals).toBeTruthy();
    });

    test("determine if meals have recipe", async () => {
        const recipeId = 13;
        const isMeals: boolean = await isMealsWithRecipe(recipeId);
        expect(isMeals).toBeTruthy();
    });

    test("between date", async () => {
        const startDate = new Date("2020-08-24T04:00:00.000Z");
        const endDate = new Date("2020-08-30T04:00:00.000Z");
        var meals = await getMealByDateRange(startDate, endDate);
        expect(meals).toBeTruthy();
    })
})