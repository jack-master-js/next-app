import Rsp from '@/utils/Rsp';
import { getUsers } from '@/queries/users';

export default async (req, res) => {
    const rsp = new Rsp(req, res);
    const { method, body, query } = req;

    try {
        switch (method) {
            case 'GET':
                const rst = await getUsers();
                rsp.content(rst);
                break;

            case 'POST':
                rsp.content(body);
                break;

            case 'PUT':
                rsp.success();
                break;

            case 'DELETE':
                rsp.success();
                break;

            default:
                res.status(404).end();
                break;
        }
    } catch (error) {
        rsp.error(error);
    }
};
