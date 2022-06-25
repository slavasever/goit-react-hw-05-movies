import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as API from '../API/API';
import { toast } from 'react-toastify';
import s from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // console.log(movieId);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await API.getMovieDetails(movieId);

        if (details) {
          setMovie(details);
          // console.log(details);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    movie && (
      <>
        <div className={s.cardWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
            width="342"
            height="512"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <hr />
        <ul>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </>
    )
  );
}
