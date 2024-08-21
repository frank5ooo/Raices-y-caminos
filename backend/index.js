import express from 'express';
import cors from 'cors';
import pg from 'pg';


const app = express();
const pool = new pg.Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
    port: 5432
})

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get("/ping",async (req, res) => {

    const result = await pool.query('SELECT NOW()')
    console.log(result)

    res.send({
        pong: result.rows[0].now
    });
})

app.listen(3000,() => {
    console.log("server started port 3000");
});

