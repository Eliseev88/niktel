import '../../styles/Modal.css';
import { useTranslation } from "react-i18next";

function SystemIntegration() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Системная интеграция")}</div>
		<div>
			<div className="modal__description">
				{t("Проектирование и внедрение информационных систем с созданием программно-аппаратного комплекса (ПАК) от уровня отдельной информационной системы до уровня ЦОД в целом")}
			</div>
			<ul className="modal__list">
				<li className="modal__list-item">{t("системы серверной виртуализации")}</li>
				<li className="modal__list-item">{t("решения по виртуализации рабочих мест (VDI)")}</li>
				<li className="modal__list-item">{t("обеспечение гарантированной отказоустойчивости приложений — репликация данных, резервный ЦОД, распределенный ЦОД — разработка архитектуры, подбор технологий, сравнительный анализ технических решений")}</li>
				<li className="modal__list-item">{t("системы обеспечения отказоустойчивости")}</li>
				<li className="modal__list-item">{t("создание архитектуры систем, обеспечивающих работу с высокой нагрузкой")}</li>
			</ul>
			<div className="modal__container">
				<div className="modal__item">
					<div className="modal__description">{t("Перенос данных из облачной инфраструктуры в частную")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("разработка и создание частного облака")}</li>
						<li className="modal__list-item">{t("разработка методики переноса, в том числе для решений, не подразумевающих возможность обратной миграции (например — Symantec Cloud)")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Переезд ЦОД, включая:")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("управление проектом по переезду")}</li>
						<li className="modal__list-item">{t("техническая организация плановых работ и решения инцидентов группой инженеров, участвующих в проекте")}</li>
						<li className="modal__list-item">{t("оптимизация ЦОД в ходе переезда")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Поддержка Заказчика на этапе Закупок")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("разработка технических заданий и комплектов документов для проведения Закупок (в соответствии с корпоративными требованиями или 223ФЗ, 44ФЗ)")}</li>
						<li className="modal__list-item">{t("сопровождение закупочных процедур")}</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">{t("Оптимизация ресурсов ЦОД")}</div>
					<ul className="modal__list">
						<li className="modal__list-item">{t("аудит ЦОД, разработка рекомендаций по оптимизации")}</li>
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