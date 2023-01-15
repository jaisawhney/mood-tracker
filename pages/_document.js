import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Mood Tracker';
const APP_DESCRIPTION = 'Track your moods';

class _Document extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#FFFFFF' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/favicon.ico' />

                    {/* Splash Screens */}
                    <link rel='apple-touch-startup-image' href='images/splash/splash-640x1136.png'
                          media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-750x1294.png'
                          media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-1242x2148.png'
                          media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-1125x2436.png'
                          media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-1536x2048.png'
                          media='(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-1668x2224.png'
                          media='(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
                    <link rel='apple-touch-startup-image' href='images/splash/splash-2048x2732.png'
                          media='(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;