import { Database, Workflow, Link2, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Базовое внедрение CRM',
    description: 'Настройка CRM под вашу воронку продаж с автоматическим распределением лидов и контролем конверсии'
  },
  {
    icon: Workflow,
    title: 'Настройка бизнес-процессов',
    description: 'Автоматизация рутинных операций: от заявки до закрытия сделки без ручного вмешательства'
  },
  {
    icon: Link2,
    title: 'Интеграции',
    description: 'Связываем Bitrix24 с вашими сервисами: сайт, телефония, email, мессенджеры, 1С'
  },
  {
    icon: GraduationCap,
    title: 'Обучение команды',
    description: 'Практическое обучение сотрудников с видеоинструкциями и базой знаний для быстрого старта'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              <span className="text-slate-900">Наши</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                решения
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Комплексный подход к внедрению Bitrix24 для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="mb-4 text-slate-900">
                  {service.title}
                </h3>
                
                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}