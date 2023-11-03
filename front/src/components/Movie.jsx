import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <Link to={`/movies/${props.data.id}`} className="nav-link">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>{props.data.title}</div>
        <div>
          <img
            src={props.data.img}
            width="40px"
            height="40px"
            alt=""
            display="none"
          />
          <div>{props.data.short_description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
