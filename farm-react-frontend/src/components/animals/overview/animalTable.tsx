import React, { useState, useEffect } from "react";
import { Animal } from "../../../types";

type Props = {
    animals: Animal[];
};

const AnimalTable: React.FC<Props> = (props:Props) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    
    useEffect(() => {
        setAnimals(props.animals);
    }, []);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.animals.map(animal => (
                    <tr key={animal.name}>
                        <td>{animal.name}</td>
                        <td>{animal.type}</td>
                        <td>{animal.age === 1 ? `${animal.age} year old` : `${animal.age} years old`}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
};

export default AnimalTable;