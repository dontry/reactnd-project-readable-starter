import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createSore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
