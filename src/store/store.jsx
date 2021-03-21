import { createStore, combineReducers, compose } from "redux";
import todoReducer from "./todo/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todo: todoReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers());
  return store;
};

export default configureStore;
