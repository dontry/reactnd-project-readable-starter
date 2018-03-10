import React, { Component } from "react";
import { createStore } from "redux";
import { Route, Switch, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import Loading from "react-loading";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import CategoryMenu from "./components/CategoryMenu";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Error404 from "./components/Error404";
import * as api from "./utils/api";
import "./App.css";
import IconButton from "material-ui/IconButton";
import NoteAdd from "material-ui-icons/NoteAdd";

const Container = categories => routeProps => (
  <div>
    <CategoryMenu categories={categories} />
    <PostList {...routeProps} />
  </div>
);

const Navigation = () => (
  <AppBar
    title={<NavLink to="/">Blog</NavLink>}
    iconElementRight={<CreatePostButton />}
  />
);

class CreatePostButton extends Component {
  render() {
    return (
      <div>
      <IconButton tooltip="Create a new blog">
        <NoteAdd />
      </IconButton>
      </div>
    )
  }
}

class App extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    const categories = (await api.getCategories()).data.categories;
    this.setState({ categories });
  }

  createCategoryRoutes = () => {
    return this.state.categories.map(category => (
      <Route path="/:category" component={PostList} key={category} />
    ));
  };

  render() {
    const { categories } = this.state;
    const CategoryRoutes = this.createCategoryRoutes();
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" render={Container(categories)} />
            {CategoryRoutes}
            <Route component={Error404} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
