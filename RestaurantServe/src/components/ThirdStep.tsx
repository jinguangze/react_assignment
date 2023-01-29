import React, { FunctionComponent, useState } from "react";
import { DishType, Meal } from "../redux/states/MealState";

interface Props {
  numberOfPeople: number;
  meals: Meal[];
  restaurant: string | undefined;
  dishes: DishType[];
  onAddDish(dishData: DishType): void;
}
const ThirdStep: FunctionComponent<Props> = (props: Props) => {
  const { numberOfPeople, meals, restaurant, dishes, onAddDish } = props;
  const restaurantDishes = meals.filter((el) => el.restaurant === restaurant);
  const [dish, setDish] = useState<number>(restaurantDishes[0].id);
  const [numberOfServe, setNumberOfServe] = useState<number>(0);

  const handleDecreaseServe = () => {
    if (numberOfServe === 0) return;

    setNumberOfServe((prev) => prev - 1);
  };

  const handleIncreaseServe = () => {
    if (numberOfServe === numberOfPeople) return;

    setNumberOfServe((prev) => prev + 1);
  };

  const handleAdd = () => {
    if (dish && numberOfServe > 0) {
      onAddDish({ id: dish, numOfServe: numberOfServe });
      setDish(restaurantDishes[0].id);
      setNumberOfServe(0);
    }
  };

  return (
    <div className='max-w-xl mx-auto my-4 pb-4'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-2/4 pr-10'>
          Please select a Dish
          <select
            className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'
            value={dish}
            onChange={(event) => setDish(parseInt(event.target.value))}
          >
            {restaurantDishes.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col w-2/4 pl-10'>
          Please enter no of servings
          <div className='flex flex-row h-full'>
            <button
              data-action='decrement'
              className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-20 rounded-l cursor-pointer outline-none'
              onClick={handleDecreaseServe}
            >
              <span className='m-auto text-2xl font-thin'>−</span>
            </button>
            <input
              type='number'
              min={0}
              max={numberOfPeople}
              className='outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
              name='custom-input-number'
              value={numberOfServe}
            ></input>
            <button
              data-action='increment'
              className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-20 rounded-r cursor-pointer'
              onClick={handleIncreaseServe}
            >
              <span className='m-auto text-2xl font-thin'>+</span>
            </button>
          </div>
        </div>
      </div>
      <button
        className='mt-4 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-20 rounded-r cursor-pointer'
        onClick={handleAdd}
      >
        <span className='m-auto text-2xs font-thin'>Add Dish</span>
      </button>
      {dishes.map((el) => (
        <div className='flex flex-row'>{`${
          meals.find((m) => m.id === el.id)?.name
        } : ${el.numOfServe}`}</div>
      ))}
    </div>
  );
};
export default ThirdStep;

