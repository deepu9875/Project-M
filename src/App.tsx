import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import EventsGrid from './components/EventsGrid';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import BookingProcess from './components/BookingProcess';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';
import { ArrowUp, Ticket, Sparkles, Film, Compass, Info } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState<boolean>(false);
  
  // Dynamic Ticket booking state
  const [isBookModalOpen, setIsBookModalOpen] = useState<boolean>(false);
  const [bookingPresetEventId, setBookingPresetEventId] = useState<string>('');
  const [bookingPresetEventName, setBookingPresetEventName] = useState<string>('');

  // 1. Loading animation (Requested under Design General)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // Elegant cinema-tint preloader duration
    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll detector for Back-to-Top Button & general animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const triggerGeneralBooking = () => {
    setBookingPresetEventId('');
    setBookingPresetEventName('');
    setIsBookModalOpen(true);
  };

  const triggerEventPresetBooking = (eventId: string) => {
    setBookingPresetEventId(eventId);
    setBookingPresetEventName('');
    setIsBookModalOpen(true);
  };

  const triggerTimelinePresetBooking = (eventName: string) => {
    setBookingPresetEventId('');
    setBookingPresetEventName(eventName);
    setIsBookModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modern Preloader loader animation render
  if (isLoading) {
    return (
      <div 
        id="cinema-preloader"
        className="fixed inset-0 z-250 bg-black flex flex-col items-center justify-center text-white"
      >
        <div className="space-y-6 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold via-accent-red to-gold rounded-full blur opacity-50 animate-pulse"></div>
            <div className="relative bg-slate-950 p-6 rounded-full border border-gold/40 flex items-center justify-center w-24 h-24 mx-auto animate-spin-slow">
              <Film className="w-10 h-10 text-gold" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-heading text-xl sm:text-2xl font-black tracking-widest text-white uppercase">
              MOVIE EVENTS <span className="text-gold">&amp; TICKETS</span>
            </h1>
            <p className="font-sans text-[11px] text-slate-500 uppercase tracking-widest">
              Initializing Secure Ticket Networks...
            </p>
          </div>

          <div className="w-48 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold to-accent-red animate-loading-bar w-1/2 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. STICKY NAVIGATION HEADER */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onBookClick={triggerGeneralBooking}
      />

      {/* 2. INSTANT CINEMATIC HERO BANNER */}
      <Hero
        theme={theme}
        onBookClick={triggerGeneralBooking}
        onExploreClick={() => scrollToSection('events')}
      />

      {/* 3. PARTNERS & STUDIO SPONSORS INTERACTIVE SCROLL CAROUSEL */}
      <Sponsors theme={theme} />

      {/* 4. PROFESSIONAL ABOUT COMPANY SECTION */}
      <About theme={theme} />

      {/* 5. SEVEN SERVICES INTERACTIVE cards */}
      <Services
        theme={theme}
        onQuickBook={triggerGeneralBooking}
      />

      {/* CALL TO ACTION SECTION 1 (STRATEGICALLY PLACED WITH HIGH METRIC VALUES) */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-slate-950 border-t border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Crowd event backdrop"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-3 bg-gold/10 text-gold rounded-full w-fit mx-auto border border-gold/25">
            <Sparkles className="w-6 h-6 text-gold animate-bounce" />
          </div>
          
          {/* Headline CTA (Requested) */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Don't Miss the Biggest Movie Events of the Year!
          </h2>
          
          <p className="font-sans text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reserve your standard entries or premium VIP badges ahead of time to secure premium seating, red carpet passages, and physical photo concessions with superstars.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={triggerGeneralBooking}
              className="w-full sm:w-auto bg-accent-red hover:bg-red-700 text-white font-heading font-bold text-sm py-4 px-8 rounded-full shadow-lg hover:scale-103 active:scale-97 cursor-pointer transition-all flex items-center justify-center space-x-2"
            >
              <Ticket className="w-4 h-4" />
              <span>Book Tickets Instantly</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-heading font-medium text-sm py-4 px-8 rounded-full border border-white/15 cursor-pointer backdrop-blur-md transition-all text-center"
            >
              Contact Event Curation Desk
            </button>
          </div>
        </div>
      </section>

      {/* 6. FEATURED EVENTS SEARCH & RESERVATIONS GRID */}
      <EventsGrid
        theme={theme}
        onBookNow={triggerEventPresetBooking}
      />

      {/* 7. WHY CHOOSE US REASONS & COUNTERS (Metrical stats) */}
      <WhyChooseUs theme={theme} />

      {/* 8. EXPERT WORK PORTFOLIO (Masonry lightbox gallery) */}
      <Portfolio theme={theme} />

      {/* 9. SEQUENTIAL TIMELINE OF EVENTS (Pre-releases up to prestige awards) */}
      <Timeline
        theme={theme}
        onRegister={triggerTimelinePresetBooking}
      />

      {/* 10. TESTIMONIALS (Stars carousel reviews) */}
      <Testimonials theme={theme} />

      {/* 11. FOUR STEP TICKET BOOKING PROCESS EXPLAINER */}
      <BookingProcess theme={theme} />

      {/* 12. FREQUENTLY ASKED ACCORDION FAQS */}
      <FAQ theme={theme} />

      {/* 13. SECURED CONTACT FORM VALIDATOR & CODES MAP */}
      <Contact theme={theme} />

      {/* 14. FOOTER COMPONENT */}
      <Footer theme={theme} />

      {/* 15. DYNAMIC BOOKING SYSTEM MODAL overlay */}
      <TicketModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        presetEventId={bookingPresetEventId}
        presetEventName={bookingPresetEventName}
      />

      {/* 16. DETECTABLE BACK-TO-TOP CHROME ACTION PIN */}
      {isBackToTopVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-100 p-3 bg-accent-red hover:bg-gold text-white hover:text-slate-950 rounded-full shadow-2xl hover:scale-110 active:scale-90 cursor-pointer transition-all border border-white/10 shrink-0"
          title="Back to Top"
          aria-label="Scroll smooth back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
