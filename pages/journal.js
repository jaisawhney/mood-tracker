import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Entry from '../components/Entry';

export default function Journal() {
    const [entries, setEntries] = useState([]);

    async function fetchEntries() {
        // Placeholder route
        const entries = await fetch(`/api/entries`).then((res) => res.json());
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
            const month = d.toLocaleString('en-US', { month: 'long' });
            if (!groupedEntries[month]) groupedEntries[month] = [];
            groupedEntries[month].push(e);
        });
        setMonths(Object.entries(groupedEntries));
    }, [entries]);

    return (
        <div className={classNames('m-auto', 'xl:w-10/12 2xl:w-6/12')}>
            {months.map(([month, entries]) => (
                <div key={month}>
                    <div className={classNames('m-4 py-1')}>
                        <h1 className={classNames('font-medium text-xl text-blue-700')}>{month}</h1>
                    </div>
                    {entries.map(entry => <Entry key={entry.id} entry={entry} />)}
                </div>
            ))}
        </div>
    );
}