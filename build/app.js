import express from 'express';
// import swaggerUI from 'swagger-ui-express';
// import path from 'path';
// import YAML from 'yamljs';
import { finished } from 'stream';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import logger from './middlewares/logger';
const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use((req, res, next) => {
    next();
    finished(res, () => {
        logger({ req, res });
    });
    // logger(req, res);
});
app.use((err, req, res, next) => {
    if (req && res) {
        console.log('REALY?');
    }
    if (err) {
        res.sendStatus(500);
        return;
    }
    next();
});
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
process.on('uncaughtException', (err) => {
    logger({ uncaughtException: err });
});
process.on('unhandledRejection', (reason) => {
    if (reason) {
        logger({ unhandledRejection: reason });
    }
});
Promise.reject(Error('Oops!'));
export default app;
