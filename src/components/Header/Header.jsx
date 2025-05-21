import React from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is a Header</h3>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/laptops">Loptops</a> */}
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Loptops</Link>
        <Link to="/users">Users</Link>
        <Link to="/users2">Users2</Link>
      </nav>
    </div>
  );
};

export default Header;
