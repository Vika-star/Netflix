import { useContext, useEffect, useState } from 'react';
import style from './style.module.scss';
import { ReactComponent as CloseSvg } from '../../icons/close.svg';

import MovieDescription from './MovieDescription';
import MovieAdditional from './MovieAdditional';
import fetchMovieDataInPopup from '../../moviesApi/fetchMovieDataInPopup';
import PopupContext from '../Context/PopupContext';

const MoviePopUp = () => {
    const popupData= useContext(PopupContext.popup);
    const setShowPopup = useContext(PopupContext.setShowPopup);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieDataInPopup(popupData,setMovie);
    }, []);


    return movie && (
        <div className={style.popup}>
            <div className={style.popup__content}>
                <div className={style.popup__close}><CloseSvg onClick={setShowPopup} /></div>
                <div className={style.popup__left}>
                    <MovieAdditional movie={movie} />
                </div>
                <div className={style.popup__right}>
                    <MovieDescription movie={movie} />
                </div>
            </div>

        </div>
    )
}

export default MoviePopUp;