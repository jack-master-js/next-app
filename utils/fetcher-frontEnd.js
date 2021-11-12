import qs from 'query-string';
import store from 'store';
import { message } from 'antd';
// import { API_HOST } from '@/utils/const';

// const host = typeof window !== 'undefined' ? _config.API_HOST : API_HOST;

export default (url, params, method = 'GET', headers = {}) => {
    // url = host + url;
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('access_token') || '',
            ...headers,
        },
    };

    let body = '';

    if (params) {
        if (options.method === 'GET') {
            if (typeof params === 'string') {
                url = `${url}?${params}`;
            } else {
                url = `${url}?${qs.stringify(params)}`;
            }
        } else {
            if (typeof params === 'string') {
                body = params;
            } else {
                body = JSON.stringify(params);
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
