import { Reducer } from "redux";
import MealState from "../states/MealState";
import { MealActionTypes, MealActions } from "../actions/MealActions";

const initialState: MealState = {
  meals: [],
  mealType: "lunch",
  numberOfPeople: 0,
  restaurant: undefined,
  dishes: [],
  step: 0
};

const AppReducer: Reducer<MealState, MealActions> = (
  state = initialState,
  action: MealActions
) => {
  switch (action.type) {
    case MealActionTypes.SET_MEALS: {
      return {
        ...state,
        meals: action.payload.meals,
        restaurant: action.payload.meals[0].restaurant
      };
    }
    case MealActionTypes.SET_MEAL_TYPE: {
      return {
        ...state,
        mealType: action.payload.mealType
      };
    }
    case MealActionTypes.SET_NUMBER_OF_PEOPLE: {
      return {
        ...state,
        numberOfPeople: action.payload.numberOfPeople
      };
    }

    case MealActionTypes.SET_STEP: {
      return {
        ...state,
        step: action.payload.step
      };
    }

    case MealActionTypes.SET_RESTAURANT: {
      return {
        ...state,
        restaurant: action.payload.restaurant
      };
    }

    case MealActionTypes.ADD_DISH: {
      return {
        ...state,
        dishes: [...state.dishes, action.payload.dishData]
      };
    }
    default:
      return state;
  }
};

export default AppReducer;

