import React, { Component } from "react";
import { createStore } from "redux";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import Loading from "react-loading";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CategoryMenu from "./components/CategoryMenu";
import PostList from "./components/PostList";
import * as api from './utils/api';

class App extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    const categories = (await api.getCategories()).data.categories;
    this.setState({categories})
  }

  render() {
    const { categories } = this.state;
    return (
      <MuiThemeProvider>
        <div className="app">
          {categories && <CategoryMenu categories={categories} />}
          <Route exact path="/" component={PostList} />
          <Route path="/:category" component={PostList} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
