import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./App.css";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt="oneal"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.noBJGm9BS5U6UGq-F5SOSgHaEK%26pid%3DApi&f=1"
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
