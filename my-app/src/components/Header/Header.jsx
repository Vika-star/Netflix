import style from './style.module.scss';
import { ReactComponent as LogoSvg } from '../../icons/logoNetflix.svg';
import { ReactComponent as SearchSvg } from '../../icons/searchIcon.svg';
import { useEffect, useState } from 'react';


const Menu = ({ titles, open }) => {
  
  return (
    <div className={style.menu__body} open={open} >
      <ul className={style.menu__list} >
        {
          titles.map((titleItem) => <li key={titleItem.name}><a href={titleItem.link} className={style.menu__link} >{titleItem.name}</a></li>)
        }
      </ul>
    </div>
  );

}

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className={style.icon_menu} open={open} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);

  const titlesMenu = [{ name: "Popular", link: "#popularSection" },
  { name: "Netflix Original", link: "#netflixSection" }]

  handleClick = ()=>{

  }


  return (
    <header className={style.header}>
      <div className={`${style.header__container} ${style._container}`}>

        <div className={style.header__menu}>
          <BurgerMenu open={open} setOpen={setOpen} onClick={() => handleClick()} />
          <Menu titles={titlesMenu} open={open} setOpen={setOpen} />
        </div>

        <div className={style.header__logo}>
          <a href="../../../public/index.html">
            <LogoSvg />
          </a>
        </div>

        <div className={style.header__search}>
          <SearchSvg />
        </div>

      </div>
    </header>
  );

}

export default Header;