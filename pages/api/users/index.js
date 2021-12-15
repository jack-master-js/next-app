import rsp_middleware from '@/utils/rsp-middleware';
import { getUsers } from '@/queries/users';

export default async function userService(req, res) {
    rsp_middleware(req, res);
    const { method, body, query } = req;

    try {
        switch (method) {
            case 'GET':
                const rst = await getUsers();
                res.content(rst);
                break;

            case 'POST':
                res.content(body);
                break;

            case 'PUT':
                res.success();
                break;

            case 'DELETE':
                res.success();
                break;

            default:
                res.status(404).end();
                break;
        }
    } catch (error) {
        res.error(error);
    }
}
