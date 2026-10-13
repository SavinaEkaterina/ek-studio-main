import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface UnusualTaskProps {
  onDiscussClick: () => void;
}

export const UnusualTask: React.FC<UnusualTaskProps> = ({ onDiscussClick }) => {
  const { finalCta } = siteContent;

  return (
    <section className="py-20 lg:py-24 bg-[#F4F0E8] border-b border-[#E0DBCF] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C85A32]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10 text-center">
        
        {/* Micro Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest font-semibold bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E0DBCF] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>АВТОРСКИЙ ПОДХОД &bull; БЕЗ БЮРОКРАТИИ</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
          {finalCta.sectionTitle}
        </h2>

        {/* Subtitle / Offer Text */}
        <p className="text-base sm:text-lg text-[#4A4742] leading-relaxed max-w-2xl mx-auto font-sans-body">
          {finalCta.description}
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onDiscussClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#1A1A18] hover:bg-[#C85A32] text-white px-8 py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
          >
            <span>{finalCta.ctaButton}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};




