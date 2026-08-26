
import { useTranslation } from "react-i18next";
import '../../styles/Modal.css';

function CompanyDetails() {
  const { t } = useTranslation();

  const handleDownload = (fileName: string) => {
	const link = document.createElement("a");
	link.href = `/${fileName}`;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
  };

  return (
	<div className="modal__columns">
		<div className="modal__column">
			<div className="modal__title-footer">{t("Реквизиты компании")}</div>
			<div className="modal__grid">
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Полное наименование")}
				</div>
				<div className="element__info">
					{t("Общество с\u00A0ограниченной ответственностью «НИКТЕЛ»")}
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("ИНН")}
				</div>
				<div className="element__info">
					7730194369 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Юридический адрес")}*
				</div>
				<div className="element__info">
					{t("Россия, 121087\u00A0г.\u00A0Москва, ул.\u00A0Барклая, дом\u00A06, строение\u00A05, этаж\u00A05, комната\u00A022л")}
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("ОГРН")}
				</div>
				<div className="element__info">
					5157746309353 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Фактический адрес")}
				</div>
				<div className="element__info">
					{t("Россия, 121087\u00A0г.\u00A0Москва, ул.\u00A0Барклая, дом\u00A06, строение\u00A05, этаж\u00A05, комната\u00A022л")}
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("КПП")}
				</div>
				<div className="element__info">
					773001001 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Телефон / Факс")}
				</div>
				<div className="element__info">
					+7 (499) 281-55-35 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("ОКВЭД")}
				</div>
				<div className="element__info">
					72.10 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Email")}
				</div>
				<div className="element__info">
					team@niktel.ru 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("ОКПО")}
				</div>
				<div className="element__info">
					46514483 
				</div>
			</div>
		</div>

			<div className="modal__additional">
				{t("*Адрес который необходимо указывать в\u00A0строках товарной накладной и\u00A0счета-фактуры «Адрес Грузополучателя» и\u00A0«Адрес Плательщика»")}
			</div>
		</div>

		<div className="modal__column">
			<div className="modal__title-footer">{t("IT аккредитация")}</div>
			<div className="modal__grid-2">
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Коды видов деятельности в\u00A0области ИТ")}*
				</div>
				<div className="element__info">
					1.01, 1.02, 1.06, 1.07, 27.01, 2.01, 4.01, 6.01, 28.01, 11.01, 11.03, 11.02 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Стоимость услуг")}
				</div>
				<div className="element__info">
					{t("Стоимость решений и\u00A0услуг формируется индивидуально по\u00A0запросу клиента.")}
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Базы данных, системы, сервисы")}
				</div>
				<div className="element__info">
					ClickHouse, Keycloak, KeyDB, PostgreSQL, RabbitMQ, team@niktel.ru 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					{t("Языки и\u00A0технологии")}
				</div>
				<div className="element__info">
					C, C++, Go, Java, JavaScript, JavaScript (Ember.js) / Ember.js, Jinja, Makefile, OCaml, Python, Ruby, Rust, Shell, TypeScript 
				</div>
			</div>
		</div>
			<div className="modal__additional">{t("*Приказ Минцифры от\u00A011.05.2023 г. № 449")}</div>
		</div>

		<div className="modal__download">
			<button className="modal__download-btn" onClick={() => handleDownload("Niktel.pdf")}>{t("Скачать в")} PDF</button>
			<button className="modal__download-btn" onClick={() => handleDownload("Nitel.docx")}>{t("Скачать в")} DOC</button>
		</div>
	</div>
  )
}

export default CompanyDetails