import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: '«С чем можно прийти?»', href: '#situations' },
    { name: '«Форматы проектов»', href: '#formats' },
    { name: '«Обо мне»', href: '#about' },
    { name: '«Как мы работаем»', href: '#process' },
    { name: '«Наш подход»', href: '#manifesto' },
    { name: '«Примеры проектов»', href: '#cases' },
    { name: '«Контакты»', href: '#contact' },
  ];

  return (
    <footer className="bg-[#181513] text-[#EAE5DE] pt-14 pb-8 sm:pt-16 sm:pb-10 border-t border-[#2A2420] text-xs font-sans-body relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-radial from-[#C85A32]/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Part: 3 Meaningful Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: EK Studio */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 sm:gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.webp`}
                alt="EK Studio Logo"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-serif-display font-bold text-2xl sm:text-3xl tracking-wider text-[#FAF8F5] group-hover:text-[#C85A32] transition-colors">
                STUDIO
              </span>
            </a>

            <p className="text-sm font-serif italic text-[#F5C28B] leading-relaxed">
              «Точка входа в работу со своей задачей.»
            </p>

            <p className="text-xs text-[#A39C93] leading-relaxed font-sans-body max-w-sm">
              Творчество, дизайн и технологии — чтобы идеи становились проектами.
            </p>
          </div>

          {/* Column 2: Разделы сайта (в 2 столбика) */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs text-[#C85A32] uppercase tracking-widest font-bold">
              РАЗДЕЛЫ САЙТА
            </h3>

            <nav className="grid grid-cols-2 gap-x-4 sm:gap-x-6">
              <ul className="space-y-2.5 text-xs font-sans-body">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#D5D0C5] hover:text-[#FAF8F5] transition-colors py-0.5 inline-block hover:underline underline-offset-4 decoration-[#C85A32]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5 text-xs font-sans-body">
                {navLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#D5D0C5] hover:text-[#FAF8F5] transition-colors py-0.5 inline-block hover:underline underline-offset-4 decoration-[#C85A32]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Мои проекты и связь */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            
            {/* Group 1: МОИ ПРОЕКТЫ */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-[#C85A32] uppercase tracking-widest font-bold">
                МОИ ПРОЕКТЫ
              </h3>

              <ul className="space-y-2.5 text-xs font-sans-body">
                <li>
                  <a
                    href="https://savinaekaterina.github.io/ek-studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D5D0C5] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1.5 py-0.5 group"
                  >
                    <span>«Портфолио EK Studio»</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://savinaekaterina.github.io/hranitelipamyati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D5D0C5] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1.5 py-0.5 group"
                  >
                    <span>«Хранители памяти»</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 2: СВЯЗЬ */}
            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs text-[#C85A32] uppercase tracking-widest font-bold">
                СВЯЗЬ
              </h3>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#C85A32] hover:bg-[#B04A26] text-white px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-[0_0_20px_rgba(200,90,50,0.4)] cursor-pointer"
                >
                  <span>Рассказать о задаче</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Row: Separator & Copyright / Scroll to Top */}
        <div className="pt-8 border-t border-[#2A2420] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C847A] text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <span>© 2026 EK Studio</span>
            <span className="text-[#4A423B]">&bull;</span>
            <span className="text-[#D5D0C5]">Создаёт Екатерина Савина</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="text-[#D59B63] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1.5 cursor-pointer font-bold py-1"
            >
              <span>Наверх ↑</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};



