import '../../styles/Modal.css';
import { useTranslation } from "react-i18next";

function SystemIntegration() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Системная интеграция")}</div>
		<div>
			<div className="modal__description">
				{t("Проектирование и\u00A0внедрение информационных систем с\u00A0созданием программно\u2011аппаратного комплекса (ПАК) от\u00A0уровня отдельной информационной системы до\u00A0уровня ЦОД в\u00A0целом")}
			</div>
			<ul className="modal__list">
				<li className="modal__list-item">{t("системы серверной виртуализации")}</li>
				<li className="modal__list-item">{t("решения по\u00A0виртуализации рабочих мест (VDI)")}</li>
				<li className="modal__list-item">{t("обеспечение гарантированной отказоустойчивости приложений — репликация данных, резервный ЦОД, распределенный ЦОД — разработка архитектуры, подбор технологий, сравнительный анализ технических решений")}</li>
				<li className="modal__list-item">{t("системы обеспечения отказоустойчивости")}</li>
				<li className="modal__list-item">{t("создание архитектуры систем, обеспечивающих работу с\u00A0высокой нагрузкой")}</li>
			</ul>
			<div className="modal__container">
				<div className="modal__item">
					<div className="modal__description">{t("Перенос данных из\u00A0облачной инфраструктуры в\u00A0частную")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("разработка и\u00A0создание частного облака")}</li>
						<li className="modal__list-item">{t("разработка методики переноса, в\u00A0том числе для\u00A0решений, не\u00A0подразумевающих возможность обратной миграции (например — Symantec Cloud)")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Переезд ЦОД, включая:")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("управление проектом по\u00A0переезду")}</li>
						<li className="modal__list-item">{t("техническая организация плановых работ и\u00A0решения инцидентов группой инженеров, участвующих в\u00A0проекте")}</li>
						<li className="modal__list-item">{t("оптимизация ЦОД в\u00A0ходе переезда")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Поддержка Заказчика на\u00A0этапе Закупок")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("разработка технических заданий и\u00A0комплектов документов для\u00A0проведения Закупок (в\u00A0соответствии с\u00A0корпоративными требованиями или 223ФЗ, 44ФЗ)")}</li>
						<li className="modal__list-item">{t("сопровождение закупочных процедур")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Оптимизация ресурсов ЦОД")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("аудит ЦОД, разработка рекомендаций по\u00A0оптимизации")}</li>
						<li className="modal__list-item">{t("управление выполнением рекомендаций")}</li>
						<li className="modal__list-item">{t("отчетность")}</li>
					</ul>
				</div>
			</div>
		</div>
	</>
  )
}

export default SystemIntegration