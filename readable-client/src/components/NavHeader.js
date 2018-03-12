import React from "react";
import AppBar from "material-ui/AppBar";
import { NavLink, Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import NoteAdd from "material-ui-icons/NoteAdd";
import Book from "material-ui-icons/Book";
import {grey50} from "material-ui/styles/colors";

const HomeButton = () => {
  return (
    <Link to="/" key="home">
      <IconButton tooltip="Home">
        <Book color={grey50}/>
      </IconButton>
    </Link>
  );
};

const CreatePostButton = () => {
  return (
    <div>
      <NavLink to="/posts/create">
        <IconButton tooltip="Create a new blog" >
          <NoteAdd color={grey50}/>
        </IconButton>
      </NavLink>
    </div>
  );
};

const NavHeader = ({title}) => {
  return (
    <AppBar
      title={`${title}`}
      iconElementLeft={<HomeButton />}
      iconElementRight={<CreatePostButton />}
    />
  );
};

export default NavHeader;
