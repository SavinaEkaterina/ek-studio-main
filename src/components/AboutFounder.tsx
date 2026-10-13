import React from 'react';
import { siteContent } from '../data/siteContent';
import { UserCheck, Sparkles } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  const { aboutFounder } = siteContent;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE7E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Human Non-Resume Prose */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
              <span>За проектом — человек</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
              {aboutFounder.sectionTitle}
            </h2>

            {/* Paragraphs matching prompt exactly */}
            <div className="space-y-4 pt-2 text-base sm:text-lg text-[#3A3732] leading-relaxed font-sans-body">
              {aboutFounder.textParagraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={
                    index === 4 
                      ? "font-serif-display font-bold text-xl text-[#1A1A18] pt-2 border-l-2 border-[#C85A32] pl-4" 
                      : index === 0 
                      ? "text-[#1A1A18] font-medium" 
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature & Role */}
            <div className="pt-6 border-t border-[#EAE7E1] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#1A1A18] text-[#FAF8F5] flex items-center justify-center font-serif-display font-bold text-base shadow-sm">
                ЕК
              </div>
              <div>
                <div className="text-lg font-serif-display font-bold text-[#1A1A18]">
                  {aboutFounder.founderName}
                </div>
                <div className="text-xs text-[#7A7670] uppercase tracking-wider font-sans-body">
                  {aboutFounder.founderTitle}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer Editorial Frame with Soft Warm Border */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F0E8] border border-[#E0DBCF] shadow-md group">
                
                {/* Founder Photo */}
                <img
                  src={aboutFounder.founderImageUrl ? (aboutFounder.founderImageUrl.startsWith('http') ? aboutFounder.founderImageUrl : `${import.meta.env.BASE_URL}${aboutFounder.founderImageUrl.replace(/^\//, '')}`) : `${import.meta.env.BASE_URL}assets/ekaterina_savina.jpg`}
                  alt={aboutFounder.founderName}
                  width={2048}
                  height={2048}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = "true";
                      target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700 filter contrast-[1.02]"
                />

                {/* Subtle Gradient Scrim at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between text-xs font-mono text-white/90">
                    <span className="bg-[#1A1A18]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[#E0DBCF] border border-[#E0DBCF]/30">EK STUDIO</span>
                    <span className="bg-[#C85A32] text-white px-2.5 py-1 rounded font-semibold">Основатель</span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="space-y-1 text-white">
                    <div className="font-serif-display font-bold text-2xl drop-shadow-sm">
                      Екатерина
                    </div>
                    <p className="text-xs text-[#EAE7E1] font-sans-body drop-shadow-xs">
                      Поиск смысла, структурирование и сопровождение от первой мысли до реализации
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#E2C36D] border-t border-white/20">
                      <span>Основатель EK Studio</span>
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Прямой диалог</span>
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
