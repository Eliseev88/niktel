import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/ItServices.css";

type ServiceId =
  | "system-integration"
  | "engineering-systems"
  | "information-security"
  | "software-development";

type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
};

function SystemIntegrationContent() {
  const { t } = useTranslation();

  return (
    <div className="it-services__content">
      <h2>
        {t("Проектирование и\u00A0внедрение информационных систем с\u00A0созданием программно-аппаратного комплекса (ПАК) от\u00A0уровня отдельной информационной системы до\u00A0уровня ЦОД в\u00A0целом")}
      </h2>

      <ul>
        <li>{t("системы серверной виртуализации")}</li>
        <li>{t("решения по\u00A0виртуализации рабочих мест (VDI)")}</li>
        <li>
          {t("обеспечение гарантированной отказоустойчивости приложений — репликация данных, резервный ЦОД, распределенный ЦОД — разработка архитектуры, подбор технологий, сравнительный анализ технических решений")}
        </li>
        <li>{t("системы обеспечения отказоустойчивости")}</li>
        <li>{t("создание архитектуры систем, обеспечивающих работу с\u00A0высокой нагрузкой")}</li>
      </ul>

      <h3>{t("Перенос данных из\u00A0облачной инфраструктуры в\u00A0частную")}</h3>
      <ul>
        <li>{t("разработка и\u00A0создание частного облака")}</li>
        <li>
          {t("разработка методики переноса, в\u00A0том числе для\u00A0решений, не\u00A0подразумевающих возможность обратной миграции (например — Symantec Cloud)")}
        </li>
      </ul>

      <h3>{t("Переезд ЦОД, включая:")}</h3>
      <ul>
        <li>{t("управление проектом по\u00A0переезду")}</li>
        <li>
          {t("техническая организация плановых работ и\u00A0решения инцидентов группой инженеров, участвующих в\u00A0проекте")}
        </li>
        <li>{t("оптимизация ЦОД в\u00A0ходе переезда")}</li>
      </ul>

      <h3>{t("Поддержка Заказчика на\u00A0этапе Закупок")}</h3>
      <ul>
        <li>
          {t("разработка технических заданий и\u00A0комплектов документов для\u00A0проведения Закупок (в\u00A0соответствии с\u00A0корпоративными требованиями или 223ФЗ, 44ФЗ)")}
        </li>
        <li>{t("сопровождение закупочных процедур")}</li>
      </ul>

      <h3>{t("Оптимизация ресурсов ЦОД")}</h3>
      <ul>
        <li>{t("аудит ЦОД, разработка рекомендаций по\u00A0оптимизации")}</li>
        <li>{t("управление выполнением рекомендаций")}</li>
        <li>{t("отчетность")}</li>
      </ul>
    </div>
  );
}

function SoftwareDevelopmentContent() {
  const { t } = useTranslation();

  return (
    <div className="it-services__content">
      <h2>
        {t("Организация команды эксплуатации/технической поддержки информационной системы (ИС, Продукт), включая:")}
      </h2>

      <ul>
        <li>
          {t("разработка ключевых процессов взаимодействия с\u00A0Заказчиком, Потребителями, командами разработки, другими ключевыми участниками проекта")}
        </li>
        <li>
          {t("организация мониторинга Продукта и\u00A0оповещения специалистов о\u00A0сбоях")}
        </li>
        <li>
          {t("управление командой специалистов при\u00A0решении инцидентов работы системы на\u00A0нескольких стендах (например DEV, QAS, PROD), выбор оптимальных конфигураций стендов")}
        </li>
        <li>
          {t("внедрение релизной политики, управление выводом доработок и\u00A0релизов в\u00A0продуктив")}
        </li>
        <li>
          {t("работа нескольких команд (инженеры по\u00A0инфраструктуре, разработчики, тестировщики) с\u00A0изменениями")}
        </li>
      </ul>

      <h3>{t("Концептуальная разработка")}</h3>
      <ul>
        <li>
          {t("анализ бизнес-процессов, определение концепции и\u00A0стратегии развития ИТ")}
        </li>
        <li>{t("создание концепций и\u00A0программ развития ИТ")}</li>
      </ul>
    </div>
  );
}

function EngineeringSystemsContent() {
  const { t } = useTranslation();

  return (
    <div className="it-services__content">
      <h2>{t("Полный комплекс услуг")}</h2>
      <p>
        {t("Мы умеем проектировать и\u00A0строить структурированные кабельные системы, подбирая поставщиков компонент в\u00A0соответствии с\u00A0бюджетом Заказчика. AMP Siemon, Legrand и\u00A0не только.")}
        <br />
        {t("Умеем модернизировать существующие системы, дорабатывая их под\u00A0изменившиеся нужды Заказчика.")}
        <br />
        {t("Если вам нужны решения в\u00A0области контроля доступа — мы можем предложить комплексное решение, интегрированное с\u00A0системой двухфакторной аутентификации для\u00A0доступа к\u00A0ИТ инфраструктуре.")}
      </p>
    </div>
  );
}

function InformationSecurityContent() {
  const { t } = useTranslation();

  return (
    <div className="it-services__content">
      <h2>{t("Проведение аудита ИТ и\u00A0ИБ")}</h2>
      <ul>
        <li>
          {t("инструментальный сбор информации, анкетирование, интервьюирование")}
        </li>
        <li>
          {t("проведение тестирования на\u00A0проникновение")}
        </li>
        <li>
          {t("анализ выполнения требований регуляторов")}
        </li>
        <li>
          {t("помощь в\u00A0создании внутренних регламентирующих документов Заказчика, разработка политик в\u00A0области ИТ и\u00A0ИБ")}
        </li>
      </ul>
    </div>
  );
}

function ServiceContent({ service }: { service: ServiceItem }) {
  switch (service.id) {
    case "system-integration":
      return <SystemIntegrationContent />;
    case "software-development":
      return <SoftwareDevelopmentContent />;
    case "engineering-systems":
      return <EngineeringSystemsContent />;
    case "information-security":
      return <InformationSecurityContent />;
  }
}

export default function ItServices() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<ServiceId>("system-integration");

  const services: ServiceItem[] = [
    {
      id: "system-integration",
      title: t("Системная интеграция"),
      description: t("Строим целую ИТ-инфраструктуру под\u00A0ключ."),
    },
    {
      id: "engineering-systems",
      title: t("Инженерные системы"),
      description: t("Проектируем и\u00A0монтируем структурированные кабельные системы (СКС)"),
    },
    {
      id: "information-security",
      title: t("Информационная безопасность"),
      description: t("Аудируем инфраструктуру и\u00A0информационную безопасность"),
    },
    {
      id: "software-development",
      title: t("Разработка ПО"),
      description: t("Создание и\u00A0развитие службы эксплуатации и\u00A0технической поддержки."),
    },
  ];

  const activeService =
    services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section className="it-services" aria-label={t("Услуги")}>
      <nav className="it-services__menu" aria-label={t("Разделы услуг")}>
        {services.map((service) => {
          const isActive = service.id === activeId;

          return (
            <button
              key={service.id}
              type="button"
              className={`it-services__menu-item ${
                isActive ? "is-active" : ""
              }`}
              onClick={() => setActiveId(service.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="it-services__menu-title">{service.title}</span>
              <span className="it-services__menu-description">
                {service.description}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="it-services__panel">
        <div key={activeService.id} className="it-services__panel-inner">
          <ServiceContent service={activeService} />
        </div>
      </div>
    </section>
  );
}
