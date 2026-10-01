/**
 * Reusable Service Page Template
 * Used by all 14 service pages to display consistent layout
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BRAND } from '../../utils/constants';
import { RiMessage3Line } from 'react-icons/ri';
import CTABanner from '../../components/CTABanner';
import FAQSection from '../../components/FAQSection';

const ServicePage = ({ service }) => {
  if (!service) return (
    <div className="min-h-screen bg-[#0d1b2a] flex items-center justify-center">
      <p className="text-[#94a3b8]">Service not found.</p>
    </div>
  );

  const pageUrl = `https://accunextaxation.com/services/${service.slug}`;

  return (
    <>
      <Helmet>
        <title>{service.title} — {service.shortDesc.slice(0, 50)} | Accu Nex Taxation</title>
        <meta name="description" content={`${service.shortDesc} ICAI-registered CAs. 100% online across India. Starting ${service.startingPrice}.`} />
        <meta property="og:title" content={`${service.title} | Accu Nex Taxation Services`} />
        <meta property="og:description" content={service.shortDesc} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.overview,
          "provider": {
            "@type": "AccountingService",
            "name": "Accu Nex Taxation Services",
            "url": "https://accunextaxation.com"
          },
          "areaServed": "India",
          "serviceType": "Financial Advisory",
          "offers": {
            "@type": "Offer",
            "price": service.startingPrice.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://accunextaxation.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://accunextaxation.com/#services" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": pageUrl }
          ]
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="bg-[#0d1b2a] border-b border-[#1e3a54] pt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto py-3">
          <ol className="flex items-center gap-2 text-xs text-[#64748b]" aria-label="Breadcrumb">
            <li><Link to="/" className="hover:text-[#f4b942] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><a href="/#services" className="hover:text-[#f4b942] transition-colors">Services</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#f4b942] font-semibold" aria-current="page">{service.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-[#0d1b2a] dot-bg pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center pt-10 sm:pt-12">
          <div className="section-tag">{service.category}</div>
          <div className="text-5xl sm:text-6xl mb-4 mt-4" aria-hidden="true"><service.icon className="mx-auto" /></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {service.title}
          </h1>
          <p className="text-[#94a3b8] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {service.overview}
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { label: 'Starting From', value: service.startingPrice },
              { label: 'Timeline', value: service.timeline },
              { label: 'Mode', value: '100% Online' },
              { label: 'By', value: 'ICAI CA' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#162032] border border-[#1e3a54] rounded-xl px-4 py-2.5 text-center">
                <p className="text-[#f4b942] font-bold text-sm sm:text-base">{stat.value}</p>
                <p className="text-[#64748b] text-[10px] sm:text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20b858] text-white px-7 py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 min-h-[52px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Service via WhatsApp
            </a>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-7 py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 min-h-[52px]"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="bg-[#162032] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What's Included in {service.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {service.services.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#0d1b2a] border border-[#1e3a54] hover:border-[#f4b942]/40 rounded-xl p-3 sm:p-4 transition-colors"
              >
                <span className="text-[#f4b942] font-extrabold flex-shrink-0 mt-0.5 text-lg">✓</span>
                <span className="text-white text-sm sm:text-base leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#0d1b2a] py-10 sm:py-12 px-4 sm:px-6 text-center border-t border-[#1e3a54]">
        <div className="max-w-xl mx-auto">
          <p className="text-[#94a3b8] text-sm mb-2">Ready to get started?</p>
          <p className="text-white font-semibold text-lg mb-5">
            Message us on WhatsApp for a free quote on {service.title}
          </p>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 min-h-[48px]"
          >
            <RiMessage3Line className="inline mr-1" /> Get Free Quote
          </a>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  );
};

export default ServicePage;
