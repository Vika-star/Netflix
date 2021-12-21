import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import style from './style.module.scss'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.preloader__block}>
                <CircularProgress color="#FF0000" className={style.preloader__circle}/>
            </div>
        </div>
    )
}
export default Preloader;