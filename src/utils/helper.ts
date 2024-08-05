import type { dishDetails } from "src/types/menu/menu";

export const getIngredients = (dish: dishDetails) => {
  const ingredients = [];
  for (const key in dish) {
    if (key && key.includes("strIngredient")) {
      if (dish[key as keyof dishDetails] !== null) {
        ingredients.push(dish[key as keyof dishDetails]);
      }
    }
  }
  return ingredients as string[];
};

export const getPrice = (id: number) => {
  return Math.floor(Math.random() * id * new Date().getTime())
    .toString()
    .slice(0, 2);
};
