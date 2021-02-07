import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function mainNavigation() {
  return (
    <header className="main-navigation">
      <div className="main-navigation-logo">
        <h1>moneys</h1>
      </div>
      <nav className="main-navigation-items">
        <ul>
          <li>
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
