import '../../styles/Modal.css'
import { useTranslation } from "react-i18next";

function SoftwareDeveloping() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Разработка ПО")}</div>
		<div className="modal__description">
			{t("Организация команды эксплуатации/технической поддержки информационной системы (ИС, Продукт), включая:")}
		</div>
		<ul className="modal__list">
			<li className="modal__list-item">
				{t("организация мониторинга Продукта и\u00A0оповещения специалистов о\u00A0сбоях")}
			</li>
			<li className="modal__list-item">
				{t("управление командой специалистов при\u00A0решении инцидентов работы системы на\u00A0нескольких стендах (например DEV, QAS, PROD), выбор оптимальных конфигураций стендов")}
			</li>
			<li className="modal__list-item">
				{t("внедрение релизной политики, управление выводом доработок и\u00A0релизов в\u00A0продуктив")}
				</li>
			<li className="modal__list-item">
				{t("работа нескольких команд (инженеры по\u00A0инфраструктуре, разработчики, тестировщики) с\u00A0изменениями")}
			</li>
		</ul>
		<div className="modal__description" style={{marginTop: '20px'}}>
			{t("Концептуальная разработка")}
		</div>
		<ul className="modal__list">
			<li className="modal__list-item">
				{t("анализ бизнес\u2011процессов, определение концепции и\u00A0стратегии развития ИТ")}
			</li>
			<li className="modal__list-item">
				{t("создание концепций и\u00A0программ развития ИТ")}
			</li>
		</ul>
	</>
  )
}

export default SoftwareDeveloping