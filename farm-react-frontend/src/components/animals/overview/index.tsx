import React, { useEffect, useState } from 'react';
import { Animal } from '../../../types';

const AnimalOverview: React.FC = () => {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = async () => {
        // array with 2 cats
        const animals: Animal[] = [
            {
                name: 'Kitty',
                type: 'cat',
                age: 2,
                image: 'https://placekitten.com/400/300'
            },
            {
                name: 'Freddie',
                type: 'cat',
                age: 1,
                image: 'https://placekitten.com/800/600'
            }
        ];

        setAnimals(animals);
    };


    return (
        <>
            <h1>Overview</h1>
            <p>Animals are not yet available for adoption.</p>

            <div className='row'>
                {animals.map(animal => (
                    <div key={animal.name} className='col-4 card m-3'>
                        <img src={animal.image} alt={animal.name} className="card-img-top"/>
                        <div className='card-body'>
                            <h5 className='card-title'>{animal.name}</h5>
                            <p className='card-text'>
                                Type: {animal.type}
                                <br />
                                {animal.age === 1 ? `${animal.age} year old` : `${animal.age} years old`}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
};

export default AnimalOverview;