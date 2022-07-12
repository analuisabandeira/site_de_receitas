import { IRecipe } from "./recipe-interface";

export interface ICategory {
    category: string,
    categoryId: string,
    recipes: IRecipe[],
}
