import request from '@/utils/fetcher-backEnd';

export const getUsers = (params) => {
    return request(`http://localhost:3000/api/users`, params);
};
