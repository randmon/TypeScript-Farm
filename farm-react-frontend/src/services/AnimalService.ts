import axios from '../axios';
import { Animal, Response } from '../types';

const getAllAnimals = () => axios.get<Animal[]>('/animals');

const addAnimal = (animal: Animal) => axios.post<Response>('/animals', animal);

const deleteAnimal = (name: string) => axios.delete<Response>(`/animals/${name}`);

const AnimalService = {
    getAllAnimals,
    addAnimal,
    deleteAnimal,
};

export default AnimalService;