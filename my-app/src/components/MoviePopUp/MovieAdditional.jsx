import { useContext } from 'react';
import PopupMovieDescriptionContext from '../Context/PopupMovieDescriptionContext';
import style from './style.module.scss';
const MovieAdditional = ({movie}) => {
    
    // const movie = useContext(PopupMovieDescriptionContext);
    return (
        <div className={style.additional}>
            <div className={style.additional__poster}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            </div>
            <div className={style.additional__trailer}>
                {movie.key &&
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                }
            </div>
        </div>
    )
}

export default MovieAdditional