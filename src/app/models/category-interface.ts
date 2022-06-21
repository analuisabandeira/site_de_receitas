import { IRecipe } from "./recipe-interface";

export interface ICategory {
    categoryId: string,
    recipes: IRecipe[],
}
