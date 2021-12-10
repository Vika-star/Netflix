import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import DescriptionMovie from './DescriptionMovie' 

const ContentTitle = ({movieDescription}) => {
    return (
        <div className={style.contentTitle}>
            <div className={style.contentTitle__seriesBlock}>
                <img src={Preview} alt="" />
                MOVIE
            </div>
            <div className={style.contentTitle__title}>
                {movieDescription.title}
            </div>
            <DescriptionMovie 
            movieDescription={movieDescription} 
            />
        </div>
    )
}

export default ContentTitle;