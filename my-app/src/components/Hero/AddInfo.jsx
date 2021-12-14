import style from './style.module.scss';

import { ReactComponent as InfoSvg } from '../../icons/info.svg';
import { ReactComponent as LikeSvg } from '../../icons/like.svg';
import { ReactComponent as DislikeSvg } from '../../icons/dislike.svg';
import { ReactComponent as PlusSvg } from '../../icons/plus.svg';


const AddInfo = ({movieDescription }) => {
    return (
        <div className={style.addInfo}>

            <div className={style.addInfo__icons}>
                <button className={style.addInfo__button}><PlusSvg /></button>
            </div>
            <div className={style.addInfo__icons}>
                <button className={style.addInfo__button}><DislikeSvg /></button>
            </div>
            <div className={style.addInfo__icons}>
                <button className={style.addInfo__button}><LikeSvg /></button>
            </div>
            <div className={`${style.addInfo__info} ${style.addInfo__icons}`}>
                <button className={style.addInfo__button}><InfoSvg /></button>
            </div>
            <span className={style.addInfo__old_before}></span>
            <div className={style.addInfo__old}>
                {movieDescription}
            </div>
        </div>
    );
}

export default AddInfo;