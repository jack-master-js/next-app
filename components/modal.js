import { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useGlobal } from '@/hooks/global';

export default function myModal({ onRef }) {
    const { state, dispatch } = useGlobal();
    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal() {
        setIsModalVisible(true);
    }

    function handleOk() {
        setIsModalVisible(false);
    }

    function handleCancel() {
        setIsModalVisible(false);
    }

    useEffect(() => {
        onRef.show = showModal;
    });

    return (
        <>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{JSON.stringify(state)}</p>
                <Button
                    onClick={() => {
                        dispatch({
                            type: 'change_name',
                            payload: 'global user 2',
                        });
                    }}
                >
                    button
                </Button>
                <Button
                    onClick={() => {
                        dispatch({
                            type: 'reset',
                        });
                    }}
                >
                    button2
                </Button>
            </Modal>
        </>
    );
}
