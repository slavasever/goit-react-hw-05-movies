import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import * as API from '../API/API';
import { toast } from 'react-toastify';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const onSearch = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const searchMovies = async () => {
      try {
        const movies = await API.getMovies(query);
        // console.log(movies);
        setMovies(movies);
      } catch (error) {
        toast.error(error.message);
      }
    };

    searchMovies();
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={onSearch} />
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
