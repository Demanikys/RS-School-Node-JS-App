import dotenv from 'dotenv';
import { Board } from '../entites/board';
import { Columns } from '../entites/columns';
import { Task } from '../entites/tasks';
import { User } from '../entites/user';
dotenv.config({
    path: '../../.env',
});
export const config = {
    type: 'postgres',
    host: 'host.docker.internal',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectionInterval: 1000,
    entities: [User, Board, Columns, Task],
};
