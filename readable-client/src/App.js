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
import './App.css';

const Container = categories => routeProps => (
  <div>
    <CategoryMenu categories={categories} />
    <PostList {...routeProps} />
  </div>
);

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
          <AppBar title={<NavLink to="/">Forum</NavLink>} />
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
