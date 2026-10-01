/**
 * WelcomeModal — Professional entry popup
 * Shows once per session (sessionStorage flag)
 * Design: Navy card, gold accents, ICAI badge, dual CTA
 */
import React, { useState, useEffect } from 'react';
import { BRAND } from '../utils/constants';
import accunexLogo from '../assets/accunexLogo.png';

const WA_LINK = `https://wa.me/${BRAND.whatsapp}?text=Hi%21%20I%20need%20a%20free%20CA%20consultation%20from%20Accu%20Nex%20Taxation.`;

const WelcomeModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('accunex_welcome_v2');
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('accunex_welcome_v2', '1');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Accu Nex Taxation Services"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-[6px]"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-[#0d1b2a] border border-[#1e3a54] rounded-2xl sm:rounded-3xl w-full max-w-[420px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden animate-modal-in">

        {/* Gold top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#f4b942] via-[#ffd166] to-[#f4b942]" />

        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={accunexLogo}
              alt="Accu Nex Taxation Services"
              className="h-9 w-auto object-contain"
            />
          </div>
          <button
            onClick={dismiss}
            className="w-8 h-8 rounded-full bg-[#162032] hover:bg-[#1e3a54] flex items-center justify-center text-[#94a3b8] hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* ICAI Trust Badge */}
        <div className="mx-6 mb-4 flex items-center gap-2 bg-[#f4b942]/10 border border-[#f4b942]/25 rounded-xl px-4 py-2.5">
          <div className="w-7 h-7 rounded-full bg-[#f4b942] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0d1b2a]">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
          <div>
            <p className="text-[#f4b942] font-bold text-xs leading-none">ICAI Registered CA Firm</p>
            <p className="text-[#94a3b8] text-[10px] leading-none mt-0.5">Trusted by 500+ clients across India</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-2">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-snug mb-2">
            Get a <span className="text-[#f4b942]">Free Tax Consultation</span> Today
          </h2>
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
            Talk to an ICAI-registered Chartered Accountant about your GST, income tax, company registration, or any compliance need — <span className="text-white font-semibold">100% online, zero obligation.</span>
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {['GST Returns', 'ITR Filing', 'Company Reg.', 'TDS Compliance', 'ROC Filing', 'MSME Reg.'].map((s) => (
              <span key={s} className="text-[10px] font-semibold bg-[#162032] border border-[#1e3a54] text-[#94a3b8] rounded-full px-2.5 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-5 rounded-xl font-bold text-sm transition-colors min-h-[48px] shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href={`tel:${BRAND.phone}`}
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] py-3.5 px-5 rounded-xl font-bold text-sm transition-colors min-h-[48px] shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Disclaimer footer */}
        <div className="px-6 pb-5 border-t border-[#1e3a54] pt-4">
          <p className="text-[#475569] text-[10px] leading-relaxed text-center">
            ⚠ Information on this website is for general guidance only and does not constitute professional tax/legal advice. For situation-specific advice, consult our ICAI-registered CAs directly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WelcomeModal;
