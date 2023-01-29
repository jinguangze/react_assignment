import React from "react";
import { connect } from "react-redux";
import MealState, { DishType, Meal, MealType } from "./redux/states/MealState";
import {
  setMealTypeAction,
  setNumberOfePeopleAction,
  setStepAction,
  setRestaurantAction,
  addDishAction,
  setMealsAction
} from "./redux/actions/MealActions";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import ForthStep from "./components/ForthStep";
import StepBar from "./components/StepBar";
import AppState from "./redux/states/AppState";

interface Props {
  setMealsAction(meals: Meal[]): void;
  setMealTypeAction(mealType: MealType): void;
  setNumberOfePeopleAction(numberOfPeople: number): void;
  setStepAction(step: number): void;
  setRestaurantAction(restaurant: string): void;
  addDishAction(dishData: DishType): void;
  mealState: MealState;
}

export class App extends React.Component<Props> {
  componentDidMount(): void {
    fetch("/data/dishes.json")
      .then((response) => response.json())
      .then((json) => this.props.setMealsAction(json.dishes));
  }

  handlePrev() {
    this.props.setStepAction(this.props.mealState.step - 1);
  }

  handleNext() {
    if (
      this.props.mealState.step === 0 &&
      this.props.mealState.numberOfPeople === 0
    ) {
      return;
    }

    if (this.props.mealState.step === 3) {
      console.log("Check submit data: ", this.props.mealState);
      return;
    }

    this.props.setStepAction(this.props.mealState.step + 1);
  }

  public render() {
    const { mealState } = this.props;

    return (
      <div>
        <StepBar step={mealState.step} />
        {mealState.step === 0 && (
          <FirstStep
            mealType={this.props.mealState.mealType}
            numberOfPeople={this.props.mealState.numberOfPeople}
            onMealType={this.props.setMealTypeAction}
            onNumberOfPeople={this.props.setNumberOfePeopleAction}
          />
        )}
        {mealState.step === 1 && (
          <SecondStep
            meals={this.props.mealState.meals}
            restaurant={this.props.mealState.restaurant}
            onRestaurant={this.props.setRestaurantAction}
          />
        )}
        {mealState.step === 2 && (
          <ThirdStep
            numberOfPeople={this.props.mealState.numberOfPeople}
            meals={this.props.mealState.meals}
            restaurant={this.props.mealState.restaurant}
            dishes={this.props.mealState.dishes}
            onAddDish={this.props.addDishAction}
          />
        )}
        {mealState.step === 3 && <ForthStep mealState={mealState} />}

        <div className='flex flex-row justify-between max-w-xl mx-auto my-4 pb-4'>
          {mealState.step > 0 && (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => this.handlePrev()}
            >
              Previous
            </button>
          )}
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => this.handleNext()}
          >
            {mealState.step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    mealState: state.mealState
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setMealsAction: (meals: Meal[]) => dispatch(setMealsAction(meals)),
    setMealTypeAction: (mealType: MealType) =>
      dispatch(setMealTypeAction(mealType)),
    setNumberOfePeopleAction: (numberOfPeople: number) =>
      dispatch(setNumberOfePeopleAction(numberOfPeople)),
    setStepAction: (step: number) => dispatch(setStepAction(step)),
    setRestaurantAction: (restaurant: string) =>
      dispatch(setRestaurantAction(restaurant)),
    addDishAction: (dishData: DishType) => dispatch(addDishAction(dishData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
