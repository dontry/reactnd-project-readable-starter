import React from "react";
import AppBar from "material-ui/AppBar";
import { NavLink, Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import NoteAdd from "material-ui-icons/NoteAdd";
import Book from "material-ui-icons/Book";

const HomeButton = () => {
  return (
    <Link to="/" key="home">
      <IconButton tooltip="Home">
        <Book />
      </IconButton>
    </Link>
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

const NavHeader = ({name}) => {
  return (
    <AppBar
      title={`${name}`}
      iconElementRight={<CreatePostButton />}
    />
  );
};

export default NavHeader;
