import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../API/API';
import { toast } from 'react-toastify';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await API.getTrendingMovies();

        if (movies.length !== 0) {
          setTrendingMovies(movies);
          //   console.log(movies);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getMovies();
  }, []);

  return (
    trendingMovies && (
      <>
        <h1>Trending today</h1>
        <ul>
          {trendingMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
}
