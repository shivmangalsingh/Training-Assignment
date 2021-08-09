import { Application } from 'express';
import CarRouter from '../cars/cars.routes';

export const registerMiddlewares = (app: Application) => {
    app.use("/cars", CarRouter);
}