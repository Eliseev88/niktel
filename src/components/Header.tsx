import '../styles/Header.css';
import LOGO from '../assets/icons/niktel.svg';
import { useTranslation } from "react-i18next";
import LangSwitcher from './LangSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrp">
          <a className="header__link-logo" href="/">
            <img src={LOGO} alt="Niktel Logo" className='header__logo' />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__element">
                <a href="#company" className="link">
                  {t("О компании")}
                </a>
              </li>
              <li className="nav__element">
                <a href="#partners" className="link">
                  {t("Наши партнеры и клиенты")}
                </a>
              </li>
              <li className="nav__element">
                <a href="#competence" className="link">
                  {t("Наши компетенции")}
                </a>
              </li>
              <li className="nav__element">
                <a href="#contacts" className="link">
                  {t("Контакты")}
                </a>
              </li>
            </ul>
          </nav>
          <a href="tel:+74992815535" className="link link--phone">+7 (499) 281-55-35</a>
          {/* <LangSwitcher /> */}
        </div>
      </div>
    </header>
  )
}

export default Header