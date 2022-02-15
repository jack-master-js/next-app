import { useEffect } from 'react';
import { useGlobalState } from '@/hooks/global';
import store from 'store';
import { Spin } from 'antd';

export default function Layout({ children }) {
    const [{ isLoading }, dispatch] = useGlobalState();
    useEffect(() => {
        const userStore = store.get('user');
        if (userStore) {
            dispatch({
                type: 'set_user',
                payload: userStore,
            });
        }
    }, [dispatch]);
    return (
        <Spin spinning={isLoading} delay={500}>
            {children}
        </Spin>
    );
}
