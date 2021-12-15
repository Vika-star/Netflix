import { useContext, useEffect, useState } from 'react';
import style from './style.module.scss';
import { ReactComponent as CloseSvg } from '../../icons/close.svg';

import MovieDescription from './MovieDescription';
import MovieAdditional from './MovieAdditional';
import fetchMovieDataInPopup from '../../moviesApi/fetchMovieDataInPopup';
import PopupContext from '../Context/PopupContext';
import PopupMovieDescriptionContext from '../Context/PopupMovieDescriptionContext';

const MoviePopUp = () => {
    const [popupData, setShowPopup] = useContext(PopupContext);
    console.log(popupData);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieDataInPopup(popupData, setMovie);
    }, []);


    return movie && (
        <PopupMovieDescriptionContext.Provider value={movie}>
            <div className={style.popup}>
                <div className={style.popup__content}>
                    <div className={style.popup__close}><CloseSvg onClick={setShowPopup} /></div>
                    <div className={style.popup__left}>
                        <MovieAdditional/>
                    </div>
                    <div className={style.popup__right}>
                        <MovieDescription />
                    </div>
                </div>
            </div>
        </PopupMovieDescriptionContext.Provider>
    )
}

export default MoviePopUp;