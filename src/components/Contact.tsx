import React from 'react';
import { ArrowRight, Send, Share2, Sparkles, Mail, Compass } from 'lucide-react';
import { siteContent, EntrySituation } from '../data/siteContent';

interface ContactProps {
  selectedSituationFromExplorer?: EntrySituation | null;
}

export const Contact: React.FC<ContactProps> = () => {
  const maxUrl = 'https://max.ru/u/f9LHodD0cOJDrWIUZMR6bdn9Y72qtC2JycHUPiCBgCX7inoYyVE0U0pqqX8';
  const vkUrl = 'https://vk.ru/savinaek57';
  const telegramUrl = 'https://t.me/savinaek';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#1A1A18] border-b border-[#E0DBCF] relative overflow-hidden">
      {/* Gentle ambient warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C85A32]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F0E8] border border-[#E0DBCF] text-[11px] font-mono text-[#C85A32] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] animate-pulse"></span>
            <span>ТОЧКА ВХОДА И СВЯЗЬ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.1]">
            Обсудить проект или идею
          </h2>

          <p className="text-base sm:text-lg text-[#5A5752] leading-relaxed font-sans-body">
            Напишите мне в удобный мессенджер — расскажите о задумке в свободной форме, даже если пока есть только наброски. Мы не собираем данные на сайте, всё общение проходит напрямую.
          </p>
        </div>

        {/* Central Tablet / Table Card (Journal Catalog Style) */}
        <div className="bg-white border border-[#E0DBCF] rounded-2xl shadow-sm overflow-hidden divide-y divide-[#EAE7E1]">
          
          {/* Row 001: MAX (Primary Channel) */}
          <a
            href={maxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 sm:px-8 gap-4 hover:bg-[#F7F4EE] transition-colors duration-200"
          >
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs text-[#8C8880] w-10 shrink-0 font-bold">
                001
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 min-w-0">
                <span className="font-serif-display font-bold text-xl text-[#1A1A18] sm:w-36 shrink-0 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C85A32] inline sm:hidden" />
                  <span>MAX</span>
                </span>
                <span className="text-sm text-[#6A6660] font-sans-body truncate">
                  Основной канал связи. Обсудим вашу задачу
                </span>
              </div>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#C85A32] group-hover:underline group-hover:translate-x-1 transition-all">
                <span>Написать</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Row 002: ВКонтакте — Творческая мастерская */}
          <a
            href={vkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 sm:px-8 gap-4 hover:bg-[#F7F4EE] transition-colors duration-200"
          >
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs text-[#8C8880] w-10 shrink-0 font-bold">
                002
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 min-w-0">
                <span className="font-serif-display font-bold text-xl text-[#1A1A18] sm:w-48 shrink-0 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#6A6660] inline sm:hidden" />
                  <span>Творческая мастерская</span>
                </span>
                <span className="text-sm text-[#6A6660] font-sans-body truncate">
                  Мои творческие проекты и работы
                </span>
              </div>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#1A1A18] group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all">
                <span>Открыть</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Row 003: Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 sm:px-8 gap-4 hover:bg-[#F7F4EE] transition-colors duration-200"
          >
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs text-[#8C8880] w-10 shrink-0 font-bold">
                003
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 min-w-0">
                <span className="font-serif-display font-bold text-xl text-[#1A1A18] sm:w-36 shrink-0 flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#C85A32] inline sm:hidden" />
                  <span>Telegram</span>
                </span>
                <span className="text-sm text-[#6A6660] font-sans-body truncate">
                  Написать мне напрямую
                </span>
              </div>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#1A1A18] group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all">
                <span>Написать</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

        </div>

        {/* Bottom Status / Note */}
        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm font-mono text-[#6A6660] uppercase tracking-wider font-medium">
            EK Studio &bull; Открыта к новым проектам и нестандартным задачам
          </p>
        </div>

      </div>
    </section>
  );
};




