import classNames from 'classnames';
import MoodSelection from '../components/MoodSelection';

export default function Index() {
    return (
        <div className={classNames('')}>
            <h1 className={classNames('font-semibold text-2xl text-gray-700 m-4')}>Home</h1>
            <div className={classNames('flex flex-col p-2 m-4 bg-white rounded-md shadow-sm')}>
                <div className={classNames('text-left')}>
                    <h1 className={classNames('font-semibold text-xl')}>How are you feeling?</h1>
                </div>
                <MoodSelection/>
            </div>
        </div>
    );
}