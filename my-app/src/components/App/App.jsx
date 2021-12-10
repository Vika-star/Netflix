import React, { useCallback } from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import MoviePopUp from "../MoviePopUp/MoviePopUp";



const moviesCategories = [{ title: 'Popular Movies', endpoint: 'popular' },
{ title: 'Top Movies', endpoint: 'top_rated' },
{ title: 'Upcoming Movies', endpoint: 'upcoming' }];

const App = () => {

    const [popularMovies, setPopularMovies] = useState(null);

    const [popup, setShowPopup] = useState({ show: false, movieId: '' });

    const getMovieData = useCallback((movieId) => {
        setShowPopup({ show: !popup.show, movieId: movieId });
    }, [popup]);


    useEffect(() => {
        const fetchMoviesData = async () => {
            const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
            setPopularMovies(moviesData.data.results);
        }
        fetchMoviesData();
    }, []);


    return popularMovies && (

        <div className={style.app}>
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header />
                    <Hero movies={popularMovies} />
                    {
                        Array.from(moviesCategories).map((category, index) =>
                            <Movies key={index} title={category.title} moviesEndpoint={category.endpoint} setShowPopup={getMovieData} />)
                    }
                </div>
                {
                    popup.show && <MoviePopUp popupData={popup} setShowPopup={getMovieData}></MoviePopUp>
                }
            </div>
        </div>
    )
}

export default App;