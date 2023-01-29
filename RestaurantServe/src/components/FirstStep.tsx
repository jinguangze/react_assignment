import React, { FunctionComponent } from "react";
import { MealType } from "../redux/states/MealState";

interface Props {
  mealType: MealType | undefined;
  numberOfPeople: number;
  onMealType(mealType: MealType): void;
  onNumberOfPeople(numberOfPeople: number): void;
}
const FirstStep: FunctionComponent<Props> = (props: Props) => {
  const { mealType, numberOfPeople, onMealType, onNumberOfPeople } = props;

  const handleDecreaseNumberOfPeople = () => {
    if (numberOfPeople === 0) {
      return;
    }

    onNumberOfPeople(numberOfPeople - 1);
  };

  const handleIncreaseNumberOfPeople = () => {
    if (numberOfPeople === 10) {
      return;
    }

    onNumberOfPeople(numberOfPeople + 1);
  };

  return (
    <div className='max-w-xl mx-auto my-4 pb-4'>
      Please select a meal
      <select
        className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'
        value={mealType}
        onChange={(event) => onMealType(event.target.value as MealType)}
      >
        <option value='lunch'>Lunch</option>
        <option value='dinner'>Dinner</option>
        <option value='breakfast'>Breakfast</option>
      </select>
      <div className='custom-number-input w-32 mt-4'>
        Number of people
        <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
          <button
            data-action='decrement'
            className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
            onClick={handleDecreaseNumberOfPeople}
          >
            <span className='m-auto text-2xl font-thin'>−</span>
          </button>
          <input
            type='number'
            min={0}
            max={10}
            className='outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
            name='custom-input-number'
            value={numberOfPeople}
          ></input>
          <button
            data-action='increment'
            className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
            onClick={handleIncreaseNumberOfPeople}
          >
            <span className='m-auto text-2xl font-thin'>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default FirstStep;

