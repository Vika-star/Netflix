import style from './style.module.scss';
import { ReactComponent as AdSvg } from '../../icons/ad.svg';
import { useContext } from 'react';
import HeroMovieDescriptiomContext from '../Context/HeroMovieDescriptionContext';


const DescriptionMovie = () => {
    const movieDescription = useContext(HeroMovieDescriptiomContext);
    return (
        <div className={style.descriptionMovie}>
            <div className={style.descriptionMovie__year}>
                {movieDescription.releaseDate}
            </div>
            <div className={style.descriptionMovie__quality}>
                hd
            </div>
            <div className={style.descriptionMovie__countSeason}>
                Mark: {movieDescription.voteAverage}
            </div>
            <div className={style.descriptionMovie__ad}>
                <AdSvg />
            </div>
        </div>
    )
}

export default DescriptionMovie;