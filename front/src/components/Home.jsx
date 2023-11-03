import movieNight from './images/movie-night.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToCatalog = (e) => {
    navigate('/movies', { replace: true })
  };

  return (
    <div>
      <img src={movieNight} style={{ width: '100%' }}></img>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={goToCatalog}>Каталог</button>
      </div>
    </div>
  );
};

export default Home;
