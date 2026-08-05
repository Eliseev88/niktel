import '../styles/Company.css'
import data from '../assets/images/data.png'
import IT from '../assets/images/IT.png'
import project from '../assets/images/projects.jpg'

function Company() {
  return (
	<section className="company">
		<div className="company__header">
			<div className="wrapper">
				<div className="company__title">Уже 11&nbsp;лет мы&nbsp;растём и&nbsp;развиваемся вместе с&nbsp;нашими клиентами</div>
				<div className="company__subtitle">Мы&nbsp;делаем сложные системы простыми и&nbsp;удобными для Заказчика и&nbsp;без бюрократии</div>
			</div>
		</div>
		<div className="company__content">
			<div className="wrapper">
				<div className="company__container">
					<div className="company__item">
						<img src={data} alt="Data" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">Big Data</div>
							<div className="company__item-subtitle">Внедрение, сопровождение и&nbsp;глубокая аналитика данных. Реализуем полный <br></br> цикл работ с&nbsp;большими данными.</div>
						</div>
					</div>
					<div className="company__item">
						<img src={IT} alt="IT" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">Ваш проводник в&nbsp;мире&nbsp;IT</div>
							<div className="company__item-subtitle">Построим для Вас IT-инфраструктуру любого масштаба с&nbsp;использованием <br></br> самых современных технологий.</div>
						</div>
					</div>
					<div className="company__item">
						<img src={project} alt="project" className="company__item-img" />
						<div className="company__item-wrp">
							<div className="company__item-title">Проекты по&nbsp;всему миру</div>
							<div className="company__item-subtitle">Благодаря накопленному опыту наши специалисты готовы реализовывать <br></br> проекты в&nbsp;любой точке земного шара.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  )
}

export default Company