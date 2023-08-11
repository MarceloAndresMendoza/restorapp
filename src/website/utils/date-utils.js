import i18next from "i18next";

export const getCurrentDateString = (currentDate) => {
    const stringifiedDate = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
    return stringifiedDate;
}

export const getDayOfWeekString = (dayNumber) => {
    return i18next.t(`weekdayNames.${dayNumber}`);
};

export const getMonthName = (monthIndex) => {
    return i18next.t(`monthNames.${monthIndex}`);
};

export const emptyDayData = (date) => {
    const data = {
        date: date,
        sector1: {
            morning: [],
            afternoon: [],
        },
        sector2: {
            morning: [],
            afternoon: [],
        },
        sector3: {
            morning: [],
            afternoon: [],
        },
    };
    return data;
}