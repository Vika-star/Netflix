import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { ReactComponent as CloseSvg } from '../../icons/close.svg';
import MovieDescription from './MovieDescription';
import MovieAdditional from './MovieAdditional';

const MoviePopUp = ({ popupData, setShowPopup }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
            const movieKey = await axios.get(`https://api.themoviedb.org/3/movie/${popupData.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
            movieData.data.key = movieKey.data.results[0].key;
            setMovie(movieData.data);
        }
        fetchMovieData();
    }, []);


    return movie && (
        <div className={style.popup}>
            <div className={style.popup__content}>
                <div className={style.popup__close}><CloseSvg onClick={setShowPopup} /></div>
                <div className={style.popup__left}>
                    <MovieAdditional movie={movie} />
                </div>
                <div className={style.popup__right}>
                    <MovieDescription movie={movie}/>
                </div>
                {/* <div>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> */}
            </div>

        </div>
    )
}

export default MoviePopUp;