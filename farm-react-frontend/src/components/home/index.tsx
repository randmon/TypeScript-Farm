import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimalService from '../../services/AnimalService';

const Home: React.FC = () => {
    const [averageAge, setAverageAge] = useState(-1);

    useEffect(() => {
        getAverageAge();

        setInterval(() => {
            getAverageAge();
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

    return (
        <>
        <div className="jumbotron">
            <h1 className="display-4">React Farm</h1>
            <p className="lead">
                In this animal farm, we have all kinds of animals. You can learn more about each animal and add your own.
            </p>
            <hr className="my-4" />
            <p>Animals are now available for adoption!</p>
            {/* If average age is 1, write singular */}
            <p>Average age of all animals: {getAgeText()}</p>
            <Link className="btn btn-primary btn-lg" to="/animals" role="button">See all animals</Link>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="cute animals" />
                </div>
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="cute animals" />
                </div>
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1623479354554-e6f139d57415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="cute animals" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
