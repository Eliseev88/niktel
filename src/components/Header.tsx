import { useEffect, useState } from "react";
import '../styles/Header.css';
import LOGO from '../assets/icons/niktel.svg';
import BURGER from '../assets/icons/burger.svg';
import BURGER_CLOSED from '../assets/icons/burger_closed.svg';
import { useTranslation } from "react-i18next";
import LangSwitcher from './LangSwitcher';

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 1220px)").matches);

  useEffect(() => {
	const mq = window.matchMedia("(max-width: 1220px)");
	const handleChange = (e: MediaQueryListEvent) => {
		setIsMobile(e.matches);
		if (!e.matches) setIsMenuOpen(false);
	};
	mq.addEventListener("change", handleChange);
	return () => mq.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navList = (
	<ul className="nav__list">
		<li className="nav__element">
			<a href="#company" className="link" onClick={closeMenu}>
				{t("О компании")}
			</a>
		</li>
		<li className="nav__element">
			<a href="#partners" className="link" onClick={closeMenu}>
				{t("Наши партнеры и клиенты")}
			</a>
		</li>
		<li className="nav__element">
			<a href="#competence" className="link" onClick={closeMenu}>
				{t("Наши компетенции")}
			</a>
		</li>
		<li className="nav__element">
			<a href="#contacts" className="link" onClick={closeMenu}>
				{t("Контакты")}
			</a>
		</li>
	</ul>
  );

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrp">
          <a className="header__link-logo" href="/">
            <img src={LOGO} alt="Niktel Logo" className='header__logo' />
          </a>
          <nav className="nav">
            {navList}
          </nav>
          <a href="tel:+74992815535" className="link link--phone">+7 (499) 281-55-35</a>
          {!isMobile && <LangSwitcher />}
          <button
            className="header__burger"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <img
              src={isMenuOpen ? BURGER_CLOSED : BURGER}
              alt="Menu"
              className={`header__burger-icon ${isMenuOpen ? 'header__burger-icon--closed' : ''}`}
            />
          </button>
        </div>

        {isMobile && isMenuOpen && (
          <div className="header__menu">
            <nav className="nav">
              {navList}
            </nav>
            <LangSwitcher className="header__menu-lang" />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header