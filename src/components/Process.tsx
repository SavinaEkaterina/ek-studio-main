import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import { Sparkles, CheckCircle2, ArrowRight, Compass } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // 5 Stage-by-Stage Process Images
  const processImages = [
    {
      url: `${import.meta.env.BASE_URL}assets/process/01.jpg`,
      fallbackUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      caption: "01 · Задача: Первые мысли, эскизы и наброски структуры",
      alt: "Этап 1: Рука с карандашом делает наброски структуры сайта в блокноте"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/process/02.jpg`,
      fallbackUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      caption: "02 · Погружение: Аудитория → Контекст → Смысл → Направление",
      alt: "Этап 2: Погружение — исследовательская карта, смыслы, референсы и мудборд"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/process/03.jpg`,
      fallbackUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      caption: "03 · Концепция: Верстка, варианты шрифтов, палитра и сетка",
      alt: "Этап 3: Проектирование стиля — палитры, типографика и варианты интерфейса"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/process/04.png`,
      fallbackUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      caption: "04 · Создание: Идея → Стратегия → Структура → Дизайн EK STUDIO",
      alt: "Этап 4: Разработка — сборка макета, визуальные связи и решение"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/process/05.png`,
      fallbackUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      caption: "05 · Результат: Готовый проект — Проверено & Готово к запуску!",
      alt: "Этап 5: Готовый сайт на ноутбуке, планшете и смартфоне с чек-листом"
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE7E1] overflow-hidden relative">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-radial from-[#C85A32]/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Editorial Header & Author Note / Right Visual & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Title, Process Overview & Author Quote */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            {/* Title & Subtitle */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E0DBCF]">
                <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Маршрут проекта</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
                {siteContent.process.sectionTitle}
              </h2>
              <p className="text-base text-[#5A5752] leading-relaxed font-sans-body">
                {siteContent.process.sectionSubtitle}
              </p>
            </div>

            {/* Author's Personal Quote Note */}
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E0DBCF] space-y-3 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 p-4 text-[#C85A32]/10 pointer-events-none">
                <Sparkles className="w-16 h-16" />
              </div>
              
              <p className="text-sm font-serif italic text-[#1A1A18] leading-relaxed">
                «Дизайн — это не просто красивая картинка, а спокойный и понятный путь от вашей идеи к работающему продукту. Вы всегда знаете, на каком этапе мы находимся.»
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-[#1A1A18] text-[#FAF8F5] font-serif font-bold text-xs flex items-center justify-center shadow-xs">
                  Е
                </div>
                <div>
                  <span className="text-xs font-bold font-sans text-[#1A1A18] block leading-none">Екатерина Савина</span>
                  <span className="text-[10px] font-mono text-[#8C8880] uppercase tracking-wider block mt-0.5">Основатель EK Studio</span>
                </div>
              </div>
            </div>

            {/* Interactive Progress Counter */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#1A1A18] text-white text-xs font-mono shadow-md">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="text-[#C85A32] font-bold text-sm shrink-0">0{activeStepIndex + 1}</span>
                <span className="text-white/40 shrink-0">/ 05</span>
                <span className="text-amber-200 font-semibold uppercase tracking-wider pl-1 truncate">
                  {siteContent.process.steps[activeStepIndex]?.stageName}
                </span>
              </div>
              <div className="flex gap-1 shrink-0">
                {processImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeStepIndex === idx ? 'bg-[#C85A32] w-5' : 'bg-white/30 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Smooth Crossfading Process Art & Interactive Timeline */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Process Image Container displaying Uploaded Process Images */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#1A1A18] border border-[#E0DBCF] shadow-2xl group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={processImages[activeStepIndex]?.url}
                    alt={processImages[activeStepIndex]?.alt}
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = processImages[activeStepIndex]?.fallbackUrl;
                      if (fallback && target.src !== fallback) {
                        target.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono z-20 gap-2">
                <span className="bg-[#1A1A18]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D59B63]/40 text-[#F5C28B] text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md truncate">
                  {processImages[activeStepIndex]?.caption}
                </span>
                <span className="bg-[#C85A32] px-2.5 py-1 rounded-md text-[10px] text-white font-mono font-bold shadow-xs shrink-0">
                  ЭТАП {activeStepIndex + 1} ИЗ 5
                </span>
              </div>

            </div>

            {/* VERTICAL TIMELINE LIST */}
            <div className="relative pl-5 sm:pl-6 border-l-2 border-[#E0DBCF] space-y-5">
              
              {siteContent.process.steps.map((step, index) => {
                const isActive = activeStepIndex === index;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStepIndex(index)}
                    onClick={() => setActiveStepIndex(index)}
                    className={`relative cursor-pointer p-3.5 sm:p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1A1A18] text-white shadow-lg border border-[#1A1A18] -translate-x-0.5 sm:-translate-x-1' 
                        : 'bg-[#F4F0E8] border border-[#E0DBCF] hover:border-[#1A1A18]/30 text-[#1A1A18]'
                    }`}
                  >
                    {/* Timeline Line Dot */}
                    <div
                      className={`absolute -left-[27px] sm:-left-[31px] top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#C85A32] border-white scale-125 shadow-[0_0_12px_rgba(200,90,50,0.8)]'
                          : 'bg-[#FAF8F5] border-[#8C8880]'
                      }`}
                    />

                    <div className="space-y-1">
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-bold ${
                            isActive ? 'text-[#C85A32]' : 'text-[#8C8880]'
                          }`}>
                            {step.number}
                          </span>

                          <h3 className={`text-base font-serif-display font-bold ${
                            isActive ? 'text-white' : 'text-[#1A1A18]'
                          }`}>
                            {step.stageName} — <span className={`font-sans-body font-normal text-sm ${
                              isActive ? 'text-[#D5D0C5]' : 'text-[#5A5752]'
                            }`}>{step.title}</span>
                          </h3>
                        </div>

                        {isActive && (
                          <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0" />
                        )}
                      </div>

                      {/* Description */}
                      <p className={`text-xs font-sans-body leading-relaxed max-w-xl pt-1 ${
                        isActive ? 'text-[#D5D0C5]' : 'text-[#5A5752]'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
