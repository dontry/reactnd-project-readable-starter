import React from "react";
import { Route } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import App from "./pages/App";
import PostListIndex from "./pages/PostListIndex";
import PostShow from "./pages/PostShow";
import PostEditor from "./pages/PostEditor";
import Switch from "react-router-dom/Switch";

const Routes = () => (
  <MuiThemeProvider>
    <div>
      <Route exact path="/" component={PostListIndex} />
      <Route exact path="/create" component={PostEditor} />
      <Route exact path="/posts/:id" component={PostShow} />
      <Route exact path="/posts/:id/edit" component={PostEditor} />
    </div>
  </MuiThemeProvider>
);

export default Routes;
