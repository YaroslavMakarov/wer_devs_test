import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import { currentDaySelector,
         firstDaySelector,
         monthDatesSelector } from "../../../store/rootStore";
import "./CalendarBody.scss";

const CalendarBody = () => {
    const monthDates = useSelector(monthDatesSelector);

    const currentDay = useSelector(currentDaySelector);
    const currentDayDate = currentDay.getDate();
    const currentDayMonth = currentDay.getMonth();
    const currentDayYear = currentDay.getFullYear();

    const firstDay = useSelector(firstDaySelector);
    const firstDayMonth = firstDay.getMonth();

    return (
        <div className="calendar-body">
            {monthDates.map(week => (
                <div className="calendar-body__week">
                    {week.map(day => (
                        <div
                            key={day.id}
                            className={cn(
                                "calendar-body__day",
                                {
                                    "calendar-body__blur-day": day.date.getMonth() !== firstDayMonth,
                                    "calendar-body__current-date": (day.date.getDate() === currentDayDate
                                                                    && day.date.getMonth() === currentDayMonth
                                                                    && day.date.getFullYear() === currentDayYear),
                                }
                            )}
                        >
                            {day.date.getDate()}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CalendarBody;
