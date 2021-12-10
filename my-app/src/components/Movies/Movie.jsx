import style from './style.module.scss';

const Movie = ({movie}) =>{

    return(
        <div className={style.movie}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="" className={style.movie__img}/>
        </div>
    )
}


export default Movie;