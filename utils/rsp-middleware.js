import logger from '@/utils/logger';

export default (req, res) => {
    res.success = () => {
        const { method, url, body } = req;
        logger.trace(`${method} ${url} ${JSON.stringify(body)} success`);
        res.send({
            success: true,
        });
    };

    res.content = (content, count = 0) => {
        const { method, url, body } = req;
        logger.trace(
            `${method} ${url} ${JSON.stringify(
                body
            )} response: ${JSON.stringify(content)}`
        );
        res.send({
            success: true,
            content,
            count,
        });
    };

    res.error = (error) => {
        const { message } = error;
        const { method, url, body } = req;
        logger.error(
            `${method} ${url} ${JSON.stringify(body)} error: ${JSON.stringify(
                message
            )}`
        );
        res.send({
            success: false,
            message,
        });
    };
};
