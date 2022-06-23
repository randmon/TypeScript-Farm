import React, { useState } from "react";
import AnimalService from "../../../services/AnimalService";
import { Animal, StatusMessage } from "../../../types";
import classNames from "classnames";

const AnimalAdd: React.FC = () => {

    const [nameInput, setNameInput] = useState<string>("");
    const [ageInput, setAgeInput] = useState<number>(0);
    const [typeInput, setTypeInput] = useState<string>("");
    const [imageInput, setImageInput] = useState<string>("");
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const addAnimal = async (animal: Animal) => {
        try {
            await AnimalService.addAnimal(animal);
            setStatusMessages([
                { type: "success", message: `Animal ${nameInput} successfully added.` }
            ]);
            setNameInput("");
            setAgeInput(0);
            setTypeInput("");
            setImageInput("");

        } catch (error: any) {
            setStatusMessages([
                ...statusMessages,
                { type: "error", message: `Error adding animal ${nameInput}.` }
            ]);
        }
    };

    const validateInput = () => {
        const errors: StatusMessage[] = [];
        if (!nameInput) {
            errors.push({ message: 'Please fill in name.', type: 'error' });
        }
        if (!typeInput) {
            errors.push({ message: 'Please fill in type.', type: 'error' });
        }
        if (!ageInput) {
            errors.push({ message: 'Please fill in age.', type: 'error' });
        }
        if (!imageInput) {
            errors.push({ message: 'Please fill in image.', type: 'error' });
        }
        setStatusMessages(errors);
        return errors;      
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const errors = validateInput();
        if (errors.length === 0) {
            addAnimal({ name: nameInput, type: typeInput, age: ageInput, image: imageInput });
        }
    };

    return (
        <>
            <h1>Add Animal</h1>

            {statusMessages && statusMessages.length > 0 && (
                <ul className={classNames({
                        'alert alert-success list-unstyled': statusMessages[0].type === 'success',
                        'alert alert-danger list-unstyled' : statusMessages[0].type === 'error'
                    })}>
                    {statusMessages.map(({message, type}, index) => (
                        <li key={index} 
                        className={classNames({
                            'text-danger' : type === 'error',
                            'text-success' : type === 'success'
                        })
                            
                        }>
                            {message}
                        </li>
                    ))}
                </ul>
            )}

            <form onSubmit={handleSubmit} className="p-0">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" 
                        onChange={(event) => setNameInput(event.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type" placeholder="Type"
                        onChange={(event) => setTypeInput(event.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Age"
                        onChange={(event) => setAgeInput(Number(event.target.value))}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" placeholder="Image"
                        onChange={(event) => setImageInput(event.target.value)}
                    />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mt-2" />
            </form>
            
            {/* <div className="mt-5">
                <h3>Selected image:</h3>
                <img src={imageInput} alt="animal"/>
            </div> */}
        </>
    );
};

export default AnimalAdd;