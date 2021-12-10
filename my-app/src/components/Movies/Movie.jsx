import style from './style.module.scss';

const Movie = ({ movie, setShowPopup }) => {

    return (
        <div className={style.movie}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt=""
                className={style.movie__img}
                onClick={() => { setShowPopup(movie.id) }} />
        </div>
    )
}


export default Movie;