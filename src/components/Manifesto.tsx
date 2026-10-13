import React from 'react';
import { Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const Manifesto: React.FC = () => {
  const { manifesto } = siteContent;

  const icons = [Layers, Cpu, ArrowUpRight];

  return (
    <section id="manifesto" className="py-20 lg:py-24 bg-[#1A1A18] text-[#FAF8F5] relative overflow-hidden border-y border-[#3A3832]">
      
      {/* Subtle Warm Radial Background Glow */}
      <div className="absolute inset-0 bg-radial from-[#C85A32]/20 via-amber-600/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#C85A32] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32] animate-pulse" />
            <span>ПОДХОД EK STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-white tracking-tight leading-[1.15]">
            {manifesto.sectionTitle}
          </h2>

          <p className="text-base text-[#D5D0C5] leading-relaxed font-sans-body">
            {manifesto.sectionSubtitle}
          </p>
        </div>

        {/* 3 Peculiarities Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {manifesto.features.map((feature, index) => {
            const Icon = icons[index] || Sparkles;
            return (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 backdrop-blur-xs hover:border-[#C85A32]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif-display font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#D5D0C5] leading-relaxed font-sans-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

