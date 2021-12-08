import React, { useCallback } from "react";
import style from './style.module.scss';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Movies from '../Movies/Movies';
import axios from 'axios';



const App = () => {

    const [movies, setMovies] = useState([]);

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

    console.log(movies);

    return (
        <div className={style.app}>
            <div className={style.app__wrapper}>
                <div className={style.app__page}>
                    <Header />
                    <Hero movies={movies} />
                </div>
                {/* <div style={{
                    // backgroundImage: `url("https://image.tmdb.org/t/p/original/bxU79lpl8ZQAVJ72155kqWkuqMu.jpg")`,
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg")`,
                    height: `800px`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`
                }}>
                </div> */}
                {
                    // showPopup && <Header/>
                }
                {/* pop up container*/}
            </div>
        </div>
    )
}

export default App;