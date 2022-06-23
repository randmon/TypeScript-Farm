import React, { useEffect, useState } from 'react';
import { Animal } from '../../../types';
import { AxiosResponse } from 'axios';
import AnimalCards from './animalCards';
// import AnimalTable from './animalTable';
import AnimalService from '../../../services/AnimalService';

const AnimalOverview: React.FC = () => {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimals();
        setInterval(() => {
            getAnimals();
        }, 10000);
    }, []);

    const getAnimals = async () => {
        try {
            const response: AxiosResponse<Animal[]> = await AnimalService.getAllAnimals();
            setAnimals(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <>
            <h1>Overview</h1>
            <p>Animals are now available for adoption!</p>

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