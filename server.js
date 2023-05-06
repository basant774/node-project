import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//const mongoConnectionUrl='mongodb://localhost:21017/project';
mongoose.connect(process.env.mongoConnectionUrl);
const app = express();

//const Port=5000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.listen(process.env.port,()=>{
    console.log(`started the application http://localhost:${process.env.port}`);
});
