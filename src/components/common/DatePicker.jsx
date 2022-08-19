import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { dateFormat } from '~/helpers';

const MONTH_NAMES = [
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

const DatePicker = (props) => {
    const { value: initDate, onChange } = props;

    const calenderRef = useRef(null);
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [currentYear, setCurrentYear] = useState('2021');
    const [currentMonth, setCurrentMonth] = useState('00');
    const [days, setDays] = useState([]);
    const [isShowMonths, setIsShowMonths] = useState(false);
    const [datePicker, setDatePicker] = useState('01-01-2022');

    const handleShowCalendar = () => {
        setIsShowCalendar(!isShowCalendar);
    };

    const handleChooseDay = (day) => {
        const datePicker = {
            year: currentYear,
            month: currentMonth,
            date: day,
        };
        setDatePicker(datePicker);
        setIsShowCalendar(false);
        generateCalendar(datePicker.month, datePicker.year, datePicker);
        onChange(datePicker);
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (calenderRef.current && !calenderRef.current.contains(e.target)) {
            setIsShowCalendar(false);
        }
    };

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    useEffect(() => {
        if (initDate) {
            setDatePicker(initDate);
            setCurrentMonth(initDate.month);
            setCurrentYear(initDate.year);
            generateCalendar(initDate.month, initDate.year, initDate);
        } else {
            const currentDate = new Date();
            const datePicker = {
                year: currentDate.getFullYear(),
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
            };
            setDatePicker(datePicker);
            setCurrentMonth(datePicker.month);
            setCurrentYear(datePicker.year);
            generateCalendar(datePicker.month, datePicker.year, datePicker);
        }
    }, []);

    const generateCalendar = (month, year, datePicker) => {
        const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const currDate = new Date();
        if (!month) month = currDate.getMonth();
        if (!year) year = currDate.getFullYear();

        setCurrentMonth(month);
        setCurrentYear(year);

        // get first day of month

        const firstDay = new Date(year, month, 1);

        const days = [];

        for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
            let day = {};
            if (i >= firstDay.getDay()) {
                if (
                    i - firstDay.getDay() + 1 === datePicker.date &&
                    year === datePicker.year &&
                    month === datePicker.month
                ) {
                    day = {
                        id: uuidv4(),
                        value: i - firstDay.getDay() + 1,
                        className: 'lt-calendar-day-hover curr-date',
                    };
                } else {
                    day = {
                        id: uuidv4(),
                        value: i - firstDay.getDay() + 1,
                        className: 'lt-calendar-day-hover',
                    };
                }
            } else {
                day = {
                    id: uuidv4(),
                };
            }
            days.push(day);
        }

        setDays(days);
    };

    const showMonths = () => {
        setIsShowMonths(true);
    };

    const handleChooseMonth = (month) => {
        setIsShowMonths(false);
        generateCalendar(month, currentYear, datePicker);
    };

    const handleDecreaseYear = () => {
        const prevYear = currentYear - 1;
        setCurrentYear(prevYear);
        generateCalendar(currentMonth, prevYear, datePicker);
    };

    const handleIncreaseYear = () => {
        const nextYear = currentYear + 1;
        setCurrentYear(nextYear);
        generateCalendar(currentMonth, nextYear, datePicker);
    };

    return (
        <div className="lt-date-picker">
            <div className="lt-date-picker__input" onClick={handleShowCalendar}>
                <span>{dateFormat(datePicker)}</span>
                <i className="bx bxs-calendar"></i>
            </div>
            <div className={`lt-calendar ${isShowCalendar && 'show'}`} ref={calenderRef}>
                <div className="lt-calendar__header">
                    <span className="lt-month-picker" onClick={showMonths}>
                        {MONTH_NAMES[currentMonth]}
                    </span>
                    <div className="lt-year-picker">
                        <span className="lt-year-change" onClick={handleDecreaseYear}>
                            <i className="bx bx-chevron-left"></i>
                        </span>
                        <span>{currentYear}</span>
                        <span className="lt-year-change" onClick={handleIncreaseYear}>
                            <i className="bx bx-chevron-right"></i>
                        </span>
                    </div>
                </div>
                <div className="lt-calendar__body">
                    <div className="lt-calendar__week-day">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="lt-calendar__days">
                        {days.map((day) => (
                            <div key={day.id} className={day.className} onClick={() => handleChooseDay(day.value)}>
                                {day.value}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lt-calendar__footer">DatePicker</div>
                <div className={`lt-month-list ${isShowMonths && 'show'}`}>
                    {MONTH_NAMES.map((month, index) => (
                        <div key={month}>
                            <div onClick={() => handleChooseMonth(index)}>{month}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

DatePicker.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
};

export default DatePicker;
