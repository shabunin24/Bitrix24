import { TrendingDown, Clock, Layers, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Потеря лидов',
    description: 'Каждый день теряете клиентов из-за отсутствия автоматической обработки заявок'
  },
  {
    icon: Clock,
    title: 'Медленные отчеты',
    description: 'Тратите часы на сбор данных вместо принятия решений'
  },
  {
    icon: Layers,
    title: 'Хаос в задачах',
    description: 'Сотрудники не понимают приоритеты, проекты срываются'
  },
  {
    icon: AlertCircle,
    title: 'Нет контроля',
    description: 'Не видите полной картины бизнеса и упускаете возможности роста'
  }
];

export function PainPointsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              <span className="text-slate-900">Ваша боль —</span>{' '}
              <span className="text-red-600">наша специализация</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Без автоматизации ваш бизнес теряет деньги каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <point.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="mb-3 text-slate-900">
                  {point.title}
                </h3>
                
                <p className="text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}