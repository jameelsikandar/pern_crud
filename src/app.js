import express, { urlencoded } from 'express'
import cors from 'cors';
import pool from './config/db.config.js';
import userRouter from './routes/user.routes.js';
import { errorHandling } from './middlewares/errorHandler.middleware.js';
import { createUserTable } from './data/createUserTable.data.js';
const app = express();

// middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());


// user routes
app.use("/api", userRouter);


// error handling middlewares
app.use(errorHandling);

// create table before starting server

createUserTable();


// testing

app.get('/db', async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`Database name is: ${result.rows[0].current_database}`)
})




export default app;