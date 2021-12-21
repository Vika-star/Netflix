import React, { useCallback } from "react";
import { useEffect, useState } from 'react';
import style from './style.module.scss';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import MoviePopUp from "../MoviePopUp/MoviePopUp";
import AllMoviesContext from '../Context/AllMoviesContext'
import Preloader from "../Preloader/Preloader";
import { fetchMoviesData, moviesCategories } from "../../moviesApi/fetchMoviesData";
import PopupContext from "../Context/PopupContext";


const App = () => {


    const [allMovies, setAllMovies] = useState([]);

    const [popup, setPopupOpen] = useState({ popupOpen: false, movieId: '' });

    const setPopup = useCallback((movieId) => {
        setPopupOpen({ popupOpen: !popup.popupOpen, movieId: movieId });
    }, [popup]);

    useEffect(() => {
        fetchMoviesData(setAllMovies);
    }, []);
    
    return (
        allMovies.length <= 0 ? <Preloader /> :
            <AllMoviesContext.Provider value={allMovies[0]}>
                <PopupContext.Provider value={{popup, setPopup}}>
                    
                    <div className={style.app}>
                        <div className={style.app__wrapper}>
                            <div className={style.app__page}>
                                <Header />
                                <Hero />
                                {
                                    allMovies.map((movies, index) =>
                                        <Movies key={index} title={moviesCategories[index].title} movies={movies} setShowPopup={setPopup} />)
                                }
                            </div>
                            {
                                popup.popupOpen && <MoviePopUp />
                            }
                        </div>
                    </div>

                </PopupContext.Provider>
            </AllMoviesContext.Provider >
    )
}

export default App;