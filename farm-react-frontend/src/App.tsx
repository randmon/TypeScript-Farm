import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import Home from './components/home';
import AnimalOverivew from './components/animals/overview';
import AnimalAdd from './components/animals/add';

console.log(logo);

function App() {
  return (
    <>
    {/* Navbar */}
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} width="50" height="50" className="d-inline-block" alt="logo" />
        <span className="navbar-brand mb-0 h1 text-info">React Farm</span>
      </a>

        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add">Add</a>
          </li>
        </ul>
    </nav>

    <main className="container mt-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="animals" element={<AnimalOverivew />} />
        <Route path="add" element={<AnimalAdd />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
