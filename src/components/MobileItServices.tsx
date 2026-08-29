import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import '../styles//MobileItServices.css';
import ARROW_DOWN from '../assets/icons/arrow_down.svg';

type SectionId =
  | 'integration'
  | 'engineering'
  | 'security'
  | 'software';

interface AccordionItem {
  id: SectionId;
  title: string;
  subtitle: string;
  icon: 'integration' | 'cable' | 'security' | 'software';
}

interface AccordionContent {
  title: string;
  items: string[];
  style?: Record<string, string | number>
}

const accordionItems: AccordionItem[] = [
  {
    id: 'integration',
    title: 'Системная интеграция',
    subtitle: 'Строим целую ИТ\u2011инфраструктуру под\u00A0ключ.',
    icon: 'integration',
  },
  {
    id: 'engineering',
    title: 'Инженерные системы',
    subtitle: 'Проектируем и\u00A0монтируем структурированные кабельные системы (СКС)',
    icon: 'cable',
  },
  {
    id: 'security',
    title: 'Информационная безопасность',
    subtitle: 'Аудируем инфраструктуру и\u00A0информационную безопасность',
    icon: 'security',
  },
  {
    id: 'software',
    title: 'Разработка ПО',
    subtitle: 'Создание и\u00A0развитие службы эксплуатации и\u00A0технической поддержки.',
    icon: 'software',
  },
];

const integrationContent: AccordionContent[] = [
  {
    title:
      'Проектирование и\u00A0внедрение информационных систем с\u00A0созданием программно\u2011аппаратного комплекса (ПАК) от\u00A0уровня отдельной информационной системы до\u00A0уровня ЦОД в\u00A0целом',
    items: [
      'системы серверной виртуализации',
      'решения по\u00A0виртуализации рабочих мест (VDI)',
      'обеспечение гарантированной отказоустойчивости приложений — репликация данных, резервный ЦОД, распределенный ЦОД — разработка архитектуры, подбор технологий, сравнительный анализ технических решений',
      'системы обеспечения отказоустойчивости',
      'создание архитектуры систем, обеспечивающих работу с\u00A0высокой нагрузкой',
    ],
  },
  {
    title: 'Перенос данных из\u00A0облачной инфраструктуры в\u00A0частную',
    items: [
      'разработка и\u00A0создание частного облака',
      'разработка методики переноса, в\u00A0том числе для\u00A0решений, не\u00A0подразумевающих возможность обратной миграции (например — Symantec Cloud)',
    ],
  },
  {
    title: 'Переезд ЦОД, включая:',
    items: [
      'управление проектом по\u00A0переезду',
      'техническая организация плановых работ и\u00A0решения инцидентов группой инженеров, участвующих в\u00A0проекте',
      'оптимизация ЦОД в\u00A0ходе переезда',
    ],
  },
  {
    title: 'Поддержка Заказчика на\u00A0этапе Закупок',
    items: [
      'разработка технических заданий и\u00A0комплектов документов для\u00A0проведения Закупок (в\u00A0соответствии с\u00A0корпоративными требованиями или 223ФЗ, 44ФЗ)',
      'сопровождение закупочных процедур',
    ],
  },
  {
    title: 'Оптимизация ресурсов ЦОД',
    items: [
      'аудит ЦОД, разработка рекомендаций по\u00A0оптимизации',
      'управление выполнением рекомендаций',
      'отчетность',
    ],
  },
];

const engineeringContent: AccordionContent[] = [
  {
    title:
      'Полный комплекс услуг',
    items: [
      'Мы умеем проектировать и\u00A0строить структурированные кабельные системы, подбирая поставщиков компонент в\u00A0соответствии с\u00A0бюджетом Заказчика. AMP Siemon, Legrand и\u00A0не только.',
      'Умеем модернизировать существующие системы, дорабатывая их под\u00A0изменившиеся нужды Заказчика.',
      'Если вам нужны решения в\u00A0области контроля доступа — мы можем предложить комплексное решение, интегрированное с\u00A0системой двухфакторной аутентификации для\u00A0доступа к\u00A0ИТ инфраструктуре.'
    ],
    style: { '--li-content':  '-', '--margin': 0}
  },
];

