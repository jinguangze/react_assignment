export type MealType = "lunch" | "dinner" | "breakfast";

export interface DishType {
  id: number;
  numOfServe: number;
}

export interface Meal {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: MealType[];
}

export default interface MealState {
  meals: Meal[];
  mealType: MealType | undefined;
  numberOfPeople: number;
  restaurant: string | undefined;
  dishes: DishType[];
  step: number;
}

