import server from './src/server';
import { LogError, LogSucces } from './src/utils/logger';
import dotenv from 'dotenv';

dotenv.config();

const port: number = 3000;

server.listen(port, () => {
    LogSucces(`[server ON]: running in http://localhost:${port}/api`);
});

server.on('error', (error)=>{
    LogError(`[server Error]: ${error}`);

})