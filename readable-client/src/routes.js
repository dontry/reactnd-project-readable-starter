import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./pages/App";
import PostListIndex from "./pages/PostListIndex";
import PostEditor from "./pages/PostEditor";
import Switch from "react-router-dom/Switch";

const Routes = () => (
  <div>
    <Switch>
      <IndexRoute component={PostListIndex} />
      <Route exact path="posts/:id" component={PostsIndex} />
      <Route exact path="posts/create" component={PostEditor} />
      <Route exact path="posts/:category/edit" component={PostEditor} />
    </Switch>
  </div>
);

export default Routes;
