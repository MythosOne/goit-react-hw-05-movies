import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiServiceGetMoviesReviews } from '../../Api/apiService';
import Loader from '../Loader/Loader';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getMoviesReviewsID = async () => {
            const getMoviesReviews = await apiServiceGetMoviesReviews(movieId);

            setReviews(getMoviesReviews.results);
            setIsLoading(false);
        };

        getMoviesReviewsID();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <h4>Author {review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie 😯</p>
            )}
        </>
    );
};