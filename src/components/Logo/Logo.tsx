import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./Logo.scss";

const Logo = () => {
    return (
        <div className="logo">
            <NavLink
                to="/"
                exact
                className="logo__link"
            >
                <img
                    src={logo}
                    alt="logo"
                    className="logo__img"
                />
            </NavLink>
        </div>
        
    );
};

export default Logo;