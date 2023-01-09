import classNames from 'classnames';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';
import dayjs from 'dayjs';

const MOOD_STATES = {
    GREAT: <EmojiGreat className={classNames('fill-green-400')} size={40} />,
    GOOD: <EmojiGood className={classNames('fill-lime-400')} size={40} />,
    NEUTRAL: <EmojiNeutral className={classNames('fill-orange-300')} size={40} />,
    BAD: <EmojiBad className={classNames('fill-red-400')} size={40} />,
    SAD: <EmojiSad className={classNames('fill-sky-400')} size={40} />,
};
export default function Entry({ entry }) {
    const date = dayjs(entry.createdAt);
    const formattedDate = date.format('MMM D, h:m a');

    return (
        <div className={classNames('flex p-2 m-4 bg-white rounded-md shadow-sm')}>
            <div>{MOOD_STATES[entry.mood]}</div>
            <div className={classNames('mx-4')}>
                <p className={classNames('text-sm text-gray-600')}>{formattedDate}</p>
                {<p>{entry.note}</p>}
            </div>
        </div>
    );
}