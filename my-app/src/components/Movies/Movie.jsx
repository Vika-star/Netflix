import style from './style.module.scss';

const Movie = ({ movie, setShowPopup }) => {

    return (
        <div className={style.movie}>
            <div className={style.movie__content}>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""
                    className={style.movie__img}
                    onClick={() => { setShowPopup(movie.id) }} />
                    <div className={style.movie__line}></div>
                    <div className={style.movie__title}>
                        {movie.title}
                    </div>
            </div>
        </div>
    )
}


export default Movie;