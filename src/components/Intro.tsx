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
		<div className='intro__subtitle'>{t("в\u00A0мире ИТ")}</div>
		<div className="intro__text">
			<p>{t("НИКТЕЛ — российская ИТ\u2011компания, специализирующаяся на\u00A0системной интеграции, информационной безопасности и\u00A0развитии корпоративной ИТ\u2011инфраструктуры.")}</p>
			<p>{t("Мы\u00A0проектируем, внедряем и\u00A0сопровождаем серверные и\u00A0сетевые решения, системы виртуализации, средства защиты информации и\u00A0инструменты автоматизации бизнес\u2011процессов.")}</p>
			<p>{t("Наша задача — создавать надежную, безопасную и\u00A0эффективную ИТ\u2011среду, которая соответствует текущим потребностям бизнеса и\u00A0готова к\u00A0дальнейшему развитию.")}</p>
		</div>
	</section>
  )
}

export default Intro
