import React, { useState, useEffect } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('accunex_disclaimer');
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('accunex_disclaimer', '1');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Tax advisory disclaimer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-[#162032] border border-[#1e3a54] rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
        {/* Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#f4b942]/20 border border-[#f4b942]/40 rounded-xl flex items-center justify-center flex-shrink-0">
            <RiErrorWarningLine className="text-xl" />
          </div>
          <h2 className="text-white font-bold text-lg leading-tight">Tax Advisory Disclaimer</h2>
        </div>

        <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
          The information provided on this website is for general informational purposes only and does not constitute professional tax or legal advice.
        </p>
        <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
          Tax laws change frequently. For advice specific to your situation, please consult one of our <span className="text-[#f4b942] font-semibold">ICAI-registered Chartered Accountants</span> directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={dismiss}
            className="flex-1 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] py-3 px-6 rounded-full font-bold text-sm transition-colors min-h-[48px]"
          >
            I Understand
          </button>
          <a
            href="https://wa.me/919999999999?text=Hi! I need tax advice from Accu Nex."
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-6 rounded-full font-bold text-sm transition-colors min-h-[48px]"
          >
            Talk to a CA
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
