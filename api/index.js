import request from '../utils/fetcher-backEnd';

export const getUsers = (body) => {
    return request('http://localhost:3000/api/users', body, 'post');
};
