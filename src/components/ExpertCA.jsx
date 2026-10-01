import React from 'react';
import { RiTrophyLine } from 'react-icons/ri';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { WHY_CHOOSE_US, BRAND } from '../utils/constants';

const whyFeatures = WHY_CHOOSE_US;

const ExpertCA = () => {
  return (
    <section
      className="bg-[#0d1b2a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
      aria-label="Why choose Accu Nex"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Content */}
          <div className="text-center lg:text-left">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Why{' '}
              <span className="text-[#f4b942]">Accu Nex</span>{' '}
              is India's Trusted CA Partner
            </h2>

            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              We combine ICAI-qualified expertise with a completely online, hassle-free delivery model.
              No office visits. No hidden fees. Just accurate, fast CA services — delivered where you are.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#162032] border border-[#1e3a54] rounded-xl p-3 sm:p-4 text-left hover:border-[#f4b942]/40 transition-colors duration-200"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5"><feature.icon /></span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to get started with Accu Nex Taxation Services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 group min-h-[48px]"
              >
                GET STARTED
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1e3a54] hover:border-[#f4b942] text-white hover:text-[#f4b942] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 min-h-[48px]"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden image-zoom-container shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
                alt="CA professional working on tax documents"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover image-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-[#0d1b2a]/90 backdrop-blur-sm border border-[#1e3a54] rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f4b942] rounded-xl flex items-center justify-center flex-shrink-0">
                  <RiTrophyLine className="text-2xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">ICAI Registered CA Firm</p>
                  <p className="text-[#94a3b8] text-xs mt-0.5">Serving 500+ clients across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCA;
