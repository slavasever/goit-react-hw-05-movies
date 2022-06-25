import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API/API';
import { toast } from 'react-toastify';
// import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState([]);
  //   console.log(movieId);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const cast = await API.getReviews(movieId);

        if (cast) {
          setFilmReviews(cast);
          console.log(cast);
        }
      } catch (error) {
        toast.error(error.message);
        // console.log(error.message);
      }
    };

    getReviews();
  }, [movieId]);

  return filmReviews.length > 0 ? (
    <>
      <ul>
        {filmReviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}

export default Reviews;
