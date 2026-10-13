import React, { useState } from 'react';
import { ArrowUpRight, Lightbulb, Coffee, Smartphone, BookOpen, Laptop, MousePointer, Sparkles } from 'lucide-react';

interface PortfolioMockupProps {
  onExploreClick?: () => void;
}

export const PortfolioMockup: React.FC<PortfolioMockupProps> = ({ onExploreClick }) => {
  const [lampOn, setLampOn] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const itemDetails: Record<string, { name: string; tag: string; desc: string }> = {
    lamp: {
      name: 'Рабочая лампа EK Studio',
      tag: 'Атмосфера',
      desc: 'Теплый свет под вечерние часы прототипирования и генерации смыслов.'
    },
    laptop: {
      name: 'Ноутбук · Проектирование & AI',
      tag: 'Интерфейсы & Код',
      desc: 'Здесь создаются сайты, генеративные кейсы, презентации и дизайн-системы.'
    },
    coffee: {
      name: 'Чашка Кофе',
      tag: 'Диалог & Смыслы',
      desc: 'Каждый проект начинается с неформального обсуждения задумки своими словами.'
    },
    phone: {
      name: 'Смартфон 10:09',
      tag: 'Прямая связь',
      desc: 'Быстрые ответы в Telegram (@ek_studio) и сообществе ВКонтакте.'
    },
    notes: {
      name: 'Открытый Блокнот',
      tag: 'Наброски & Структура',
      desc: 'Первые эскизы структуры, смысловые блоки и визуальная карта проекта.'
    },
    mouse: {
      name: 'Точная Оптика',
      tag: 'Детали & Pixel-Perfect',
      desc: 'Внимание к типографике, сеточным интервалам и адаптивности.'
    }
  };

  const activeDetail = selectedItem ? itemDetails[selectedItem] : null;

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] min-h-[300px] rounded-2xl overflow-hidden bg-[#160d06] border border-[#3d2511] shadow-2xl flex flex-col justify-between p-3 sm:p-6 select-none transition-colors duration-500">
      
      {/* Dynamic Backlight Glow depending on lamp state */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          lampOn ? 'opacity-100 bg-radial from-[#7A4B1F]/40 via-[#261508]/30 to-transparent' : 'opacity-20 bg-radial from-[#261508] to-black'
        }`}
      />

      {/* 1. Header Bar */}
      <div className="flex items-center justify-between text-amber-100/90 border-b border-[#3d2511]/60 pb-3 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2b1709] border border-[#523117] flex items-center justify-center font-serif font-bold text-xs text-amber-200 shadow-inner">
            EK
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-amber-100 uppercase flex items-center gap-2">
              <span>Екатерина Савина</span>
              <span className="text-[10px] text-amber-400 font-normal hidden md:inline">· EK Studio Sandbox</span>
            </h3>
            <p className="text-[9px] sm:text-[10px] text-amber-200/70 font-sans">
              ВЕБ-ДИЗАЙН · САЙТЫ · AI VISUALS · ИНТЕРАКТИВНЫЕ ПРОЕКТЫ
            </p>
          </div>
        </div>

        {/* Lamp Switcher Button */}
        <button
          onClick={() => setLampOn(!lampOn)}
          className={`flex items-center gap-2 text-[10px] font-mono px-3 py-1.5 rounded-md border transition-all cursor-pointer ${
            lampOn 
              ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
              : 'bg-[#2b1709] text-amber-200/50 border-[#523117]'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${lampOn ? 'bg-amber-400 animate-pulse' : 'bg-stone-600'}`}></span>
          <span>{lampOn ? 'Лампа ВКЛ 💡' : 'Лампа ВЫКЛ 🌙'}</span>
        </button>
      </div>

      {/* 2. Main Desk Surface Stage with Interactive Item Clickers */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2 sm:my-4">
        
        {/* Lamp Asset (Left) */}
        <div 
          onClick={() => { setSelectedItem('lamp'); setLampOn(!lampOn); }}
          className="absolute left-[8%] top-[12%] w-[12%] sm:w-[14%] z-20 cursor-pointer group/lamp"
          title="Нажмите на лампу для переключения света"
        >
          <img
            src="/assets/lamp-5iDrO8XY.webp"
            alt="Desk Lamp"
            className={`w-full object-contain transition-all duration-500 group-hover/lamp:scale-110 ${
              lampOn ? 'drop-shadow-[0_0_35px_rgba(245,158,11,0.7)]' : 'opacity-60 filter brightness-75'
            }`}
          />
          <div className="opacity-0 group-hover/lamp:opacity-100 transition-opacity absolute -top-6 left-0 bg-amber-400 text-black text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap pointer-events-none">
            {lampOn ? 'Выключить' : 'Включить'}
          </div>
        </div>

        {/* Laptop Main Asset (Center) */}
        <div
          onClick={() => setSelectedItem('laptop')}
          className="relative w-[55%] sm:w-[52%] z-30 cursor-pointer group/laptop"
          title="Ноутбук EK Studio"
        >
          <img
            src="/assets/laptop-CzOVTyfs.webp"
            alt="Laptop EK Studio Portfolio"
            className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover/laptop:scale-[1.03]"
          />
          <div className="opacity-0 group-hover/laptop:opacity-100 transition-opacity absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xs text-amber-200 text-[10px] font-mono border border-amber-500/40 px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap pointer-events-none flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Исследовать проекты</span>
          </div>
        </div>

        {/* Coffee Mug Asset (Top Right) */}
        <div
          onClick={() => setSelectedItem('coffee')}
          className="absolute right-[12%] top-[8%] w-[8%] sm:w-[9%] z-20 cursor-pointer group/coffee"
          title="Кофе"
        >
          <img
            src="/assets/coffee-fv846KIL.webp"
            alt="Coffee EK Studio"
            className="w-full object-contain drop-shadow-lg transition-transform duration-300 group-hover/coffee:rotate-12 group-hover/coffee:scale-110"
          />
        </div>

        {/* Smartphone Asset (Right) */}
        <div
          onClick={() => setSelectedItem('phone')}
          className="absolute right-[6%] top-[30%] w-[10%] sm:w-[11%] z-20 cursor-pointer group/phone"
          title="Смартфон"
        >
          <img
            src="/assets/Smartphone-BkpoEHVe.webp"
            alt="Smartphone"
            className="w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover/phone:scale-110 group-hover/phone:-rotate-6"
          />
        </div>

        {/* Open Notes Asset (Bottom Left) */}
        <div
          onClick={() => setSelectedItem('notes')}
          className="absolute left-[10%] bottom-[6%] w-[16%] sm:w-[18%] z-20 cursor-pointer group/notes"
          title="Заметки"
        >
          <img
            src="/assets/OpenNotes-CIJlUZoU.webp"
            alt="EK Notes"
            className="w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover/notes:-rotate-3 group-hover/notes:scale-105"
          />
        </div>

        {/* Mouse Asset (Bottom Right) */}
        <div
          onClick={() => setSelectedItem('mouse')}
          className="absolute right-[18%] bottom-[12%] w-[7%] sm:w-[8%] z-20 cursor-pointer group/mouse"
          title="Мышь"
        >
          <img
            src="/assets/Mouse-BNuXNsrp.webp"
            alt="Mouse"
            className="w-full object-contain drop-shadow-md transition-transform duration-300 group-hover/mouse:translate-x-1.5"
          />
        </div>

      </div>

      {/* Active Item Description Drawer */}
      {activeDetail && (
        <div className="z-30 mb-2 bg-[#2b1709]/90 border border-amber-500/40 rounded-lg p-3 text-amber-100 text-xs flex items-center justify-between gap-3 animate-in fade-in duration-300 shadow-xl">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-black font-bold text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                {activeDetail.tag}
              </span>
              <span className="font-serif font-bold text-sm text-amber-200">
                {activeDetail.name}
              </span>
            </div>
            <p className="text-[11px] text-amber-100/80 font-sans-body">
              {activeDetail.desc}
            </p>
          </div>
          <button
            onClick={() => setSelectedItem(null)}
            className="text-amber-400 hover:text-white font-mono text-xs px-2 py-1 rounded bg-[#3d2511] cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>
      )}

      {/* 3. Footer Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-amber-200/70 border-t border-[#3d2511]/60 pt-2.5 z-20">
        <div className="flex items-center gap-1.5 text-amber-300 font-sans">
          <MousePointer className="w-3 h-3 text-amber-400 animate-bounce" />
          <span className="hidden sm:inline">Нажимайте на предметы на столе для взаимодействия</span>
          <span className="sm:hidden">Нажмите на любой предмет</span>
        </div>

        {onExploreClick && (
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded font-bold uppercase tracking-wider text-[10px] hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
          >
            <span>Кейсы &amp; Галерея</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
