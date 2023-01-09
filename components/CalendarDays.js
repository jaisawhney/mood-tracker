import classNames from 'classnames';
import dayjs from 'dayjs';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';

const MOOD_STATES = {
    GREAT: <EmojiGreat className={classNames('fill-green-400')} size={35} />,
    GOOD: <EmojiGood className={classNames('fill-lime-400')} size={35} />,
    NEUTRAL: <EmojiNeutral className={classNames('fill-orange-300')} size={35} />,
    BAD: <EmojiBad className={classNames('fill-red-400')} size={35} />,
    SAD: <EmojiSad className={classNames('fill-sky-400')} size={35} />,
};

export default function CalendarDays({ days, entries }) {
    const currentDate = dayjs();

    function getCommonMood(day) {
        const loggedEntries = entries.filter(entry => dayjs(entry.createdAt).isSame(day, 'day'));
        if (!loggedEntries.length) return null;

        const groupedMoods = loggedEntries.reduce((acc, entry) => {
            const mood = entry.mood;
            acc[mood] = acc[mood] ? acc[mood] + 1 : 1;
            return acc;
        }, {}) || null;

        return Object.keys(groupedMoods)
            .reduce((acc, mood) => groupedMoods[mood] > groupedMoods[acc] ? mood : acc);
    }

    return (
        days.map((day, idx) => {
            const dayOfWeek = day.get('day');
            const mostCommonMood = getCommonMood(day);
            return (
                <div className={`text-center col-start-${dayOfWeek + 1}`} key={`${day}_${idx}`}>
                    {mostCommonMood &&
                    MOOD_STATES[mostCommonMood] ||
                    (<span className={classNames(day.date() === currentDate.date() ? 'bg-sky-200' : 'bg-gray-100',
                        'flex items-center justify-center h-8 w-8 rounded-full font-medium',
                    )}> {day.date()}</span>)}
                </div>
            );
        })
    );
}