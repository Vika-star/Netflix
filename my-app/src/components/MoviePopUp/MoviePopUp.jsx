import { useContext, useEffect, useState } from 'react';
import style from './style.module.scss';
import { ReactComponent as CloseSvg } from '../../icons/close.svg';

import MovieDescription from './MovieDescription';
import MovieAdditional from './MovieAdditional';
import fetchMovieDataInPopup from '../../moviesApi/fetchMovieDataInPopup';
import PopupContext from '../Context/PopupContext';
import Preloader from '../Preloader/Preloader';

const MoviePopUp = () => {
    const popupData = useContext(PopupContext);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieDataInPopup(popupData, setMovie);
    }, []);


    return movie && (
        <div className={style.popup}>
            <div className={style.popup__content}>
                {movie.length <= 0 ? <Preloader /> :
                    <div className={style.popup__contentAdd}>
                        <div className={style.popup__close}><CloseSvg onClick={popupData.setPopup} /></div>
                        <div className={style.popup__left}>
                            <MovieAdditional movie={movie} />
                        </div>
                        <div className={style.popup__right}>
                            <MovieDescription movie={movie} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MoviePopUp;