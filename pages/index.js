import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useUsers } from '@/hooks/user';
import { getUsers } from '@/api/backEnd';

export default ({ ssrData }) => {
    const { data, filter, setFilter } = useUsers({
        pageIndex: 1,
        pageSize: 10,
    });
    return (
        <>
            <Button
                onClick={() => {
                    setFilter({ ...filter, from: 'button' });
                }}
            >
                button
            </Button>
            <div>{JSON.stringify(data)}</div>
            <div>{JSON.stringify(ssrData)}</div>
        </>
    );
};

export async function getServerSideProps(context) {
    const ssrData = await getUsers({ msg: 'from ssr' });
    return {
        props: { ssrData },
    };
}
