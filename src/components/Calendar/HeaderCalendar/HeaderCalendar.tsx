import React, {Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    const history = useHistory();

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
                className="calendar-head__button calendar-head__history-button"
                type="button"
                onClick={() => history.goBack()}
            >
                    <img
                        src={prev}
                        alt="arrow"
                        className="calendar-head__button-icon"
                    />
                    <span className="calendar-head__history-text">
                        go back
                    </span>
            </button>
            <div className="calendar-head__wrapper">
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
        </div>
    );
};

export default HeaderCalendar;