import '../../styles/Modal.css';

function SystemIntegration() {
  return (
	<>
		<div className="modal__title">Системная интеграция</div>
		<div>
			<div className="modal__description">
				Проектирование и&nbsp;внедрение информационных систем с&nbsp;созданием программно-аппаратного комплекса (ПАК) от&nbsp;уровня отдельной информационной системы до&nbsp;уровня ЦОД в&nbsp;целом
			</div>
			<ul className="modal__list">
				<li className="modal__list-item">системы серверной виртуализации</li>
				<li className="modal__list-item">решения по&nbsp;виртуализации рабочих мест (VDI)</li>
				<li className="modal__list-item">обеспечение гарантированной отказоустойчивости приложений&nbsp;&mdash; репликация данных, резервный ЦОД, 	распределенный ЦОД&nbsp;&mdash; разработка архитектуры, подбор технологий, сравнительный анализ технических решений</li>
				<li className="modal__list-item">системы обеспечения отказоустойчивости</li>
				<li className="modal__list-item">создание архитектуры систем, обеспечивающих работу с&nbsp;высокой нагрузкой</li>
			</ul>
			<div className="modal__container">
				<div className="modal__item">
					<div className="modal__description">Перенос данных из&nbsp;облачной инфраструктуры в&nbsp;частную</div>
					<ul className="modal__list">
						<li className="modal__list-item">разработка и&nbsp;создание частного облака</li>
						<li className="modal__list-item">разработка методики переноса, в&nbsp;том числе для решений, не&nbsp;подразумевающих возможность обратной миграции (например&nbsp;&mdash; Symantec Cloud)</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">Переезд ЦОД, включая:</div>
					<ul className="modal__list">
						<li className="modal__list-item">управление проектом по&nbsp;переезду</li>
						<li className="modal__list-item">техническая организация плановых работ и&nbsp;решения инцидентов группой инженеров, участвующих в&nbsp;проекте</li>
						<li className="modal__list-item">оптимизация ЦОД в&nbsp;ходе переезда</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">Поддержка Заказчика на&nbsp;этапе Закупок</div>
					<ul className="modal__list">
						<li className="modal__list-item">разработка технических заданий и&nbsp;комплектов документовдля проведения Закупок (в&nbsp;соответствии с&nbsp;корпоративными требованиями или 223ФЗ, 44ФЗ)</li>
						<li className="modal__list-item">сопровождение закупочных процедур</li>
					</ul>
				</div>
				<div className="modal__item">
					<div className="modal__description">Оптимизация ресурсов ЦОД</div>
					<ul className="modal__list">
						<li className="modal__list-item">аудит ЦОД, разработка рекомендаций по&nbsp;оптимизации</li>
						<li className="modal__list-item">управление выполнением рекомендаций</li>
						<li className="modal__list-item">отчетность</li>
					</ul>
				</div>
			</div>
		</div>
	</>
  )
}

export default SystemIntegration