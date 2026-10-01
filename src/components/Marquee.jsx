import React from 'react';
import { MARQUEE_ITEMS } from '../utils/constants';

const Marquee = () => {
  // Double items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="bg-[#f4b942] py-3 sm:py-4 overflow-hidden"
      aria-label="Services marquee"
      aria-hidden="true"
    >
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-4 sm:px-6 text-[#0d1b2a] font-semibold text-xs sm:text-sm whitespace-nowrap"
            >
              <span className="text-[#0d1b2a]/50 text-lg leading-none" aria-hidden="true">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
