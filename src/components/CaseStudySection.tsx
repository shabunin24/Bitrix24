import { Check, TrendingUp, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const results = [
  {
    icon: TrendingUp,
    metric: '+247%',
    label: 'Рост конверсии лидов'
  },
  {
    icon: Users,
    metric: '4x',
    label: 'Ускорение обработки заявок'
  },
  {
    icon: Zap,
    metric: '80%',
    label: 'Автоматизация рутины'
  }
];

const modules = [
  'CRM с автоматической квалификацией лидов',
  'Бизнес-процессы для продаж и поддержки',
  'Интеграция с сайтом, почтой и мессенджерами',
  'Автоматические отчеты для руководства',
  'Управление проектами и задачами',
  'База знаний для быстрого обучения'
];

export function CaseStudySection() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              <span className="text-white">Как мы решили</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                эти проблемы для себя
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Мы внедрили Bitrix24 в собственной компании и добились впечатляющих результатов
            </p>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {results.map((result, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-slate-900 border border-slate-800"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <result.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  {result.metric}
                </div>
                <p className="text-slate-400">{result.label}</p>
              </div>
            ))}
          </div>

          {/* Visual Proof */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-8 text-white">Наши внедренные модули</h3>
              
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-slate-300">{module}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjMzMTg5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bitrix24 Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}