import React from 'react';
import { SPONSORS } from '../data';
import { Film, ShieldCheck } from 'lucide-react';

interface SponsorsProps {
  theme: 'dark' | 'light';
}

export default function Sponsors({ theme }: SponsorsProps) {
  // Triple the list to ensure there's enough logos to prevent scrolling glitches in high res
  const rollingList = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section
      id="sponsors"
      className={`py-12 sm:py-16 transition-colors duration-300 relative border-t border-b overflow-hidden ${
        theme === 'dark' 
          ? 'bg-dark-bg/40 border-white/5 text-white' 
          : 'bg-slate-50 border-slate-200 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="font-heading text-xs uppercase font-bold text-slate-400 tracking-widest flex items-center justify-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
          <span>Authorized Ticketing Partners &amp; Studio Sponsors</span>
        </p>
      </div>

      {/* Rolling Logo Carousel / Marquee (Requested) */}
      <div className="relative w-full overflow-hidden no-scrollbar">
        {/* Soft shadow gradients on left and right to make it smooth */}
        <div className={`absolute top-0 bottom-0 left-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r ${
          theme === 'dark' ? 'from-dark-bg to-transparent' : 'from-slate-50 to-transparent'
        }`} />
        <div className={`absolute top-0 bottom-0 right-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l ${
          theme === 'dark' ? 'from-dark-bg to-transparent' : 'from-slate-50 to-transparent'
        }`} />

        <div className="animate-marquee flex items-center space-x-8 sm:space-x-12 py-3">
          {rollingList.map((sponsor, idx) => (
            <div
              key={idx}
              className={`shrink-0 flex items-center space-x-2 px-6 py-2.5 rounded-xl border font-heading font-black text-sm sm:text-base tracking-wider transition-all duration-300 cursor-default uppercase ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/5 text-slate-400 grayscale hover:grayscale-0 hover:text-white hover:border-gold/25 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-500 grayscale hover:grayscale-0 hover:text-slate-950 hover:border-accent-red/25 shadow-sm'
              }`}
            >
              <div className="p-1 rounded-md bg-gold/10 text-gold text-xs shrink-0">{sponsor.logo.split(' ')[0]}</div>
              <span>{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
