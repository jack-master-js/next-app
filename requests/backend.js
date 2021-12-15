import request from '@/utils/fetcher-backend';

export function getUsers(params) {
    return request(`http://localhost:3000/api/users`, params);
}
