
import express from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
mongoose.connect(process.env.mongoConnectionUrl);

import departmentsRouter from './routes/departments.js';

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');

app.use('/departments', departmentsRouter);

app.listen(process.env.port,()=>{
    console.log(`started the application http://localhost:${process.env.port}`);
});