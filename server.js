import express from 'express';
import { engine } from 'express-handlebars';
import methodOverride  from 'method-override';
import mongoose from 'mongoose';
mongoose.set('strictQuery',true);
import dotenv from 'dotenv';
dotenv.config();
//const mongoConnectionUrl='mongodb://127.0.0.1:27017/project';
mongoose.connect(process.env.mongoConnectionUrl);
import subjectsRouter from './routes/subjects.js';
const app = express();
app.use(express.urlencoded({extended:true }));
app.use(methodOverride('_method'));
//const Port=5000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/subjects',subjectsRouter);
app.listen(process.env.port,()=>{
    console.log(`started the application http://localhost:${process.env.port}`);
});
