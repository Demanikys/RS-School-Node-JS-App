import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
// import path from 'path';
// import { dirname } from 'path/posix';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta);
// const __dirname = dirname(__filename);

dotenv.config({
  path: '../../.env',
});

export const config = {
  synchronize: true,
  type: 'postgres',
  name: 'my-connection',
  host: process.env['DB_HOST'],
  port: process.env['DB_PORT'],
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
} as ConnectionOptions;
