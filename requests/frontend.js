import request from '@/utils/fetcher';

export function getUsers(params) {
    return request(`/api/users`, params);
}
