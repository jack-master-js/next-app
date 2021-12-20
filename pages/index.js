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
                <input type="text" className="form-input" />
                <input type="datetime-local" className="form-input" />
                <select className="form-select">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <p className="my-text line-clamp-3">
                    So I started to walk into the water. I won't lie to you
                    boys, I was terrified. But I pressed on, and as I made my
                    way past the breakers a strange calm came over me. I don't
                    know if it was divine intervention or the kinship of all
                    living things but I tell you Jerry at that moment, I was a
                    marine biologist.
                </p>
                <div className="aspect-none md:aspect-w-16 md:aspect-h-9">
                    <img
                        src="/assets/jj.jpeg"
                        class="w-full h-full object-center object-cover"
                    />
                </div>
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
