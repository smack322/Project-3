import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const underline = {
  'text-decoration': 'none'
}

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} style={underline}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"} style={underline}
          >
            Blog
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} style={underline}
          >
            Contact
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
