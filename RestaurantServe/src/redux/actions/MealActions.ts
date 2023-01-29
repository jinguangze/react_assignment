import { DishType, Meal, MealType } from "../states/MealState";

export enum MealActionTypes {
  SET_MEALS = "SET_MEALS",
  SET_MEAL_TYPE = "SET_MEAL_TYPE",
  SET_NUMBER_OF_PEOPLE = "SET_NUMBER_OF_PEOPLE",
  SET_STEP = "SET_STEP",
  SET_RESTAURANT = "SET_RESTAURANT",
  ADD_DISH = "ADD_DISH"
}

export interface SetMealsAction {
  type: MealActionTypes.SET_MEALS;
  payload: { meals: Meal[] };
}

export interface SetMealTypeAction {
  type: MealActionTypes.SET_MEAL_TYPE;
  payload: { mealType: MealType };
}

export interface SetNumberOfPeopleAction {
  type: MealActionTypes.SET_NUMBER_OF_PEOPLE;
  payload: { numberOfPeople: number };
}

export interface SetStepAction {
  type: MealActionTypes.SET_STEP;
  payload: { step: number };
}

export interface SetRestaurantAction {
  type: MealActionTypes.SET_RESTAURANT;
  payload: { restaurant: string };
}

export interface AddDishAction {
  type: MealActionTypes.ADD_DISH;
  payload: { dishData: DishType };
}

export type MealActions =
  | SetMealsAction
  | SetMealTypeAction
  | SetNumberOfPeopleAction
  | SetStepAction
  | SetRestaurantAction
  | AddDishAction;

export function setMealsAction(meals: Meal[]): SetMealsAction {
  return {
    type: MealActionTypes.SET_MEALS,
    payload: { meals }
  };
}

export function setMealTypeAction(mealType: MealType): SetMealTypeAction {
  return {
    type: MealActionTypes.SET_MEAL_TYPE,
    payload: { mealType }
  };
}

export function setNumberOfePeopleAction(
  numberOfPeople: number
): SetNumberOfPeopleAction {
  return {
    type: MealActionTypes.SET_NUMBER_OF_PEOPLE,
    payload: { numberOfPeople }
  };
}

export function setStepAction(step: number): SetStepAction {
  return {
    type: MealActionTypes.SET_STEP,
    payload: { step }
  };
}

export function setRestaurantAction(restaurant: string): SetRestaurantAction {
  return {
    type: MealActionTypes.SET_RESTAURANT,
    payload: { restaurant }
  };
}

export function addDishAction(dishData: DishType): AddDishAction {
  return {
    type: MealActionTypes.ADD_DISH,
    payload: { dishData }
  };
}

