import { useEffect } from 'react';
import { Button } from 'antd';
import { useGlobalState } from '@/hooks/global';
import { useUsers } from '@/hooks/users';
import dynamic from 'next/dynamic';
import * as apiFrontEnd from '@/requests/frontend';
import * as apiBackEnd from '@/requests/backEnd';

const Modal = dynamic(() => import('@/components/modal'));

export async function getServerSideProps() {
    const ssrData = await apiBackEnd.getUsers({ msg: 'from SSR' });
    return {
        props: { ssrData },
    };
}

export default function IndexPage({ ssrData }) {
    const modalRef = {};
    const [state, dispatch] = useGlobalState();
    const { data, filter, setFilter } = useUsers({
        pageIndex: 1,
        pageSize: 10,
    });

    useEffect(() => {
        async function fetchData() {
            await apiFrontEnd.getUsers();
        }
        fetchData();
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
                    onClick={() => {
                        dispatch({
                            type: 'reset_name',
                        });
                    }}
                >
                    reset
                </Button>
                <div>{JSON.stringify(state)}</div>
                <div>{JSON.stringify(data)}</div>
                <div>{JSON.stringify(ssrData)}</div>
                <input type="text" className="form-input" />
                <input type="datetime-local" className="form-input" />
                <select className="form-select">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

            <Modal onRef={modalRef}></Modal>
        </>
    );
}
