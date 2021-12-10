import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './style.module.scss';

const MoviePopUp = ({ popupData, setShowPopup }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovie(movieData.data);
            //     {
            //     title: moviesData.data.title,
            //     genres: moviesData.data.genres,
            //     originalLanguage:moviesData.data.original_language,
            //     overview: moviesData.data.overview,
            //     productionCompanies: moviesData
            // }
        }
        fetchMovieData();
    }, []);

    return movie && (
        <div className={style.popup} onClick={setShowPopup}>
            <div className={style.popup_info}>
                <div className={style.popup__title}>
                    {movie.title}
                </div>
                <div className={style.popup__text}>
                    {Array.from(movie.genres).map((genre, index)=> {
                        return (<div key={index} className={style.popup__item}>
                            {genre.name}
                        </div>)
                    })}
                </div>
            </div>

        </div>
    )
}

export default MoviePopUp;