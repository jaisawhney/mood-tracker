import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Entry from '../components/Entry';

export default function Home() {
    const [entries, setEntries] = useState([]);

    async function fetchEntries() {
        // Placeholder route
        const entries = await fetch(`/api/entries/`).then((res) => res.json());
        setEntries(entries);
    }

    useEffect(() => {
        fetchEntries();
    }, []);


    return (
        <div className={classNames('bg-gray-50')}>
            {entries.map((entry, i) => <Entry key={i} entry={entry} />)}
        </div>
    );
}