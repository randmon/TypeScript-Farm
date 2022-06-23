import React, { useState, useEffect } from "react";
import { Animal, StatusMessage } from "../../../types";
import { AxiosResponse } from "axios";
import AnimalService from "../../../services/AnimalService";

type Props = {
    animals: Animal[];
};

const AnimalCards: React.FC<Props> = (props:Props) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>({type: "success", message: ""});
    
    useEffect(() => {
        setAnimals(props.animals);
    }, []);

    const adoptAnimal = async (name: string) => {
        await AnimalService.deleteAnimal(name);
    };

    return (
        <>
        {statusMessage.message !== '' ? 
            <div className={`alert alert-${statusMessage.type}`}>
                {statusMessage.message}
            </div> : null
        }
        <div className='row'>
            {props.animals.map(animal => (
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
                        <button className='btn btn-success' onClick={
                            () => {
                                adoptAnimal(animal.name);
                                setStatusMessage({type: "success", message: `${animal.name} has been adopted!`});
                            }
                        } >Adopt</button>
                    </div>
                </div>

            ))}
        </div>
        </>
    );
};

export default AnimalCards;