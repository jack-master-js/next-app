import { message } from 'antd';

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
