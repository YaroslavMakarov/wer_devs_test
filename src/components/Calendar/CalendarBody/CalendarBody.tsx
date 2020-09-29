import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import { currentDaySelector,
         firstDaySelector,
         monthDatesSelector } from "../../../store/rootStore";
import "./CalendarBody.scss";
import { addDate, AllModalActions, setShowModal } from "../../../store/modalStore";
import { AllCalendarAction, setIsMeetingDate } from "../../../store/calendarStore";

const CalendarBody = () => {
    const modalDispatch = useDispatch<Dispatch<AllModalActions>>();
    const calendarDispatch = useDispatch<Dispatch<AllCalendarAction>>();

    const monthDates = useSelector(monthDatesSelector);

    const currentDay = useSelector(currentDaySelector);
    const currentDayDate = currentDay.getDate();
    const currentDayMonth = currentDay.getMonth();
    const currentDayYear = currentDay.getFullYear();

    const firstDay = useSelector(firstDaySelector);
    const firstDayMonth = firstDay.getMonth();

    const clickOnCalendarCell = (date: Date, id: string) => {
        modalDispatch(setShowModal(true));
        modalDispatch(addDate(date))
        calendarDispatch(setIsMeetingDate(id))
    };

    console.log(monthDates);
    

    return (
        <div className="calendar-body">
            {monthDates.map((week, i) => (
                <div
                    className="calendar-body__week"
                    key={i}
                >
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
                                    "calendar-body__meeting": day.isMeetingDay,                                
                                }
                            )}
                            onClick={() => clickOnCalendarCell(day.date, day.id)}
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
