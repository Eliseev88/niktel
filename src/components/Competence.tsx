import { useEffect, useRef, useState } from 'react';
import '../styles/Competence.css';
import { useTranslation } from "react-i18next";
import system from '../assets/icons/integration.svg';
import engineer from '../assets/icons/engineer.svg';
import security from '../assets/icons/security.svg';
import developing from '../assets/icons/developing.svg';
import SystemIntegration from './popup-content/SystemIntegration.tsx';
import EngineerSystems from './popup-content/EngineerSystems.tsx';
import InfoSecurity from './popup-content/InfoSecurity.tsx';
import SoftwareDeveloping from './popup-content/SoftwareDeveloping.tsx';
import Popup from './Popup.tsx';

const competenceItems = [
	{ component: SystemIntegration, src: system, alt: 'Системная интеграция', type: 'Системная интеграция', description: 'Строим целую ИТ‑инфраструктуру <br> под ключ' },
	{ component: EngineerSystems, src: engineer, alt: 'Инженерные системы', type: 'Инженерные системы', description: 'Проектируем и монтируем структурированные кабельные системы (СКС)' },
	{ component: InfoSecurity, src: security, alt: 'Информационная безопасность', type: 'Информационная безопасность', description: 'Аудируем инфраструктуру и информационную безопасность' },
	{ component: SoftwareDeveloping, src: developing, alt: 'Разработка ПО', type: 'Разработка <br />ПО', description: 'Создание и развитие службы эксплуатации и технической поддержки' },
];

function Competence() {
	const { t } = useTranslation();
	const sectionRef = useRef<HTMLElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [activeItem, setActiveItem] = useState<(typeof competenceItems)[number] | null>(null);

	const handleClick = (item: (typeof competenceItems)[number]) => {
		setActiveItem(item);
	};

	const handleBack = () => {
		setActiveItem(null);
	};

	useEffect(() => {
		const handler = (e: Event) => {
			const { type } = (e as CustomEvent).detail || {};
			const match = competenceItems.find((item) => item.type.includes(type));
			if (match) setActiveItem(match);
		};
		window.addEventListener('competence:open', handler);
		return () => window.removeEventListener('competence:open', handler);
	}, []);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, [isVisible]);

	if (activeItem) {
		const ActiveContent = activeItem.component;

		return (
			<section ref={sectionRef} className="competence" id="competence">
				<Popup
					title={t("Наши компетенции для решения Ваших задач")}
					subtitle={t("Работаем в соответствии с мировыми стандартами")}
					description={<ActiveContent />}
					onBack={handleBack}
				/>
			</section>
		);
	}

	return (
		<section ref={sectionRef} className="competence" id="competence">
			<div className="competence__header">
				<div className="wrapper">
					<div className="competence__title">{t("Наши компетенции для решения Ваших задач")}</div>
					<div className="competence__subtitle">{t("Работаем в соответствии с мировыми стандартами")}</div>
				</div>
			</div>
			<div className="competence__content">
				<div className="wrapper">
					<div className="competence__container">
						{competenceItems.map((item, index) => (
							<div className="competence__item" key={item.alt}>
								<div className="competence__type" dangerouslySetInnerHTML={{ __html: t(item.type) }} />
								<button className="competence__btn" onClick={() => handleClick(item)}>{t("Узнать больше")}</button>
								<div className="competence__icon-wrp">
									<div className={`${isVisible ? 'competence__icon--animated' : ''}`} style={{ animationDelay: `${index * 120}ms` }}>
										<img
											src={item.src}
											alt={item.alt}
											className="competence__icon"
										/>
									</div>
								</div>
								<div className="competence__description" dangerouslySetInnerHTML={{ __html: t(item.description) }} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Competence