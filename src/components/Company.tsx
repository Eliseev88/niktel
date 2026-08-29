import '../styles/Company.css'
import data from '../assets/images/data.webp'
import IT from '../assets/images/IT.webp'
import project from '../assets/images/projects.webp'
import project_resized from '../assets/images/projects_resized.webp'
import { useTranslation } from "react-i18next";

function Company() {
  const { t } = useTranslation();

  return (
	<section className="company">
		<div className="company__header">
			<div className="wrapper">
				<div className="company__title">{t("Уже 11\u00A0лет мы\u00A0растём и\u00A0развиваемся вместе с\u00A0нашими клиентами")}</div>
				<div className="company__subtitle">{t("Мы\u00A0делаем сложные системы простыми и\u00A0удобными для Заказчика и\u00A0без бюрократии")}</div>
			</div>
		</div>
		<div className="company__content">
			<div className="wrapper">
				<div className="company__mobile-header">
					<div className="company__title">{t("Уже 11\u00A0лет мы\u00A0растём и\u00A0развиваемся вместе с\u00A0нашими клиентами")}</div>
					<div className="company__subtitle">{t("Мы\u00A0делаем сложные системы простыми и\u00A0удобными для Заказчика и\u00A0без бюрократии")}</div>
				</div>
				<div className="company__container">
					<div className="company__item">
						<img src={data} alt="Data" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Big Data")}</div>
							<div className="company__item-subtitle">{t("Внедрение, сопровождение и\u00A0глубокая аналитика данных. Реализуем полный цикл работ с\u00A0большими данными.")}</div>
						</div>
					</div>
					<div className="company__item">
						<img src={IT} alt="IT" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Ваш проводник в\u00A0мире ИТ")}</div>
							<div className="company__item-subtitle">{t("Построим для\u00A0Вас ИТ\u2011инфраструктуру любого масштаба с\u00A0использованием самых современных технологий.")}</div>
						</div>
					</div>
					<div className="company__item">
						<img src={project} alt="project" className="company__item-img company__item-img--desktop" />
						<img src={project_resized} alt="project" className="company__item-img company__item-img--mobile" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Проекты по\u00A0всему миру")}</div>
							<div className="company__item-subtitle">{t("Благодаря накопленному опыту наши специалисты готовы реализовывать проекты в\u00A0любой точке земного шара.")}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  )
}

export default Company