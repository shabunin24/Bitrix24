import { Award, Shield, Headphones, Heart, Zap } from 'lucide-react';

const certifications = [
  {
    icon: Heart,
    title: 'Практик, а не теоретик',
    description: 'Внедрил Bitrix24 в собственном бизнесе — знаю все нюансы изнутри'
  },
  {
    icon: Zap,
    title: 'Современный подход',
    description: 'Использую актуальные решения и лучшие практики 2024 года'
  }
];

const guarantees = [
  {
    icon: Shield,
    title: 'Оплата по результату',
    description: 'Платите только за работающие решения, которые приносят результат вашему бизнесу'
  }
];

export function ExpertiseSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              <span className="text-white">Наша уверенность —</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Ваша гарантия
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Работаем прозрачно и несем ответственность за результат
            </p>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-6 p-8 rounded-2xl bg-slate-900 border border-slate-800"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-white">{cert.title}</h3>
                  <p className="text-slate-400">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20"
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <guarantee.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="mb-4 text-white">
                  {guarantee.title}
                </h3>
                
                <p className="text-slate-300">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}