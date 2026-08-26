import '../../styles/Modal.css';
import { useTranslation } from "react-i18next";

function EngineerSystems() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Инженерные системы")}</div>
		<div className="modal__description">{t("Полный комплекс услуг")}</div>
		<div className="modal__text">
			{t("Мы умеем проектировать и\u00A0строить структурированные кабельные системы, подбирая поставщиков компонент в\u00A0соответствии с\u00A0бюджетом Заказчика. AMP Siemon, Legrand и\u00A0не только. Умеем модернизировать существующие системы, дорабатывая их под\u00A0изменившиеся нужды Заказчика. Если вам нужны решения в\u00A0области контроля доступа — мы можем предложить комплексное решение, интегрированное с\u00A0системой двухфакторной аутентификации для\u00A0доступа к\u00A0ИТ инфраструктуре.")}
		</div>
	</>
  )
}

export default EngineerSystems;
