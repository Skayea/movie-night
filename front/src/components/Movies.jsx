import { useEffect, useState } from 'react';

import Movie from './Movie';

const Movies = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/api/movie`)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <Movie data={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>data</div>
      )}
    </div>
  );
};

export default Movies;
