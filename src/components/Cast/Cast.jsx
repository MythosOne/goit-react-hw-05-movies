import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiServiceGetMoviesCredits } from '../../Api/apiService';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovieCreditsID = async () => {
            const movieCredits = await apiServiceGetMoviesCredits(movieId);

            setCast(movieCredits);
        };

        getMovieCreditsID();
    }, [movieId]);

    return (
        <>
            {cast.length > 0 ? (
                <ul>
                    {cast.map(item => (
                        <li key={item.cast_id}>
                            <div>
                                <img
                                    src={
                                        item.profile_path
                                            ? `https://image.tmdb.org/t/p/w500${item.profile_path}
`
                                            : 'image not found 😒'
                                    }
                                    alt={item.name}
                                />
                                <h3>{item.name}</h3>
                                <p>Character {item.character}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No information</p>
            )};
        </>
    );
};
