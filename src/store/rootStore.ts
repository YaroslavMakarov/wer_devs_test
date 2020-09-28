import { combineReducers, createStore } from "redux";
import calendarReducer, { InitialCalendarState } from "./calendarStore";

const rootReducer = combineReducers({
    calendar: calendarReducer,
})

type State = {
    calendar: InitialCalendarState,
};

const store = createStore(rootReducer);

//calendar selectors
export const currentDaySelector = (state: State) => (state.calendar.currentDate);
export const monthDatesSelector = (state: State) => (state.calendar.monthDates);
export const firstDaySelector = (state: State) => (state.calendar.firstDay);
export const nextMonthSelector = (state: State) => (state.calendar.nextMonth);

export default store;