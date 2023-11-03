import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Chat from './Chat';

const Details = (props) => {
  const params = useParams();
  const movieId = params.id;
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/movie/${movieId}`)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  const UserName = props.CurrentUser.username;
  console.log(UserName)
  console.log(props)
  return (
    <div>
      {data ? (
        <div className='two-columns-container'>
          <div className="card chat-container">
            <h4>{data.title}</h4>
            <img src={data.img} alt="profile-img" className="profile-img-card" />
            <div>{data.description}</div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => navigate(-1)}
            >
              Вернуться в каталог
            </button>
          </div>

          <div className="card card-container">
            <Chat UserName={UserName} MovieId={movieId}/>
          </div>
        </div>
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default Details;
