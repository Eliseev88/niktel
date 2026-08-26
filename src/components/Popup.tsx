
import type { ReactNode } from 'react';
import '../styles/Popup.css';
import { useTranslation } from "react-i18next";
import crossBlack from '../assets/icons/cross_black.svg';

function Popup({ title, subtitle, description, onBack }: { title: string; subtitle: string; description: ReactNode; onBack: () => void }) {
  const { t } = useTranslation();
  return (
	<div className="popup">
		<div className="popup__header">
			<div className="wrapper">
				<div className="popup__title">{title}</div>
				<div className="popup__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
			</div>
		</div>
		<div className="popup__content">
			<button className="popup__close" onClick={onBack} aria-label={t("Вернуться")}>
				<img src={crossBlack} alt="" />
			</button>
			<div className="wrapper popup__wrapper">
				{description}
				<button className="popup__btn" onClick={onBack}>{t("Вернуться")}</button>
			</div>
		</div>
	</div>
  )
}

export default Popup