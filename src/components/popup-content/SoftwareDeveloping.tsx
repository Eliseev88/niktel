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
				{t("организация мониторинга Продукта и оповещения специалистов о сбоях")}
			</li>
			<li className="modal__list-item">
				{t("управление командой специалистов при решении инцидентов работы системы на нескольких стендах (например DEV, QAS, PROD), выбор оптимальных конфигураций стендов")}
			</li>
			<li className="modal__list-item">
				{t("внедрение релизной политики, управление выводом доработок и релизов в продуктив")}
				</li>
			<li className="modal__list-item">
				{t("работа нескольких команд (инженеры по инфраструктуре, разработчики, тестировщики) с изменениями")}
			</li>
		</ul>
		<div className="modal__description" style={{marginTop: '20px'}}>
			{t("Концептуальная разработка")}
		</div>
		<ul className="modal__list">
			<li className="modal__list-item">
				{t("анализ бизнес-процессов, определение концепции и стратегии развития ИТ")}
			</li>
			<li className="modal__list-item">
				{t("создание концепций и программ развития ИТ")}
			</li>
		</ul>
	</>
  )
}

export default SoftwareDeveloping