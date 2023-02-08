import { useLocation } from 'react-router-dom';
import { Link } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({ id, title, name }) => (
                <li key={id}>
                    <Link
                        to={`/movies/${id}`}
                        state={{ from: location.pathname + location.search }}
                    >
                        {title || name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
};
