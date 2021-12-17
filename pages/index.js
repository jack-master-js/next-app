import { useEffect } from 'react';
import { Button } from 'antd';
import { useGlobal } from '@/hooks/global';
import { useUsers } from '@/hooks/users';
import dynamic from 'next/dynamic';
import * as apiFrontEnd from '@/requests/frontend';
import * as apiBackEnd from '@/requests/backEnd';

const Modal = dynamic(() => import('@/components/modal'));

export default function indexPage({ ssrData }) {
    const modalRef = {};
    const { state, dispatch } = useGlobal();
    const { data, filter, setFilter } = useUsers({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(async () => {
        await apiFrontEnd.getUsers();
    }, []);

    return (
        <>
            <div className={`container mx-auto`}>
                <Button
                    onClick={() => {
                        dispatch({
                            type: 'change_name',
                            payload: 'global user 1',
                        });
                        setFilter({ ...filter, from: 'button' });
                        modalRef.show();
                    }}
                >
                    button
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch({ type: 'reset' });
                    }}
                >
                    reset
                </Button>
                <div>{JSON.stringify(state)}</div>
                <div>{JSON.stringify(data)}</div>
                <div>{JSON.stringify(ssrData)}</div>
            </div>
            <Modal onRef={modalRef}></Modal>
        </>
    );
}

export async function getServerSideProps(context) {
    const ssrData = await apiBackEnd.getUsers({ msg: 'from SSR' });
    return {
        props: { ssrData },
    };
}
