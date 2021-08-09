import express from 'express';
import { registerMiddlewares } from './routes/routes';


export const startServer = () => {
    const app = express();

    registerMiddlewares(app);

    const { PORT } = process.env;

    app.listen(
        PORT,
        () => console.log(`SERVER HAS STARTED ON PORT ${PORT}`)
    );
}
// http://localhost:3000