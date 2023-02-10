import { useEffect, useState } from 'react';
import { apiServiceSearchMovies } from '../Api/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSearchSubmit = ({ search }) => {
    if (search.trim().toLowerCase() === '') {
      setMessage('Please enter movies 😯');
      return;
    }
    setSearchParams({ query: search });

    setMessage('');
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    const searchMovies = async () => {
      try {
        if (searchQuery) {
          setIsLoading(true);
          const visibleMovies = await apiServiceSearchMovies(searchQuery);
          setMovies(visibleMovies);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [searchParams]);

  return (
    <>
      <h1>Movies</h1>
      <SearchBox onSubmit={onSearchSubmit} />
      {isLoading && <Loader />}
      {!message && movies ? <MoviesList movies={movies} /> : <p>{message}</p>}
    </>
  );
};

export default Movies;