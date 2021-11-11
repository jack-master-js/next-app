import request from '@/utils/fetcher-frontEnd';

const HOST = _config.HOST;

export const getUsers = (params) => {
    return request(`${HOST}/api/users`, params);
};
