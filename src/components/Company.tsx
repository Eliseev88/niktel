import '../styles/Company.css'
import data from '../assets/images/data.png'
import IT from '../assets/images/IT.png'
import project from '../assets/images/projects.jpg'
import { useTranslation } from "react-i18next";

function Company() {
  const { t } = useTranslation();

  return (
	<section className="company">
		<div className="company__header">
			<div className="wrapper">
				<div className="company__title">{t("Уже 11 лет мы растём и развиваемся вместе с нашими клиентами")}</div>
				<div className="company__subtitle">{t("Мы делаем сложные системы простыми и удобными для Заказчика и без бюрократии")}</div>
			</div>
		</div>
		<div className="company__content">
			<div className="wrapper">
				<div className="company__container">
					<div className="company__item">
						<img src={data} alt="Data" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Big Data")}</div>
							<div className="company__item-subtitle">{t("Внедрение, сопровождение и глубокая аналитика данных. Реализуем полный цикл работ с большими данными.")}</div>
						</div>
					</div>
					<div className="company__item">
						<img src={IT} alt="IT" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Ваш проводник в мире IT")}</div>
							<div className="company__item-subtitle">{t("Построим для Вас IT-инфраструктуру любого масштаба с использованием самых современных технологий.")}</div>
						</div>
					</div>
					<div className="company__item">
						<img src={project} alt="project" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">{t("Проекты по всему миру")}</div>
							<div className="company__item-subtitle">{t("Благодаря накопленному опыту наши специалисты готовы реализовывать проекты в любой точке земного шара.")}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  )
}

export default Company