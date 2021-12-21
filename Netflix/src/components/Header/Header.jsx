import { ReactComponent as LogoSvg } from '../../icons/logoNetflix.svg';
import { ReactComponent as SearchSvg } from '../../icons/searchIcon.svg';
import { useCallback, useState } from 'react';
import style from './style.module.scss';

import Menu from './Menu';
import BurgerMenu from './BurgerMenu';

const Header = () => {

  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const titlesMenu = [{ name: "Popular", link: "#popularSection" },
  { name: "Netflix Original", link: "#netflixSection" }]

  return (
    <header className={style.header}>
      <div className={`${style.header__container} ${style._container}`}>

        <div className={style.header__menu}>
          <BurgerMenu open={open} setOpen={openMenu} />
          <Menu titles={titlesMenu} open={open} />
        </div>

        <div className={style.header__logo}>
          <LogoSvg />
        </div>

        <div className={style.header__search}>
          <SearchSvg />
        </div>

      </div>
    </header>
  );

}

export default Header;