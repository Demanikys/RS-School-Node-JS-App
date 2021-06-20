// @ts-nocheck
import { getConnection, createConnection } from 'typeorm';
import { config } from '../common/ormconfig';
const connectToDB = async () => {
    let connection;
    try {
        connection = getConnection();
        await connection.runMigrations();
    }
    catch (error) {
        console.log(error);
    }
    try {
        if (connection) {
            if (!connection.isConnected)
                await connection.connect();
        }
        else {
            await createConnection(config);
        }
        console.log('Connected!!!');
    }
    catch (error) {
        console.log('Connection error:', error);
    }
};
export const TryDBConnect = async (cb) => {
    try {
        await connectToDB();
        cb();
    }
    catch (error) {
        console.log('DB connetcion error:', error);
    }
};
