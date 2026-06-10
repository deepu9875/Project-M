import React from 'react';
import { TIMELINE } from '../data';
import { TimelineEvent } from '../types';
import { Calendar, MapPin, CheckCircle2, CircleDollarSign, Compass, ArrowRight, Sparkles } from 'lucide-react';

interface TimelineProps {
  theme: 'dark' | 'light';
  onRegister: (eventName: string) => void;
}

export default function Timeline({ theme, onRegister }: TimelineProps) {
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ongoing':
        return (
          <span className="flex items-center space-x-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-heading">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Active Stage</span>
          </span>
        );
      case 'completed':
        return (
          <span className="flex items-center space-x-1 bg-slate-500/10 text-slate-400 border border-slate-500/10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-heading">
            <span>Completed</span>
          </span>
        );
      case 'upcoming':
      default:
        return (
          <span className="flex items-center space-x-1 bg-green-500/10 text-green-500 border border-green-500/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-heading">
            <span>Open for RSVP</span>
          </span>
        );
    }
  };

  return (
    <section
      id="timeline"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Decorative vertical visual laser line on background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-accent-red/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            ★ Chronology of releases
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Upcoming <span className="text-accent-red">Event Timeline</span> Roadmap
          </h2>
          <p className={`font-sans text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Follow our scheduled promotional roadmap spanning regional audios up to elite red carpet award nights.
          </p>
        </div>

        {/* Timeline Chain Block */}
        <div className="relative">
          
          {/* Central Line for Large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-gold via-accent-red to-gold/30 rounded-full" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center md:justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Space filler for spacing on large screen */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Bullet visual pointer on center timeline */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 w-10 h-10 rounded-full flex items-center justify-center z-20 shadow-xl border bg-slate-900 text-gold border-white/10 glow-gold transition-transform hover:scale-110">
                    <span className="font-mono text-sm font-black">{item.phase}</span>
                  </div>

                  {/* Timeline interactive details card */}
                  <div
                    className={`w-full md:w-[45%] pl-12 md:pl-0 pt-2 ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl group ${
                        theme === 'dark'
                          ? 'bg-slate-900/50 border-white/5 hover:border-gold/30'
                          : 'bg-white border-slate-200 hover:border-accent-red/30 shadow-md'
                      }`}
                    >
                      {/* Meta & Status Bar info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="font-heading text-xs uppercase font-bold text-gold tracking-widest">
                          Phase {item.phase} Event
                        </span>
                        {getStatusBadge(item.status)}
                      </div>

                      {/* Event Heading */}
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight mb-3 group-hover:text-gold transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Explanation content */}
                      <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-6 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-650'
                      }`}>
                        {item.description}
                      </p>

                      {/* Location and time tags */}
                      <div className={`space-y-2 border-t border-b py-4 mb-6 ${
                        theme === 'dark' ? 'border-white/5 text-slate-400' : 'border-slate-150 text-slate-650'
                      }`}>
                        <div className="flex items-center space-x-2 text-xs font-sans">
                          <Calendar className="w-4 h-4 text-accent-red shrink-0" />
                          <span>{item.date} • {item.time} PST</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs font-sans">
                          <MapPin className="w-4 h-4 text-accent-red shrink-0" />
                          <span>{item.venue}</span>
                        </div>
                      </div>

                      {/* Register/RSVP button linked directly to checkout booking */}
                      <button
                        onClick={() => onRegister(item.title)}
                        className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                          item.status === 'completed'
                            ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                            : theme === 'dark'
                            ? 'bg-slate-800 hover:bg-gold text-white hover:text-slate-950 border border-white/5'
                            : 'bg-slate-100 hover:bg-accent-red text-slate-800 hover:text-white border border-slate-200 shadow-sm'
                        }`}
                        disabled={item.status === 'completed'}
                      >
                        {item.status === 'completed' ? (
                          <span>Passes Closed</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-gold shrink-0 animate-spin-slow" />
                            <span>Quick Register RSVP Ticket</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
