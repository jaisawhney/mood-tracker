import classNames from 'classnames';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Calendar() {
    const currentDate = dayjs();

    const daysInMonth = currentDate.daysInMonth();
    const [days, setDays] = useState([]);

    function getDates() {
        const datesArray = [];
        for (let i = 0; i < daysInMonth; i++) {
            const day = currentDate.date(i + 1);
            datesArray.push(day);
        }
        setDays(datesArray);
    }

    useEffect(() => {
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
                {days.map((day, idx) => {
                    const dayOfWeek = day.get('day');
                    return (
                        <div className={`text-center col-start-${dayOfWeek + 1}`} key={`${day}_${idx}`}>
                                <span
                                    className={classNames(day.date() === currentDate.date() ? 'bg-sky-200' : 'bg-gray-100',
                                        'flex items-center justify-center h-8 w-8 rounded-full font-medium',
                                        'xl:h-9 xl:w-9',
                                    )}>
                                    {day.date()}
                                </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}