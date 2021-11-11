import 'antd/dist/antd.min.css';
import Layout from '../components/layout';
import fetcher from '../utils/fetcher-frontEnd';
import { SWRConfig } from 'swr';

export default function MyApp({ Component, pageProps }) {
    return (
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
    );
}
