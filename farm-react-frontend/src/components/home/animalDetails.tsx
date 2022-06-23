import { Animal, StatusMessage } from "../../types";

type Props = {
    animals: object;
};

const AnimalDetails = (props: Props) => {
    return (
        <div className="row">
            {Object.entries(props.animals).map(([detail, animal]) => (
                <div className='col-4'>
                    <h3>{detail}</h3>
                    <div key={animal.name} className='card p-0'>
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
                </div>
            ))}
        </div>
    );
};

export default AnimalDetails;