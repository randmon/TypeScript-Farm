import axios from '../axios';
import { Animal } from '../types';

const getAllAnimals = () => axios.get<Animal[]>('/animals');

const AnimalService = {
    getAllAnimals,
};

export default AnimalService;