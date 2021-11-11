import { useUsers } from '../swr';
import { Button } from 'antd';

export default () => {
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
        </>
    );
};
