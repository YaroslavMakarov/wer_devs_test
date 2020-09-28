import React from "react";
import { useSelector } from "react-redux";
import next from "../../../assets/img/next.svg";
import prev from "../../../assets/img/left-arrow.svg";
import "./HeaderCalendar.scss";
import { firstDaySelector } from "../../../store/rootStore";
import { month } from "../../../helpers/helpers";

const HeaderCalendar = () => {
    const firstDay = useSelector(firstDaySelector);
    console.log(firstDay);
    

    return (
        <div className="calendar-head">
            <button
                type="button"
                className="calendar-head__button"
            >
                <img
                    src={prev}
                    alt="prev-arrow"
                    className="calendar-head__button-icon"
                />
            </button>
            <div className="calendar-head__text">
                {`${month[firstDay.getMonth()]} ${firstDay.getFullYear()}`}
            </div>
            <button
                type="button"
                className="calendar-head__button"
            >
                <img
                    src={next}
                    alt="next=arrow"
                    className="calendar-head__button-icon"
                 />
            </button>
        </div>
    );
};

export default HeaderCalendar;