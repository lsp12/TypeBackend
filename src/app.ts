import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import {index} from './routes/index.routes';
import {connectdb} from './database';

connectdb();
const app=express();

app.set('port',config.PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', index.invetoryRoute);
export default app;