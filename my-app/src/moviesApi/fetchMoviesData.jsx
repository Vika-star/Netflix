import axios from "axios";

const moviesCategories = [{ title: 'Popular Movies', endpoint: 'popular' },
{ title: 'Top Movies', endpoint: 'top_rated' },
{ title: 'Upcoming Movies', endpoint: 'upcoming' }];

const fetchMoviesData = async (callback) => {
    let moviesData = [];
 
    for (const category of moviesCategories) {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/${category.endpoint}?api_key=${process.env.REACT_APP_API_KEY}`);
        moviesData.push(Array.from(response.data.results));
    }
    callback(moviesData);
}

export {moviesCategories, fetchMoviesData}