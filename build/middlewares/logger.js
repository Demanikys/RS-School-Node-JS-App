import fs from 'fs';
const logger = (req, res) => {
    const date = new Date(Date.now());
    const log = `${date.toISOString()}\nurl: ${req.url}\nquery params: ${JSON.stringify(req.query)}\nbody: ${JSON.stringify(req.body)}\n${res.statusCode}\n\n\n`;
    fs.writeFile('logs.txt', log, { flag: 'a+' }, (err) => {
        if (err)
            console.log(err);
    });
};
export default logger;
