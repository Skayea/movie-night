import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <Link to={`/movies/${props.data.id}`} className="nav-link">
      <div
        style={
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }
        }
      >
        <img style={{
          width: "150px",
          height: "225px",
          marginRight: '15px'
        }}
          src={props.data.img}
          alt=''
        />

        <div>
          <h3>{props.data.title}</h3>
          <div>{props.data.short_description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
