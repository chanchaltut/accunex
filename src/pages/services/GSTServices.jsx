import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { RiMessage3Line } from 'react-icons/ri';
import { SERVICES, BRAND } from '../../utils/constants';
import CTABanner from '../../components/CTABanner';
import FAQSection from '../../components/FAQSection';

const service = SERVICES.find(s => s.slug === 'gst-services');

const GSTServices = () => {
  if (!service) return null;

  return (
    <>
      <Helmet>
        <title>GST Services — Registration, Returns & Audit | Accu Nex Taxation</title>
        <meta name="description" content="Complete GST services by ICAI-registered CAs: GST registration, GSTR-1, GSTR-3B, GSTR-9, LUT, GST audit, notices & refunds. 100% online across India. Starting ₹999." />
        <meta property="og:title" content="GST Services — Registration, Returns & Audit | Accu Nex Taxation" />
        <link rel="canonical" href="https://accunextaxation.com/services/gst-services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "GST Services",
          "description": service.overview,
          "provider": { "@type": "AccountingService", "name": "Accu Nex Taxation Services", "url": "https://accunextaxation.com" },
          "areaServed": "India",
          "offers": { "@type": "Offer", "price": "999", "priceCurrency": "INR" }
        })}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-[#0d1b2a] dot-bg pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 border-b border-[#1e3a54]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-tag">CA Service</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 mb-5">
            <service.icon /> {service.title}
          </h1>
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {service.overview}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-7 py-4 rounded-full font-bold text-sm sm:text-base hover:-translate-y-0.5 transition-all min-h-[52px]"
            >
              <RiMessage3Line className="inline mr-1" /> Get {service.shortTitle} — {service.startingPrice}
            </a>
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#f4b942] text-[#f4b942] px-7 py-4 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 min-h-[52px]">
              ← All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-[#162032] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Services list */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What's Included</h2>
            <ul className="space-y-3">
              {service.services.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-[#0d1b2a] border border-[#1e3a54] rounded-xl p-3 sm:p-4">
                  <span className="text-[#f4b942] font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-white text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info */}
          <div>
            <div className="bg-[#0d1b2a] border border-[#f4b942]/30 rounded-2xl p-6 sm:p-8 mb-6">
              <h3 className="text-white font-bold text-xl mb-5">Service Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#1e3a54] pb-3">
                  <span className="text-[#94a3b8] text-sm">Starting Price</span>
                  <span className="text-[#f4b942] font-extrabold text-xl">{service.startingPrice}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#1e3a54] pb-3">
                  <span className="text-[#94a3b8] text-sm">Timeline</span>
                  <span className="text-white font-semibold text-sm">{service.timeline}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#1e3a54] pb-3">
                  <span className="text-[#94a3b8] text-sm">Mode</span>
                  <span className="text-white font-semibold text-sm">100% Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8] text-sm">Provider</span>
                  <span className="text-white font-semibold text-sm">ICAI Registered CA</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] py-4 px-6 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 min-h-[56px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <FAQSection />
      <CTABanner />
    </>
  );
};

export default GSTServices;
