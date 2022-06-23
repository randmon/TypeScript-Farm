import axios from '../axios';
import { Animal, Response } from '../types';

const getAllAnimals = () => axios.get<Animal[]>('/animals');

const addAnimal = (animal: Animal) => axios.post<Response>('/animals', animal);

const addRandomAnimal = () => axios.post<Response>('/animals/add-random');

const deleteAnimal = (name: string) => axios.delete<Response>(`/animals/${name}`);

const getAverageAge = () => axios.get<number>('/animals/average-age');

const getAnimalDetails = () => axios.get<object>('/animals/details');

const AnimalService = {
    getAllAnimals,
    addAnimal,
    addRandomAnimal,
    deleteAnimal,
    getAverageAge,
    getAnimalDetails,
};

export default AnimalService;