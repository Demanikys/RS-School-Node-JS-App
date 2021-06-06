import { Request, Response } from 'express';
import fs from 'fs';

interface IParams {
    req?: Request,
    res?: Response,
    unhandledError?: Error,
    uncaughtException?: Error,
    unhandledRejection?: { message: string }
}

// const logger = (req: Request, res: Response, uncaughtException?: Error) => {
const logger = (params: IParams) => {
    const {
        req, res, unhandledError, uncaughtException, unhandledRejection,
    } = params;
    const date = new Date(Date.now());

    if (req && res) {
        const log = `${date.toISOString()}\nurl: ${req.url}\nquery params: ${JSON.stringify(req.query)}\nbody: ${JSON.stringify(req.body)}\nStatus code: ${res.statusCode}\n\n\n`;
        fs.writeFile('reqLogs.txt', log, { flag: 'a+' }, (err) => {
            if (err) console.log(err);
        });
    }

    if (unhandledError) {
        fs.writeFile('errLogs.txt', `${date.toISOString()}\nCatched unhandledError: ${unhandledError.message}\n\n\n`, { flag: 'a+' }, (err) => {
            if (err) console.log(err);
        });
    }
    if (uncaughtException) {
        fs.writeFile('errLogs.txt', `${date.toISOString()}\nCatched uncaughtException: ${uncaughtException.message}\n\n\n`, { flag: 'a+' }, (err) => {
            if (err) console.log(err);
        });
    }

    if (unhandledRejection) {
        fs.writeFile('errLogs.txt', `${date.toISOString()}\nCatched unhandledRejection: ${unhandledRejection.message}\n\n\n`, { flag: 'a+' }, (err) => {
            if (err) console.log(err);
        });
    }
};

export default logger;
