import classNames from 'classnames';
import EmojiGreat from '../components/icons/emojis/EmojiGreat';
import EmojiGood from '../components/icons/emojis/EmojiGood';
import EmojiNeutral from '../components/icons/emojis/EmojiNeutral';
import EmojiBad from '../components/icons/emojis/EmojiBad';
import EmojiSad from '../components/icons/emojis/EmojiSad';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import LeftArrow from '../components/icons/LeftArrow';
import RightArrow from '../components/icons/RightArrow';

export default function Overview() {
    const [date, setDate] = useState(dayjs().startOf('month'));
    const [moods, setMoods] = useState([]);

    const startOfMonth = date.startOf('month').toISOString();
    const endOfMonth = date.endOf('month').toISOString();

    const MOOD_STATES = {
        GREAT: <EmojiGreat className={classNames('fill-green-400')} size={35} />,
        GOOD: <EmojiGood className={classNames('fill-lime-400')} size={35} />,
        NEUTRAL: <EmojiNeutral className={classNames('fill-orange-300')} size={35} />,
        BAD: <EmojiBad className={classNames('fill-red-400')} size={35} />,
        SAD: <EmojiSad className={classNames('fill-sky-400')} size={35} />,
    };

    async function fetchEntries() {
        const fetchedEntries = await fetch(
            `/api/entries?from=${startOfMonth}&to=${endOfMonth}`,
        ).then((res) => res.json());
        setMoods(fetchedEntries.mood_count);
    }

    useEffect(() => {
        fetchEntries();
    }, [date]);


    function reduceDate() {
        setDate(date.subtract(1, 'month'));
    }

    function advanceDate() {
        setDate(date.add(1, 'month'));
    }

    return (
        <div className={classNames('m-auto', 'max-w-[600px]')}>
            <h1 className={classNames('m-4 font-semibold text-3xl text-gray-700')}>Overview</h1>
            <div className={classNames('m-4 flex flex-col bg-white rounded-md shadow-sm')}>
                <div className={classNames('flex bg-white rounded-md shadow-sm items-center')}>
                    <button onClick={reduceDate} className={classNames('fill-gray-600')}><LeftArrow /></button>
                    <h2 className={classNames('text-lg text-blue-600')}>{date.format('MMMM YYYY')}</h2>
                    <button onClick={advanceDate} className={classNames('fill-gray-600')}><RightArrow /></button>
                </div>
                {Object.entries(moods).map(moodArray => {
                    const [mood, count] = moodArray;
                    const totalCount = Object.values(moods).reduce((acc, val) => acc + val) || 0;
                    const percentOfTotal = Math.round(((count / totalCount) * 100) * 100) / 100 || 0;

                    return (
                        <div key={mood} className={classNames('flex p-2')}>
                            {MOOD_STATES[mood]}
                            <div className={classNames('w-full flex flex-col mx-2')}>
                                <p className={classNames('text-sm text-gray-500')}>{percentOfTotal}%</p>
                                <div className={classNames('rounded-full bg-gray-200 h-2')}>
                                    <div style={{ width: `${percentOfTotal}%` }}
                                         className={classNames('rounded-full bg-blue-600 h-2')} />
                                </div>
                            </div>
                        </div>);
                })}
            </div>
        </div>
    );
}