import { v4 as uuidv4 } from 'uuid';

export const fillArrayDates = (firstDay: Date, nextMonth: Date): Array<Array<DateInfo>> => {
    const arrayDates = [];
    let weekDays: DateInfo[] = []
    const firstDayCopy: Date = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1);
    while (firstDayCopy.getDay() > 0) {
        firstDayCopy.setDate(firstDayCopy.getDate() - 1);
    }
    while (firstDayCopy < nextMonth) {

        for (let j = 0; j < 7; j++) {

            weekDays.push({
                id: uuidv4(),
                date: new Date(firstDayCopy.getFullYear(), firstDayCopy.getMonth(), firstDayCopy.getDate()),
                isMeetingDay: false,
            })

            firstDayCopy.setDate(firstDayCopy.getDate() + 1)
        }

        arrayDates.push(weekDays);
        weekDays = [];
    }

    return arrayDates;
};

export const month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