const securityContent: AccordionContent[] = [
  {
    title:
      'Проведение аудита ИТ и\u00A0ИБ',
    items: [
      'инструментальный сбор информации, анкетирование, интервьюирование',
      'проведение тестирования на\u00A0проникновение',
      'анализ выполнения требований регуляторов',
      'помощь в\u00A0создании внутренних регламентирующих документов Заказчика, разработка политик в\u00A0области ИТ и\u00A0ИБ',
    ],
  },
];

const softwareContent: AccordionContent[] = [
  {
    title:
      'Организация команды эксплуатации/технической поддержки информационной системы (ИС, Продукт), включая:',
    items: [
      'разработка ключевых процессов взаимодействия с\u00A0Заказчиком, Потребителями, командами разработки, другими ключевыми участниками проекта',
      'управление командой специалистов при\u00A0решении инцидентов работы системы на\u00A0нескольких стендах (например DEV, QAS, PROD), выбор оптимальных конфигураций стендов',
      'внедрение релизной политики, управление выводом доработок и\u00A0релизов в\u00A0продуктив',
      'работа нескольких команд (инженеры по\u00A0инфраструктуре, разработчики, тестировщики) с\u00A0изменениями',
    ],
  },
  {
    title:
      'Концептуальная разработка',
    items: [
      'анализ бизнес\u2011процессов, определение концепции и\u00A0стратегии развития ИТ',
      'создание концепций и\u00A0программ развития ИТ'
    ]
  }
];

const SECTION_ORDER: SectionId[] = [
  'integration',
  'engineering',
  'security',
  'software',
];

// Maps the footer's "competence:open" type values to accordion section ids.
const SECTION_BY_TYPE: Record<string, SectionId> = {
  'Системная интеграция': 'integration',
  'Инженерные системы': 'engineering',
  'Информационная безопасность': 'security',
  'Разработка ПО': 'software',
};

interface MobileSystemIntegrationProps {
  defaultOpen?: SectionId | null;
}

