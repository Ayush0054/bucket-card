import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <div className="main-navbar">
        <Link to="/">
          <h2>BucketList</h2>
        </Link>
        <Link to="/history">
          <h2>History</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
