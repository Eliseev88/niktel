import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import RU from '../assets/images/ru.webp';
import EN from '../assets/images/en.webp';
import '../styles/LangSwitcher.css';
import { useTranslation } from "react-i18next";

const LANGUAGES = {
	ru: { label: 'RU', icon: RU },
	en: { label: 'EN', icon: EN },
};

type LangSwitcherProps = {
	className?: string;
};

function LangSwitcher({ className }: LangSwitcherProps) {

	const {i18n} = useTranslation();
	const switcherRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	// Derived from i18n, so every switcher instance (header, mobile menu) stays in sync
	const current = i18n.resolvedLanguage === 'en' ? 'en' : 'ru';
	const other = current === 'ru' ? 'en' : 'ru';

	// Close on outside click
	useEffect(() => {
		const handleClickOutside = (e: globalThis.MouseEvent) => {
			if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const changeLanguage = () => {
		i18n.changeLanguage(other);
		setIsOpen(false);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Escape') setIsOpen(false);
	};

  return (
	<div className={["langSwitcher", className].filter(Boolean).join(' ')} ref={switcherRef} onKeyDown={handleKeyDown}>
		<div className="langSwitcher__wrp">
			<div className={["langSwitcher__btn", isOpen ? '__open' : ''].join(' ')}>
				<button
					type="button"
					className="langSwitcher__element"
					onClick={() => setIsOpen(prev => !prev)}
					aria-expanded={isOpen}
				>
					<img src={LANGUAGES[current].icon} alt="" className="langSwitcher__img"/>
					<span>{LANGUAGES[current].label}</span>
				</button>
				<span className={isOpen ? '__hr' : '__hr __invisible'}/>
				{/* Disabled while collapsed, so the hidden option is not reachable with Tab */}
				<button
					type="button"
					className={['langSwitcher__element', isOpen ? '__visible' : '__invisible'].join(' ')}
					onClick={changeLanguage}
					disabled={!isOpen}
				>
					<img src={LANGUAGES[other].icon} alt="" className="langSwitcher__img"/>
					<span>{LANGUAGES[other].label}</span>
				</button>
			</div>
		</div>

	</div>
  )
}

export default LangSwitcher
