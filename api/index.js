import request from '@/utils/fetcher-backEnd';

const HOST = 'http://localhost:3000';

export const getUsers = (params) => {
    return request(`${HOST}/api/users`, params);
};
