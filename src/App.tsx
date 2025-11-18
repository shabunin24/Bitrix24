import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { CaseStudySection } from './components/CaseStudySection';
import { ServicesSection } from './components/ServicesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <CaseStudySection />
      <ServicesSection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  );
}
