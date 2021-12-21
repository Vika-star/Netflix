import style from './style.module.scss';
import classNames from 'classnames';

const BurgerMenu = ({ open, setOpen }) => {

    return (
        <div className={classNames(style.icon_menu, open ? style._active : "")} open={open} onClick={setOpen}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );

}
export default BurgerMenu;