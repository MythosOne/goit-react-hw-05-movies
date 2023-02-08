import axios from 'axios';

    const API_KEY = 'f42f2f62d598d39d316744d8859de3e9';
    const BASE_URL = 'https://api.themoviedb.org/3/';

export async function apiServiceGetTrending() {

    const resp = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);

    return resp.data;
};

export async function apiServiceSearchMovies(query) {

    const resp = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);

    return resp.data.results;
    
};

export async function apiServiceGetMoviesDetails(movieId) {

    const resp = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return resp.data;
};

export async function apiServiceGetMoviesCredits(movieId) {

    const resp = await axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

    return resp.data;
};


export async function apiServiceGetMoviesReviews(movieId) {

    const resp = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);

            return resp.data;
};
