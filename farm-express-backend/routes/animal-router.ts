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

// delete animal by name
animalRouter.delete('/:name', (req: Request, res: Response) => {
    const name: string = req.params.name;
    animalModel.deleteAnimal(name, (error: Error) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json({status: 'success'});
        }
    });
});

animalRouter.post('/add-random', (req: Request, res: Response) => {
    animalModel.addRandomAnimal((error: Error, animal: Animal) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json({status: 'success', animal});
        }
    });
});

animalRouter.get('/average-age', (req: Request, res: Response) => {
    animalModel.getAverageAge((error: Error, averageAge: number) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json({"average": averageAge});
        }
    });
});

animalRouter.get('/details', (req: Request, res: Response) => {
    animalModel.getDetails((error: Error, details) => {
        if (error) {
            res.status(500).json({status: 'error', message: error.message});
        } else {
            res.status(200).json(details);
        }
    });
});

export { animalRouter };