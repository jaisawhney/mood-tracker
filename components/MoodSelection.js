import classNames from 'classnames';
import EmojiGreat from './icons/emojis/EmojiGreat';
import EmojiGood from './icons/emojis/EmojiGood';
import EmojiNeutral from './icons/emojis/EmojiNeutral';
import EmojiBad from './icons/emojis/EmojiBad';
import EmojiSad from './icons/emojis/EmojiSad';
import { useState } from 'react';
import Prompt from './Prompt';

export default function MoodSelection() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    function displayModal(e) {
        const mood = e.currentTarget.dataset.mood;
        setModalOpen(true);
        setSelectedMood(mood);
    }

    function cancelSelection() {
        setModalOpen(false);
        setSelectedMood(null);
    }

    return (
        <>
            <div className={classNames('p-4 flex justify-between')}>
                <button className={'rounded-2xl'} data-mood={'GREAT'} onClick={displayModal}>
                    <EmojiGreat className={classNames('fill-green-400')} size={40} />
                </button>
                <button className={'rounded-2xl'} data-mood={'GOOD'} onClick={displayModal}>
                    <EmojiGood className={classNames('fill-lime-400')} size={40} />
                </button>
                <button className={'rounded-2xl'} data-mood={'NEUTRAL'} onClick={displayModal}>
                    <EmojiNeutral className={classNames('fill-orange-300')} size={40} />
                </button>
                <button className={'rounded-2xl'} data-mood={'BAD'} onClick={displayModal}>
                    <EmojiBad className={classNames('fill-red-400')} size={40} />
                </button>
                <button className={'rounded-2xl'} data-mood={'SAD'} onClick={displayModal}>
                    <EmojiSad className={classNames('fill-sky-400')} size={40} />
                </button>
            </div>
            {modalOpen && (
                <Prompt selectedMood={selectedMood} cancelSelection={cancelSelection} />
            )}
        </>
    );
}