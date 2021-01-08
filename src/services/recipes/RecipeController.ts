import { getRepository } from "typeorm"
import { Recipe } from "./Recipe"

const compareNames = ( r1: Recipe, r2: Recipe ) => {
    const R1 = r1.name.toUpperCase();
    const R2 = r2.name.toUpperCase();
    return (R1 > R2) ? 1 : ((R2 > R1) ? -1 : 0)
}

export const getRecipes = async () => {
    const recipes = await (await getRepository(Recipe).find({ relations: ["ingredients"]})).sort(compareNames)
    return recipes;
}

export const getRecipeById = async (id: number) => {
    const recipe = await getRepository(Recipe).findOne(id, { relations: ["ingredients"] });
    return recipe;
}

export const saveRecipe = async (recipe: Recipe) => {
    await getRepository(Recipe).save(recipe);
    return recipe.id;
}

export const deleteRecipe = async (id: number) => {
    await getRepository(Recipe).delete(id);
}