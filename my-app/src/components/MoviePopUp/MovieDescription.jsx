import { useContext } from 'react';
import PopupMovieDescriptionContext from '../Context/PopupMovieDescriptionContext';
import style from './style.module.scss'

const MovieDescription = () => {

    const movie = useContext(PopupMovieDescriptionContext);

    return (
        <div>
            <div className={style.popup__title}>
                {movie.title}
            </div>
            <div className={style.popup__textSmall}>
                Release Date:
                <div className={style.popup__textInfoSmall}>
                    {movie.release_date}
                </div>
            </div>
            <div className={style.popup__text}>
                Overview:
                <div className={style.popup__textInfo}>
                    {movie.overview}
                </div>
            </div>
            <div className={style.popup__text}>
                Genres:
                {(movie.genres).map((genre, index) => {
                    return (<div key={index} className={style.popup__textInfo}>
                        {genre.name}
                    </div>)
                })}
            </div>
            <div className={style.popup__text}>
            Production Countries:
                {(movie.production_countries).map((country, index) => {
                    return (<div key={index} className={style.popup__textInfo}>
                        {country.name}
                    </div>)
                })}
            </div>
            <div className={style.popup__text}>
                Original Language:
                <div className={style.popup__textInfo}>
                    {movie.original_language}
                </div>
            </div>
            <div className={style.popup__text}>
            Vote Average:
                <div className={style.popup__textInfo}>
                    {movie.vote_average}
                </div>
            </div>
            <div className={style.popup__text}>
            Status:
                <div className={style.popup__textInfo}>
                    {movie.status}
                </div>
            </div>

        </div>
    )
}
export default MovieDescription;