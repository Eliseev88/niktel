import { useEffect, useRef, useState } from 'react';
import '../styles/Statistics.css';
import { useTranslation } from "react-i18next";
import { FOUNDATION_YEAR } from "../constants/company";

type StatisticsItem = {
	value: number;
	suffix: string;
	label: string;
	// A year counting up from 0 looks odd, so some values are shown as is
	animate?: boolean;
};

const statisticsData: StatisticsItem[] = [
	{ value: 100, suffix: '+', label: "Проектов завершено" },
	{ value: 10, suffix: '+', label: "Лет на\u00A0рынке" },
	{ value: FOUNDATION_YEAR, suffix: '', label: "Год основания", animate: false },
	{ value: 24, suffix: '/7', label: "Техническая поддержка" },
];

const countAt = (item: StatisticsItem, progress: number) =>
	item.animate === false ? item.value : Math.round(item.value * progress);

function Statisctics() {
	const { t } = useTranslation();
	const sectionRef = useRef<HTMLElement | null>(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const [counts, setCounts] = useState<number[]>(statisticsData.map((item) => countAt(item, 0)));

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, [hasAnimated]);

	useEffect(() => {
		if (!hasAnimated) return;

		const duration = 1500;
		const startTime = performance.now();
		let animationFrame = 0;

		const animate = (now: number) => {
			const progress = Math.min((now - startTime) / duration, 1);
			const easedProgress = 1 - Math.pow(1 - progress, 3);

			setCounts(
				statisticsData.map((item) => countAt(item, easedProgress))
			);

			if (progress < 1) {
				animationFrame = window.requestAnimationFrame(animate);
			}
		};

		animationFrame = window.requestAnimationFrame(animate);
		return () => window.cancelAnimationFrame(animationFrame);
	}, [hasAnimated]);

	return (
		<section ref={sectionRef} id="company" className="statistics">
			<div className="wrapper">
				<div className="statistics__container">
					{statisticsData.map((item, index) => (
						<div key={item.label} className="statistics__item">
							<div>{counts[index]}{item.suffix}</div>
							<div>{t(item.label)}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Statisctics