import React, { useState, useEffect } from "react";
import { Animal, StatusMessage } from "../../../types";
import AnimalService from "../../../services/AnimalService";
import classNames from "classnames";

type Props = {
    animals: Animal[];
};

const AnimalCards: React.FC<Props> = (props:Props) => {
    const [animals, setAnimals] = useState<Animal[]>(props.animals);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>({type: "success", message: ""});

    useEffect(() => {
        setAnimals(props.animals);
    }, [props.animals]);

    const adoptAnimal = async (name: string) => {
        try {
            await AnimalService.deleteAnimal(name);
            setStatusMessage({type: "success", message: `${name} has been adopted!`});

            const newAnimals = animals.filter(animal => animal.name !== name);
            setAnimals(newAnimals);
        } catch (error: any) {
            setStatusMessage({type: "error", message: error.response?.data.message});
        }
    };

    return (
        <>
        {statusMessage.message !== '' ? 
            <p className={classNames({
                    'alert alert-success list-unstyled': statusMessage.type === 'success',
                    'alert alert-danger list-unstyled' : statusMessage.type === 'error'
                })}>{statusMessage.message}
            </p> : null
        }
        <div className='row'>
            {animals.map(animal => (
                <div key={animal.name} className='col-3 card m-3 p-0'>
                    <img src={animal.image} alt={animal.name} className="card-img-top"/>
                    <div className='card-body'>
                        <h5 className='card-title'>{animal.name}</h5>
                        <p className='card-text'>
                            Type: {animal.type}
                            <br />
                            {animal.age === 1 ? `${animal.age} year old` : `${animal.age} years old`}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success' onClick={ () => {adoptAnimal(animal.name); }}>
                            Adopt
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default AnimalCards;