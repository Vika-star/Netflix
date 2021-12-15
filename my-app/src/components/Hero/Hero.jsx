import { useContext, useEffect, useState } from 'react';
import ContentTitle from './ContentTitle';
import AddInfo from './AddInfo';
import SwiperMovie from './SwiperMovie'
import AllMoviesContext from '../Context/AllMoviesContext'
import fetchMovieDescription from '../../moviesApi/fetchMovieDescrition'
import style from './style.module.scss';
import HeroMovieDescriptiomContext from '../Context/HeroMovieDescriptionContext';


const getRandomMovie = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Hero = () => {
    const movies = useContext(AllMoviesContext);

    const [randomMovie] = useState(movies[getRandomMovie(0, movies.length - 1)]);

    const [movieDescription, setMovieDescription] = useState([]);

    useEffect(() => {
        fetchMovieDescription(randomMovie, setMovieDescription);
    }, [])

    return movieDescription && (
        <HeroMovieDescriptiomContext.Provider value={movieDescription}>

            <div className={style.hero} style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 76.78%), url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`
            }}>
                <div className={`${style.hero__container} ${style._container}`}>
                    <ContentTitle/>
                    <div className={style.hero__content}>
                        <div className={style.swiper_container}>
                            <div className={style.swiper_container__title}>
                                Popular Movies
                            </div>
                            <SwiperMovie />
                        </div>
                        <div className={style.hero__movieOverview}>
                            {movieDescription.overview}
                        </div>
                    </div>
                </div>
                <AddInfo/>

            </div>
        </HeroMovieDescriptiomContext.Provider>

    )
}

export default Hero;