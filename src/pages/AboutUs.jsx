import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import StatsBar from '../components/StatsBar';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Accu Nex Taxation Services</title>
        <meta name="description" content="Accu Nex Taxation Services is an ICAI-registered Chartered Accountant firm providing 100% online CA services across India." />
        <meta property="og:title" content="About Us | Accu Nex Taxation Services" />
        <link rel="canonical" href="https://accunextaxation.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0d1b2a] dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#1e3a54]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            About <span className="text-[#f4b942]">Accu Nex</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We are an ICAI-registered CA firm dedicated to making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <AboutSection />
      <StatsBar />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default AboutUs;
