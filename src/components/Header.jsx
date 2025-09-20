import React from "react";
import LogoIcon from "../icons/LogoIcon";
import LogoutIcon from "../icons/LogoutIcon";
import "./Header.css";

const Header = () => (
  <header className="header-wrapper">
    <div className="header">
      <div className="header-left">
        <LogoIcon className="header-logo" />
        <span className="header-title">Aragon.ai</span>
      </div>
      <div className="header-spacer" />
      <button className="header-logout" aria-label="Logout">
        <LogoutIcon />
      </button>
    </div>
  </header>
);

export default Header;
