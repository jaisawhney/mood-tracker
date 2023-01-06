import classNames from 'classnames';
import Calendar from './icons/Calendar';
import Journal from './icons/Journal';
import Settings from './icons/Settings';

export default function BottomNav() {
    return (
        <div className={classNames('w-full block fixed bottom-0 bg-white shadow-sm')}>
            <div className={classNames('flex justify-between p-1')}>
                <div className={classNames('flex justify-center w-full fill-gray-500 hover:fill-blue-500')}>
                    <Calendar className={classNames('')} size={30} />
                </div>
                <div className={classNames('flex justify-center w-full fill-gray-500 hover:fill-blue-500')}>
                    <Journal className={classNames('')} size={30} />
                </div>
                <div className={classNames('flex justify-center w-full fill-gray-500 hover:fill-blue-500')}>
                    <Settings className={classNames('')} size={30} />
                </div>
            </div>
        </div>
    );
}