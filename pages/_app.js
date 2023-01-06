import '../styles/globals.css';
import { Roboto_Flex } from '@next/font/google';
import BottomNav from '../components/BottomNav';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <main className={robotoFlex.className}>
            <Component {...pageProps} />
            <BottomNav/>
        </main>
    );
}
