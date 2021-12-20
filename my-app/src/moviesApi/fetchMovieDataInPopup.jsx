import axios from "axios";

const fetchMovieDataInPopup = async (popupData, callback) => {
    console.log("fetchMovieDataInPopup popupData", popupData.popup.movieId);
    const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.popup.movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
    const movieKey = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.popup.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
    if (!!(movieKey.data.results.length)) {
        movieData.data.key = movieKey.data.results[0].key;
    }
    callback(movieData.data);
}

export default fetchMovieDataInPopup