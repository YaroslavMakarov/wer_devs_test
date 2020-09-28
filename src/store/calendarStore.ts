import { Action } from "redux";

const ADD_FIRST_DAY_AT_THE_MONTH = "ADD_FIRST_DAY_AT_THE_MONTH";
const ADD_MONTH_DATES = "ADD_MONTH_DATES";
const ADD_NEXT_MONTH = "ADD_NEXT_MONTH";

type AddFirstDayAtTheMonth = Action<typeof ADD_FIRST_DAY_AT_THE_MONTH> & {
    firstDay: Date;
};

type AddMonthDates = Action<typeof ADD_MONTH_DATES> & {
    monthDates: Array<Array<DateInfo>>;
};

type AddNextMonth = Action<typeof ADD_NEXT_MONTH> & {
    nextMonth: Date;
}

export const addFirstDateAtTheMonth = (firstDay: Date): AddFirstDayAtTheMonth => ({
    type: ADD_FIRST_DAY_AT_THE_MONTH,
    firstDay,
});

export const addMonthDates = (monthDates: Array<Array<DateInfo>>): AddMonthDates => ({
    type: ADD_MONTH_DATES,
    monthDates,
});

export const addNextMonth = (nextMonth: Date): AddNextMonth => ({
    type: ADD_NEXT_MONTH,
    nextMonth,
});

export type AllCalendarAction = AddFirstDayAtTheMonth 
                                | AddMonthDates 
                                | AddNextMonth;

export type InitialCalendarState = {
    currentDate: Date;
    firstDay: Date;
    monthDates: Array<Array<DateInfo>>;
    nextMonth: Date;
};

const initiaCalendarState: InitialCalendarState = {
    currentDate: new Date(),
    firstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    monthDates: [[]],
    nextMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
};

const calendarReducer = (state=initiaCalendarState, action: AllCalendarAction) => {
    switch (action.type) {
        case ADD_FIRST_DAY_AT_THE_MONTH: return {
            ...state,
            firstDay: action.firstDay,
        };
        case ADD_MONTH_DATES: return {
            ...state,
            monthDates: [...action.monthDates],
        };
        case ADD_NEXT_MONTH: return {
            ...state,
            nextMonth: action.nextMonth,
        }

        default: return state;
    }
};

export default calendarReducer;
