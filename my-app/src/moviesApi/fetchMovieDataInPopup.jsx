import axios from "axios";

const fetchMovieDataInPopup = async (popupData, callback) => {
    const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
    const movieKey = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
    if (movieKey.data.results.length > 0) {
        movieData.data.key = movieKey.data.results[0].key;
    }
    callback(movieData.data);
}

export default fetchMovieDataInPopup