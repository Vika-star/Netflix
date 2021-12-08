import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import DescriptionMovie from './DescriptionMovie' 

const ContentTitle = ({randomMovie}) => {
    return (
        <div className={style.contentTitle}>
            <div className={style.contentTitle__seriesBlock}>
                <img src={Preview} alt="" />
                SERIES
            </div>
            <div className={style.contentTitle__title}>
                {randomMovie.title}
            </div>
            <DescriptionMovie 
            // randomMovie={randomMovie} 
            />
        </div>
    )
}

export default ContentTitle;