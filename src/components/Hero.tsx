import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Layers, Cpu, Globe, Gamepad2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { HeroCollage } from './VisualAssets';

interface HeroProps {
  onDiscussClick: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscussClick, onExploreClick }) => {
  const [activeDirectionIndex, setActiveDirectionIndex] = useState<number>(0);

  const studioDirections = [
    { label: 'Web Apps & Portals', icon: Globe },
    { label: 'AI Visuals & Video', icon: Sparkles },
    { label: 'Editorial & Books', icon: Layers },
    { label: 'Game Assets & Worlds', icon: Gamepad2 },
    { label: 'Interactive Systems', icon: Cpu },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDirectionIndex((prev) => (prev + 1) % studioDirections.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [studioDirections.length]);

  const CurrentIcon = studioDirections[activeDirectionIndex].icon;

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#141210] text-[#FAF8F5] border-b border-white/10">
      
      {/* Background Soft Studio Glow Pools */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-radial from-[#C85A32]/20 via-[#D59B63]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-radial from-amber-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Top Dynamic Direction Badge */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#FAF8F5] bg-white/10 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm backdrop-blur-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse shrink-0"></span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={studioDirections[activeDirectionIndex].label}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5 font-semibold text-[#F5C28B] truncate"
                >
                  <CurrentIcon className="w-3.5 h-3.5 text-[#F5C28B] shrink-0" />
                  <span className="truncate">{studioDirections[activeDirectionIndex].label}</span>
                </motion.div>
              </AnimatePresence>
              <span className="text-[#A09C94] font-normal shrink-0">| EK Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-white leading-[1.15] tracking-tight text-wrap">
              {siteContent.hero.title}
            </h1>

            {/* Subhead Explainer */}
            <p className="text-base sm:text-lg text-[#D5D0C5] leading-relaxed max-w-xl font-sans-body">
              {siteContent.hero.subtitle}
            </p>

            {/* Reassurance Micro-note */}
            <p className="text-xs sm:text-sm text-[#F5C28B] font-medium font-sans-body pt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0"></span>
              <span>{siteContent.hero.reassuranceNote}</span>
            </p>

            {/* Actions: Primary & Secondary with Terracotta Glow */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onDiscussClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C85A32] hover:bg-[#B04A26] text-white px-7 py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(200,90,50,0.4)] hover:shadow-[0_0_35px_rgba(200,90,50,0.65)] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              >
                <span>{siteContent.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onExploreClick && (
                <button
                  onClick={onExploreClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#FAF8F5] hover:text-white px-6 py-4 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider rounded-xl transition-colors border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 cursor-pointer"
                >
                  <span>{siteContent.hero.secondaryCta}</span>
                </button>
              )}
            </div>

            {/* Studio Key Highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-left font-mono">
              <div>
                <div className="text-lg font-bold text-white">AI + Code</div>
                <div className="text-[10px] text-[#A09C94] uppercase tracking-wider">Технологии</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Direct</div>
                <div className="text-[10px] text-[#A09C94] uppercase tracking-wider">Без посредников</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#F5C28B]">0 to 1</div>
                <div className="text-[10px] text-[#A09C94] uppercase tracking-wider">Смыслы &amp; Продукт</div>
              </div>
            </div>

          </div>

          {/* Right Visual Collage Component */}
          <div className="lg:col-span-6">
            <HeroCollage />
          </div>

        </div>
      </div>
    </section>
  );
};
