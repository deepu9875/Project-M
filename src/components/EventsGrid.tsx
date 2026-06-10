import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data';
import { MovieEvent } from '../types';
import { Search, Calendar, MapPin, DollarSign, Sparkles, Filter, Ticket, Flame, BellRing } from 'lucide-react';

interface EventsGridProps {
  theme: 'dark' | 'light';
  onBookNow: (eventId: string) => void;
}

export default function EventsGrid({ theme, onBookNow }: EventsGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tickerTimers, setTickerTimers] = useState<{ [key: string]: string }>({});

  // Countdown clock state driver
  useEffect(() => {
    const updateCountdown = () => {
      const updated: { [key: string]: string } = {};
      EVENTS.forEach((ev) => {
        if (!ev.countdownDate) return;
        const target = new Date(ev.countdownDate).getTime();
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
          updated[ev.id] = 'Happening Now!';
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          
          updated[ev.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      });
      setTickerTimers(updated);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter and search logic
  const filteredEvents = EVENTS.filter((ev) => {
    const matchesFilter = selectedFilter === 'all' || ev.type === selectedFilter;
    const searchString = `${ev.name} ${ev.celebrity} ${ev.venue} ${ev.category}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getAvailabilityBadge = (avail: string) => {
    switch (avail) {
      case 'available':
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
            <span>🟢 Available</span>
          </span>
        );
      case 'limited':
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>🟡 Limited</span>
          </span>
        );
      case 'sold_out':
      default:
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>🔴 Sold Out</span>
          </span>
        );
    }
  };

  const getCategoryTheme = (type: string) => {
    switch (type) {
      case 'live':
        return 'border-accent-red text-accent-red bg-accent-red/5';
      case 'vip':
        return 'border-gold text-gold bg-gold/5';
      case 'upcoming':
        return 'border-blue-500 text-blue-500 bg-blue-500/5';
      default:
        return 'border-slate-500 text-slate-400 bg-slate-500/5';
    }
  };

  return (
    <section
      id="events"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center space-x-2 bg-accent-red/10 text-accent-red px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
              ★ Premium Seat Reservations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured <span className="text-gold">Movie Events</span> &amp; Launches
            </h2>
            <p className={`font-sans text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Browse and reserve real-time ticketing solutions for audio festivals, cast fan gatherings, and prestige theater preview entries.
            </p>
          </div>

          {/* Event Search Bar (Requested) */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search event, venue, or star..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm font-sans font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold ${
                theme === 'dark'
                  ? 'bg-slate-900 border border-white/10 text-white placeholder-slate-500'
                  : 'bg-white border border-slate-350 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Filters Tabs Block (Upcoming, Live, Completed, VIP) (Requested) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Experiences' },
            { id: 'upcoming', label: 'Upcoming Premiere' },
            { id: 'live', label: 'Live Show' },
            { id: 'completed', label: 'Archived Highlights' },
            { id: 'vip', label: 'VIP Exclusive Block' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-heading text-xs font-bold cursor-pointer transition-all duration-300 ${
                selectedFilter === tab.id
                  ? 'bg-accent-red text-white shadow-lg shadow-red-600/30 font-extrabold scale-102'
                  : theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-white/5'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-250 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredEvents.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-700 bg-black/25">
            <Flame className="w-12 h-12 text-amber-500/60 mx-auto mb-4 animate-bounce" />
            <h4 className="font-heading text-lg font-bold mb-2 text-white">No synchronized matches found</h4>
            <p className="font-sans text-sm text-slate-400 max-w-md mx-auto">
              We couldn’t find anyone on stage matching "{searchQuery}". Retype your search tags or shift tabs filters.
            </p>
          </div>
        )}

        {/* Featured Events Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((ev) => (
            <article
              key={ev.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl group flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-white/5 hover:border-gold/20'
                  : 'bg-white border-slate-200/80 shadow-md hover:border-accent-red/20'
              }`}
            >
              {/* Card visual wrapper */}
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={ev.poster}
                    alt={ev.name}
                    className="w-full h-full object-cover transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag top left */}
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <span className={`text-[10px] font-bold font-heading px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-md border ${getCategoryTheme(ev.type)}`}>
                      {ev.category}
                    </span>
                  </div>

                  {/* Availability indicator status (🟢 Available | 🟡 Limited | 🔴 Sold Out) (Requested) */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
                      {getAvailabilityBadge(ev.availability)}
                    </div>
                  </div>

                  {/* Animated ticking countdown live display block! */}
                  {ev.countdownDate && ev.type !== 'completed' && (
                    <div className="absolute top-3 right-3 bg-black/85 border border-gold/30 backdrop-blur-md text-gold px-2.5 py-1 rounded-lg flex items-center space-x-1 text-[11px] font-semibold tracking-wider font-mono">
                      <BellRing className="w-3.5 h-3.5 animate-swing" />
                      <span>{tickerTimers[ev.id] || 'Loading...'}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  {/* Title & celebrity meta */}
                  <div className="space-y-1">
                    <p className="text-xs text-gold/90 font-bold uppercase tracking-widest">{ev.celebrity}</p>
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold tracking-tight line-clamp-1 group-hover:text-gold transition-colors duration-200">
                      {ev.name}
                    </h3>
                  </div>

                  {/* Location and time tags */}
                  <div className={`space-y-2 text-xs font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-accent-red shrink-0" />
                      <span>{ev.date} at {ev.time} PST</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-accent-red shrink-0" />
                      <span className="line-clamp-1">{ev.venue}</span>
                    </div>
                  </div>

                  {/* brief explanation text */}
                  <p className={`font-sans text-xs sm:text-sm line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {ev.description}
                  </p>
                </div>
              </div>

              {/* pricing & Book button */}
              <div className={`p-6 border-t flex items-center justify-between ${theme === 'dark' ? 'border-white/5 bg-black/10' : 'border-slate-100 bg-slate-50'}`}>
                <div>
                  <span className={`block text-[10px] uppercase font-bold text-slate-400 tracking-widest`}>Tickets From</span>
                  <div className="flex items-baseline space-x-0.5">
                    <span className="text-lg font-black font-heading text-accent-red">${ev.ticketPrice}</span>
                    <span className="text-[10px] text-slate-400">/std</span>
                  </div>
                </div>

                {ev.availability === 'sold_out' ? (
                  <button
                    disabled
                    className="py-2 px-5 rounded-xl font-heading text-xs font-bold bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"
                  >
                    Sold Out Pass
                  </button>
                ) : (
                  <button
                    onClick={() => onBookNow(ev.id)}
                    className="flex items-center space-x-2 py-2.5 px-5 rounded-xl bg-accent-red hover:bg-red-700 text-white font-heading text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer glow-red"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Book Seats</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
