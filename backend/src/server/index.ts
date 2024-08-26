import express, { Express,Request, Response } from "express";

import dotenv from 'dotenv';

import cors from 'cors';
import helmet from "helmet";

import rootRouter from '../routes';

const server: Express = express();

server.use('/api', rootRouter);
//Mongoose Connection

server.use(helmet());
server.use(cors());

//Content type

server.use(express.urlencoded({ extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

//Redirection Config
server.get('/', (req: Request,res:Response) => {
    res.redirect('/api');
});

export default server;


