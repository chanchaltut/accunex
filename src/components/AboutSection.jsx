import React, { useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ABOUT, BRAND, STATS } from '../utils/constants';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const statsThree = STATS.slice(0, 3);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#0f172a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="About Accu Nex Taxation Services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT — Image */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden image-zoom-container card-hover shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop"
                  alt="Accu Nex CA Team at work"
                  className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-cover image-zoom"
                  loading="lazy"
                />
              </div>

              {/* Stats overlay card */}
              <div className="relative lg:absolute lg:bottom-[-24px] lg:left-0 lg:right-0 mt-4 lg:mt-0 mx-0 lg:mx-4 bg-[#f4b942] rounded-2xl p-5 sm:p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 divide-x divide-[#0d1b2a]/20">
                  {statsThree.map((stat, i) => (
                    <div key={i} className="text-center px-2">
                      <div className="text-[#0d1b2a] font-extrabold text-2xl sm:text-3xl leading-none">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-[#0d1b2a]/70 text-[10px] sm:text-xs font-semibold mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="reveal">
              <div className="section-tag">About Us</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                About Accu Nex{' '}
                <span className="text-[#f4b942]">Taxation Services</span>
              </h2>
            </div>

            <div className="reveal animation-delay-200">
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-3">
                Accu Nex Taxation Services is an <strong className="text-white">ICAI-registered Chartered Accountant firm</strong> committed to providing accurate, reliable, and client-focused CA services across India.
              </p>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6">
                We provide all CA services <strong className="text-white">100% online</strong> — GST registration & returns, income tax filing, company incorporation, TDS compliance, ROC filings, bookkeeping, MSME registration, trademark, FSSAI, and more. Transparent pricing. Fast turnaround. Dedicated WhatsApp support.
              </p>
            </div>

            {/* Highlights */}
            <ul className="reveal animation-delay-300 space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {ABOUT.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm sm:text-base">
                  <FaCheckCircle className="text-[#f4b942] flex-shrink-0 text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="reveal animation-delay-400 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to book a free consultation with Accu Nex Taxation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
              >
                Book Free Consultation →
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1e3a54] hover:border-[#f4b942] text-white hover:text-[#f4b942] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 min-h-[48px]"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
