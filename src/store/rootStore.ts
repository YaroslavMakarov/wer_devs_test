import { combineReducers, createStore } from "redux";
import calendarReducer, { InitialCalendarState } from "./calendarStore";
import modalReducer, { InitialModalState } from "./modalStore";

const rootReducer = combineReducers({
    calendar: calendarReducer,
    modal: modalReducer,
})

type State = {
    calendar: InitialCalendarState,
    modal: InitialModalState,
};

const store = createStore(rootReducer);

//calendar selectors
export const currentDaySelector = (state: State) => (state.calendar.currentDate);
export const monthDatesSelector = (state: State) => (state.calendar.monthDates);
export const firstDaySelector = (state: State) => (state.calendar.firstDay);
export const nextMonthSelector = (state: State) => (state.calendar.nextMonth);

//modal selectors
export const dateSelector = (state: State) => (state.modal.date);
export const isShowModalSelector = (state: State) => (state.modal.isShowModal);

export default store;