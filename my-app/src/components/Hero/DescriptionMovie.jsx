import style from './style.module.scss';
import { ReactComponent as AdSvg } from '../../icons/ad.svg';


const DescriptionMovie = ({ movieDescription }) => {

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