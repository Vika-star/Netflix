import style from './style.module.scss';
import ContentTitle from './ContentTitle';
import AddInfo from './AddInfo';
import SwiperMovie from './SwiperMovie'
import { useState } from 'react';



const Hero = ({ movies, randomMovie }) => {
    const [showInfo, setShowInfo] = useState('false');


    // if (movies.length > 0) {

    return (
        randomMovie &&
        <div className={style.hero} style={{

            backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`
        }}>
            <div className={`${style.hero__container} ${style._container}`}>
                <ContentTitle movies={movies} />
            </div>
            <SwiperMovie movies={movies} />
            <AddInfo showInfo={showInfo} setShowInfo={setShowInfo} />

        </div>

    )
    // }
    // return (
    //     <div></div>
    // )
}

export default Hero;