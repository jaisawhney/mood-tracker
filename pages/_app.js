import '../styles/globals.css';
import { Roboto_Flex } from '@next/font/google';
import BottomNav from '../components/BottomNav';
import classNames from 'classnames';
import Head from 'next/head';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {

    return (
        <>
            <Head>
                <title>Mood Tracker</title>
                <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1' />
            </Head>
            <main className={classNames(robotoFlex.className, 'bg-gray-100')}>
                <Component {...pageProps} />
                <BottomNav />
            </main>
        </>
    );
}
