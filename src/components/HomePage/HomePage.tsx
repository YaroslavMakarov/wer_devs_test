import React from "react";
import Calendar from "../Calendar/Calendar";
import MainContent from "../MainContent/MainContent";
import "./HomePage.scss";

type Calendar = {
    calendar: string | undefined;
};

const HomePage = () => {  

    return (
        <div className="home-page">
            <MainContent />
            <div className="home-page__calendar">
                <Calendar />
            </div>
        </div>
    );
}

export default HomePage;