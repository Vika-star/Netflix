import style from './style.module.scss';
import MoviesSwiper from './MoviesSwiper';



const Movies = ({ title, movies}) => {

    return movies && (
        <div className={style.movies}>
            <div className={style.movies__container}>
                <div className={style.movies__title}>
                    {title}
                </div>
                <div className={style.movies__swiper}>
                    <MoviesSwiper movies={movies}></MoviesSwiper>
                </div>
            </div>
        </div>
    );
}

export default Movies