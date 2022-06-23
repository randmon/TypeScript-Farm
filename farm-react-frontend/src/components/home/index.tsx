import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimalService from '../../services/AnimalService';
import { Animal } from '../../types';
import AnimalDetails from './animalDetails';

const Home: React.FC = () => {
    const [averageAge, setAverageAge] = useState(-1);
    const [animals, setAnimals] = useState({});

    useEffect(() => {
        getAverageAge();
        getAnimalDetails();

        setInterval(() => {
            getAverageAge();
            getAnimalDetails();
        }, 3000);
    }, []);

    // get average age of all animals
    const getAverageAge = async () => {
        try {
            const result: AxiosResponse<any> = await AnimalService.getAverageAge();
            setAverageAge(Math.round(result.data.average * 100) / 100);
        } catch (error: any) {
            setAverageAge(-1);
        }
    };

    const getAgeText = () => {
        if (averageAge === -1) {
            return 'No animals found';
        } else if (averageAge === 1) {
            return '1 year';
        } else {
            return `${averageAge} years`;
        }
    };

    const getAnimalDetails = async () => {
        try {
            const response = await AnimalService.getAnimalDetails();
            setAnimals(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <>
        <div className="jumbotron bg-light p-5">
            <h2 className="display-4">React Farm</h2>
            <p className="lead">In this animal farm, we have all kinds of animals. You can learn more about each animal and add your own.</p>
            
            <p className=''>Animals are now available for adoption!</p>
            <Link className="btn btn-primary btn-lg" to="/animals" role="button">See all animals</Link>
        </div>

        <h2 className='mt-3'>Details</h2>
        <p>Average age of all animals: {getAgeText()}</p>

        <div className="container mt-5">
            <AnimalDetails animals={animals} />
        </div>
        </>
    );
};

export default Home;
