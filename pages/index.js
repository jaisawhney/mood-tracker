import classNames from 'classnames';
import MoodSelection from '../components/MoodSelection';
import Calendar from '../components/Calendar';

export default function Index() {
    return (
        <div className={classNames('m-auto', 'max-w-[600px]')}>
            <h1 className={classNames('m-4 font-semibold text-3xl text-gray-700')}>Home</h1>
            <div className={classNames('m-4 flex flex-col bg-white rounded-md shadow-sm')}>
                <h2 className={classNames('text-center mt-4 text-lg text-blue-600')}>How are you doing?</h2>
                <MoodSelection />
            </div>
            <div className={classNames('m-4 flex flex-col bg-white rounded-md shadow-sm')}>
                <h2 className={classNames('text-center mt-4 text-lg text-blue-600')}>Your month at a glance</h2>
                <Calendar/>
            </div>
        </div>
    );
}