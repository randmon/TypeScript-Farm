import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { animalRouter } from './routes/animal-router';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from the Express server');
});

app.use('/animals', animalRouter);

app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});