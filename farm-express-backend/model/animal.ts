import { uniqueNamesGenerator, animals, names, NumberDictionary } from 'unique-names-generator';
import { Animal } from '../types';

const allAnimals: Animal[] = [
    { name: 'Albert', type: 'duck', age: 2, image: 'https://images.unsplash.com/photo-1526642295339-99f8b88a241b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
    { name: 'Snowball', type: 'rabbit', age: 4, image: 'https://images.unsplash.com/photo-1629898569904-669319348211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
    { name: 'Hen Solo', type: 'chicken', age: 3, image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
    { name: 'Charlie', type: 'canary', age: 1, image: 'https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
    { name: 'Teddy', type: 'dog', age: 6, image: 'https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
    { name: 'Max', type: 'cat', age: 4, image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
    { name: 'Mary', type: 'sheep', age: 1, image: 'https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' },
    { name: 'Lucky', type: 'cockatoo', age: 19, image: 'https://images.unsplash.com/photo-1623479354554-e6f139d57415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' },
];

const getAllAnimals = (onResult: (error: Error, allAnimals: Animal[]) => void) => {
    onResult(null, allAnimals);
};

const addAnimal = (animal: Animal, onResult: (error: Error) => void) => {
    if (animal.name && animal.type && animal.age && animal.image 
        && animal.name.length > 0 && animal.type.length > 0 && animal.image.length > 0 && animal.age >= 0 
        && allAnimals.findIndex(a => a.name === animal.name) === -1) {
        allAnimals.push(animal);
        onResult(null);
    } else {
        onResult(new Error('Invalid animal'));
    }
}

const deleteAnimal = (name: string, onResult: (error: Error) => void) => {
    const index = allAnimals.findIndex(a => a.name === name);
    if (index === -1) {
        onResult(new Error('Animal not found'));
    } else {
        allAnimals.splice(index, 1);
        onResult(null);
    }
}

const addRandomAnimal = (onResult: (error: Error, animal: Animal) => void) => {
    const type = uniqueNamesGenerator({dictionaries: [animals]});
    
    const animal: Animal = {
        name: uniqueNamesGenerator({dictionaries: [names]}),
        type: type,
        age: Number.parseInt(NumberDictionary.generate({ min: 1, max: 50 })[0]),
        image: 'http://placehold.jp/8286c0/ffffff/400x300.png?text=%3D%5E._.%5E%3D%20%E2%88%AB'
    };
    allAnimals.push(animal);
    onResult(null, animal);
}

export { getAllAnimals, addAnimal, deleteAnimal, addRandomAnimal };