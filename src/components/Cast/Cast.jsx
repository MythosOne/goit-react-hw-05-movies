import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiServiceGetMoviesCredits } from '../../Api/apiService';
import { ListItem, Img, Title, List, Paragraph } from './Cast.styled';
import Loader from '../Loader/Loader';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getMovieCreditsID = async () => {
            const movieCredits = await apiServiceGetMoviesCredits(movieId);

            setCast(movieCredits.cast);
            setIsLoading(false);
        };

        getMovieCreditsID();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {cast.length > 0 ? (
                <List>
                    {cast.map(item => (
                        <ListItem key={item.cast_id}>
                            <div>
                                <Img
                                    src={
                                        item.profile_path
                                            ? `https://image.tmdb.org/t/p/w300${item.profile_path}
`
                                            : 'https://via.placeholder.com/300.png?text=No image'
                                    }
                                    alt={item.name}
                                />
                                <Title>{item.name}</Title>
                                <Paragraph>Character {item.character}</Paragraph>
                            </div>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <p>We don't have any cast for this movie 😯</p>
            )}
        </>
    );
};