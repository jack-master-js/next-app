import qs from 'query-string';
import store from 'store';
import { message } from 'antd';

const API_HOST = 'http://localhost:3000';
// const apiHost = typeof window !== 'undefined' ? _config.API_HOST : API_HOST;
const apiHost = process.env.NEXT_PUBLIC_API_HOST || API_HOST;

export default (uri, params, method = 'GET', target = 'API_HOST') => {
    let url = '';
    let body = '';
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('access_token') || '',
        },
    };

    switch (target) {
        case 'API_HOST':
            url = apiHost + uri;
            break;
    }

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
