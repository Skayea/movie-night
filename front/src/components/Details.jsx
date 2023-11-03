import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Chat from './Chat';

const Details = () => {
  const params = useParams();
  const movieId = params.id;
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/movie/${movieId}`)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  const UserName = "You"

  return (
    <div>
      {data ? (
        <>
          <div className="card card-container">
            <div>{data.title}</div>
            <img src={data.img} alt="profile-img" className="profile-img-card" />
            <div>{data.description}</div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>

          <div className="card card-container">
            <Chat   UserName={UserName} MovieId={movieId}/>
          </div>
        </>
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default Details;
