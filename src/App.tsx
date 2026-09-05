/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionDotNav } from './components/SectionDotNav';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { ServicesBento } from './components/ServicesBento';
import { Manufacturing } from './components/Manufacturing';
import { Impact } from './components/Impact';
import { MarketOpportunity } from './components/MarketOpportunity';
import { VisionMission } from './components/VisionMission';
import { FAQ } from './components/FAQ';
import { PartnershipSection } from './components/PartnershipSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#202020] text-[#D6D6D6] flex flex-col font-sans selection:bg-[#FFEE32] selection:text-[#202020] transition-colors duration-300">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Desktop Fixed Side Navigation */}
        <SectionDotNav />

        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Team />
          <ServicesBento />
          <Manufacturing />
          <Impact />
          <MarketOpportunity />
          <VisionMission />
          <FAQ />
          <PartnershipSection />
        </main>

        {/* Floating Action Hub (Quote & WhatsApp) */}
        <FloatingActions />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

