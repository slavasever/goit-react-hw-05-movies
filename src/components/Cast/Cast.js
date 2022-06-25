import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API/API';
import { toast } from 'react-toastify';
// import s from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);
  //   console.log(movieId);

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await API.getCast(movieId);

        if (cast) {
          setFilmCast(cast);
          console.log(cast);
        }
      } catch (error) {
        toast.error(error.message);
        // console.log(error.message);
      }
    };

    getCast();
  }, [movieId]);

  return filmCast.length > 0 ? (
    <>
      <ul>
        {filmCast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
                alt={name}
                width="170"
                height="256"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>We don't have cast for this movie</p>
  );
}

export default Cast;
