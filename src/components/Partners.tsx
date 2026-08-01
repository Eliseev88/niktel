import '../styles/Partners.css';
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

function Partners() {
  return (
	<div className="partners">
		<div className="partners__title">Наши партнеры и клиенты</div>
		<div className="partners__list">
			<div className="wrapper">
				<div className="partners__grid">
					<a href="#" className="partners__link">
						<img src={softline} alt="Партнер 1" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={gpb} alt="Партнер 2" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={dell} alt="Партнер 3" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={checkpoint} alt="Партнер 4" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={school} alt="Партнер 5" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={citrix} alt="Партнер 6" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={mountain} alt="Партнер 7" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={vmware} alt="Партнер 8" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={mikrotik} alt="Партнер 9" className="partners__image" />
					</a>
					<a href="#" className="partners__link">
						<img src={uranium1} alt="Партнер 10" className="partners__image" />
					</a>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Partners