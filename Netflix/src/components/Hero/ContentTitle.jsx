import style from './style.module.scss';

import Preview from '../../icons/logoPreview.png';
import DescriptionMovie from './DescriptionMovie' 
import { useContext } from 'react';
import HeroMovieDescriptiomContext from '../Context/HeroMovieDescriptionContext';

const ContentTitle = () => {
    const movieDescription = useContext(HeroMovieDescriptiomContext);
    
    return (
        <div className={style.contentTitle}>
            <div className={style.contentTitle__seriesBlock}>
                <img src={Preview} alt="" />
                MOVIE
            </div>
            <div className={style.contentTitle__title}>
                {movieDescription.title}
            </div>
            <DescriptionMovie/>
        </div>
    )
}

export default ContentTitle;