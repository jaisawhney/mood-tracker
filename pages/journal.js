import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Entry from '../components/Entry';
import dayjs from 'dayjs';
import Link from 'next/link';
import Calendar from '../components/icons/Calendar';

export default function Journal() {
    const [entries, setEntries] = useState([]);

    async function fetchEntries() {
        // Placeholder route
        const entries = await fetch('/api/entries').then((res) => res.json());
        setEntries(entries);
    }

    useEffect(() => {
        fetchEntries();
    }, []);


    const [months, setMonths] = useState([]);
    useEffect(() => {
        const groupedEntries = {};
        entries.forEach(e => {
            const d = dayjs(e.createdAt);
            const key = d.format('MMMM YYYY');
            if (!groupedEntries[key]) groupedEntries[key] = [];
            groupedEntries[key].push(e);
        });
        setMonths(Object.entries(groupedEntries));
    }, [entries]);
    const populatedMonthDivs = months.map(([dateString, entries]) => {
        return (
            <div key={dateString}>
                <h2 className={classNames('m-4 font-medium text-xl text-blue-600')}>{dateString}</h2>
                {entries.map(entry => <Entry key={entry.id} entry={entry} />)}
            </div>
        );
    });
    return (
        <div className={classNames('m-auto', 'max-w-[600px]')}>
            <h1 className={classNames('font-semibold text-3xl text-gray-700 m-4')}>Your Journal</h1>
            {populatedMonthDivs.length ? populatedMonthDivs : (
                <div className={classNames('flex px-2 py-3 m-4 bg-white rounded-md shadow-sm')}>
                    <p>Head over the the <Link href={'/'}><Calendar
                        className={classNames('inline fill-blue-500')} size={20} /></Link> page to log your first entry!
                    </p>
                </div>
            )}
        </div>
    );
}