import React, { FunctionComponent } from "react";
import { Meal } from "../redux/states/MealState";

interface Props {
  meals: Meal[];
  restaurant: string | undefined;
  onRestaurant(restaurant: string): void;
}
const SecondStep: FunctionComponent<Props> = (props: Props) => {
  const { meals, restaurant, onRestaurant } = props;
  const restaurants = meals.map((el) => el.restaurant);
  const uniqueRestaurants = restaurants.filter((c, index) => {
    return restaurants.indexOf(c) === index;
  });

  return (
    <div className='max-w-xl mx-auto my-4 pb-4'>
      Please select a Restaurant
      <select
        className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'
        value={restaurant}
        onChange={(event) => onRestaurant(event.target.value)}
      >
        {uniqueRestaurants.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};
export default SecondStep;

