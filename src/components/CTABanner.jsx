import React from 'react';
import { RiAwardLine } from 'react-icons/ri';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { BRAND } from '../utils/constants';

const CTABanner = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#1a3a5c] via-[#162032] to-[#0d1b2a] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#f4b942]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#f4b942]/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f4b942]/10 border border-[#f4b942]/30 text-[#f4b942] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          <RiAwardLine className="inline mr-1 text-base" /> FREE CONSULTATION — NO OBLIGATION
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Simplify Your{' '}
          <span className="text-[#f4b942]">CA Compliance?</span>
        </h2>

        <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Talk to an ICAI-registered CA today. We'll assess your requirements, explain the process, and give you a fixed quote — no surprises, no hidden charges.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-xs sm:text-sm text-[#94a3b8]">
          {['✓ ICAI Registered', '✓ 100% Online', '✓ Fixed Pricing', '✓ Fast Turnaround'].map((item, i) => (
            <span key={i} className="text-white/80">{item}</span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want a free consultation with Accu Nex Taxation Services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/30 group min-h-[52px]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp for Free Consultation
          </a>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center justify-center gap-2.5 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group min-h-[52px]"
          >
            <FaPhone className="text-sm" />
            Call Now: {BRAND.phone}
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
