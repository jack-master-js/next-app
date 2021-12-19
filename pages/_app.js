import { SWRConfig } from 'swr';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '@/components/layout';
import fetcher from '@/utils/fetcher';

import 'antd/dist/antd.min.css';
import './app.css';

export default function myApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next APP</title>
                <script src="/config.js"></script>
            </Head>
            {/* <Script src="/config.js" strategy="afterInteractive" /> */}
            <SWRConfig
                value={{
                    fetcher,
                    revalidateOnFocus: false,
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
        </>
    );
}
