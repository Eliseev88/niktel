import { useState, useEffect, useRef, type MouseEvent } from "react";
import RU from '../assets/images/ru.webp';
import EN from '../assets/images/en.webp';
import '../styles/LangSwitcher.css';
import { useTranslation } from "react-i18next";

type LangSwitcherProps = {
	className?: string;
};

function LangSwitcher({ className }: LangSwitcherProps) {

	const {i18n} = useTranslation();
	const switcherRef = useRef<HTMLDivElement>(null);

	let _currentLang = localStorage.getItem('i18nextLng');
	const _userLanguage = window.navigator.language;

	if (_currentLang === 'ru-RU' || _currentLang === 'en-EN') {
		if (_userLanguage && _userLanguage !== 'ru-RU') {
			_currentLang = 'EN';
			i18n.changeLanguage(_currentLang.toLowerCase());
		} else {
			_currentLang = 'RU';
		}
	} else {
		_currentLang = _currentLang?.toUpperCase() ?? 'EN';
	}

	const [currentLang, setCurrentLang] = useState(_currentLang);
	const [currentIcon, setCurrentIcon] = useState(_currentLang === 'RU' ? RU : EN);

	const [secondLang, setSecondLang] = useState(_currentLang === 'RU' ? 'EN' : 'RU');
	const [secondIcon, setSecondIcon] = useState(_currentLang === 'RU' ? EN : RU);

	const [isOpen, setIsOpen] = useState(false);

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

	const toggleOpen = (e: MouseEvent) => {
		e.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const changeLanguage = (e: MouseEvent) => {
		e.stopPropagation();
		if (!isOpen) return;

		const lang = currentLang === 'RU' ? 'EN' : 'RU';
		setSecondLang(currentLang);
		setCurrentLang(lang);

		const icon = currentLang === 'RU' ? EN : RU;
		setSecondIcon(currentIcon);
		setCurrentIcon(icon);

		i18n.changeLanguage(currentLang === 'RU' ? 'en' : 'ru');
		setIsOpen(false);
	};

  return (
	<div className={["langSwitcher", className].join(' ')} ref={switcherRef}>
		<div className="langSwitcher__wrp">
			<button
				className={["langSwitcher__btn", isOpen ? '__open' : ''].join(' ')}
				onClick={toggleOpen}
			>
				<span className="langSwitcher__element">
					<img src={currentIcon} alt="lang" className="langSwitcher__img"/>
					<span>{currentLang}</span>
				</span>
				<span className={isOpen ? '__hr' : '__hr __invisible'}/>
				<span
					onClick={changeLanguage}
					className={['langSwitcher__element', isOpen ? '__visible' : '__invisible'].join(' ')}
				>
					<img src={secondIcon} alt="lang" className="langSwitcher__img"/>
					<span>{secondLang}</span>
				</span>
			</button>
		</div>

	</div>
  )
}

export default LangSwitcher