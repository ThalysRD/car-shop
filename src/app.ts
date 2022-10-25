import express from 'express';
import errorHandler from './middlewares/error';
import carsRoute from './routes/carsRoute';

const app = express();
app.use(express.json());
app.use(carsRoute);
app.use(errorHandler);

export default app;
