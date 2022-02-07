import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import Head from 'next/head';
// import Script from 'next/script';
import MainLayout from '@/layouts/main';
import fetcher from '@/utils/fetcher-frontend';
import { StateProvider } from '@/hooks/global';
import setLanguage from 'next-translate/setLanguage';

import 'antd/dist/antd.min.css';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        setLanguage('en');
    });
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
                <StateProvider>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </StateProvider>
            </SWRConfig>
        </>
    );
}
