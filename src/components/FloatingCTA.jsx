/**
 * FloatingCTA — Professional floating buttons
 * Desktop: WhatsApp on LEFT, Call on RIGHT (mid-screen, vertical)
 * Mobile: Full-width bottom bar (2 columns)
 */
import React, { useState, useEffect } from 'react';
import { BRAND } from '../utils/constants';

const WA_LINK = `https://wa.me/${BRAND.whatsapp}?text=Hi%21%20I%20need%20CA%20services%20from%20Accu%20Nex%20Taxation.`;
const CALL_LINK = `tel:${BRAND.phone}`;

/* ─── WhatsApp SVG ─── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Phone SVG ─── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          DESKTOP FLOATING BUTTONS (hidden on mobile)
          WhatsApp = left side | Call = right side
      ═══════════════════════════════════════════ */}
      <div
        className={`hidden lg:flex flex-col gap-0 fixed left-0 top-1/2 -translate-y-1/2 z-[80] transition-all duration-500 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        {/* WhatsApp — left */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-0 bg-[#25d366] text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          style={{ borderRadius: '0 8px 0 0' }}
        >
          <div className="flex items-center gap-2 px-3 py-3.5">
            <WhatsAppIcon />
          </div>
          {/* Slide-out label on hover */}
          <span className="max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out font-semibold text-sm pr-0 group-hover:pr-3">
            WhatsApp Us
          </span>
        </a>

        <a
          href={CALL_LINK}
          aria-label="Call us"
          className="group flex items-center gap-0 bg-[#1a3a5c] border-t border-[#f4b942]/30 text-white shadow-lg hover:bg-[#f4b942] hover:text-[#0d1b2a] transition-all duration-300 overflow-hidden"
          style={{ borderRadius: '0 0 8px 0' }}
        >
          <div className="flex items-center gap-2 px-3 py-3.5">
            <PhoneIcon />
          </div>
          <span className="max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out font-semibold text-sm pr-0 group-hover:pr-3">
            Call Now
          </span>
        </a>
      </div>

      {/* WhatsApp — right side (desktop only) */}
      <div
        className={`hidden lg:flex flex-col gap-0 fixed right-0 top-1/2 -translate-y-1/2 z-[80] transition-all duration-500 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Free Consultation"
          className="group flex items-center flex-row-reverse gap-0 bg-[#f4b942] text-[#0d1b2a] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          style={{ borderRadius: '8px 0 0 0' }}
        >
          <div className="flex items-center gap-2 px-3 py-3.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          </div>
          <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out font-bold text-sm pl-0 group-hover:pl-3">
            Free Consultation
          </span>
        </a>

        <a
          href={CALL_LINK}
          aria-label="Call us now"
          className="group flex items-center flex-row-reverse gap-0 bg-[#0d1b2a] border-t border-[#1e3a54] text-white shadow-lg hover:bg-[#162032] transition-all duration-300 overflow-hidden"
          style={{ borderRadius: '0 0 0 8px' }}
        >
          <div className="flex items-center gap-2 px-3 py-3.5">
            <PhoneIcon />
          </div>
          <span className="max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out font-semibold text-sm pl-0 group-hover:pl-3 text-white">
            +91 {BRAND.phone}
          </span>
        </a>
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE BOTTOM BAR (hidden on desktop)
      ═══════════════════════════════════════════ */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[80] lg:hidden transition-transform duration-300 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-label="Quick contact"
      >
        <div className="grid grid-cols-2 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] active:bg-[#1da851] text-white font-bold text-[13px] py-4 min-h-[54px] transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <a
            href={CALL_LINK}
            className="flex items-center justify-center gap-2 bg-[#f4b942] active:bg-[#d9a230] text-[#0d1b2a] font-bold text-[13px] py-4 min-h-[54px] transition-colors"
            aria-label="Call Now"
          >
            <PhoneIcon />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
