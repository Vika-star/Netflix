import style from './style.module.scss';
import ContentTitle from './ContentTitle';
import AddInfo from './AddInfo';
import SwiperMovie from './SwiperMovie'
import { useState } from 'react';



const Hero = ({ movies }) => {
    const [showInfo, setShowInfo] = useState('false');

    const getRandomBack = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (movies.length > 0) {

        const movie = movies[getRandomBack(0, movies.length - 1)];

        return (
            
            <div className={style.hero} style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}>
                <div className={`${style.hero__container} ${style._container}`}>
                    <ContentTitle movies={movies} />
                </div>
                <SwiperMovie movies={movies} />
                <AddInfo showInfo={showInfo} setShowInfo={setShowInfo} />

            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Hero;