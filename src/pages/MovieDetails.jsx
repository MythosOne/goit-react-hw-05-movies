import { apiServiceGetMoviesDetails } from '../Api/apiService';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { MovieCard } from 'components/MovieCard/MovieCard';
import Loader from '../components/Loader/Loader';
import styled from 'styled-components';

const BackLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #000000;
  &:focus,
  &:hover {
    color: #3f51b5;
  }
`;

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const ref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);

    const getMoviesByID = async () => {
      try {
        const movieInfo = await apiServiceGetMoviesDetails(movieId);
        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesByID();
  }, [movieId]);

  return (
    <>
      <BackLink to={ref.current}> ← Go back</BackLink>
      {movie && <MovieCard movieInfo={movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
      {isLoading && <Loader />}
    </>
  );
};
