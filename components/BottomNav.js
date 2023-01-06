import classNames from 'classnames';
import Calendar from './icons/Calendar';
import Journal from './icons/Journal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BarChart from './icons/BarChart';

export default function BottomNav() {
    const router = useRouter();

    return (
        <div className={classNames('w-full block fixed bottom-0 bg-white shadow-sm')}>
            <div className={classNames('flex justify-between p-1')}>
                <div className={classNames('flex justify-center w-full')}>
                    <Link href={'/'}>
                        <Calendar
                            className={classNames(router.pathname === '/' ? 'fill-blue-500' : 'fill-gray-500', 'xl:hover:fill-blue-400')}
                            size={30} />
                    </Link>
                </div>
                <div className={classNames('flex justify-center w-full')}>
                    <Link href={'/journal'}>
                        <Journal
                            className={classNames(router.pathname === '/journal' ? 'fill-blue-500' : 'fill-gray-500', 'xl:hover:fill-blue-400')}
                            size={30} />
                    </Link>
                </div>
                <div className={classNames('flex justify-center w-full')}>
                    <Link href={'/statistics'}>
                        <BarChart
                            className={classNames(router.pathname === '/statistics' ? 'fill-blue-500' : 'fill-gray-500', 'xl:hover:fill-blue-400')}
                            size={30} />
                    </Link>
                </div>
            </div>
        </div>
    );
}