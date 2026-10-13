import React, { useState } from 'react';
import { siteContent, PossibleFormat } from '../data/siteContent';
import { 
  Globe, 
  Layers, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface PossibleFormatsProps {
  onSelectFormat?: (format: PossibleFormat) => void;
  onDiscussClick?: () => void;
}

export const PossibleFormats: React.FC<PossibleFormatsProps> = ({ onDiscussClick }) => {
  const { possibleFormats } = siteContent;

  const getFormatIcon = (iconName: PossibleFormat['iconName']) => {
    switch (iconName) {
      case 'web': return Globe;
      case 'visual': return Layers;
      case 'content': return Cpu;
      case 'creative': return BookOpen;
      case 'custom': return Sparkles;
      default: return Sparkles;
    }
  };

  return (
    <section id="formats" className="py-16 lg:py-24 bg-[#FAF8F5] text-[#1A1A18] border-t border-b border-[#EAE7E1] relative overflow-hidden">
      
      {/* Background Soft Warm Glow Pools */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial from-[#C85A32]/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest font-semibold bg-[#F4F0E8] border border-[#E0DBCF] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse"></span>
            <span>Формат зависит от вашей задачи</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
            {possibleFormats.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#5A5752] leading-relaxed font-sans-body">
            {possibleFormats.sectionSubtitle}
          </p>
        </div>

        {/* Format Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {possibleFormats.items.map((item, index) => {
            const Icon = getFormatIcon(item.iconName);
            const isFeatured = index === 0;

            return (
              <div 
                key={item.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 border relative overflow-hidden group hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-[#F4F0E8] border-[#D59B63]/60 hover:border-[#C85A32] shadow-xs'
                    : 'bg-white border-[#E0DBCF] hover:border-[#C85A32] shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C85A32] font-bold">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4F0E8] text-[#C85A32] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[#C85A32] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#1A1A18] group-hover:text-[#C85A32] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4742] leading-relaxed font-sans-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE7E1] flex items-center justify-between text-xs font-mono text-[#8C8880]">
                  <span>Готовый результат</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout FAQ Box with Accent Action Button */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F0E8] border border-[#E0DBCF] text-[#1A1A18] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs relative">
          
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-wider font-semibold">
              <HelpCircle className="w-4 h-4 text-[#C85A32]" />
              <span>Частый вопрос</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-serif-display font-bold text-[#1A1A18]">
              «{possibleFormats.faqQuestion}»
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5752] font-sans-body max-w-xl">
              {possibleFormats.faqAnswer}
            </p>
          </div>

          <button
            onClick={onDiscussClick}
            className="w-full sm:w-auto shrink-0 bg-[#C85A32] hover:bg-[#B04A26] text-white px-7 py-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-[0_0_20px_rgba(200,90,50,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Начать с разговора</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

