import '../styles/Intro.css';
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();

  return (
	<section id="intro" className="intro">
		<div className="intro__title">{t("Ваш проводник")}</div>
		<div className='intro__subtitle'>{t("в мире IT")}</div>
		<p className="intro__text">
			{t("Разработаем и внедрим IT-решения любого масштаба — от локальной инфраструктуры небольшой команды до распределённых систем крупного предприятия.")}
		</p>
	</section>
  )
}

export default Intro
