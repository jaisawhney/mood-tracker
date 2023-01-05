import classNames from "classnames";
import EmojiGreat from './SVGs/EmojiGreat';
import EmojiGood from './SVGs/EmojiGood';
import EmojiNeutral from './SVGs/EmojiNeutral';
import EmojiBad from './SVGs/EmojiBad';
import EmojiSad from './SVGs/EmojiSad';

export default function Prompt() {
    return (
        <div className={classNames('flex flex-col items-center h-screen p-5')}>
            <div className={classNames('mt-28')}>
                <h1 className={classNames('text-2xl font-normal')}>How are you today?</h1>
            </div>
            <div className={classNames('flex mt-5')}>
                <EmojiGreat className={classNames('stroke-1')} size={40} />
                <EmojiGood className={classNames('')} size={40} />
                <EmojiNeutral className={classNames('fill-yellow-500 stroke-0')} size={40} />
                <EmojiBad className={classNames('')} size={40} />
                <EmojiSad className={classNames('')} size={40} />
            </div>
        </div>
    );
}