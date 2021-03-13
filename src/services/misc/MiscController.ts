import { getRepository } from "typeorm"
import { Recipe } from "../recipes/Recipe"

export const checkConnection = async () => {
  try {
    const recipes = await getRepository(Recipe).find({ take: 1 });
    return recipes;
  } catch (e) {
    return e;
  }
}