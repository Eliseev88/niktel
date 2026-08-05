
import type { ReactNode } from 'react';
import '../styles/Popup.css';

function Popup({ title, subtitle, description, onBack }: { title: string; subtitle: string; description: ReactNode; onBack: () => void }) {
  return (
	<div className="popup">
		<div className="popup__header">
			<div className="wrapper">
				<div className="popup__title">{title}</div>
				<div className="popup__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
			</div>
		</div>
		<div className="popup__content">
			<div className="wrapper popup__wrapper">
				{description}
				<button className="popup__btn" onClick={onBack}>Вернуться</button>
			</div>
		</div>
	</div>
  )
}

export default Popup