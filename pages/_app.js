import '../styles/globals.css';
import { Roboto_Flex } from '@next/font/google';
import BottomNav from '../components/BottomNav';
import classNames from 'classnames';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <main className={classNames(robotoFlex.className, 'bg-gray-50 h-screen')}>
            <Component {...pageProps} />
            <BottomNav/>
        </main>
    );
}
