import { useState, useEffect } from 'react';
import { useUsers } from '../swr';
import { Button } from 'antd';
import * as api from '../api';

export default ({ ssrData }) => {
    const { data, setFilter } = useUsers();
    return (
        <>
            <Button
                onClick={() => {
                    setFilter({ msg: 'hi' });
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
    const ssrData = await api.getUsers({ msg: 'from api' });
    return {
        props: { ssrData },
    };
}
