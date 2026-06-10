import React from 'react';
import { Search, Armchair, ShieldCheck, MailCheck, MoveRight, HelpCircle, ChevronRight } from 'lucide-react';

interface BookingProcessProps {
  theme: 'dark' | 'light';
}

export default function BookingProcess({ theme }: BookingProcessProps) {
  const steps = [
    {
      step: 'Step 1',
      title: 'Browse Events',
      description: 'Explore our chronological timeline list or type keywords in the live search bar to immediately filter specific superstar meets.',
      icon: <Search className="w-8 h-8 text-gold" />,
      highlight: 'Live Tickers active'
    },
    {
      step: 'Step 2',
      title: 'Choose Seats & Type',
      description: 'Pick standard admission or scale up to elite VIP passbadges containing custom autography boxes and red carpet security passages.',
      icon: <Armchair className="w-8 h-8 text-accent-red" />,
      highlight: 'Instant allocation'
    },
    {
      step: 'Step 3',
      title: 'Secured Checkout',
      description: 'Process payments immediately simulated via modern encrypted tokens. Your seat is hard-allocated on the local cloud nodes.',
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      highlight: 'Zero ticketing queues'
    },
    {
      step: 'Step 4',
      title: 'Confirmation Ticket',
      description: 'Secure instant digital receipts. You can immediately preview your downloadable ticket passes decorated with dedicated dynamic QR-codes.',
      icon: <MailCheck className="w-8 h-8 text-blue-500" />,
      highlight: 'Instant WhatsApp & Email'
    }
  ];

  return (
    <section
      id="booking-process"
      className={`py-20 sm:py-28 transition-colors duration-300 relative ${
        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            ★ Seamless Operations Engine
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Four-Step <span className="text-accent-red">Booking Process</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Secure premium tickets in seconds through our seamless, mobile-optimized live booking process.
          </p>
        </div>

        {/* Horizontal steps flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((item, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative flex flex-col items-center group">
                
                {/* Arrow indicator between steps for medium screens */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-12 left-1/2 transform translate-x-12 w-full z-20 pointer-events-none text-slate-500">
                    <div className="flex justify-center animate-pulse">
                      <ChevronRight className="w-8 h-8 text-gold/30 stroke-[3]" />
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div
                  className={`w-full min-h-[280px] p-6 rounded-2xl border transition-all duration-300 hover:scale-103 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden text-center ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-white/5 hover:border-gold/30 hover:bg-slate-900'
                      : 'bg-slate-800 border-white/5 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    {/* Top step badge */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded-md border border-gold/20">
                        {item.step}
                      </span>
                      <span className="text-[9px] font-sans text-slate-400 font-medium">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Icon visual container */}
                    <div className="p-4 bg-slate-950 border border-white/10 rounded-2xl w-fit mx-auto mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    {/* Heading text */}
                    <h3 className="font-heading text-lg font-black text-white mb-2">{item.title}</h3>
                    
                    {/* description copy */}
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
