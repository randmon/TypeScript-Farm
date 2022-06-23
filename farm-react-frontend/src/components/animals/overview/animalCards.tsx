import React, { useState, useEffect } from "react";
import { Animal } from "../../../types";

type Props = {
    animals: Animal[];
};

const AnimalCards: React.FC<Props> = (props:Props) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    
    useEffect(() => {
        setAnimals(props.animals);
    }, []);

    return (
        <div className='row'>
            {props.animals.map(animal => (
                <div key={animal.name} className='col-3 card m-3'>
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
    );
};

export default AnimalCards;