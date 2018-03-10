import React from "react";
import AppBar from "material-ui/AppBar";
import { NavLink } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import NoteAdd from "material-ui-icons/NoteAdd";
import Book from "material-ui-icons/Book";

const HomeButton = () => {
  return (
    <div>
      <NavLink to="/">
        <IconButton tooltip="Home">
          <Book />
        </IconButton>
      </NavLink>
    </div>
  );
};

const CreatePostButton = () => {
  return (
    <div>
      <NavLink to="/posts/create">
        <IconButton tooltip="Create a new blog">
          <NoteAdd />
        </IconButton>
      </NavLink>
    </div>
  );
};

const NavHeader = name => {
  return (
    <AppBar
      title={<NavLink to={`/${name.toLowerCase()}`}>{name}</NavLink>}
      iconElementLeft={<HomeButton />}
      iconElementRight={<CreatePostButton />}
    />
  );
};

export default NavHeader;
