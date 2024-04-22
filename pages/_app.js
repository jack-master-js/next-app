import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '@/layouts/index';
import fetcher from '@/utils/fetcher-frontend';
import { StateProvider } from '@/hooks/global';
import { StateContext } from '@/context/StateContext';
import setLanguage from 'next-translate/setLanguage';
import { useRouter } from 'next/router';
// import { logEvent } from '@/utils/firebase';
import TagManager from 'react-gtm-module';

import 'antd/dist/antd.min.css';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        setLanguage('en');
        // live chat
        if (process.env.NEXT_PUBLIC_GTM) {
            TagManager.initialize({ gtmId: 'xxxx' });
        }
    });
    useEffect(() => {
        // track route changes
        const handler = (url) =>
            // logEvent('page_view', {
            //     page_location: url,
            //     page_title: document?.title,
            // });

        router.events.on('routeChangeStart', handler);
        return () => router.events.off('routeChangeStart', handler);
    }, [router.events]);
    return (
        <>
            <Head>
                <title>Next APP</title>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                {/* <script src="/config.js"></script> */}
            </Head>
            {/* load remote script */}
            {/* <Script src="https://google.com" strategy="afterInteractive" /> */}
            <SWRConfig
                value={{
                    fetcher,
                    revalidateOnFocus: false,
                }}
            >
                <StateContext>
                    <StateProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </StateProvider>
                </StateContext>
            </SWRConfig>
        </>
    );
}
