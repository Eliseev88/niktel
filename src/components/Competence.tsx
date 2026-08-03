import { useEffect, useRef, useState } from 'react';
import '../styles/Competence.css';
import system from '../assets/icons/integration.svg';
import engineer from '../assets/icons/engineer.svg';
import security from '../assets/icons/security.svg';
import developing from '../assets/icons/developing.svg';

const competenceItems = [
	{ src: system, alt: 'Системная интеграция', type: 'Системная интеграция', description: 'Строим целую ИТ‑инфраструктуру под ключ' },
	{ src: engineer, alt: 'Инженерные системы', type: 'Инженерные системы', description: 'Проектируем и&nbsp;монтируем структурированные кабельные системы (СКС)' },
	{ src: security, alt: 'Информационная безопасность', type: 'Информационная безопасность', description: 'Аудируем инфраструктуру и&nbsp;информационную безопасность' },
	{ src: developing, alt: 'Разработка ПО', type: 'Разработка <br />ПО', description: 'Создание и&nbsp;развитие службы эксплуатации и&nbsp;технической поддержки' },
];

function Competence() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

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

	return (
		<section ref={sectionRef} className="competence" id="competence">
			<div className="competence__header">
				<div className="wrapper">
					<div className="competence__title">Наши компетенции для решения Ваших задач</div>
					<div className="competence__subtitle">Работаем в&nbsp;соответствии с&nbsp;мировыми стандартами</div>
				</div>
			</div>
			<div className="competence__content">
				<div className="wrapper">
					<div className="competence__container">
						{competenceItems.map((item, index) => (
							<div className="competence__item" key={item.alt}>
								<div className="competence__type" dangerouslySetInnerHTML={{ __html: item.type }} />
								<button className="competence__btn">Узнать больше</button>
								<div
								className="competence__icon-wrp">
									<div className={`${isVisible ? 'competence__icon--animated' : ''}`}
										style={{ animationDelay: `${index * 120}ms` }}>
										<img
											src={item.src}
											alt={item.alt}
											className="competence__icon"
										/>
									</div>
								</div>
								<div className="competence__description" dangerouslySetInnerHTML={{ __html: item.description }} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Competence