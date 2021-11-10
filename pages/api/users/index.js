import Rsp from '../../../utils/Rsp';

export default async (req, res) => {
    const rsp = new Rsp(req, res);
    const { method, body, query } = req;

    try {
        switch (method) {
            case 'GET':
                rsp.success();
                break;

            case 'POST':
                rsp.success();
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
