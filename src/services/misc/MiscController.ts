import { getRepository } from "typeorm"
import { Recipe } from "../recipes/Recipe"
import { initializeDbConnection } from '../../database';

export const checkConnection = async () => {
  try {
    var options = initializeDbConnection();
    // const recipes = await getRepository(Recipe).find({ take: 1 });
    return options;
  } catch (e) {
    return e;
  }
}