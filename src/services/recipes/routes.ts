import { Request, Response } from "express";
import { getRecipes, getRecipeById, saveRecipe, deleteRecipe } from "./RecipeController";
import { Recipe } from "./Recipe";

export default [
    {
        path: "/recipe",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const recipes = await getRecipes();
            res.send(recipes);
        }
    },
    {
        path: "/recipe/:id",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const recipe = await getRecipeById(+req.params.id);
            res.send(recipe);
        }
    },
    {
        path: "/recipe",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const recipe: Recipe = req.body;
            const id = await saveRecipe(recipe);
            res.send(id.toString());
        }
    },
    {
        path: "/recipe/:id",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            await deleteRecipe(+req.params.id);
            res.sendStatus(200);
        }
    }
]