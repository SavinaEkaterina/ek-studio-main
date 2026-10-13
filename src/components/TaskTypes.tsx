import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent, EntrySituation } from '../data/siteContent';
import { 
  CheckCircle2, 
  Lightbulb, 
  FolderOpen, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  Compass,
  MessageSquare,
  Check
} from 'lucide-react';

interface EntrySituationsProps {
  onSelectSituation: (situation: EntrySituation) => void;
}

// Mapping of unique scenario illustrations to their specified paths & backup fallbacks
const scenarioImages: Record<string, { url: string; fallback: string }> = {
  idea: {
    url: `${import.meta.env.BASE_URL}assets/situations/idea-light_opt.jpg`,
    fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
  },
  website: {
    url: `${import.meta.env.BASE_URL}assets/situations/task-ready.jpg`,
    fallback: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80"
  },
  visual: {
    url: `${import.meta.env.BASE_URL}assets/situations/unusual-creative.jpg`,
    fallback: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
  },
  automation: {
    url: `${import.meta.env.BASE_URL}assets/situations/complex-tangle.jpg`,
    fallback: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
  }
};

export const TaskTypes: React.FC<EntrySituationsProps> = ({ onSelectSituation }) => {
  const { entrySituations } = siteContent;
  const [activeSituationId, setActiveSituationId] = useState<string>(entrySituations.items[0].id);

  const activeSituation = entrySituations.items.find(item => item.id === activeSituationId) || entrySituations.items[0];
  const activeImageData = scenarioImages[activeSituation.id] || scenarioImages.idea;

  const getIcon = (iconName: EntrySituation['iconName']) => {
    switch (iconName) {
      case 'task': return CheckCircle2;
      case 'idea': return Lightbulb;
      case 'materials': return FolderOpen;
      case 'problem': return HelpCircle;
      case 'custom': return Sparkles;
      default: return Sparkles;
    }
  };

  return (
    <section id="situations" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#EAE7E1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
            <span>Точка входа</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight">
            {entrySituations.sectionTitle}
          </h2>
          <p className="text-base text-[#5A5752] leading-relaxed font-sans-body">
            {entrySituations.sectionSubtitle}
          </p>
        </div>

        {/* Asymmetric Bento-Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (7 cols): Compact Interactive Bento List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-[#8C8880] uppercase tracking-wider font-semibold pb-0.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C85A32]" />
              <span>Выберите ваш исходный сценарий:</span>
            </div>

            <div className="space-y-2.5">
              {entrySituations.items.map((item, idx) => {
                const IconComponent = getIcon(item.iconName);
                const isSelected = activeSituationId === item.id;
                const isHero = idx === 0;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveSituationId(item.id);
                    }}
                    className={`group cursor-pointer rounded-2xl p-4 sm:p-4.5 transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1A1A18] text-[#FAF8F5] border-[#1A1A18] shadow-md scale-[1.01]'
                        : isHero
                        ? 'bg-[#F4F0E8] border-[#D59B63]/60 hover:border-[#C85A32] text-[#1A1A18]'
                        : 'bg-[#F4F0E8] border-[#E0DBCF] hover:border-[#1A1A18]/40 text-[#1A1A18]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#C85A32] text-white' : 'bg-[#EAE7E1] text-[#1A1A18]'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-mono font-bold ${
                              isSelected ? 'text-[#C85A32]' : 'text-[#8C8880]'
                            }`}>
                              {item.number}
                            </span>
                            <h3 className={`text-base sm:text-lg font-serif-display font-bold ${
                              isSelected ? 'text-white' : 'text-[#1A1A18]'
                            }`}>
                              {item.title}
                            </h3>
                          </div>
                          <p className={`text-[11px] font-mono font-semibold pt-0.5 ${
                            isSelected ? 'text-[#D5D0C5]' : 'text-[#C85A32]'
                          }`}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        isSelected 
                          ? 'bg-[#C85A32] border-[#C85A32] text-white' 
                          : 'border-[#E0DBCF] group-hover:border-[#1A1A18] text-[#8C8880]'
                      }`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3 h-3" />}
                      </div>
                    </div>

                    <p className={`text-xs font-sans-body leading-relaxed pt-2 ${
                      isSelected ? 'text-[#D5D0C5]' : 'text-[#5A5752]'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Sticky Dynamic Flagship Scenario Preview Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between bg-[#1A1A18] text-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#3A3832] shadow-xl space-y-4 relative overflow-hidden self-start">
            
            {/* Ambient Background Warm Radial Glow */}
            <div className="absolute inset-0 bg-radial from-[#C85A32]/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="bg-[#C85A32] text-white text-[10px] font-mono px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                  Сценарий #{activeSituation.number}
                </span>
                <span className="text-[11px] font-mono text-amber-200/80">EK Studio Flow</span>
              </div>

              {/* Animated Compact Image Preview Container (aspect-[16/9]) */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/15 shadow-md bg-[#242320] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSituation.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeImageData.url}
                      alt={activeSituation.title}
                      width={1024}
                      height={572}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (activeImageData.fallback && target.src !== activeImageData.fallback) {
                          target.src = activeImageData.fallback;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-amber-200 uppercase tracking-widest font-semibold z-10">
                      <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse"></span>
                        <span className="truncate max-w-[180px]">{activeSituation.title}</span>
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Title & Description */}
              <div className="space-y-1 pt-0.5">
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-white tracking-tight">
                  {activeSituation.title}
                </h3>
                <p className="text-[11px] font-mono text-[#C85A32] font-semibold uppercase tracking-wider">
                  {activeSituation.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#D5D0C5] leading-relaxed font-sans-body">
                  {activeSituation.description}
                </p>
              </div>

              {/* Scenario Action Plan Checklist */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-amber-200 uppercase tracking-wider font-semibold">
                  Что происходит дальше:
                </div>
                <ul className="space-y-1.5 text-xs text-[#EAE7E1] font-sans-body">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0"></span>
                    <span>Обсуждаем задумку в свободном формате</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0"></span>
                    <span>Формируем смысловую структуру и формат</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0"></span>
                    <span>Переходим к прототипу без бюрократии</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct CTA button for selected situation */}
            <div className="relative z-10 pt-3 border-t border-white/10">
              <button
                onClick={() => onSelectSituation(activeSituation)}
                className="w-full bg-[#C85A32] hover:bg-[#B04A26] text-white py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-[0_0_20px_rgba(200,90,50,0.5)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Обсудить этот сценарий</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F4F0E8] border border-[#E0DBCF] text-center max-w-3xl mx-auto space-y-1.5 shadow-xs">
          <p className="text-base sm:text-lg font-serif-display font-bold text-[#1A1A18]">
            {entrySituations.bottomNote}
          </p>
          <p className="text-xs sm:text-sm text-[#7A7670] font-sans-body max-w-xl mx-auto">
            {entrySituations.reassuranceQuote}
          </p>
        </div>

      </div>
    </section>
  );
};

