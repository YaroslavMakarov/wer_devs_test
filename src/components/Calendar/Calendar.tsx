import React, { useEffect, Dispatch } from "react";
import {useSelector, useDispatch } from "react-redux";
import { fillArrayDates } from "../../helpers/helpers";
import { addMonthDates, AllCalendarAction } from "../../store/calendarStore";
import { firstDaySelector,
         monthDatesSelector,
         nextMonthSelector 
        } from "../../store/rootStore";
import "./Calendar.scss";
import CalendarBody from "./CalendarBody/CalendarBody";
import HeaderCalendar from "./HeaderCalendar/HeaderCalendar";

const Calendar = () => {
    const monthDates = useSelector(monthDatesSelector);
    const firstDay = useSelector(firstDaySelector);
    const nextMonth = useSelector(nextMonthSelector);
    const calendarDispatch = useDispatch<Dispatch<AllCalendarAction>>();

    useEffect(() => {
        calendarDispatch(addMonthDates(fillArrayDates(firstDay, nextMonth)))
    }, [])

    console.log(monthDates);
    

    return (
        <div className="calendar">
            <HeaderCalendar />
            <CalendarBody />    
        </div>
    );
}

export default Calendar;