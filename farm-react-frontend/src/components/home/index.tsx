import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
        <div className="jumbotron">
            <h1 className="display-4">React Farm</h1>
            <p className="lead">
                In this animal farm, we have all kinds of animals. You can learn more about each animal and add your own.
            </p>
            <hr className="my-4" />
            <p>Animals are now available for adoption!</p>
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
