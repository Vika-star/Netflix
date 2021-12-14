import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import style from './style.module.scss'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <CircularProgress color="#FF0000" />
        </div>
    )
}
export default Preloader;