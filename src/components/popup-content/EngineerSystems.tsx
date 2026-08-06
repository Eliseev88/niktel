import '../../styles/Modal.css';
import { useTranslation } from "react-i18next";

function EngineerSystems() {
  const { t } = useTranslation();
  return (
	<>
		<div className="modal__title">{t("Инженерные системы")}</div>
		<div className="modal__description">{t("Полный комплекс услуг")}</div>
		<div className="modal__text">
			{t("Мы умеем проектировать и строить структурированные кабельные системы, подбирая поставщиков компонент в соответствии с бюджетом Заказчика. AMP Siemon, Legrand и не только. Умеем модернизировать существующие системы, дорабатывая их под изменившиеся нужды Заказчика. Если вам нужны решения в области контроля доступа — мы можем предложить комплексное решение, интегрированное с системой двухфакторной аутентификации для доступа к ИТ инфраструктуре.")}
		</div>
	</>
  )
}

export default EngineerSystems;
