import '../../styles/Modal.css'

function SoftwareDeveloping() {
  return (
	<>
		<div className="modal__title">Разработка ПО</div>
		<div className="modal__description">
			Организация команды эксплуатации/технической поддержки информационной системы (ИС, Продукт), включая:
		</div>
		<ul className="modal__list">
			<li className="modal__list-item">
				организация мониторинга Продукта и&nbsp;оповещения специалистов о&nbsp;сбоях
			</li>
			<li className="modal__list-item">
				управление командой специалистов при решении инцидентов работы системы на&nbsp;нескольких стендах (например DEV, QAS, PROD), выбор оптимальных конфигураций стендов
			</li>
			<li className="modal__list-item">
				внедрение релизной политики, управление выводом доработок и&nbsp;релизов в&nbsp;продуктив
				</li>
			<li className="modal__list-item">
				работа нескольких команд (инженеры по&nbsp;инфраструктуре, разработчики, тестировщики) с&nbsp;изменениями
			</li>
		</ul>
		<div className="modal__description" style={{marginTop: '20px'}}>
			Концептуальная разработка
		</div>
		<ul className="modal__list">
			<li className="modal__list-item">
				анализ бизнес-процессов, определение концепции и&nbsp;стратегии развития ИТ
			</li>
			<li className="modal__list-item">
				создание концепций и&nbsp;программ развития&nbsp;ИТ
			</li>
		</ul>
	</>
  )
}

export default SoftwareDeveloping