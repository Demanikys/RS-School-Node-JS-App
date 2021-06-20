import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { Board } from '../entites/board';
import { Columns } from '../entites/columns';
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
  entities: [User, Board, Columns],
} as ConnectionOptions;
