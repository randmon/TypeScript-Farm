import axios from '../axios';
import { Animal, Response } from '../types';

const getAllAnimals = () => axios.get<Animal[]>('/animals');

const addAnimal = (animal: Animal) => axios.post<Response>('/animals', animal);

const AnimalService = {
    getAllAnimals,
    addAnimal,
};

export default AnimalService;