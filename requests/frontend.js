import request from '@/utils/fetcher';

export const getUsers = (params) => {
    return request(`/api/users`, params);
};
