import { getRecipes, getRecipeById, saveRecipe, deleteRecipe } from "./RecipeController";
import { initializeDbConnection, closeDbConnection } from "../../database";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";

var ingredient1 = new Ingredient();
ingredient1.name = "ingredient 1";

var ingredient2 = new Ingredient();
ingredient2.name = "ingredient 2";

var ingredient3 = new Ingredient();
ingredient3.name = "ingredient 3";

var testRecipe: Recipe = {
    id: 0,
    name: "test recipe",
    prepTime: "30 minutes",
    cookTime: "1 hour",
    cookTemp: "450",
    serves: "6",
    directions: "do some things",
    ingredients: [ingredient1, ingredient2],
};

describe("RecipeService", () => {
    beforeAll(async () => {
        await initializeDbConnection();
    });

    afterAll(async () => {
        await closeDbConnection();
    });

    test("get all recipes", async () => {
        const recipes = await getRecipes();
        console.log(recipes);
        expect(recipes).toBeTruthy();
    });

    test("get a specific recipe", async () => {
        const recipe = await getRecipeById(10);
        console.log(recipe);
        expect(recipe).toBeTruthy();
    });

    // try to get recipe that doesn't exist

    test("add a recipe", async () => {
        await saveRecipe(testRecipe);
        expect(testRecipe.id).not.toEqual(0);
    });

    test("update a recipe", async () => {
        testRecipe.name = "updated recipe";
        testRecipe.prepTime = "40 minutes";
        testRecipe.cookTime = "1.5 hours";
        testRecipe.cookTemp = "500";
        testRecipe.serves = "7";
        testRecipe.directions = "these are the new directions";
        testRecipe.ingredients.pop();
        testRecipe.ingredients.push(ingredient3);

        await saveRecipe(testRecipe);

        var updatedRecipe = await getRecipeById(testRecipe.id);
        expect(updatedRecipe?.name).toEqual("updated recipe");
        expect(updatedRecipe?.prepTime).toEqual("40 minutes");
        expect(updatedRecipe?.cookTime).toEqual("1.5 hours");
        expect(updatedRecipe?.cookTemp).toEqual("500");
        expect(updatedRecipe?.serves).toEqual("7");
        expect(updatedRecipe?.directions).toEqual("these are the new directions");
        
        const ing3 = updatedRecipe?.ingredients.pop();
        const ing1 = updatedRecipe?.ingredients.pop();
        expect(ing3?.name).toEqual("ingredient 3");
        expect(ing1?.name).toEqual("ingredient 1");
    });

    test("remove a recipe from the database", async () => {
        const recipeId = 11;
        await deleteRecipe(recipeId);
        await getRecipeById(recipeId);
    });
});
