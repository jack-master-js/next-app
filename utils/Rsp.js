import logger from '@/utils/logger';

export default class Rsp {
    constructor(req, res) {
        this.ctx = { req, res };
    }

    success() {
        const { method, url, body } = this.ctx.req;
        logger.trace(`${method} ${url} ${JSON.stringify(body)} success`);
        this.ctx.res.send({
            success: true,
        });
    }

    content(content, count = 0) {
        const { method, url, body } = this.ctx.req;
        logger.trace(
            `${method} ${url} ${JSON.stringify(
                body
            )} response: ${JSON.stringify(content)}`
        );
        this.ctx.res.send({
            success: true,
            content,
            count,
        });
    }

    error({ message }) {
        const { method, url, body } = this.ctx.req;
        logger.error(
            `${method} ${url} ${JSON.stringify(body)} error: ${JSON.stringify(
                message
            )}`
        );
        this.ctx.res.send({
            success: false,
            message,
        });
    }
}
