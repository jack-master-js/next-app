import { message } from 'antd';

export function getClientIp(req) {
    return (
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress
    );
}

export function uaInfo() {
    // eslint-disable-next-line no-undef
    const parser = new UAParser();
    const result = parser.getResult();
    return result;
}

export function sleep(ms) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function requestApi(dispatch, request, success) {
    try {
        dispatch({
            type: 'set_loading',
            payload: true,
        });

        let rst = await request();

        dispatch({
            type: 'set_loading',
            payload: false,
        });

        success(rst);
    } catch (msg) {
        dispatch({
            type: 'set_loading',
            payload: false,
        });
        message.error(msg);
    }
}

export function openWindow(url) {
    // can open in iframe set target to the iframe id
    let open = window.open('', '_blank', { fullscreen: false });
    if (open === null || typeof open === 'undefined') {
        window.location.href = url;
    }
    if (open) {
        setTimeout(() => {
            open.location = url;
        }, 300);
    }
}

export function random(min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
        return null;
    }
}

export function countDownSeconds(seconds, callback) {
    let timer = null;
    timer = setInterval(function () {
        callback(seconds);
        seconds--;
        if (seconds < 0) clearInterval(timer);
    }, 1000);
}
