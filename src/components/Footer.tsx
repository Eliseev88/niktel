import '../styles/Footer.css'
import logo from '../assets/icons/niktel_light.svg'

function Footer() {
	const year = new Date().getFullYear();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
		e.preventDefault();
		document.querySelector('#competence')?.scrollIntoView({ behavior: 'smooth' });
		window.dispatchEvent(new CustomEvent('competence:open', { detail: { type } }));
	};

  return (
	<footer className='footer'>
		<div className="wrapper">
			<div className='footer__container'>
				<div className="footer__info">
					 <a href="/" className="footer__logo">
						<img src={logo} alt="Niktel" />
					</a>
					<div className="footer__contacts">
						<a href="tel:+74992815535">+7 (499) 281-55-35</a>
						<a href="mailto:Team@niktel.ru">team@niktel.ru</a>
					</div>
					<div className="footer__copyright">
						&copy; {year}
					</div>
				</div>
				<div className="footer__menu">
					<div className="footer__column">
						<div className='footer__title'>Навигация</div>
						<ul>
							<li><a href="#company">О компании</a></li>
							<li><a href="#competence">Наши компетенции</a></li>
							<li><a href="#contacts">Контакты</a></li>
						</ul>
					</div>

					<div className="footer__column">
						<div className='footer__title'>Продукты</div>
						<ul>
							<li><a href="#competence" onClick={(e) => handleClick(e, 'Системная интеграция')}>Системная интеграция</a></li>
							<li><a href="#competence" onClick={(e) => handleClick(e, 'Инженерные системы')}>Инженерные системы</a></li>
							<li><a href="#competence" onClick={(e) => handleClick(e, 'Информационная безопасность')}>Информационная безопасность</a></li>
							<li><a href="#competence" onClick={(e) => handleClick(e, 'Разработка ПО')}>Разработка ПО</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer