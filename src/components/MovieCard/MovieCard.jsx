import PropTypes from 'prop-types';

export const MovieCard = ( {movieInfo} ) => {

    return (
        <>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <img
                    src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
                    alt={movieInfo.title}
                />
                <div>
                    <h2>{movieInfo.title}</h2>
                    <span>
                        User score: {Math.round(movieInfo.vote_average * 10) + '%'}
                    </span>
                    <h3>Original Title</h3>
                    <span>{movieInfo.original_title}</span>
                    <h3>Overview</h3>
                    <span>{movieInfo.overview}</span>
                </div>
            </div>
        </>
    );
};

MovieCard.propTypes = {
    movieInfo: 
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
    }).isRequired,
};
