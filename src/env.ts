/* eslint-disable @typescript-eslint/indent */
const NODE_ENV: string = 'development';
const PORT: number = 4000;
const AUTH_MODE: string = 'false';
const JWT_SECRET_KEY: string = 'secret-key';
// Set your database connection information here
const MONGO_CONNECTION_STRING: string = 'your-mongo-db-connection-string';

export {
    NODE_ENV,
    PORT,
    AUTH_MODE,
    JWT_SECRET_KEY,
    MONGO_CONNECTION_STRING,
};
