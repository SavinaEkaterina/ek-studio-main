import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  Presentation, 
  Gamepad2, 
  Globe, 
  Sparkles,
  Layers,
  Smartphone,
  Wifi,
  Heart,
  ChevronRight,
  Eye,
  Film,
  Sparkle
} from 'lucide-react';

// Hero Layered Asymmetric Collage with Motion parallax floating and screen cycling
export const HeroCollage: React.FC = () => {
  const [activeTeaser, setActiveTeaser] = useState<number>(0);

  const teasers = [
    {
      id: 'petersburg',
      tag: 'AI Video · VK Клипы',
      title: 'Прогулка по Петербургу',
      subtitle: 'Екатерина II на Дворцовой площади',
      image: `${import.meta.env.BASE_URL}assets/petersburg_cover.jpg`,
      badgeColor: 'bg-[#C85A32]'
    },
    {
      id: 'lumi',
      tag: 'Game Assets · Персонажи',
      title: 'Мир Луми',
      subtitle: 'Интерактивная развивающая среда',
      image: `${import.meta.env.BASE_URL}assets/lumi_retry.webp`,
      badgeColor: 'bg-[#2E4836]'
    },
    {
      id: 'villa',
      tag: 'Web App · Интерфейсы',
      title: 'Digital Presentation',
      subtitle: 'Архитектура & Пространство',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badgeColor: 'bg-[#1A1A18]'
    }
  ];

  // Auto-cycle screen teasers every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTeaser((prev) => (prev + 1) % teasers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [teasers.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center p-2 select-none overflow-hidden sm:overflow-visible">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#C85A32]/10 via-amber-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

      {/* 1. Top Background Image Card (Founder Portrait) - Floating Motion */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-4 w-[65%] h-[68%] rounded-2xl overflow-hidden shadow-lg z-10 border border-[#EBE6DC] bg-[#E2DBD0] group cursor-pointer"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/ya.jpg`}
          alt="Екатерина — Основатель EK Studio"
          width={2048}
          height={2048}
          fetchPriority="high"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallback) {
              target.dataset.fallback = "true";
              target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
            }
          }}
          className="w-full h-full object-cover object-center opacity-95 filter contrast-[1.02] brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white text-[10px] font-mono flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
          <Sparkles className="w-3 h-3 text-amber-300 animate-spin-slow" />
          <span>Екатерина Савина · Основатель</span>
        </div>
      </motion.div>

      {/* 2. Foreground Main Centerpiece: Interactive Laptop Mockup with Dynamic Screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-2 left-0 sm:left-2 w-[82%] sm:w-[78%] rounded-xl shadow-2xl z-20 overflow-hidden border border-[#DCD8D0] bg-[#1A1A18] transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-[0_20px_50px_rgba(200,90,50,0.25)]"
      >
        {/* Laptop Screen Frame */}
        <div className="p-2 sm:p-3 bg-[#242320]">
          {/* Browser Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#383632]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E88A6E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#E5B56A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#82B393]"></span>
            </div>
            <span className="text-[9px] font-mono text-[#A09C94] tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse"></span>
              ek-studio.ru/showcase
            </span>
            <div className="flex items-center gap-1 text-[9px] font-mono text-[#A09C94]">
              {activeTeaser + 1}/3
            </div>
          </div>

          {/* Dynamic Screen Content Carousel */}
          <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#140803] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={teasers[activeTeaser].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={teasers[activeTeaser].image}
                  alt={teasers[activeTeaser].title}
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  className="w-full h-full object-cover filter brightness-95"
                />
                
                {/* Dark Gradient Overlay for Typography Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badge & Title */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`${teasers[activeTeaser].badgeColor} text-white text-[9px] font-mono px-2 py-0.5 rounded font-semibold uppercase tracking-wider`}>
                      {teasers[activeTeaser].tag}
                    </span>
                    <span className="text-[10px] font-mono text-amber-200/90 flex items-center gap-1">
                      <Film className="w-3 h-3 text-amber-300" />
                      <span>Live Demo</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif-display font-bold text-white tracking-tight">
                    {teasers[activeTeaser].title}
                  </p>
                  <p className="text-[10px] text-[#EAE7E1] font-sans-body truncate opacity-90">
                    {teasers[activeTeaser].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Slide Dots Bar */}
            <div className="absolute top-2 right-2 z-30 flex items-center gap-1 bg-black/60 backdrop-blur-xs p-1 rounded-full border border-white/20">
              {teasers.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTeaser(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeTeaser === idx ? 'bg-[#C85A32] w-4' : 'bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Right Badge / Card - Motion Floating */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] right-0 w-[36%] aspect-[3/4] rounded-xl overflow-hidden shadow-xl z-30 border border-[#E5E0D5] bg-[#FAF8F5] transform rotate-3 hover:rotate-0 transition-transform duration-500 group cursor-pointer"
      >
        <img
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
          alt="Visual Details and Textures"
          className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-2 inset-x-2 text-white text-center p-1 space-y-0.5">
          <span className="text-[9px] font-mono text-amber-200 uppercase tracking-widest block">AI + Design</span>
          <span className="text-[10px] font-serif font-bold text-white block">Aesthetic Systems</span>
        </div>
      </motion.div>

    </div>
  );
};

