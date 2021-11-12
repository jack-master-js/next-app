import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useUsers } from '@/hooks/user';
import dynamic from 'next/dynamic';
import * as apiFrontEnd from '@/api/frontEnd';
// import * as apiBackEnd from '@/api/backEnd';

const Modal = dynamic(() => import('@/components/modal'));

export default ({ ssrData }) => {
    const modalRef = {};
    const { data, filter, setFilter } = useUsers({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(async () => {
        await apiFrontEnd.getUsers();
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    setFilter({ ...filter, from: 'button' });
                    modalRef.show();
                }}
            >
                button
            </Button>
            <div>{JSON.stringify(data)}</div>
            {/* <div>{JSON.stringify(ssrData)}</div> */}
            <Modal onRef={modalRef}></Modal>
        </>
    );
};

// export async function getServerSideProps(context) {
//     const ssrData = await apiBackEnd.getUsers({ msg: 'from ssr' });
//     return {
//         props: { ssrData },
//     };
// }
