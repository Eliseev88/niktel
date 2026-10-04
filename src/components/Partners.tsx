import { useEffect, useRef, useState } from 'react';
import '../styles/Partners.css';
import { useTranslation } from "react-i18next";
import tenex from '../assets/images/logos/tenex.webp';
import rosenergoatom from '../assets/images/logos/rosenergoatom.webp';
import gpb from '../assets/images/logos/gpb.webp';
import uranium1 from '../assets/images/logos/uranium1.webp';
import school from '../assets/images/logos/school.svg';
import mountain from '../assets/images/logos/mountain.svg';
import ipsen from '../assets/images/logos/ipsen.svg';
import eabr from '../assets/images/logos/eabr.webp';
import checkpoint from '../assets/images/logos/checkpoint.svg';
import positive from '../assets/images/logos/positive.svg';
import orionsoft from '../assets/images/logos/orionsoft.svg';
import cyberprotect from '../assets/images/logos/cyberprotect.svg';
import trueconf from '../assets/images/logos/trueconf.svg';
import comptek from '../assets/images/logos/comptek.webp';
import bontel from '../assets/images/logos/bontel.webp';

// Items without `src` are rendered as a text tile with the company name.
type LogoItem = {
	name: string;
	src?: string;
	href?: string;
};

const clients: LogoItem[] = [
	{ name: 'TENEX', src: tenex, href: 'https://www.tenex.ru/' },
	{ name: 'Росэнергоатом', src: rosenergoatom, href: 'https://www.rosenergoatom.ru/' },
	{ name: 'ГПБ Развитие активов', src: gpb, href: 'https://raktiv.ru/' },
	{ name: 'Н2 Инвест' },
	{ name: 'BONTEL', src: bontel, href: 'https://bontel.ru/' },
	{ name: 'Uranium One Group', src: uranium1, href: 'https://www.uranium1.com/ru/' },
	{ name: 'Британская высшая школа дизайна', src: school, href: 'https://britishdesign.ru/' },
	{ name: 'Талдинская горная компания', src: mountain, href: 'https://www.tgc.ru/' },
	{ name: 'Ipsen', src: ipsen, href: 'https://www.ipsen.com/russia/' },
	{ name: 'Франко Сервис', href: 'http://francos.ru/' },
	{ name: 'Евразийский банк развития', src: eabr, href: 'https://eabr.org/' },
];

const partners: LogoItem[] = [
	{ name: 'Check Point', src: checkpoint, href: 'https://www.checkpoint.com/' },
	{ name: 'Positive Technologies', src: positive, href: 'https://www.ptsecurity.com/ru-ru/' },
	{ name: 'Orion soft', src: orionsoft, href: 'https://orionsoft.ru/' },
	{ name: 'Киберпротект', src: cyberprotect, href: 'https://cyberprotect.ru/' },
	{ name: 'TrueConf', src: trueconf, href: 'https://trueconf.ru/' },
	{ name: 'PROWAY' },
	{ name: 'КомпТек', src: comptek, href: 'https://www.comptek.ru/' },
	{ name: 'НАГ', href: 'https://nag.ru/' },
];

function LogoGroup({ title, items }: { title: string; items: LogoItem[] }) {
	const { t } = useTranslation();
	const groupRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const group = groupRef.current;
		if (!group) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(group);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="partners__group" ref={groupRef}>
			<div className="partners__group-title">{title}</div>
			<div className="partners__grid">
				{items.map((item, index) => {
					const className = `partners__link ${isVisible ? 'is-visible' : ''} ${index % 2 === 0 ? 'from-left' : 'from-right'}`;
					const style = { transitionDelay: `${index * 80}ms` };
					const content = item.src
						? <img src={item.src} alt={t(item.name)} className="partners__image" />
						: <span className="partners__name">{t(item.name)}</span>;

					return item.href ? (
						<a
							href={item.href}
							target='_blank'
							rel='noopener noreferrer'
							className={className}
							style={style}
							key={item.name}
						>
							{content}
						</a>
					) : (
						<div className={className} style={style} key={item.name}>
							{content}
						</div>
					);
				})}
			</div>
		</div>
	);
}

function Partners() {
	const { t } = useTranslation();

	return (
		<section className="partners" id="partners">
			<div className="partners__title">{t("Наши партнеры и клиенты")}</div>
			<div className="partners__list">
				<div className="wrapper">
					<div className="partners__mobile-title">{t("Наши партнеры и клиенты")}</div>
					<LogoGroup title={t("Клиенты")} items={clients} />
					<LogoGroup title={t("Партнеры")} items={partners} />
				</div>
			</div>
		</section>
	)
}

export default Partners
