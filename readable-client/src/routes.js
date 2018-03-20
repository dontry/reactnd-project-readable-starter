import React from "react";
import { Route } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import"./App.css";

// import App from "./pages/App";
import PostListIndex from "./pages/PostListIndex";
import PostListByCategory from "./pages/PostListByCategory";
import PostShow from "./pages/PostShow";
import ErrorPage from "./pages/ErrorPage";
import Error404 from "./pages/Error404";
import PostEditor from "./pages/PostEditor";
import NotificationContainer from "./containers/NotificationContainer";
import Switch from "react-router-dom/Switch";

const Routes = () => (
  <MuiThemeProvider>
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostListIndex} />
        <Route
          exact
          path="/categories/:category"
          component={PostListByCategory}
        />
        <Route exact path="/posts/:id/edit" component={PostEditor} />
        <Route exact path="/posts/create" component={PostEditor} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/error/:errorCode" component={ErrorPage} />
        <Route component={Error404} />
      </Switch>
      <NotificationContainer />
    </div>
  </MuiThemeProvider>
);

export default Routes;
