import { getRepository, Between } from "typeorm"
import { Meal } from "./Meal"

export const getMeals = async () => {
    const meals = await getRepository(Meal).find()
    return meals;
}

export const getMealByDateRange = async (startDateString: Date, endDateString: Date) => {
    let startDate = new Date(startDateString)
    let endDate = new Date(endDateString)

    const meals = await getRepository(Meal).find({
        day: Between(startDate, endDate)
    })
    return meals;
}

export const saveMeal = async (meal: Meal) => {
    await getRepository(Meal).save(meal);
    return meal.id;
}

export const isMealsWithRecipe = async (id: number) => {
    var mealsWithRecipe = await getRepository(Meal).find({ where: { recipeId: id }});
    return mealsWithRecipe.length > 0;
}

export const deleteMeal = async (id: number) => {
    await getRepository(Meal).delete(id);
}

export const deleteMealsWithRecipe = async (recipeId: number) => {
    await getRepository(Meal).delete({ recipeId: recipeId})
}

