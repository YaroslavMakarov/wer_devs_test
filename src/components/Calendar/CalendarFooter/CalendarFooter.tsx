import React from "react";
import "./CalendarFooter.scss";
import { days } from "../../../helpers/helpers";

const CalendarFooter = () => {
    return (
        <div className="calendar-footer">
            {days.map((day, i) => (
                <div
                    className="calendar-footer__cell"
                    key={i}
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

export default CalendarFooter;
