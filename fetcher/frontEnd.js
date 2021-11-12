import request from '@/utils/fetcher-frontEnd';

export const getUsers = (params) => {
    return request(`/api/users`, params);
};
