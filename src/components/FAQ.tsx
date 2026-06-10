import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FAQProps {
  theme: 'dark' | 'light';
}

export default function FAQ({ theme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Decorative vectors */}
      <div className="absolute top-[40%] right-0 w-80 h-80 bg-accent-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            ❓ Common questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-accent-red">Inquiries</span>
          </h2>
          <p className={`font-sans text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore our detailed support documentation to understand ticket cancellation limits, VIP seats configurations, and corporate launch bookings.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQS.map((itm, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-slate-900/60 border-gold/40 shadow-xl'
                      : 'bg-white border-accent-red/40 shadow-lg shadow-black/5'
                    : theme === 'dark'
                    ? 'bg-slate-900/20 border-white/5 hover:border-white/10 hover:bg-slate-900/40'
                    : 'bg-white/80 border-slate-200 hover:border-slate-350 shadow-sm'
                }`}
              >
                {/* Header Bar Button Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isOpen ? 'text-accent-red' : 'text-slate-400'
                    }`} />
                    <span className="font-heading text-sm sm:text-base font-bold tracking-tight">
                      {itm.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border transition-all ${
                    isOpen 
                      ? 'bg-gold/10 border-gold/40 text-gold' 
                      : 'bg-slate-800/10 border-slate-700/10 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer Block */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-dashed border-white/5 font-sans text-xs sm:text-sm leading-relaxed">
                    <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-650'}>
                      {itm.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Help Segment */}
        <div className={`mt-12 p-6 rounded-2xl border text-center relative overflow-hidden ${
          theme === 'dark' ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200'
        }`}>
          <p className="font-sans text-xs sm:text-sm text-slate-400 inline-flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>Still have questions regarding celebrity lineups? Contact our execution desk at</span>
            <a href="#contact" className="text-gold font-bold underline hover:text-amber-400">Support Hub</a>
          </p>
        </div>

      </div>
    </section>
  );
}
