import classNames from 'classnames';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';

const MOOD_STATES = {
    GREAT: <EmojiGreat className={classNames('fill-white')} size={96} />,
    GOOD: <EmojiGood className={classNames('fill-white')} size={96} />,
    NEUTRAL: <EmojiNeutral className={classNames('fill-white')} size={96} />,
    BAD: <EmojiBad className={classNames('fill-white')} size={96} />,
    SAD: <EmojiSad className={classNames('fill-white')} size={96} />,
};

const MOOD_BACKGROUNDS = {
    GREAT: 'bg-green-400',
    GOOD: 'bg-lime-500',
    NEUTRAL: 'bg-orange-300',
    BAD: 'bg-red-400',
    SAD: 'bg-sky-300',
};
export default function Prompt({ selectedMood, cancelSelection }) {

    return (
        <div
            className={classNames(MOOD_BACKGROUNDS[selectedMood], 'flex flex-col items-center justify-center z-50 w-full h-full fixed top-0 left-0 text-white ')}>
            <button className={classNames('border border-white px-4 py-1 rounded-lg')}
                    onClick={cancelSelection}>Close
            </button>
            {MOOD_STATES[selectedMood]}
            <textarea placeholder={'What\'s up?'}
                      className={classNames('focus:outline-none p-1 rounded-lg resize-none placeholder-gray-500 font-light text-black text-sm')} />

            <div className={classNames('flex justify-between')}>
                <button className={classNames('border border-white px-4 py-1 rounded-lg')}>Save</button>
            </div>
        </div>
    );
    /* <div
            className={classNames(MOOD_BACKGROUNDS[selectedMood], 'z-50 top-0 h-full w-full bg-white fixed flex flex-col items-center rounded-t-2xl')}>
            <div className={classNames('')}>
                <h1 className={classNames('text-2xl')}>How's your day going?</h1>
            </div>
            <div className={classNames('m-2 flex gap-4 justify-between')}>
                {MOOD_STATES[selectedMood]}
            </div>
            <div className={classNames('flex justify-left')}><Pencil /> <p
                className={classNames('text-gray-800')}>Notes</p></div>
            <textarea
                className={classNames('block text-sm text-gray-800 bg-gray-50 rounded-md border border-gray-300 p-2')} />
            <button className={classNames('bg-red-500 py-2 px-4 text-white rounded')}>Submit</button>
        </div> */
}