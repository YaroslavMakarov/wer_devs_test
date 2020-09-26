import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="navigation">
            <NavLink
                to="/"
                exact
                className="navigation__link"
                activeClassName={
                    location.pathname === "/"
                    ? "navigation__link--active"
                    : ""
                }
            >
                home
            </NavLink>
            <NavLink
                to="/about"
                exact
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                about us
            </NavLink>
        </div>
    );
}

export default Navigation;