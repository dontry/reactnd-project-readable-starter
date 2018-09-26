import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "./Routes";
import ConfigureStore from "./stores/configureStore";
import { history } from "./stores/configureStore";

const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
