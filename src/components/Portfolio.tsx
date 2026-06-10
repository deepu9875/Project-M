import React, { useState } from 'react';
import { PORTFOLIO } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal } from 'lucide-react';

interface PortfolioProps {
  theme: 'dark' | 'light';
}

export default function Portfolio({ theme }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter Categories mappings
  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'celebrity events', label: 'Celebrities' },
    { id: 'movie launches', label: 'Launches' },
    { id: 'stage performances', label: 'Stages' },
    { id: 'fan meets', label: 'Fan Meets' },
    { id: 'red carpet events', label: 'Red Carpet' },
    { id: 'live audiences', label: 'Live Crowd' }
  ];

  const filteredItems = PORTFOLIO.filter((item) => {
    return selectedFilter === 'all' || item.category === selectedFilter;
  });

  const openLightbox = (id: string) => {
    // Locate the index of this item in the filtered list
    const index = filteredItems.findIndex((x) => x.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
  };

  return (
    <section
      id="portfolio"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-100'
      }`}
    >
      {/* Background radial spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent-red/20 blur-[130px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gold/15 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            📸 Historical Moments Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Exclusive <span className="text-accent-red">Event Portfolio</span> Tour
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            A hand-picked selection of live concerts, star Q&As, stage launches, interactive panels, and cinematic showcase coordinates.
          </p>
        </div>

        {/* Gallery Interactive Category Tab Filter Panel */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium tracking-wide transition-all uppercase duration-300 cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-gold text-slate-950 font-bold glow-gold ring-2 ring-gold/40'
                  : 'bg-slate-900 border border-white/5 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Design Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative group rounded-2xl overflow-hidden aspect-video sm:aspect-square object-cover cursor-pointer border border-white/10 shadow-lg transform duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform duration-500 group-hover:scale-106"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Metadata (Requested) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                  <span className="text-[9px] uppercase font-bold text-gold tracking-widest font-heading mb-1 block">
                    ★ {item.category}
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-black text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300">{item.subtitle}</p>
                  
                  {/* Magnifier indicator icon */}
                  <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold font-sans mt-3">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to enlarge lightbox</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Premium Gallery Lightbox dialog modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-200 flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close button top right */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-accent-red cursor-pointer hover:rotate-90 transition-all"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous trigger button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-10 p-3 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-gold hover:text-black cursor-pointer transition-all active:scale-90"
            title="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[80vh] flex flex-col items-center bg-slate-900/50 p-3 rounded-2xl border border-white/10"
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            {/* Descriptive legend bar below */}
            <div className="w-full text-center mt-4 text-white space-y-1">
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold">
                ★ {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs sm:text-sm text-slate-400">{filteredItems[lightboxIndex].subtitle}</p>
            </div>
          </div>

          {/* Next trigger button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-10 p-3 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-gold hover:text-black cursor-pointer transition-all active:scale-90"
            title="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
