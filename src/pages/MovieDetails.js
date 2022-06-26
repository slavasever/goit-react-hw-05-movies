import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../API/API';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import s from '../styles.module.css';

const STATUS = {
  LOADING: 'loading',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(STATUS.PENDING);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getDetails = async () => {
      setStatus(STATUS.LOADING);
      try {
        const details = await API.getMovieDetails(movieId);

        if (details) {
          setMovie(details);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      } finally {
        setStatus(STATUS.RESOLVED);
      }
    };

    getDetails();
  }, [movieId]);

  const onClick = () => {
    navigate(backLink);
  };

  return (
    <>
      {status === STATUS.LOADING && <Loader />}
      {status === STATUS.RESOLVED && (
        <>
          <button type="button" onClick={onClick} className={s.button}>
            Go back
          </button>
          <div className={s.cardWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
              width="342"
              height="512"
              className={s.poster}
            />
            <div>
              <h2 className={s.title}>{movie.title}</h2>
              <p className={s.rating}>Rating: {movie.vote_average}</p>
              <h3 className={s.title}>Overview</h3>
              <p className={s.overview}>{movie.overview}</p>
              <h4 className={s.title}>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <hr />
          <h4 className={s.infoHeader}>Additional information</h4>
          <ul className={s.infoList}>
            <li className={s.infoItem}>
              <Link
                to={`/movies/${movie.id}/cast`}
                state={{ from: backLink }}
                className={s.link}
              >
                Cast
              </Link>
            </li>
            <li className={s.item}>
              <Link
                to={`/movies/${movie.id}/reviews`}
                state={{ from: backLink }}
                className={s.link}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}

export default MovieDetails;
