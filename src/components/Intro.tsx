import '../styles/Intro.css';
import { useTranslation } from "react-i18next";

function Intro() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  return (
	<section id="intro" className={`intro${isEnglish ? ' intro--en' : ''}`}>
		<div className="intro__title">
			{t("Ваш проводник").split(" ").map((word, index, words) => (
				<span key={index}>
					{word}
					{index < words.length - 1 && <br />}
				</span>
			))}
		</div>
		<div className='intro__subtitle'>{t("в\u00A0мире IT")}</div>
		<p className="intro__text">
			{t("Разработаем и\u00A0внедрим IT-решения любого масштаба — от\u00A0локальной инфраструктуры небольшой команды до\u00A0распределённых систем крупного предприятия.")}
		</p>
	</section>
  )
}

export default Intro
