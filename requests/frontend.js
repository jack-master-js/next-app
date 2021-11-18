import request from '@/utils/fetcher-frontend';

export const getUsers = (params) => {
    return request(`/api/users`, params);
};
