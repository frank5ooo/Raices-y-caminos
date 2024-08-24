import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) =>{
    res.send('APP Express + TS anda todo');
})

app.listen(port, () => {
    console.log(`express SERVER: http://localhost:${port}`);
})