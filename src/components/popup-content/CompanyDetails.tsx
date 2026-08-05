
function CompanyDetails() {
  return (
	<>
		<div className="modal__title-footer">Реквизиты компании</div>
		<div className="modal__grid">
			<div className="modal__element">
				<div className="element__suptitle">
					Полное наименование
				</div>
				<div className="element__info">
					Общество с&nbsp;ограниченной ответственностью &laquo;НИКТЕЛ&raquo; 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					ИНН
				</div>
				<div className="element__info">
					7730194369 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Юридический адрес*
				</div>
				<div className="element__info">
					Россия, 121087 г. Москва, ул. Барклая, дом 6, строение 5, этаж 5, комната 22л 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					ОГРН
				</div>
				<div className="element__info">
					5157746309353 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Фактический адрес
				</div>
				<div className="element__info">
					Россия, 121087 г. Москва, ул. Барклая, дом 6, строение 5, этаж 5, комната 22л 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					КПП
				</div>
				<div className="element__info">
					773001001 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Телефон&nbsp;/ Факс
				</div>
				<div className="element__info">
					+7 (499) 281-55-35 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					ОКВЭД
				</div>
				<div className="element__info">
					72.10 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Email
				</div>
				<div className="element__info">
					team@niktel.ru 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					ОКПО
				</div>
				<div className="element__info">
					46514483 
				</div>
			</div>
		</div>

		<div className="modal__additional">
			*Адрес который необходимо указывать в&nbsp;строках товарной накладной и&nbsp;счета-фактуры &laquo;Адрес Грузополучателя&raquo; и&nbsp;&laquo;Адрес Плательщика&raquo;
		</div>

		<div className="modal__title-footer">IT аккредитация</div>
		<div className="modal__grid-2">
			<div className="modal__element">
				<div className="element__suptitle">
					Коды видов деятельности в&nbsp;области&nbsp;ИТ*
				</div>
				<div className="element__info">
					1.01, 1.02, 1.06, 1.07, 27.01, 2.01, 4.01, 6.01, 28.01, 11.01, 11.03, 11.02 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Стоимость услуг
				</div>
				<div className="element__info">
					Стоимость решений и&nbsp;услуг формируется индивидуально по&nbsp;запросу клиента. 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Базы данных, системы, сервисы
				</div>
				<div className="element__info">
					ClickHouse, Keycloak, KeyDB, PostgreSQL, RabbitMQ, team@niktel.ru 
				</div>
			</div>
			<div className="modal__element">
				<div className="element__suptitle">
					Языки и технологии
				</div>
				<div className="element__info">
					C, C++, Go, Java, JavaScript, JavaScript (Ember.js) / Ember.js, Jinja, Makefile, OCaml, Python, Ruby, Rust, Shell, TypeScript 
				</div>
			</div>
		</div>
		<div className="modal__additional">*Приказ Минцифры от&nbsp;11.05.2023&nbsp;г. &#8470;&nbsp;449</div>
	</>
  )
}

export default CompanyDetails