import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import * as API from '../API/API';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import s from '../styles.module.css';

const STATUS = {
  LOADING: 'loading',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

function Movies() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.PENDING);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // console.log(query);

  const onSearch = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const searchMovies = async () => {
      setStatus(STATUS.LOADING);
      try {
        const movies = await API.getMovies(query);

        if (movies.length === 0) {
          toast.warning(`No movies for query ${query}`);
        }
        setMovies(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setStatus(STATUS.RESOLVED);
      }
    };

    searchMovies();
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={onSearch} />
      {status === STATUS.LOADING && <Loader />}
      {status === STATUS.RESOLVED && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id} className={s.moviesListItem}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Movies;
