import React, { useCallback } from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import axios from 'axios';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);

    // const [showPopup, setShowPopup] = useState(false);

    // const getMovieData = useCallback(() => {

    // }, [showPopup]);

    const getRandomBack = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const fetchMoviesData = async () => {
            const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovies(moviesData.data.results);
            setRandomMovie(moviesData.data.results[getRandomBack(0, moviesData.data.results-1)]);
        }
        fetchMoviesData();

    },[]);



    // const movieBackground = movies[getRandomBack(0, movies.length - 1)];
    // console.log(movieBackground);
    
    return (
        
        <div className={style.app}>
            {console.log("render")}
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header />
                    <Hero movies={movies}
                    randomMovie={randomMovie} 
                    // movieBackground={movieBackground}
                    />
                </div>
                {
                    // showPopup && <Header/>
                }
                {/* pop up container*/}
            </div>
        </div>
    )
}

export default App;