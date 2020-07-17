import searchRoutes from "./search/routes";
import recipeRoutes from "./recipes/routes";
import taskRoutes from "./tasks/routes";

export default [...searchRoutes, ...recipeRoutes, ...taskRoutes];