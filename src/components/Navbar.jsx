import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Hook to get the current URL path

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? "text-decoration-underline text-color-dark" : "text-white";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow">
      <div className="container-fluid">
        <Link className={`navbar-brand fs-2 fw-bold ${isActive('/')}`} to="/">
          My-Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className={`nav-link fs-4 ${isActive('/stateselector')}`} to="/stateselector">
                State Selector
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link fs-4 ${isActive('/posts')}`} to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link fs-4 ${isActive('/todo')}`} to="/todo">
                To-Do List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
