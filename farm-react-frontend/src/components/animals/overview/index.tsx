import React, { useEffect, useState } from 'react';
import { Animal } from '../../../types';
import { AxiosResponse } from 'axios';
import AnimalCards from './animalCards';
import AnimalTable from './animalTable';
import AnimalService from '../../../services/AnimalService';

const AnimalOverview: React.FC = () => {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = async () => {
        // array with 2 cats
        const response: AxiosResponse<any> = await AnimalService.getAllAnimals();
        try {
            if (response.status === 200) {
                console.log(response.data);
                setAnimals(response.data);
            } else {
                console.log('Error');
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <h1>Overview</h1>
            <p>Animals are not yet available for adoption.</p>

            {/* If there are animals, show them */}
            {animals.length > 0 ? 
                <AnimalCards animals={animals} /> 
                :
                <p className='alert alert-secondary'>No animals found.</p>}
            {/* <AnimalTable animals={animals}/> */}
        </>
    );
};

export default AnimalOverview;