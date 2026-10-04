import '../styles/Approach.css';
import { useTranslation } from "react-i18next";

const steps = [
	"Обследование существующей инфраструктуры",
	"Разработка технического решения",
	"Поставка оборудования",
	"Внедрение и\u00A0настройка",
	"Тестирование",
	"Техническая поддержка",
];

function Approach() {
	const { t } = useTranslation();

	return (
		<section className="approach" id="approach">
			<div className="approach__header">
				<div className="wrapper">
					<div className="approach__title">{t("Наш подход")}</div>
					<div className="approach__subtitle">
						{t("Мы\u00A0рассматриваем ИТ не\u00A0как отдельный набор оборудования и\u00A0программных продуктов, а\u00A0как единую технологическую систему, непосредственно связанную с\u00A0задачами бизнеса.")}
					</div>
				</div>
			</div>
			<div className="approach__content">
				<div className="wrapper">
					<div className="approach__card">
						<p className="approach__text">
							{t("При реализации проектов специалисты НИКТЕЛ учитывают существующую инфраструктуру заказчика, требования информационной безопасности, перспективы масштабирования и\u00A0особенности эксплуатации. Такой подход позволяет создавать решения, которые остаются надежными и\u00A0управляемыми на\u00A0протяжении всего жизненного цикла.")}
						</p>
						<div className="approach__steps-title">{t("НИКТЕЛ реализует комплексные проекты")}</div>
						<ol className="approach__steps">
							{steps.map((step, index) => (
								<li className="approach__step" key={step}>
									<span className="approach__step-number">{index + 1}</span>
									<span className="approach__step-text">{t(step)}</span>
								</li>
							))}
						</ol>
					</div>
					<div className="approach__slogan">
						{t("НИКТЕЛ — технологии, которые помогают бизнесу работать стабильно, безопасно и\u00A0эффективно.")}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Approach
