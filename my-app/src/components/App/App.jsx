import React, { useCallback } from "react";
import { useEffect, useState } from 'react';
import style from './style.module.scss';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import MoviePopUp from "../MoviePopUp/MoviePopUp";
import PopularMoviesContext from '../Context/AllMoviesContext'
import Preloader from "../Preloader/Preloader";
import {fetchMoviesData, moviesCategories } from "../../moviesApi/fetchMoviesData";

const App = () => {

    const [allMovies, setAllMovies] = useState([]);

    const [popup, setShowPopup] = useState({ show: false, movieId: '' });

    const getMovieData = useCallback((movieId) => {
        setShowPopup({ show: !popup.show, movieId: movieId });
    }, [popup]);

    useEffect(() => {
        fetchMoviesData(setAllMovies);
    }, []);

    return (
        allMovies.length <= 0 ? <Preloader /> :
            <PopularMoviesContext.Provider value={allMovies[0]}>

                <div className={style.app}>
                    <div className={style.app__wrapper}>
                        <div className={style.app__page}>

                            <Header />
                            <Hero />
                            {
                                allMovies.map((movies, index) =>
                                    <Movies key={index} title={moviesCategories[index].title} movies={movies} setShowPopup={getMovieData} />)
                            }
                        </div>

                        {
                            popup.show && <MoviePopUp popupData={popup} setShowPopup={getMovieData}></MoviePopUp>
                        }

                    </div>
                </div>
            </PopularMoviesContext.Provider>
    )
}

export default App;