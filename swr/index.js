import { useState, useMemo } from 'react';
import useSWR from 'swr';

export const useUsers = (init) => {
    const [filter, setFilter] = useState(init);
    const body = useMemo(() => filter, [filter]);
    const { data } = useSWR(['/api/users', body, 'post']);
    return { data, setFilter };
};
