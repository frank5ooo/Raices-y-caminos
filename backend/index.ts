import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = 3000;

app.get('/hello', (req: Request, res: Response) =>{
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`express SERVER: http://localhost:${port}`);
})