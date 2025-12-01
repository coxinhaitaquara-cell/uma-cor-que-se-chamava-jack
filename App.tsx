import React from 'react';
import BackgroundWrapper from './components/BackgroundWrapper';
import AccessibilityBar from './components/AccessibilityBar';
import Hero from './components/Hero';
import AuthorMessage from './components/AuthorMessage';
import ActivitySection from './components/ActivitySection';
import ParentsSection from './components/ParentsSection';
import Footer from './components/Footer';
import RainbowTrail from './components/RainbowTrail';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="font-mulish text-slate-800 antialiased selection:bg-lime-200 selection:text-petrol">
      <AccessibilityBar />
      <RainbowTrail />
      <BackgroundWrapper>
        <ScrollReveal animation="fade-up" duration={1000}>
          <Hero />
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={200}>
          <AuthorMessage />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <ActivitySection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <ParentsSection />
        </ScrollReveal>

        <Footer />
      </BackgroundWrapper>
    </div>
  );
}

export default App;