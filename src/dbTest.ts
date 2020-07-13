import { getConnection } from "typeorm";
import { initializeDbConnection } from './database/index';
import { Recipe } from './services/recipes/Recipe';

initializeDbConnection().then(() => {
    // let newRecipe: Recipe = {
    //     id: 0,
    //     name: "Test Recipe",
    //     prepTime: "30 minutes",
    //     cookTime: "1 hour",
    //     cookTemp: "400",
    //     serves: "12"
    // }

    // const connection = getConnection()
    //     .createQueryBuilder()
    //     .insert()
    //     .into(Recipe)
    //     .values([
    //         newRecipe
    //     ])
    //     .execute();
})







