export interface IRecipe {
  name: string;
  categoryId:string;
  preparationTime: string;
  revenue: string;
  image: string;
  bestDishes: boolean;
  ingredients: string[];
  methodOfPreparation: string;
}
