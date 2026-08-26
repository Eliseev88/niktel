import '../../styles/Modal.css';
import { useTranslation } from "react-i18next";

function InfoSecurity() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Информационная безопасность")}</div>
		<div className="modal__description">{t("Проведение аудита ИТ и\u00A0ИБ")}</div>
		<ul className="modal__list">
			<li className="modal__list-item">{t("инструментальный сбор информации, анкетирование, интервьюирование")}</li>
			<li className="modal__list-item">{t("проведение тестирования на\u00A0проникновение")}</li>
			<li className="modal__list-item">{t("анализ выполнения требований регуляторов")}</li>
			<li className="modal__list-item">{t("помощь в\u00A0создании внутренних регламентирующих документов Заказчика, разработка политик в\u00A0области ИТ и\u00A0ИБ")}</li>
		</ul>
	</>
  )
}

export default InfoSecurity