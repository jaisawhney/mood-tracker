import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import Exit from './icons/Close';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';
import { useRouter } from 'next/router';

const MOOD_STATES = {
    GREAT: <EmojiGreat className={classNames('fill-white m-4')} size={96} />,
    GOOD: <EmojiGood className={classNames('fill-white m-4')} size={96} />,
    NEUTRAL: <EmojiNeutral className={classNames('fill-white m-4')} size={96} />,
    BAD: <EmojiBad className={classNames('fill-white m-4')} size={96} />,
    SAD: <EmojiSad className={classNames('fill-white m-4')} size={96} />,
};

const MOOD_BACKGROUNDS = {
    GREAT: 'bg-green-400',
    GOOD: 'bg-lime-500',
    NEUTRAL: 'bg-orange-300',
    BAD: 'bg-red-400',
    SAD: 'bg-sky-300',
};

export default function Prompt({ selectedMood, clearSelection }) {
    const router = useRouter();

    async function submitEntry(e) {
        e.preventDefault();
        if (!selectedMood) return;

        const notes = e.target.elements?.notes?.value || null;
        const res = await fetch('/api/entries',
            {
                method: 'POST',
                body: JSON.stringify({
                    mood: selectedMood,
                    note: notes,
                }),
            });
        if (res.ok) return router.push('/journal');
        console.error('Error while submitting! ');
    }

    return (
        <div
            className={classNames(MOOD_BACKGROUNDS[selectedMood], 'flex flex-col z-50 w-full h-full fixed top-0 left-0 text-white')}>
            <button className={classNames('left-0 fixed m-4')} onClick={clearSelection}>
                <Exit className={classNames('fill-white')} size={30} />

            </button>
            <form onSubmit={submitEntry}
                  className={classNames('m-auto flex flex-col items-center justify-center w-10/12 max-w-[500px]')}>
                {MOOD_STATES[selectedMood]}

                <TextareaAutosize
                    name={'notes'}
                    placeholder={'What\'s up?'}
                    className={classNames('w-full min-h-[50px] mx-2 focus:outline-none p-1 rounded-lg resize-none placeholder-gray-400 font-light text-black text-sm')} />

                <button type={'submit'}
                        className={classNames('mt-4 border border-white px-4 py-1 rounded-lg w-full')}>Save
                </button>
            </form>
        </div>
    );
}