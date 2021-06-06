import fs from 'fs';
// const logger = (req: Request, res: Response, uncaughtException?: Error) => {
const logger = (params) => {
    const { req, res, uncaughtException, unhandledRejection, } = params;
    const date = new Date(Date.now());
    if (req && res) {
        const log = `${date.toISOString()}\nurl: ${req.url}\nquery params: ${JSON.stringify(req.query)}\nbody: ${JSON.stringify(req.body)}\n${res.statusCode}\n\n\n`;
        fs.writeFile('reqLogs.txt', log, { flag: 'a+' }, (err) => {
            if (err)
                console.log(err);
        });
    }
    if (uncaughtException) {
        fs.writeFile('errLogs.txt', `${date.toISOString()}\nCatched uncaughtException: ${uncaughtException.message}\n\n\n`, { flag: 'a+' }, (err) => {
            if (err)
                console.log(err);
        });
    }
    if (unhandledRejection) {
        fs.writeFile('errLogs.txt', `${date.toISOString()}\nCatched unhandledRejection: ${unhandledRejection.message}\n\n\n`, { flag: 'a+' }, (err) => {
            if (err)
                console.log(err);
        });
    }
};
export default logger;
