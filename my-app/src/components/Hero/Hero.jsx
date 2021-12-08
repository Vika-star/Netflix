import style from './style.module.scss';
import ContentTitle from './ContentTitle';
import AddInfo from './AddInfo';
import SwiperMovie from './SwiperMovie'
import { useEffect, useState } from 'react';
import axios from 'axios';



const Hero = ({ movies }) => {
    const [showInfo, setShowInfo] = useState(false);

    const getRandomMovie = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log("random get")
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [randomMovie] = useState(movies[getRandomMovie(0, movies.length - 1)]);

    const [movieDescription, setMovieDescription] = useState(null);




    useEffect(()=>{
        const fetchMovieDescription = async () =>{
            console.log("randomMovie", randomMovie.id);
            const randomMovieData = await axios.get(`https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${process.env.REACT_APP_API_KEY}`);
            console.log("randomMovieData", randomMovieData.data.id);
            setMovieDescription({
                id: randomMovieData.data.id,
                title: randomMovieData.data.title,
                releaseDate: randomMovieData.data['release_date'],
                overview: randomMovieData.data.overview
            });
        }
        fetchMovieDescription();
    }, [])

    
    return movieDescription && (
        <div className={style.hero} style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`
        }}>
            {/* {console.log("movies", movies)}  */}
            {console.log("rM", randomMovie)} 
            {console.log("mD", movieDescription)} 
            <div className={`${style.hero__container} ${style._container}`}>
                <ContentTitle 
                randomMovie={randomMovie} 
                />
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