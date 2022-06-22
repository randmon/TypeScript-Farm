import { Animal } from '../types';

const allAnimals: Animal[] = [
    { name: 'Albert', type: 'duck', age: 2 },
    { name: 'Snowball', type: 'rabbit', age: 4 },
    { name: 'Hen Solo', type: 'chicken', age: 3 },
    { name: 'Charlie', type: 'canary', age: 1 },
    { name: 'Teddy', type: 'dog', age: 6 },
];

const getAllAnimals = (onResult: (error: Error, allAnimals: Animal[]) => void) => {
    onResult(null, allAnimals);
};

export { getAllAnimals };