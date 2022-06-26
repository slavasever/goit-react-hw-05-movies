import { Link, useLocation } from 'react-router-dom';
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

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.PENDING);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      setStatus(STATUS.LOADING);
      try {
        const movies = await API.getTrendingMovies();

        if (movies.length !== 0) {
          setTrendingMovies(movies);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setStatus(STATUS.RESOLVED);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1 className={s.header}>Trending today</h1>
      {status === STATUS.LOADING && <Loader />}
      {status === STATUS.RESOLVED && (
        <ul>
          {trendingMovies.map(({ id, title }) => {
            return (
              <li key={id} className={s.homeItem}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Home;
