import { useEffect, useRef, useState } from 'react';
import '../styles/Partners.css';
import { useTranslation } from "react-i18next";
import softline from '../assets/images/logos/softline.png';
import gpb from '../assets/images/logos/gpb.png';
import dell from '../assets/images/logos/dell.png';
import checkpoint from '../assets/images/logos/checkpoint.png';
import school from '../assets/images/logos/school.svg';
import citrix from '../assets/images/logos/citrix.png';
import mountain from '../assets/images/logos/mountain.svg';
import vmware from '../assets/images/logos/vmware.png';
import mikrotik from '../assets/images/logos/mikrotik.png';
import uranium1 from '../assets/images/logos/uranium1.png';

const partners = [
	{ src: softline, alt: 'Партнер 1', href: 'https://softlinegroup.com/' },
	{ src: gpb, alt: 'Партнер 2', href: 'https://raktiv.ru/' },
	{ src: dell, alt: 'Партнер 3', href: 'https://www.dell.com/' },
	{ src: checkpoint, alt: 'Партнер 4', href: 'https://www.checkpoint.com/' },
	{ src: school, alt: 'Партнер 5', href: 'https://britishdesign.ru/' },
	{ src: citrix, alt: 'Партнер 6', href: 'https://www.citrix.com/' },
	{ src: mountain, alt: 'Партнер 7', href: 'https://www.tgc.ru/' },
	{ src: vmware, alt: 'Партнер 8', href: 'https://www.vmware.com/' },
	{ src: mikrotik, alt: 'Партнер 9', href: 'https://mikrotik.com/' },
	{ src: uranium1, alt: 'Партнер 10', href: 'https://www.uranium1.com/ru/' },
];

function Partners() {
	const { t } = useTranslation();
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
			{ threshold: 0.2 }
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, [isVisible]);

	return (
		<section ref={sectionRef} className="partners" id="partners">
			<div className="partners__title">{t("Наши партнеры и клиенты")}</div>
			<div className="partners__list">
				<div className="wrapper">
					<div className="partners__grid">
						{partners.map((partner, index) => (
							<a
								href={partner.href}
								target='_blank'
								className={`partners__link ${isVisible ? 'is-visible' : ''} ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
								style={{ transitionDelay: `${index * 80}ms` }}
								key={partner.alt}
							>
								<img src={partner.src} alt={partner.alt} className="partners__image" />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partners