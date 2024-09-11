import express from 'express';
import cors from 'cors';
import logger from 'morgan';
const app = express();


app.use(express.json())
app.use(logger('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
}))

export default app;