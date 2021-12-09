import React, { useCallback } from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import axios from 'axios';



const App = () => {

    const [movies, setMovies] = useState(null);

    // const [showPopup, setShowPopup] = useState(false);

    // const getMovieData = useCallback(() => {

    // }, [showPopup]);


    useEffect(() => {
        const fetchMoviesData = async () => {
            const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovies(moviesData.data.results);
        }
        fetchMoviesData();
    },[]);



    return movies &&(
        
        <div className={style.app}>
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header />
                    <Hero movies={movies} 
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