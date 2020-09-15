import { Request, Response } from "express";
import { getMeals, getMealByDateRange, saveMeal, deleteMeal, isMealsWithRecipe, deleteMealsWithRecipe } from "./MealController";
import { Meal } from "./Meal";
import { deleteRecipe } from "../recipes/RecipeController";


export default [
    {
        path: "/meal",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const meals = await getMeals();
            res.send(meals);
        }
    },
    {
        path: "/meal/betweenDates",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const meals = await getMealByDateRange(req.body.startDate, req.body.endDate);
            res.send(meals);
        }
    },
    {
        path: "/meal",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const meal: Meal = req.body;
            const id = await saveMeal(meal);
            res.send(id.toString());
        }
    },
    {
        path: "/meal/isMealsWithRecipe/:id",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send(await isMealsWithRecipe(+req.params.id));
        }
    },
    {
        path: "/meal/:id",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            await deleteMeal(+req.params.id);
            res.sendStatus(200);
        }
    },
    {
        path: "/meal/withRecipe/:recipeId",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            await deleteMealsWithRecipe(+req.params.recipeId);
            res.sendStatus(200);
        }
    },
]