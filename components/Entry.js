import classNames from 'classnames';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';

const MOOD_STATES = {
    GREAT: <EmojiGreat size={40} />,
    GOOD: <EmojiGood size={40} />,
    NEUTRAL: <EmojiNeutral size={40} />,
    BAD: <EmojiBad size={40} />,
    SAD: <EmojiSad size={40} />,
};
export default function Entry({ entry }) {
    const date = new Date(entry.createdAt);
    return (
        <div className={classNames('flex flex-col p-2 m-4 bg-white rounded-md shadow-sm')}>
            <p>{date.toLocaleString('en-US', { month: 'short', day: 'numeric' })}</p>
            <div className={classNames('flex')}>
                {MOOD_STATES[entry.mood]}
                {/*<p className={classNames('text-gray-500')}>{entry.note}</p>*/}
            </div>
        </div>
    );
}