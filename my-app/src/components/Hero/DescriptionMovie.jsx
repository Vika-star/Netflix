import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import { ReactComponent as AdSvg } from '../../icons/ad.svg';


const DescriptionMovie = ({ movieDescription }) => {

    // return movieDescription && (
    return (
        <div className={style.descriptionMovie}>
            <div className={style.descriptionMovie__year}>
                {console.log('release Date', typeof movieDescription.releaseDate)}
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