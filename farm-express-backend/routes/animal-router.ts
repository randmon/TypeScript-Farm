import express, { Request, Response, Handler } from 'express';
import * as animalModel from '../model/animal';
import { Animal } from '../types';

const animalRouter = express.Router();

animalRouter.get('/', (req: Request, res: Response) => {
    animalModel.getAllAnimals((error: Error, allAnimals: Animal[]) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json(allAnimals);
        }
    });
});

animalRouter.post('/', (req: Request, res: Response) => {
    const animal: Animal = req.body;
    animalModel.addAnimal(animal, (error: Error) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json({status: 'success'});
        }
    });
});


export { animalRouter };