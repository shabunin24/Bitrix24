import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const handleContact = () => {
    window.location.href = 'tel:+79184150606';
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              <span className="text-slate-900">Получите бесплатную</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                дорожную карту
              </span>
              <br />
              <span className="text-slate-900">внедрения Bitrix24</span>
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              Свяжитесь с нами, и мы подготовим персональный план внедрения для вашего бизнеса 
              с расчетом сроков и стоимости
            </p>

            <Button 
              onClick={handleContact}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 shadow-xl shadow-orange-500/20"
            >
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-slate-900 mb-2">Телефон</div>
              <a href="tel:+79184150606" className="text-slate-600 hover:text-orange-600 transition-colors">
                +7 918 415-06-06
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                <Mail className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-slate-900 mb-2">Email</div>
              <a href="mailto:shabunin.aleksei@yandex.ru" className="text-slate-600 hover:text-orange-600 transition-colors break-all">
                shabunin.aleksei@yandex.ru
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-slate-900 mb-2">Офис</div>
              <p className="text-slate-600">г. Симферополь,<br />ул. Арабатская 3 кв. 7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-200 text-center text-slate-500">
          <p>© 2024 Bitrix24 Интегратор. Все права защищены.</p>
        </div>
      </div>
    </section>
  );
}