import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  return createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
