import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 shrink-0 ${
          i < rating ? 'fill-gold text-gold' : 'text-slate-600'
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-100'
      }`}
    >
      {/* Background spot light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            👥 Verified fan Reviews
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Words From Our <span className="text-accent-red">Guests</span> &amp; Directors
          </h2>
          <p className="font-sans text-sm text-slate-400">
            Read real feedback from elite global film directors, production houses, and tier-1 ticket ticket buyers.
          </p>
        </div>

        {/* Testimonials Carousel Slider Block */}
        <div className="relative">
          
          {/* Main Slider Card */}
          <div className="bg-slate-900/60 border border-white/10 p-6 sm:p-10 rounded-2xl relative shadow-2xl backdrop-blur-md">
            
            {/* Big quote icon decorator */}
            <div className="absolute top-6 right-8 text-gold/10 pointer-events-none">
              <Quote className="w-24 h-24 stroke-1 rotate-180" />
            </div>

            <div className="space-y-6 sm:space-y-8 relative z-10 text-left">
              
              {/* Star review and event tag */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center space-x-1">
                  {renderStars(activeReview.rating)}
                </div>
                <div className="inline-flex items-center space-x-2 bg-accent-red/20 text-accent-red border border-accent-red/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-heading">
                  <Sparkles className="w-3 h-3 text-gold shrink-0" />
                  <span>Associated: {activeReview.eventName}</span>
                </div>
              </div>

              {/* Feedback text */}
              <blockquote className="font-sans text-base sm:text-lg md:text-xl font-light text-slate-200 italic leading-relaxed">
                "{activeReview.feedback}"
              </blockquote>

              {/* Author visual avatar bio */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gold to-accent-red blur-sm opacity-50"></div>
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-white">{activeReview.name}</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400">{activeReview.role}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Left/Right Control Triggers */}
          <div className="flex items-center justify-between mt-8 h-10">
            {/* Indicator Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-gold' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left/Right switches */}
            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-slate-800 hover:text-white transition-all cursor-pointer active:scale-90"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-slate-800 hover:text-white transition-all cursor-pointer active:scale-90"
                title="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
