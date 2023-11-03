import { Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import Register from './components/Register';
import Movies from './components/Movies';

import { useLocalStorage } from './hook/useLocalStorage';
import Details from './components/Details';

function App() {
  const [currentUser, setCurrentUser] = useLocalStorage('USER-INFO', undefined);

  const logOut = () => {
    setCurrentUser(undefined);
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">
          Movie Night
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/home'} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/movies'} className="nav-link">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <a href="/register" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/register'} className="nav-link">
                  Sing Up
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
