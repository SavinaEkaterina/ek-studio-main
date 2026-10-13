import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface HeaderProps {
  onDiscussClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDiscussClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'С чем прийти', href: '#situations' },
    { name: 'Форматы', href: '#formats' },
    { name: 'Кто стоит за EK Studio', href: '#about' },
    { name: 'Как работаем', href: '#process' },
    { name: 'Проекты', href: '#cases' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141210]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-gradient-to-b from-[#141210]/80 via-[#141210]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 sm:gap-2.5 focus-visible:outline-2 focus-visible:outline-[#C85A32] rounded-xs shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.webp`}
              alt="EK Studio Logo"
              width={1536}
              height={1024}
              fetchPriority="high"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif-display font-bold text-xl sm:text-2xl tracking-wider text-[#FAF8F5] group-hover:text-[#C85A32] transition-colors">
              STUDIO
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-sans-body font-medium text-[#D5D0C5]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C85A32] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onDiscussClick}
              className="inline-flex items-center gap-2 bg-[#C85A32] text-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-[#B04A26] transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(200,90,50,0.5)] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Рассказать о задаче</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onDiscussClick}
              className="bg-[#C85A32] text-white px-3 py-2 text-xs font-mono font-bold rounded-md hover:bg-[#B04A26] transition-colors whitespace-nowrap min-h-[40px] flex items-center justify-center cursor-pointer"
            >
              Обсудить
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#FAF8F5] hover:bg-white/10 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181513] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200 text-[#FAF8F5]">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#FAF8F5] py-2 border-b border-white/10 hover:text-[#C85A32] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDiscussClick();
              }}
              className="w-full text-center bg-[#C85A32] text-white py-3 text-sm font-mono font-bold uppercase rounded-lg hover:bg-[#B04A26] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Рассказать о задаче</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
