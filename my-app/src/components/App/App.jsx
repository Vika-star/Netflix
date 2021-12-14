import React, { useCallback, useContext } from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import MoviePopUp from "../MoviePopUp/MoviePopUp";
import PopularMoviesContext from './PopularMoviesContext'

// const fetchMoviesData = async (callback) => {
//     const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
//     callback(moviesData.data.results);
// }

const moviesCategories = [{ title: 'Popular Movies', endpoint: 'popular' },
{ title: 'Top Movies', endpoint: 'top_rated' },
{ title: 'Upcoming Movies', endpoint: 'upcoming' }];

const fetchMoviesData = async (callback) => {
    let moviesData = [];

    for (const category of moviesCategories) {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/${category.endpoint}?api_key=${process.env.REACT_APP_API_KEY}`);
        moviesData.push(Array.from(response.data.results));
    }
    callback(moviesData);
}

const App = () => {

    // const [popularMovies, setPopularMovies] = useState(null);
    const [allMovies, setAllMovies] = useState([]);

    const [popup, setShowPopup] = useState({ show: false, movieId: '' });

    const getMovieData = useCallback((movieId) => {
        setShowPopup({ show: !popup.show, movieId: movieId });
    }, [popup]);

    useEffect(() => {
        // fetchMoviesData(setPopularMovies);
        fetchMoviesData(setAllMovies);
    }, []);


    // return popularMovies && (
    return allMovies && (

        <div className={style.app}>
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header />
                    {/* <PopularMoviesContext.Provider value={popularMovies}> */}
                    <PopularMoviesContext.Provider value={allMovies[0]}>
                        <Hero />
                    </PopularMoviesContext.Provider>
                    {/* {
                        moviesCategories.map((category, index) =>
                            <Movies key={index} title={category.title} moviesEndpoint={category.endpoint} setShowPopup={getMovieData} />)
                    } */}
                    {
                        allMovies.map((movies, index) =>
                            <Movies key={index} title={moviesCategories[index].title} movies={movies}  setShowPopup={getMovieData} />)
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