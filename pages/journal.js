import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Entry from '../components/Entry';

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
            const d = new Date(e.createdAt);
            const year = d.getFullYear();
            const month = d.toLocaleString('en-US', { month: 'long' });

            const key = `${month}_${year}`;
            if (!groupedEntries[key]) groupedEntries[key] = [];
            groupedEntries[key].push(e);
        });
        setMonths(Object.entries(groupedEntries));
    }, [entries]);

    return (
        <div className={classNames('m-auto', 'xl:w-10/12 2xl:w-6/12')}>
            <h1 className={classNames('font-semibold text-3xl text-gray-700 m-4')}>Your Journal</h1>
            {months.map(([key, entries]) => {
                const [month, year] = key.split('_');
                return (
                    <div key={key}>
                        <h1 className={classNames('m-4 font-medium text-xl text-blue-600')}>{month} {year}</h1>
                        {entries.map(entry => <Entry key={entry.id} entry={entry} />)}
                    </div>
                );
            })}
        </div>
    );
}