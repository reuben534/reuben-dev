import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { BackgroundEffects } from './components/BackgroundEffects.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { WhyWorkWithMe } from './components/WhyWorkWithMe.tsx';
import { Skills } from './components/Skills.tsx';
import { Process } from './components/Process.tsx';
import { Projects } from './components/Projects.tsx';
import { Education } from './components/Education.tsx';
import { MissionAndContact } from './components/MissionAndContact.tsx';
import { Footer } from './components/Footer.tsx';
import { BrandModal } from './components/BrandModal.tsx';

function PortfolioContent() {
  const [selectedService, setSelectedService] = useState<string>('Custom Web Applications');
  const [inquiryMessage, setInquiryMessage] = useState<string>('');
  const [isBrandModalOpen, setIsBrandModalOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setInquiryMessage(`I am interested in discussing your ${serviceTitle} service for an upcoming project.`);
    scrollToContact();
  };

  const handleRequestCodeSample = (projectTitle: string) => {
    setSelectedService('Custom Web Applications');
    setInquiryMessage(
      `Hello Reuben, I would like to request private repository access, database schema details, or an architectural walkthrough for "${projectTitle}".`
    );
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900 dark:bg-[#0c0a09] dark:text-stone-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 relative selection:bg-amber-500 selection:text-white dark:selection:text-stone-950">
      {/* Dynamic Ambient Background Visual Effects */}
      <BackgroundEffects />

      {/* Navigation Header */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section + 4-Column Statistics Strip */}
        <Hero onOpenContact={scrollToContact} />

        {/* About Me Section */}
        <About />

        {/* Services Section */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Why Work With Me (10 Feature Cards) */}
        <WhyWorkWithMe />

        {/* Skills Section */}
        <Skills />

        {/* Development Process (6 Steps) */}
        <Process />

        {/* Featured Projects */}
        <Projects onRequestCodeSample={handleRequestCodeSample} />

        {/* Education Timeline */}
        <Education />

        {/* Mission & Interactive Scope Planner / Contact */}
        <MissionAndContact
          initialService={selectedService}
          initialMessage={inquiryMessage}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Brand Identity & Logo Showcase Modal */}
      <BrandModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
