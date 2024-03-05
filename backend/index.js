import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import  { Book }  from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling request body
//option 1: allow all origins with defalut of cors();
app.use(cors());

//option 2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );



app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to MERN stack tutorial');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');

        //now create a function to listen the port
        app.listen(PORT, () => {
            console.log(`app is listening to port:${PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    });