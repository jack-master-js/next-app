import { SWRConfig } from 'swr';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '@/components/layout';
import fetcher from '@/utils/fetcher-frontEnd';

import 'antd/dist/antd.min.css';

export default ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Next APP</title>
                {/* <script src="/config.js"></script> */}
            </Head>
            {/* <Script src="/config.js" /> */}
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
};