// Task Visual Images
interface TaskImageProps {
  type: 'website' | 'visuals' | 'content' | 'idea';
}

export const TaskVisualImage: React.FC<TaskImageProps> = ({ type }) => {
  switch (type) {
    case 'website':
      return (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E2DBD0] border border-[#E0DBCF] shadow-xs group-hover:shadow-md transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
            alt="Website & Digital Product"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-[0.98]"
          />
        </div>
      );
    case 'visuals':
      return (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E2DBD0] border border-[#E0DBCF] shadow-xs group-hover:shadow-md transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
            alt="Visual Materials & Aesthetics"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-[0.98]"
          />
        </div>
      );
    case 'content':
      return (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E2DBD0] border border-[#E0DBCF] shadow-xs group-hover:shadow-md transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
            alt="Content & Media Showcase"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-[0.98]"
          />
        </div>
      );
    case 'idea':
      return (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E2DBD0] border border-[#E0DBCF] shadow-xs group-hover:shadow-md transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80"
            alt="Task or Idea Concept Space"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-[0.98]"
          />
        </div>
      );
    default:
      return null;
  }
};

// Project Artwork Image renderer
interface ProjectArtworkProps {
  id: string;
  type: string;
  imageUrl: string;
  title: string;
}

export const ProjectArtworkImage: React.FC<ProjectArtworkProps> = ({ id, type, imageUrl, title }) => {
  // Presentation Artwork for "Мы все разные" (matching Autism OS Guide)
  if (id === 'we_are_all_different' || type === 'presentation') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#E2DBD0] shadow-sm group-hover:shadow-md transition-all p-4 flex flex-col justify-between">
        
        {/* Background Paper Texture & Warm Ambient Glow */}
        <div className="absolute inset-0 bg-radial from-amber-100/30 via-transparent to-transparent pointer-events-none"></div>

        {/* Top Header Row */}
        <div className="relative z-10 flex items-center justify-between">
          {/* Green User Guide Badge */}
          <div className="bg-[#10B981] text-white px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-white" />
            <div className="text-left leading-tight">
              <div className="text-[9px] font-mono uppercase tracking-wider opacity-90">Руководство</div>
              <div className="text-[10px] font-bold">пользователя v.1.0</div>
            </div>
          </div>

          <span className="text-[10px] font-mono text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#BFDBFE] font-semibold flex items-center gap-1">
            <Presentation className="w-3 h-3 text-[#2563EB]" />
            <span>Образовательный гайд</span>
          </span>
        </div>

        {/* Center Diagram Graphic */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center gap-4 sm:gap-6">
          
          {/* Left Rugged Phone Sketch */}
          <div className="w-12 sm:w-16 h-16 sm:h-20 rounded-lg border-2 border-[#374151] bg-white p-1 flex flex-col justify-between shadow-xs -rotate-6">
            <div className="w-2 h-1 bg-[#374151] rounded-full mx-auto"></div>
            <div className="my-auto text-[8px] font-mono text-center text-[#6B7280]">ОС 1</div>
            <div className="w-3 h-1 bg-[#374151] rounded-full mx-auto"></div>
          </div>

          {/* Connection Pulse Line & Handshake */}
          <div className="flex flex-col items-center gap-1 text-[#2563EB]">
            <Wifi className="w-4 h-4 text-[#2563EB] animate-pulse" />
            <div className="flex items-center gap-1 bg-[#EFF6FF] px-3 py-1.5 rounded-full border border-[#2563EB]/30 shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]/20" />
              <span className="text-xs font-bold font-sans-body text-[#2563EB]">КОННЕКТ</span>
            </div>
          </div>

          {/* Right Smartphone Sketch */}
          <div className="w-12 sm:w-16 h-16 sm:h-20 rounded-xl border-2 border-[#374151] bg-white p-1 flex flex-col justify-between shadow-xs rotate-6">
            <div className="w-3 h-1 bg-[#374151] rounded-full mx-auto"></div>
            <div className="my-auto text-[8px] font-mono text-center text-[#6B7280]">ОС 2</div>
            <div className="w-2 h-2 rounded-full border border-[#374151] mx-auto"></div>
          </div>

        </div>

        {/* Slide Title & Subtitle */}
        <div className="relative z-10 text-center space-y-1">
          <h4 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1F2937] tracking-tight">
            Мы все разные
          </h4>
          <p className="text-xs sm:text-sm font-sans-body font-semibold text-[#2563EB]">
            Как установить «коннект» с одноклассником с аутизмом
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] font-mono text-[#6B7280]">
          <span>Презентация · 8 слайдов</span>
          <span className="text-[#2563EB] font-semibold">NotebookLM</span>
        </div>

      </div>
    );
  }

  // Video Artwork for Petersburg Walk (Catherine II / VK Clip)
  if (type === 'video' || id === 'petersburg_walk') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#1A120B] border border-[#D59B63]/60 shadow-md group-hover:shadow-lg transition-all p-3.5 flex flex-col justify-between">
        
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${import.meta.env.BASE_URL}${imageUrl.replace(/^\//, '')}`) : `${import.meta.env.BASE_URL}assets/petersburg_cover.jpg`}
            alt={title}
            width={941}
            height={1672}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-[#140803]/30 to-black/20"></div>
        </div>

        {/* Top Header Row */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="bg-[#140803]/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[#F5C28B] text-[10px] font-mono border border-[#D59B63]/50 flex items-center gap-1.5 font-semibold shadow-xs">
            <Play className="w-3 h-3 text-[#F5C28B] fill-[#F5C28B]" />
            <span>VK КЛИПЫ</span>
          </span>
          <span className="bg-[#C85A32] text-white text-[10px] font-mono px-2.5 py-1 rounded-md font-semibold tracking-wider shadow-xs">
            AI Video
          </span>
        </div>

        {/* Center Play Button Overlay */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#FAF8F5]/90 text-[#1A1A18] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#C85A32] group-hover:text-white transition-all duration-300">
            <Play className="w-6 h-6 ml-1 fill-current" />
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-2 border-t border-[#D59B63]/40 flex items-center justify-between text-[10px] font-mono text-[#F5C28B]">
          <span>Дворцовая площадь · Закат</span>
          <span className="text-white font-serif italic font-medium">Екатерина II</span>
        </div>

      </div>
    );
  }

  // Book Artwork for Evdokya
  if (type === 'book' || id === 'evdokya') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0D1527] border border-[#D4AF37]/40 shadow-md group-hover:shadow-lg transition-all p-3 flex flex-col justify-between">
        
        {/* Background Image with Starry Aurora Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt={title}
            width={1149}
            height={1792}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-[#0D1527]/40 to-[#0D1527]/60"></div>
        </div>

        {/* Ornate Golden Frame Overlay */}
        <div className="absolute inset-2 border border-[#D4AF37]/60 rounded-lg pointer-events-none z-10 flex flex-col justify-between p-3">
          <div className="flex justify-between text-[10px] text-[#D4AF37]">
            <span>✦</span>
            <span>✦</span>
          </div>
          <div className="flex justify-between text-[10px] text-[#D4AF37]">
            <span>✦</span>
            <span>✦</span>
          </div>
        </div>

        {/* Book Header Overlay */}
        <div className="relative z-20 text-center space-y-1 pt-2">
          <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#E2C36D] block font-medium">
            Детская сказка
          </span>
          <h4 className="text-2xl sm:text-3xl font-serif-display font-bold text-white tracking-wider drop-shadow-md">
            ЕВДОКИЯ
          </h4>
          <span className="text-[10px] font-serif tracking-[0.18em] text-[#E2C36D] block">
            ✦ ДЕВОЧКА ЛУННОГО СВЕТА ✦
          </span>
        </div>

        {/* Book Footer Overlay */}
        <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-white/90 pt-4">
          <span className="bg-[#1A1A18]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[#E2C36D] border border-[#D4AF37]/30 flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-[#E2C36D]" />
            <span>Авторская книга</span>
          </span>
          <span className="text-[#E2C36D] font-serif italic text-right">
            Екатерина Савина
          </span>
        </div>

      </div>
    );
  }

  // Interactive Game Artwork for Umi World
  if (type === 'game' || id === 'umi_world') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[#2E4836] via-[#1F3325] to-[#142218] border border-[#4A6B53]/50 shadow-md group-hover:shadow-lg transition-all p-4 flex flex-col justify-between">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-radial from-[#5C8A66]/30 via-transparent to-transparent pointer-events-none"></div>

        {/* Header Tag */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="bg-[#142218]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[#82C896] text-[10px] font-mono border border-[#4A6B53]/40 flex items-center gap-1 font-semibold">
            <Gamepad2 className="w-3.5 h-3.5 text-[#82C896]" />
            <span>Интерактивный проект</span>
          </span>
          <span className="text-[10px] font-mono text-[#82C896]/80 uppercase tracking-widest">
            Game Design
          </span>
        </div>

        {/* Center Character Art & Title */}
        <div className="relative z-10 my-auto flex items-center gap-4 py-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-[#142218] border border-[#4A6B53]/60 p-2 shadow-inner flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <img
              src={imageUrl}
              alt={title}
              width={533}
              height={800}
              loading="lazy"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-serif-display font-bold text-white tracking-tight drop-shadow-xs">
              Мир Луми
            </h4>
            <p className="text-xs text-[#A8D3B3] leading-relaxed font-sans-body">
              Развивающие игры, персонажи и игровые механики
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-2 border-t border-[#4A6B53]/40 flex items-center justify-between text-[10px] font-mono text-[#82C896]">
          <span>mirlumi.app</span>
          <span className="text-white font-semibold">Развивающая среда</span>
        </div>

      </div>
    );
  }

  // Custom Artwork for "Хранители памяти" (Archive photo restoration / memory keepers)
  if (id === 'memory') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#181513] border border-[#E0DBCF]/40 shadow-md group-hover:shadow-lg transition-all p-3.5 flex flex-col justify-between">
        
        {/* Background Vintage Archive Image with Warm Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"}
            alt={title}
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#181513]/40 to-transparent"></div>
        </div>

        {/* Header Tag */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="bg-[#C85A32] text-white text-[10px] font-mono px-2.5 py-1 rounded font-semibold uppercase tracking-wider shadow-xs">
            Собственный проект
          </span>
          <span className="bg-black/60 backdrop-blur-xs text-[#EAE5DE] text-[10px] font-mono px-2.5 py-1 rounded border border-white/20">
            Восстановление фото
          </span>
        </div>

        {/* Center Title & Info */}
        <div className="relative z-10 my-auto text-center space-y-1 py-2">
          <h4 className="text-2xl sm:text-3xl font-serif-display font-bold text-white tracking-tight drop-shadow-md">
            Хранители памяти
          </h4>
          <p className="text-xs text-[#EAE5DE] font-sans-body drop-shadow-xs max-w-xs mx-auto">
            Реставрация и оживление семейных архивов
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-[#A39C93]">
          <span>hranitelipamyati</span>
          <span className="text-white font-semibold">hranitelipamyati.app</span>
        </div>

      </div>
    );
  }

  // Default image container
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E2DBD0] border border-[#E0DBCF] shadow-xs group-hover:shadow-md transition-all">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
};
