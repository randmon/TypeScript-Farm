import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from the Express server');
});

app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});