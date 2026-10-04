import '../styles/Directions.css';
import { useTranslation } from "react-i18next";

const directions = [
	{
		title: "ИТ\u2011инфраструктура и\u00A0системная интеграция",
		text: "Проектирование и\u00A0модернизация серверной, сетевой и\u00A0вычислительной инфраструктуры предприятий.",
	},
	{
		title: "Корпоративные сети",
		text: "Построение локальных и\u00A0распределенных вычислительных сетей, организация защищенного взаимодействия между офисами и\u00A0территориально распределенными объектами.",
	},
	{
		title: "Информационная безопасность",
		text: "Внедрение решений для\u00A0защиты сетевой инфраструктуры, информационных систем и\u00A0корпоративных данных, включая межсетевые экраны нового поколения, системы предотвращения вторжений и\u00A0средства контроля доступа.",
	},
	{
		title: "Виртуализация и\u00A0серверная инфраструктура",
		text: "Создание и\u00A0модернизация виртуальных сред, серверных платформ и\u00A0систем хранения данных.",
	},
	{
		title: "Импортозамещение ИТ\u2011инфраструктуры",
		text: "Подбор, тестирование и\u00A0внедрение российских программных и\u00A0аппаратных решений с\u00A0учетом требований заказчика и\u00A0действующих нормативных требований.",
	},
	{
		title: "Автоматизация бизнес\u2011процессов",
		text: "Внедрение решений, позволяющих сократить количество ручных операций, повысить прозрачность процессов и\u00A0эффективность работы подразделений.",
	},
	{
		title: "Техническое сопровождение",
		text: "Поддержка ИТ\u2011инфраструктуры, диагностика неисправностей, модернизация существующих систем и\u00A0консультационная поддержка специалистов заказчика.",
	},
];

function Directions() {
	const { t } = useTranslation();

	return (
		<section className="directions" id="directions">
			<div className="directions__header">
				<div className="wrapper">
					<div className="directions__title">{t("Основные направления работы")}</div>
				</div>
			</div>
			<div className="directions__content">
				<div className="wrapper">
					<ul className="directions__grid">
						{directions.map((item, index) => (
							<li className="directions__item" key={item.title}>
								<span className="directions__number">{String(index + 1).padStart(2, '0')}</span>
								<div className="directions__item-title">{t(item.title)}</div>
								<p className="directions__item-text">{t(item.text)}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Directions
