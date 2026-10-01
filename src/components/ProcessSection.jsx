import React from 'react';
import { PROCESS_STEPS } from '../utils/constants';
import { RiFlashlightFill } from 'react-icons/ri';

const ProcessSection = () => {
  return (
    <section
      className="bg-[#162032] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="How it works"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="section-tag">How It Works</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Get Your CA Service in{' '}
            <span className="text-[#f4b942]">4 Simple Steps</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mx-auto">
            We've made it simple to get professional CA services from anywhere in India.
          </p>
        </div>

        {/* Steps — Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#f4b942] via-[#f4b942]/50 to-[#f4b942]" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center md:items-center"
              >
                {/* Mobile: left border timeline */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f4b942] to-[#f4b942]/20" aria-hidden="true" />

                <div className="md:hidden pl-8 text-left w-full pb-10">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="absolute left-[-8px] w-4 h-4 bg-[#f4b942] rounded-full flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#f4b942] font-extrabold text-sm tracking-widest">{step.step}</span>
                    <span className="text-2xl"><step.icon /></span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex md:flex-col md:items-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-20 h-20 bg-[#0d1b2a] border-2 border-[#f4b942] rounded-full flex flex-col items-center justify-center mb-5 shadow-lg">
                    <span className="text-2xl mb-0.5"><step.icon /></span>
                    <span className="text-[#f4b942] font-extrabold text-xs tracking-widest">{step.step}</span>
                  </div>

                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                  <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex items-center gap-2 bg-[#f4b942]/10 border border-[#f4b942]/20 rounded-2xl px-6 py-4">
            <RiFlashlightFill className="text-2xl text-[#f4b942]" />
            <p className="text-[#94a3b8] text-sm">
              <strong className="text-white">Most services completed in 24–72 hours.</strong>{' '}
              No office visit needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
