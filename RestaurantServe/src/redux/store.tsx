import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  AnyAction
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AppState from "./states/AppState";
import MealReducer from "./reducers/MealReducer";

const rootReducer = combineReducers<AppState>({
  mealState: MealReducer
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

