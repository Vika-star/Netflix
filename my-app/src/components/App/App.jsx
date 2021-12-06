import React from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';



const App = () => {

    const [movies, setMovies] = useState('');
    const axios = require('axios').default;

    useEffect(() => {
        const fetchMoviesData = async () => {
            const moviesData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
            setMovies(moviesData.data.results);
        }
        fetchMoviesData();
    }, []);

    console.log(movies);

    return (
        <div className={style.app}>
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header/>
                </div>
            </div>
        </div>
    )
}

export default App;