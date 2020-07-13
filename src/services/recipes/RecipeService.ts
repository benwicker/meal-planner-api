import { getRepository } from "typeorm"
import { Recipe } from "./Recipe"

export const getRecipes = async () => {
    const recipes = await getRepository(Recipe).find({ relations: ["ingredients"]})
    return recipes;
}

export const getRecipeById = async (id: number) => {
    const recipe = await getRepository(Recipe).findOne(id, { relations: ["ingredients"] });
    return recipe;
}

export const saveRecipe = async (recipe: Recipe) => {
    await getRepository(Recipe).save(recipe);
}

export const deleteRecipe = async (id: number) => {
    await getRepository(Recipe).delete(id);
}