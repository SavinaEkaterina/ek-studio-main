import React from 'react';

export const Marquee: React.FC = () => {
  const tickerText = [
    'AI VISUALS',
    'ИНТЕРАКТИВНЫЙ ВЕБ',
    'ИГРОВЫЕ МИРЫ',
    'АВТОРСКИЕ КНИГИ',
    'ВИДЕО & ПРОМО',
    'DIGITAL EDITORIAL',
  ];

  return (
    <div className="w-full bg-[#1A1A18] text-[#FAF8F5] py-4 border-y border-[#3A3832] overflow-hidden relative select-none z-20">
      {/* Subtle Side Fade Overlay */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#1A1A18] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#1A1A18] to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap animate-marquee group cursor-default">
        {/* First Loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {tickerText.map((item, index) => (
            <React.Fragment key={`loop1-${index}`}>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#EAE7E1] hover:text-[#C85A32] transition-colors">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C85A32] opacity-80 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Loop (for seamless continuous infinite marquee) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {tickerText.map((item, index) => (
            <React.Fragment key={`loop2-${index}`}>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#EAE7E1] hover:text-[#C85A32] transition-colors">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C85A32] opacity-80 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>

        {/* Third Loop (ensures ultra-wide monitor coverage) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {tickerText.map((item, index) => (
            <React.Fragment key={`loop3-${index}`}>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#EAE7E1] hover:text-[#C85A32] transition-colors">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C85A32] opacity-80 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
