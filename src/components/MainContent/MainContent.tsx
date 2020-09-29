import React from "react";
import { NavLink } from "react-router-dom";
import "./MainContent.scss";

const MainContent  = () => {

    return (
        <div className="main-content">
            <h1 className="main-content__header">
                chose the day for the meeting
            </h1>
            <p className="main-content__text">
                We encourage you to book your appointment online. This will save your time.
            </p>
            <NavLink
                to="/calendar"
                exact
                className="main-content__link"
            >
                schedule a meeting
             </NavLink>
        </div>
    );
};

export default MainContent;
