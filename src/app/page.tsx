import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import RegistrationSection from '@/components/RegistrationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <UnitSection /> */}
      <TeamSection />
      <RegistrationSection />
      <FAQSection />
      {/* <ContactSection /> */}
      {/* <YouTubeSection /> */}
      <Footer />
    </main>
  );
}
