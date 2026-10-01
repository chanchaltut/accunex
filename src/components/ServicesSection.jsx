import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, SERVICE_CATEGORIES, BRAND } from '../utils/constants';
import { RiFireLine, RiQuestionAnswerLine } from 'react-icons/ri';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const scrollRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  // Touch swipe for category tabs
  const onTabTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTabTouchEnd = (e) => { touchStartX.current = null; };

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#0d1b2a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="CA Services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <div className="section-tag">Our Services</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
            Complete CA Services
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            All CA compliance services delivered 100% online across India.
            ICAI-registered Chartered Accountants. Transparent pricing. Fast turnaround.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none"
          onTouchStart={onTabTouchStart}
          onTouchEnd={onTabTouchEnd}
          role="tablist"
          aria-label="Service categories"
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap min-h-[40px] ${
                activeCategory === cat
                  ? 'bg-[#f4b942] text-[#0d1b2a] shadow-md'
                  : 'bg-[#162032] text-white border border-[#1e3a54] hover:border-[#f4b942] hover:text-[#f4b942]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filtered.map((service, index) => (
            <article
              key={service.id}
              className="reveal service-card flex flex-col"
              style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
              aria-label={service.title}
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl leading-none" aria-hidden="true">
                      <service.icon />
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        {service.title}
                      </h3>
                      {service.isPopular && (
                        <span className="inline-block mt-1 bg-[#f4b942]/15 text-[#f4b942] border border-[#f4b942]/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <RiFireLine className="inline mr-1" /> {service.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Service List (first 4) */}
                <ul className="space-y-1.5 mb-4">
                  {service.services.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#94a3b8] text-xs sm:text-sm">
                      <span className="text-[#f4b942] mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                  {service.services.length > 4 && (
                    <li className="text-[#f4b942] text-xs font-semibold pl-5">
                      +{service.services.length - 4} more services
                    </li>
                  )}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-[#1e3a54] pt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[#94a3b8] text-[10px] uppercase tracking-wide font-semibold">Starting from</p>
                  <p className="text-[#f4b942] font-extrabold text-base sm:text-lg">{service.startingPrice}</p>
                </div>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap min-h-[40px]"
                  aria-label={`Get ${service.title} via WhatsApp`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get Service
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-[#94a3b8] text-sm mb-4">Not sure which service you need?</p>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I need help choosing the right CA service from Accu Nex.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#162032] hover:bg-[#1e3a54] border border-[#f4b942]/40 text-[#f4b942] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 min-h-[48px]"
          >
            <RiQuestionAnswerLine className="inline mr-1" /> Ask Our CA Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
