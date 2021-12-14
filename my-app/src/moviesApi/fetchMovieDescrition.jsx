import axios from "axios";

const fetchMovieDescription = async (randomMovie,callback) => {
    const randomMovieData = await axios.get(`https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${process.env.REACT_APP_API_KEY}`);

    callback({
        id: randomMovieData.data.id,
        title: randomMovieData.data.title,
        releaseDate: (randomMovieData.data.release_date).replace(/-/g, ' '),
        overview: randomMovieData.data.overview,
        voteAverage: randomMovieData.data.vote_average
    });
}
export default fetchMovieDescription;