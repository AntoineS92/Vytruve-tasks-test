import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink exact to="/" className="navbar-item">
          <img
            src="https://vytruve.com/wp-content/uploads/2021/02/cropped-Logo-Vytruve-site-essai.png"
            alt="brandicon"
            width="112"
            height="28"
          />
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {context.isLoggedIn && (
              <React.Fragment>
                <NavLink className="button is-link" to="/newTask">Create a new task</NavLink>
                <NavLink to="/profile" className="button is-primary">
                  {context.user && context.user.email}
                </NavLink>

                <p onClick={handleLogout} className="button is-light">Logout</p>
              </React.Fragment>
            )}
            {!context.isLoggedIn && (
              <React.Fragment>
                <NavLink to="/signin" className="button is-primary">Log in</NavLink>

                <NavLink to="/signup" className="button is-light">Create account</NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withUser(NavMain);
