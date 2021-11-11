import queryString from 'query-string';
import store from 'store';
import { message } from 'antd';

export default (url, data = null, method = 'GET', headers = {}) => {
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('access_token') || '',
            ...headers,
        },
    };
    let body = '';

    if (data) {
        if (options.method === 'GET') {
            if (typeof data === 'string') {
                url = `${url}?${data}`;
            } else {
                url = `${url}?${queryString.stringify(data)}`;
            }
        } else {
            if (typeof data === 'string') {
                body = data;
            } else {
                body = JSON.stringify(data);
            }
            options.body = body;
        }
    }

    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(async (res) => {
                let json = await res.json();
                resolve(json);
            })
            .catch((e) => {
                message.error(e.message);
                reject(e.message);
            });
    });
};
