import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav>
          <div className="row bg-light d-flex align-items-center navbar-wrapper ">
            <div className="col-4 d-flex justify-content-center">
              <div className="logo-wrapper">
                <img
                  src="images/logo.png"
                  alt=""
                  className="img-fluid navbar-logo"
                />
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="signup-wrapper">
                <Link to="/signin" className="signup-link">
                  Sign in
                </Link>
                <span className="link-slesh">/</span>
                <Link to="signup" className="signup-link">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
