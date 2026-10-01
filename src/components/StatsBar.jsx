import React, { useEffect, useRef } from 'react';
import { STATS } from '../utils/constants';

const StatsBar = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  const animateCounter = (el, target, isDecimal = false) => {
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? (eased * target).toFixed(1)
        : Math.floor(eased * target);
      if (el) el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
      else if (el) el.textContent = isDecimal ? target.toFixed(1) : target;
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            countersRef.current.forEach((el, i) => {
              if (el && STATS[i]) {
                const isDecimal = STATS[i].number % 1 !== 0;
                animateCounter(el, STATS[i].number, isDecimal);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4b942] py-8 sm:py-10 md:py-12"
      aria-label="Company statistics"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`text-center px-2 ${
                i < STATS.length - 1 ? 'md:border-r md:border-[#0d1b2a]/20' : ''
              }`}
            >
              <div className="flex items-baseline justify-center gap-0.5">
                <span
                  ref={(el) => (countersRef.current[i] = el)}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d1b2a] tabular-nums"
                >
                  0
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0d1b2a]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[#0d1b2a]/80 text-xs sm:text-sm font-semibold mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
