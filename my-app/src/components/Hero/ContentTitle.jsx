import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import DescriptionMovie from './DescriptionMovie' 

const ContentTitle = ({movies}) => {
    return (
        <div className={style.contentTitle}>
            <div className={style.contentTitle__seriesBlock}>
                <img src={Preview} alt="" />
                SERIES
            </div>
            <div className={style.contentTitle__title}>
                Lucifer
                {/* {movies[0].title} */}
            </div>
            <DescriptionMovie />
        </div>
    )
}

export default ContentTitle;