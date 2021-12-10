import style from './style.module.scss';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Movies = ({ title, moviesEndpoint }) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${moviesEndpoint}?api_key=${process.env.REACT_APP_API_KEY}`)
            setMovies(movieData.data.results);
        }
        fetchMovies();
    }, []);

    return movies && (
        <div className={style.movies}>
            <div className={style.movies__container}>
                <div className={style.movies__title}>
                    {title}
                </div>
                <div className={style.movies__content}>
                    {
                        Array.from(movies).map((movie, index) =>
                            <Movie key={index} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Movies