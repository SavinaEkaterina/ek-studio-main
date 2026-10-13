import React, { useRef, useState } from 'react';
import { siteContent, ProjectItem } from '../data/siteContent';
import { ArrowRight, ArrowUpRight, Grid, Film, Play, Sparkles, Globe } from 'lucide-react';
import { ProjectArtworkImage } from './VisualAssets';

interface CaseStudiesProps {
  onDiscussClick?: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = () => {
  const { caseStudies, portfolioUrl } = siteContent;

  // 1. First Hero Project: Petersburg Walk
  const petersburgProject = caseStudies.items.find((item: ProjectItem) => item.id === 'petersburg_walk') || caseStudies.items[0];

  // 2. Three Compact Middle Projects: Evdokya, We Are All Different, Umi World
  const middleCompactProjects = caseStudies.items.filter((item: ProjectItem) => 
    item.id === 'evdokya' || item.id === 'we_are_all_different' || item.id === 'umi_world'
  );

  // 3. Second Hero Project: Memory Keepers (Хранители памяти)
  const memoryProject = caseStudies.items.find((item: ProjectItem) => item.id === 'memory') || {
    id: "memory",
    title: "Хранители памяти",
    category: "Собственный проект · Восстановление фото",
    description: "Самостоятельный сайт услуг по восстановлению и оживлению семейных фотографий.",
    type: "website",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    linkText: "Посмотреть сайт",
    linkUrl: "https://savinaekaterina.github.io/hranitelipamyati/"
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  return (
    <section id="cases" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE7E1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
            <span>Диапазон форматов &amp; Портфолио</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
            {caseStudies.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#5A5752] leading-relaxed font-sans-body">
            {caseStudies.sectionSubtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TIER 1: FIRST LARGE FEATURED HERO CASE CARD — «Прогулка по Петербургу»    */}
        {/* ========================================================================= */}
        {petersburgProject && (
          <div className="bg-[#1A1A18] text-[#FAF8F5] border border-[#3A3832] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
            
            {/* Background Ambient Warm Glow */}
            <div className="absolute inset-0 bg-radial from-[#C85A32]/25 via-amber-600/5 to-transparent pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column (7 cols): Flagship Artwork / Media Player */}
              <div 
                className="lg:col-span-7 cursor-pointer relative group/media rounded-2xl overflow-hidden shadow-2xl"
                onClick={() => {
                  if (petersburgProject.linkUrl) {
                    window.open(petersburgProject.linkUrl, '_blank');
                  }
                }}
              >
                <ProjectArtworkImage
                  id={petersburgProject.id}
                  type={petersburgProject.type}
                  imageUrl={petersburgProject.imageUrl}
                  title={petersburgProject.title}
                />
              </div>

              {/* Right Column (5 cols): Description & Play Action */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-wider font-bold bg-[#C85A32]/10 px-3 py-1 rounded-full border border-[#C85A32]/30">
                    <Film className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Флагманский AI-проект</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif-display font-bold text-white tracking-tight leading-tight">
                    {petersburgProject.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-200 uppercase tracking-wider font-semibold">
                    {petersburgProject.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#D5D0C5] leading-relaxed font-sans-body">
                  {petersburgProject.description}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono text-[#D5D0C5]">
                  <div className="text-amber-200 font-bold uppercase tracking-wider">Ключевые аспекты:</div>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="bg-white/10 px-2.5 py-1 rounded">Генеративное видео</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded">Смысловая сценарная карта</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded">VK Клипы</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a
                    href={petersburgProject.linkUrl || portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#B04A26] text-white px-7 py-3.5 text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all shadow-md hover:shadow-[0_0_25px_rgba(200,90,50,0.5)]"
                  >
                    <span>Смотреть в VK Клипах</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TIER 2: THREE COMPACT CARDS IN ONE ROW ON DESKTOP                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {middleCompactProjects.map((item: ProjectItem) => (
            <div 
              key={item.id}
              className="bg-[#F4F0E8] border border-[#E0DBCF] rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xs hover:border-[#1A1A18]/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Visual Preview Artwork */}
              <a
                href={item.linkUrl || portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full cursor-pointer relative group/img overflow-hidden rounded-xl"
              >
                <ProjectArtworkImage
                  id={item.id}
                  type={item.type}
                  imageUrl={item.imageUrl}
                  title={item.title}
                />
                
                {/* Floating Hover Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover/img:opacity-100 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-[#C85A32] text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 z-30 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>Смотреть проект</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Card Meta & Title */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-[#C85A32] uppercase tracking-wider font-semibold">
                  {item.category}
                </div>
                <h3 className="text-xl font-serif-display font-bold text-[#1A1A18] group-hover:text-[#C85A32] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A4742] leading-relaxed font-sans-body">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-[#E0DBCF]/80">
                <a
                  href={item.linkUrl || portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A18] group-hover:text-[#C85A32] transition-colors"
                >
                  <span>{item.linkText || "Смотреть проект →"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* TIER 3: SECOND LARGE HERO CASE CARD — «Хранители памяти» (WITH VIDEO)     */}
        {/* ========================================================================= */}
        <div className="bg-[#181513] text-[#FAF8F5] border border-[#38342F] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-[#C85A32]/20 via-amber-700/5 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column (7 cols): Video Media Player */}
            <div 
              className="lg:col-span-7 cursor-pointer relative group/video rounded-2xl overflow-hidden shadow-2xl bg-[#100D0B] border border-white/10"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                  }
                }}
                className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover group-hover/video:scale-102 transition-transform duration-700 filter brightness-95"
              >
                <source src={`${import.meta.env.BASE_URL}assets/memory-photo-demo.mp4`} type="video/mp4" />
                <source src={`${import.meta.env.BASE_URL}assets/memory-photo-demo.webm`} type="video/webm" />
                <source src={`${import.meta.env.BASE_URL}assets/memory-photo-demo.mov`} type="video/quicktime" />
                <source src={`${import.meta.env.BASE_URL}assets/оживи_фотографию_естественно_202607241718.mp4`} type="video/mp4" />
                <source src="https://cdn.coverr.co/videos/coverr-looking-at-old-photographs-5412/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

              {/* Interactive Video Badge & Play Toggle */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono z-20">
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    <Play className={`w-3.5 h-3.5 fill-current ${isPlaying ? 'opacity-80' : 'ml-0.5'}`} />
                  </button>
                  <span className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/20 text-[#EAE5DE] text-[11px] font-semibold">
                    Демонстрация оживления семейного архива
                  </span>
                </div>
                <span className="bg-[#C85A32] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  AI Motion
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Description & Direct Link to hranitelipamyati */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C85A32] uppercase tracking-wider font-bold bg-[#C85A32]/10 px-3 py-1 rounded-full border border-[#C85A32]/30">
                  <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Собственный проект</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif-display font-bold text-white tracking-tight leading-tight">
                  {memoryProject.title}
                </h3>
                <p className="text-xs font-mono text-amber-200 uppercase tracking-wider font-semibold">
                  {memoryProject.category}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D5D0C5] leading-relaxed font-sans-body">
                {memoryProject.description}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono text-[#D5D0C5]">
                <div className="text-amber-200 font-bold uppercase tracking-wider">Специализация:</div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="bg-white/10 px-2.5 py-1 rounded">Реставрация снимков</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded">AI-оживление лиц</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded">Семейные архивы</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href={memoryProject.linkUrl || "https://savinaekaterina.github.io/hranitelipamyati/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#B04A26] text-white px-7 py-3.5 text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all shadow-md hover:shadow-[0_0_25px_rgba(200,90,50,0.5)] cursor-pointer"
                >
                  <span>Посмотреть сайт</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Button after projects: Direct Link "Посмотреть все работы →" */}
        <div className="text-center pt-4">
          <a
            href="https://savinaekaterina.github.io/ek-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#1A1A18] text-[#FAF8F5] hover:bg-[#C85A32] px-8 py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(200,90,50,0.35)] cursor-pointer group"
          >
            <Grid className="w-4 h-4 text-[#C85A32] group-hover:text-white transition-colors" />
            <span>{caseStudies.viewAllButtonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};


