import searchRoutes from "./search/routes";
import recipeRoutes from "./recipes/routes";
import taskRoutes from "./tasks/routes";
import mealRoutes from "./meals/routes";
import miscRoutes from "./misc/routes";

export default [...searchRoutes, ...recipeRoutes, ...taskRoutes, ...mealRoutes, ...miscRoutes];
