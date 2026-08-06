import { useRef, useState } from 'react';
import '../styles/Contacts.css';
import CompanyDetails from './popup-content/CompanyDetails';
import Popup from './Popup';
import { useTranslation } from "react-i18next";


function Contacts() {
	const { t } = useTranslation();
	const contactsRef = useRef<HTMLElement | null>(null);
	const [activeModal, setActiveModal] = useState<boolean>(false);

	const handleClick = () => {
		setActiveModal(true);
	};

	const handleBack = () => {
		setActiveModal(false);
	};

	if (activeModal) {
		return (
			<section ref={contactsRef} className="contacts" id="contacts">
				<Popup
					title={t("Контакты")}
					subtitle={t("Нужна консультация по ИТ-решению или инфраструктуре? Свяжитесь с нами — разберём кейс и дадим практические рекомендации")}
					description={<CompanyDetails />}
					onBack={handleBack}
				/>
			</section>
		);
	}

  return (
	<section className='contacts' id='contacts' ref={contactsRef}>
		<div className="contacts__header">
			<div className="wrapper">
				<div className="contacts__title">{t("Контакты")}</div>
				<div className="contacts__subtitle">
					{t("Нужна консультация по ИТ-решению или инфраструктуре? Свяжитесь с нами — разберём кейс и дадим практические рекомендации")}
				</div>
			</div>
		</div>
		<div className="contacts__content">
			<div className="wrapper">
				<div className="contacts__container">
					<div className="contacts__item">
						<div className="contacts__box">
							<div className="contacts__suptitle">{t("E-mail")}</div>
							<a className="link contacts__info" href="mailto:team@niktel.ru">team@niktel.ru</a>
						</div>
						<div className="contacts__box">
							<div className="contacts__suptitle">{t("Номер телефона")}</div>
							<a href="tel:+74992815535" className="link contacts__info">+7 (499) 281-55-35</a>
						</div>
						<div className="contacts__box">
							<div className="contacts__suptitle">{t("Адрес")}</div>
							<div className='contacts__info'>{t("121087 г. Москва, ул. Барклая, дом 6, строение 5, этаж 5, комната 22л")}</div>
						</div>
					</div>
					<div className="contacts__item">
						<div className="contacts__wrp">
							<div>
								<div className='contacts__text'>{t("Реквизиты компании и IT-аккредитация")}</div>
								<div className='contacts__paragraph'>{t("Здесь размещены необходимые реквизиты и данные, подтверждающие IT-аккредитацию")}</div>
							</div>
							<button className='contacts__btn' onClick={handleClick}>{t("Открыть")}</button>
						</div>
					</div>
					<div className="contacts__item">
						<div className="contacts__map">
							<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f9d7550791e7f6085de204ddfc840cbc415f41374f18b91b1989f75e3b3a981&amp;source=constructor" width="571" height="613" frameBorder="0"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Contacts