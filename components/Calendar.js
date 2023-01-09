import { useEffect, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import CalendarDays from './CalendarDays';


export default function Calendar() {
    const currentDate = dayjs();
    const daysInMonth = currentDate.daysInMonth();
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');

    const [days, setDays] = useState([]);
    const [entries, setEntries] = useState([]);

    async function fetchEntries() {
        const fetchedEntries = await fetch(
            `/api/entries?from=${startOfMonth.toISOString()}&to=${endOfMonth.toISOString()}`,
        ).then((res) => res.json());
        setEntries(fetchedEntries.items);
    }

    function getDates() {
        const datesArray = [];
        for (let i = 0; i < daysInMonth; i++) {
            const day = currentDate.date(i + 1);
            datesArray.push(day);
        }
        setDays(datesArray);
    }

    useEffect(() => {
        fetchEntries();
        getDates();
    }, []);

    return (
        <div className='flex flex-col text-center mx-auto p-3'>
            <div className='grid grid-cols-7 gap-4 text-xs mb-3 text-gray-600 uppercase'>
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className={classNames('grid grid-cols-7 gap-4 text-sm')}>
                <CalendarDays entries={entries} days={days} />
            </div>
        </div>
    );
}