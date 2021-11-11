import { useState, useMemo } from 'react';
import useSWR from 'swr';

export const useUsers = (init) => {
    const [filter, setFilter] = useState(init);
    const params = useMemo(() => filter, [filter]);
    const { data } = useSWR(['/api/users', params, 'post']);
    return { data, filter, setFilter };
};
