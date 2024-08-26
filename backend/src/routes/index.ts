// root router 
// redicrections to Routers

import express,{ Request,Response } from "express";
import helloRouter from "./HelloRoutes";
import { LogInfo } from "@/utils/logger";

let server = express();
let rootRouter = express.Router();

rootRouter.get('/', (req: Request, res: Response) =>{
    LogInfo('GET: http://localhost:3000/api/');
    res.send('Hello sex!');
});

//redirections to Routes
server.use('/', rootRouter);
server.use('/hello', helloRouter);

export default server;

