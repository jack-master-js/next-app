import { SWRConfig } from 'swr';
import Head from 'next/head';
import Layout from '@/components/layout';
import fetcher from '@/utils/fetcher-frontEnd';

import 'antd/dist/antd.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next APP</title>
                <script src="/config.js"></script>
            </Head>
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
