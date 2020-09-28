import React, { useEffect, Dispatch } from "react";
import {useSelector, useDispatch } from "react-redux";
import { fillArrayDates } from "../../helpers/helpers";
import { addMonthDates, AllCalendarAction } from "../../store/calendarStore";
import { firstDaySelector,
         nextMonthSelector 
        } from "../../store/rootStore";
import "./Calendar.scss";
import CalendarBody from "./CalendarBody/CalendarBody";
import CalendarFooter from "./CalendarFooter/CalendarFooter";
import HeaderCalendar from "./HeaderCalendar/HeaderCalendar";

const Calendar = () => {
    const firstDay = useSelector(firstDaySelector);
    const nextMonth = useSelector(nextMonthSelector);
    const calendarDispatch = useDispatch<Dispatch<AllCalendarAction>>();

    useEffect(() => {
        calendarDispatch(addMonthDates(fillArrayDates(firstDay, nextMonth)));
    }, [])

    useEffect(() => {
        calendarDispatch(addMonthDates(fillArrayDates(firstDay, nextMonth)));
    }, [firstDay, nextMonth]);

    

    return (
        <div className="calendar">
            <HeaderCalendar />
            <CalendarBody />  
            <CalendarFooter />  
        </div>
    );
}

export default Calendar;