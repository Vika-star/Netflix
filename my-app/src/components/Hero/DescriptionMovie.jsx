import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import { ReactComponent as AdSvg } from '../../icons/ad.svg';


const DescriptionMovie = (randomMovie) => {
    
    return (
        <div className={style.descriptionMovie}>
            <div className={style.descriptionMovie__year}>
                {``}
            </div>
            <div className={style.descriptionMovie__old}>
                16+
            </div>
            <div className={style.descriptionMovie__countSeason}>
                3 season
            </div>
            <div className={style.descriptionMovie__quality}>
                hd
            </div>
            <div className={style.descriptionMovie__ad}>
                <AdSvg />
            </div>
        </div>
    )
}

export default DescriptionMovie;