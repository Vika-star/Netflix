import style from './style.module.scss';
import classNames from 'classnames';

const Menu = ({ titles, open }) => {

    return (
        <div className={classNames(style.menu__body, open ? style._active : "")} open={open} >
            <ul className={style.menu__list} >
                {
                    titles.map((titleItem, idx) => <li key={idx}><a href={titleItem.link} className={style.menu__link} >{titleItem.name}</a></li>)
                }
            </ul>
        </div>
    );

}

export default Menu;