import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { TaskTypes } from './components/TaskTypes';
import { PossibleFormats } from './components/PossibleFormats';
import { CaseStudies } from './components/CaseStudies';
import { AboutFounder } from './components/AboutFounder';
import { Process } from './components/Process';
import { Manifesto } from './components/Manifesto';
import { UnusualTask } from './components/UnusualTask';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AmbientGlow } from './components/AmbientGlow';
import { EntrySituation } from './data/siteContent';

export default function App() {
  const [selectedSituation, setSelectedSituation] = useState<EntrySituation | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCases = () => {
    const el = document.getElementById('cases');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSituation = (situation: EntrySituation) => {
    setSelectedSituation(situation);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] font-sans-body selection:bg-[#C85A32]/20 selection:text-[#C85A32] relative overflow-x-hidden">
      
      {/* Interactive Mouse Ambient Glow */}
      <AmbientGlow />

      {/* 1. Sticky Navigation Header */}
      <Header onDiscussClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* Блок 1. Первый экран (Hero Section) */}
        <Hero
          onDiscussClick={scrollToContact}
          onExploreClick={scrollToCases}
        />

        {/* Dynamic Running Marquee Banner */}
        <Marquee />

        {/* Блок «С чем можно прийти?» */}
        <TaskTypes onSelectSituation={handleSelectSituation} />

        {/* Блок «Во что может превратиться ваша идея» */}
        <PossibleFormats onDiscussClick={scrollToContact} />

        {/* Блок Примеры проектов */}
        <CaseStudies onDiscussClick={scrollToContact} />

        {/* Блок 4. «Кто стоит за EK Studio» (Привет! Я Екатерина) */}
        <AboutFounder />

        {/* Блок 5. «Как идея превращается в результат» */}
        <Process />

        {/* Блок 6. «Не по шаблону, а под вашу задачу» */}
        <Manifesto />

        {/* Блок 7. Финальный призыв к обращению («Не знаете, с чего начать?») */}
        <UnusualTask onDiscussClick={scrollToContact} />

        {/* Контакты и подвал */}
        <Contact selectedSituationFromExplorer={selectedSituation} />
      </main>

      {/* Studio Footer */}
      <Footer />

    </div>
  );
}

