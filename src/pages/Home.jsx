import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ExpertCA from '../components/ExpertCA';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Accu Nex Taxation Services | GST, ITR Filing, Company Registration — CA India</title>
        <meta name="description" content="ICAI-registered CA firm — GST registration & returns, ITR filing, company registration, TDS compliance, ROC filings & all CA services 100% online across India. 500+ clients. Transparent pricing." />
        <meta property="og:title" content="Accu Nex Taxation Services | Expert CA Services Online India" />
        <meta property="og:description" content="GST, ITR filing, company registration, TDS compliance & all CA services online. ICAI registered. 500+ clients. 10+ years." />
        <link rel="canonical" href="https://accunextaxation.com/" />
      </Helmet>

      <Hero />
      <Marquee />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ExpertCA />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
};

export default Home;
