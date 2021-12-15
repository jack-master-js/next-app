import { useEffect, useState } from 'react';
import { Modal } from 'antd';

export default function myModal({ onRef }) {
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}
