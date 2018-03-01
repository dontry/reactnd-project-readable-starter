import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
// import reducer from './reducers';
import { Provider } from "react-redux";
import Loading from "react-loading";
import * as api from "./utils/api";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CategoryMenu from "./components/CategoryMenu";
import PostList from "./components/PostList";

class App extends Component {
  state = {
    posts: null,
    categories: null
  };

  async componentDidMount() {
    const categories = (await api.getCategories()).data.categories;
    const posts = (await api.getPosts()).data;
    this.setState({ posts, categories });
  }

  render() {
    const { categories, posts } = this.state;
    return (
      <MuiThemeProvider>
        <div className="app">
          {categories && <CategoryMenu categories={categories} />}
          {posts && <PostList posts={posts} />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
