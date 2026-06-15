import React from 'react';
import { Ticket, Play, Calendar, Star, Sparkles, MoveRight } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ theme, onBookClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cinematic Background with overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&auto=format&fit=crop"
          alt="Cinema Premiere Backstage"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Colorful Spotlights Simulation */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-red/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Dark film tint overlay */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-t from-dark-bg via-transparent to-black/70' 
            : 'bg-gradient-to-t from-slate-50 via-transparent to-slate-900/60'
        }`} />
      </div>

      {/* Floating Animated Ticket Graphics (Requested) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {/* Floating Ticket 1 */}
        <div className="absolute top-1/4 left-10 md:left-20 animate-bounce duration-[4000ms] ease-in-out opacity-20 transform -rotate-12">
          <div className="bg-gradient-to-br from-gold to-yellow-600 text-black font-mono p-4 rounded-xl shadow-2xl border border-gold/40 w-44 hover:scale-105 transition-transform">
            <div className="border-b-2 border-dashed border-black/30 pb-2 mb-2 flex justify-between items-center text-xs font-bold">
              <span>PREMIERE</span>
              <span>★ ADMIT ONE</span>
            </div>
            <p className="text-sm font-black tracking-widest text-center">MOVIE EVENT</p>
            <div className="mt-2 flex justify-between text-[9px] font-sans font-medium">
              <span>ROW: A7</span>
              <span>SEC: VIP</span>
            </div>
          </div>
        </div>

        {/* Floating Ticket 2 */}
        <div className="absolute bottom-1/4 right-10 md:right-24 animate-bounce duration-[5000ms] ease-in-out opacity-25 transform rotate-12" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-br from-accent-red to-red-900 text-white font-mono p-4 rounded-xl shadow-2xl border border-red-500/30 w-44">
            <div className="border-b-2 border-dashed border-white/20 pb-2 mb-2 flex justify-between items-center text-xs font-bold">
              <span>AUDIO PASS</span>
              <span>★ VIP BADGE</span>
            </div>
            <p className="text-sm font-black tracking-widest text-center text-gold">CELEBRITY</p>
            <div className="mt-2 flex justify-between text-[9px] font-sans">
              <span>ROW: BACK</span>
              <span>RANK: SEAT 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-20">
        {/* Red Carpet / Badge indicator */}
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-gold mb-6 sm:mb-8 animate-fade-in relative shadow-lg">
          <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
          <span className="font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Red Carpet Excellence &amp; Premium Tickets
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Bridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-accent-red p-1"> between Silver Screen</span> and People
        </h1>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-xl md:text-2xl text-slate-200/90 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Your trusted partner for premium movie events, celebrity appearances, and hassle-free ticket booking.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-gold to-yellow-500 hover:from-amber-400 hover:to-gold-hover text-slate-950 px-8 py-4 rounded-full font-heading font-bold text-base shadow-xl transform hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer glow-gold group"
          >
            <Ticket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Book Tickets</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-heading font-medium text-base border border-white/20 transform hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            <span>Explore Events</span>
          </button>
        </div>

        {/* Live quick feature ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="bg-black/45 backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
            <p className="text-gold font-heading text-xl font-bold">500+</p>
            <p className="text-slate-400 text-xs">Events Executed</p>
          </div>
          <div className="bg-black/45 backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
            <p className="text-gold font-heading text-xl font-bold">100%</p>
            <p className="text-slate-400 text-xs">Secured Ticketing</p>
          </div>
          <div className="bg-black/45 backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
            <p className="text-gold font-heading text-xl font-bold">50+</p>
            <p className="text-slate-400 text-xs">CELEBRITIES</p>
          </div>
          <div className="bg-black/45 backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
            <p className="text-gold font-heading text-xl font-bold">24/7</p>
            <p className="text-slate-400 text-xs">VIP Guest Support</p>
          </div>
        </div>
      </div>

      {/* Decorative Wave border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-full fill-current ${theme === 'dark' ? 'text-dark-bg' : 'text-slate-50'}`}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3.87,57.06,9.67,86.27,15.68,162.24,31.32,243.6,67.23,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
