import { useState, useEffect } from 'react';
import { apiServiceGetTrending } from '../Api/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    const getTrendingMovies = async () => {
      try {
        const data = await apiServiceGetTrending();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Home;