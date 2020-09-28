import React, {Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import next from "../../../assets/img/next.svg";
import prev from "../../../assets/img/left-arrow.svg";
import "./HeaderCalendar.scss";
import { firstDaySelector, nextMonthSelector } from "../../../store/rootStore";
import { month } from "../../../helpers/helpers";
import { addFirstDateAtTheMonth, addNextMonth, AllCalendarAction } from "../../../store/calendarStore";

const HeaderCalendar = () => {
    const firstDay = useSelector(firstDaySelector);
    const nextMonth = useSelector(nextMonthSelector);
    const calendarDispatch = useDispatch<Dispatch<AllCalendarAction>>();

    const clickedNextButton = () => {
        calendarDispatch(addFirstDateAtTheMonth(
            new Date(
                firstDay.getFullYear(),
                firstDay.getMonth() + 1,
                1
            )
        ));
        calendarDispatch(addNextMonth(
            new Date(
                nextMonth.getFullYear(),
                nextMonth.getMonth() + 1,
                1
            )
        ));
    };
    
    const clickedPrevButton = () => {
        calendarDispatch(addFirstDateAtTheMonth(
            new Date(
                firstDay.getFullYear(),
                firstDay.getMonth() - 1,
                1
            )
        ));
        calendarDispatch(addNextMonth(
            new Date(
                nextMonth.getFullYear(),
                nextMonth.getMonth() - 1,
                1
            )
        ));
    };

    return (
        <div className="calendar-head">
            <button
                type="button"
                className="calendar-head__button"
                onClick={() => clickedPrevButton()}
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
                onClick={() => clickedNextButton()}
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