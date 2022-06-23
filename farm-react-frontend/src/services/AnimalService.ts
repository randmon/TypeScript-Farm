import axios from '../axios';
import { Animal, Response } from '../types';

const getAllAnimals = () => axios.get<Animal[]>('/animals');

const addAnimal = (animal: Animal) => axios.post<Response>('/animals', animal);

const addRandomAnimal = () => axios.post<Response>('/animals/add-random');

const deleteAnimal = (name: string) => axios.delete<Response>(`/animals/${name}`);

const getAverageAge = () => axios.get<number>('/animals/average-age');

const AnimalService = {
    getAllAnimals,
    addAnimal,
    addRandomAnimal,
    deleteAnimal,
    getAverageAge
};

export default AnimalService;