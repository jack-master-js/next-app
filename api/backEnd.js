import request from '@/utils/fetcher-backEnd';

const HOST = process.env.HOST;

export const getUsers = (params) => {
    return request(`${HOST}/api/users`, params);
};