export const MobileSystemIntegration = ({
  defaultOpen = 'integration',
}: MobileSystemIntegrationProps) => {
  const [openSection, setOpenSection] = useState<SectionId | null>(
    defaultOpen,
  );

  const { t } = useTranslation();

  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});
  const [instantCloseId, setInstantCloseId] = useState<SectionId | null>(
    null,
  );

  useLayoutEffect(() => {
    const measure = () => {
      const next: Record<string, number> = {};
      (Object.keys(contentRefs.current) as SectionId[]).forEach((id) => {
        const el = contentRefs.current[id];
        if (el) next[id] = el.scrollHeight;
      });
      setHeights(next);
    };

    measure();

    // Re-measure when the viewport changes (e.g. rotating a phone or
    // resizing between desktop and mobile), otherwise the content can stay
    // stuck with the heights captured while it was hidden.
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const toggleSection = (id: SectionId) => {
    const prevOpen = openSection;

    // Clear the previous instant-close override so sections animate normally
    // again from the next interaction onwards.
    setInstantCloseId(null);

    // If a section located above the clicked one is currently open, closing
    // it removes that height from above the clicked button and the page
    // appears to jump/scroll. Measure how much it will shrink so we can
    // compensate the scroll position and keep the clicked header in view.
    let collapseDelta = 0;
    if (
      prevOpen &&
      prevOpen !== id &&
      SECTION_ORDER.indexOf(prevOpen) < SECTION_ORDER.indexOf(id)
    ) {
      const sectionEl = contentRefs.current[prevOpen]?.closest(
        '.mobile-it-services__section',
      );
      const headerEl = sectionEl?.querySelector('.mobile-it-services__header');

      if (sectionEl && headerEl) {
        collapseDelta =
          sectionEl.getBoundingClientRect().height -
          headerEl.getBoundingClientRect().height;
      }

      // Collapse the section above instantly so the scroll compensation
      // below stays perfectly in sync with the layout change.
      setInstantCloseId(prevOpen);
    }

    setOpenSection((current) => (current === id ? null : id));

    if (collapseDelta > 0) {
      window.scrollBy({ top: -collapseDelta, behavior: 'instant' });
    }
  };

  // The footer dispatches "competence:open" with a service type. On mobile
  // the matching accordion section should open (instead of the desktop
  // popup), so handle that here and scroll the section into view.
  useEffect(() => {
    const handler = (e: Event) => {
      const { type } = (e as CustomEvent).detail || {};
      const id = SECTION_BY_TYPE[type];
      if (!id) return;
      if (!window.matchMedia('(max-width: 760px)').matches) return;

      const prevOpen = openSection;

      // If a section above the requested one is currently open, close it
      // instantly so the scroll-to-section below targets its final position.
      if (
        prevOpen &&
        prevOpen !== id &&
        SECTION_ORDER.indexOf(prevOpen) < SECTION_ORDER.indexOf(id)
      ) {
        setInstantCloseId(prevOpen);
      }

      setOpenSection(id);

      requestAnimationFrame(() => {
        const headerEl = contentRefs.current[id]
          ?.closest('.mobile-it-services__section')
          ?.querySelector('.mobile-it-services__header');
        headerEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    window.addEventListener('competence:open', handler);
    return () => window.removeEventListener('competence:open', handler);
  }, [openSection]);

  return (
    <div className="mobile-it-services">
      {accordionItems.map((item) => {
        const isOpen = openSection === item.id;
        let content;

		switch (item.id ) {
			case 'integration':
				content = integrationContent;
				break;
			case 'engineering':
				content = engineeringContent;
				break;
			case 'security':
				content = securityContent;
				break;
			case 'software':
				content = softwareContent;
				break;
			default: 
				content = integrationContent;
				break;
		}

        return (
          <section
            key={item.id}
            className={`mobile-it-services__section ${
              isOpen ? 'mobile-it-services__section--open' : ''
            }`}
          >
            <button
              type="button"
              className="mobile-it-services__header"
              aria-expanded={isOpen}
              aria-controls={`section-content-${item.id}`}
              onClick={() => toggleSection(item.id)}
            >
              <span className="mobile-it-services__header-content">
                <span className="mobile-it-services__title">
                  {t(item.title)}
                </span>

                <span className="mobile-it-services__subtitle">
                  {t(item.subtitle)}
                </span>
              </span>

              <span
                className={`mobile-it-services__decoration mobile-it-services__decoration--${item.icon}`}
                aria-hidden="true"
              />

              <span
                className="mobile-it-services__arrow"
                aria-hidden="true"
              >
                <img
                  src={ARROW_DOWN}
                  alt=""
                />
              </span>
            </button>

            <div
              id={`section-content-${item.id}`}
              className="mobile-it-services__content"
              ref={(el) => {
                contentRefs.current[item.id] = el;
              }}
              style={{
                maxHeight: isOpen
                  ? `${heights[item.id] ?? 0}px`
                  : '0px',
                transition: item.id === instantCloseId ? 'none' : undefined,
              }}
              aria-hidden={!isOpen}
            >
                <div className="mobile-it-services__body">
                  {content.map((block) => (
                    <div
                      className="mobile-it-services__content-block"
                      key={block.title}
                    >
                      <h3 className="mobile-it-services__content-title">
                        {t(block.title)}
                      </h3>

                      <ul className="mobile-it-services__list" style={block.style}>
                        {block.items.map((text) => (
                          <li key={text} style={block.style}>{t(text)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MobileSystemIntegration;