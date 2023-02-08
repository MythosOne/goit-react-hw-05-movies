import { useState, useEffect } from 'react';
import { apiServiceGetTrending } from '../Api/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        apiServiceGetTrending()
            .then(resp => setMovies(resp.results))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            {movies && <MoviesList movies={movies}/>}
            {isLoading && <Loader />}
        </>
    );
};
