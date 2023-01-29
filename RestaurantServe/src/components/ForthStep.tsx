import React, { FunctionComponent } from "react";
import MealState from "../redux/states/MealState";

interface Props {
  mealState: MealState;
}
const ForthStep: FunctionComponent<Props> = (props: Props) => {
  const { mealState } = props;

  return (
    <div className='max-w-xl mx-auto my-4 pb-4'>
      <div className='flex flex-row justify-between'>
        Meal: {mealState.mealType}
      </div>
      <div className='flex flex-row justify-between'>
        Number of people: {mealState.numberOfPeople}
      </div>
      <div className='flex flex-row justify-between'>
        Restaurant: {mealState.restaurant}
      </div>
      <div className='flex flex-row justify-between'>
        Dishes:
        {mealState.dishes.map((el) => {
          return (
            <span>{`${mealState.meals.find((m) => m.id === el.id)?.name}: ${
              el.numOfServe
            }`}</span>
          );
        })}
      </div>
    </div>
  );
};
export default ForthStep;

