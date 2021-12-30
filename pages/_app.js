import { SWRConfig } from 'swr';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '@/components/layout';
import fetcher from '@/utils/fetcher-frontend';
import { StateProvider } from '@/hooks/global';

import 'antd/dist/antd.min.css';
import './_app.css';

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
                <StateProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </StateProvider>
            </SWRConfig>
        </>
    );
}
