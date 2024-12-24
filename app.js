import express from 'express';
import dotenv from 'dotenv'
import { init } from './src/index.js';
import connection from './Database/connection.js';

//Invokes
const app = express()
dotenv.config()
const port = process.env.PORT || 8000

//Fire Connection
connection()

//Middleware
app.use(express.json())
// app.use(morgan('dev'))

//Router
init(app)

//Listening to port
app.listen(port,()=>{
    console.log(`Server is runnong on port ${port}`)
})