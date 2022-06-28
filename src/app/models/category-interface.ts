import { IRecipe } from "./recipe-interface";

export interface ICategory {
    category: string,
    recipes: IRecipe[],
}
