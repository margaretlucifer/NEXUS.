import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TrustSection } from './components/TrustSection';
import { TeamSection } from './components/TeamSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProcessSection } from './components/ProcessSection';
import { PackagesSection } from './components/PackagesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProjectCalculatorModal } from './components/ProjectCalculatorModal';

export default function App() {
  const [inquiryPrefillService, setInquiryPrefillService] = useState<string>('Website');
  const [inquiryPrefillDescription, setInquiryPrefillDescription] = useState<string>('');
  const [inquiryPrefillTimeline, setInquiryPrefillTimeline] = useState<string>('');
  const [inquiryPrefillBudget, setInquiryPrefillBudget] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryPrefillService(serviceTitle);
    setInquiryPrefillDescription(`I'm interested in discussing the ${serviceTitle} service for our business.`);
    scrollToContact();
  };

  const handleSelectPackageForInquiry = (packageName: string) => {
    setInquiryPrefillService(packageName.includes('Starter') ? 'Website' : packageName.includes('Growth') ? 'E-commerce' : 'Custom Project');
    setInquiryPrefillDescription(`I would like to discuss the ${packageName}.`);
    scrollToContact();
  };

  const handleDirectTeamInquiry = (memberName: string) => {
    setInquiryPrefillDescription(`I'd like to collaborate directly with ${memberName} on our upcoming project.`);
    scrollToContact();
  };

  const handleStartSimilarProject = (projectTitle: string) => {
    setInquiryPrefillDescription(`I explored your case study "${projectTitle}" and would love to discuss building a similar system for our business.`);
    scrollToContact();
  };

  const handleApplyEstimatorToInquiry = (summary: string, timeline: string, budgetHint: string) => {
    setInquiryPrefillDescription(summary);
    setInquiryPrefillTimeline(timeline);
    setInquiryPrefillBudget(budgetHint);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0D0F17] text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => {
          setInquiryPrefillService('Website');
          scrollToContact();
        }}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* 03 & 04 Hero Section */}
        <Hero
          onOpenContact={() => {
            setInquiryPrefillService('Website');
            scrollToContact();
          }}
          onExploreWork={scrollToWork}
        />

        {/* 06 & 07 What Can We Help You Build? (Outcome-Driven Services) */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 15 Freelancer Differentiator (Why Hire 5 Skills Separately?) */}
        <DifferentiatorSection
          onStartProject={scrollToContact}
        />

        {/* 10 & 11 Portfolio & Project Case Studies */}
        <PortfolioSection
          onStartSimilarProject={handleStartSimilarProject}
        />

        {/* 17 & 18 Trust & Credibility Section */}
        <TrustSection
          onStartConversation={scrollToContact}
        />

        {/* 08 The People Behind The Work (Team) */}
        <TeamSection
          onDirectInquiry={handleDirectTeamInquiry}
        />

        {/* 16 Skills Matrix */}
        <SkillsMatrix />

        {/* 13 & 14 Process & Client Journey */}
        <ProcessSection
          onStartProject={scrollToContact}
        />

        {/* 12 Freelance Packages ("Need Something Simple?") */}
        <PackagesSection
          onSelectPackage={handleSelectPackageForInquiry}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 09 Why Work With Us */}
        <WhyUsSection />

        {/* 19 & 20 Contact & WhatsApp Section */}
        <ContactSection
          initialService={inquiryPrefillService}
          initialDescription={inquiryPrefillDescription}
          initialTimeline={inquiryPrefillTimeline}
          initialBudget={inquiryPrefillBudget}
        />

        {/* 32 Final High-Impact CTA */}
        <FinalCTA
          onStartProject={scrollToContact}
          onViewWork={scrollToWork}
        />
      </main>

      {/* 33 Footer */}
      <Footer />

      {/* 20 Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* Interactive Project Estimator Modal */}
      <ProjectCalculatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyToInquiry={handleApplyEstimatorToInquiry}
      />
    </div>
  );
}
