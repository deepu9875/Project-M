import React from 'react';
import { CheckCircle2, Trophy, Users, ShieldAlert, BadgePercent, Sparkles, TrendingUp } from 'lucide-react';
import { STATS } from '../data';

interface WhyChooseUsProps {
  theme: 'dark' | 'light';
}

export default function WhyChooseUs({ theme }: WhyChooseUsProps) {
  const coreReasons = [
    { title: 'Professional Event Management', text: 'End-to-end orchestration including sound rigs, red carpets, and timing.' },
    { title: 'Secure Ticket Booking', text: 'Encrypted online transaction tokens with companion offline support desks.' },
    { title: 'Celebrity Partnerships', text: 'Exclusive authorized A-list lineups and meet-and-greets agreements.' },
    { title: 'Premium Customer Support', text: 'Our specialized ticketing desk resolves client issues 24/7 instantly.' },
    { title: 'Real-time Updates', text: 'Instant email, SMS, and WhatsApp alerts for venue or schedule revisions.' },
    { title: 'Exclusive VIP Access', text: 'Access passes to press rooms, sound checks, and signed hampers.' }
  ];

  return (
    <section
      id="why-choose-us"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-red/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-accent-red/10 text-accent-red px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            🛡 Why We Excel
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Setting New <span className="text-gold">Industry Benchmarks</span>
          </h2>
          <p className={`font-sans text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            We bridge the gap between silver screen dreams and tangible physical experiences with maximum security and absolute precision.
          </p>
        </div>

        {/* Bento/Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Block: List of 6 reasons (Requested with Checkmarks) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Our Professional <span className="text-accent-red">Accreditation</span> Guarantee
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreReasons.map((reason, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all hover:translate-x-1 hover:shadow-md duration-200 ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border-white/5 hover:border-gold/30'
                      : 'bg-white border-slate-200 hover:border-accent-red/35'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-bold transition-all">
                        {reason.title}
                      </h4>
                      <p className={`font-sans text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Pitch card decoration */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-red to-gold rounded-3xl blur opacity-30"></div>
            
            <div className={`relative p-8 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-350 shadow-xl'
            }`}>
              <div className="p-3 bg-accent-red/10 text-accent-red rounded-xl w-fit mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold mb-4">
                Red Carpet VIP Operations Included
              </h4>
              <p className={`font-sans text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                Every single ticket sold contributes to an active carbon-offset program. Furthermore, our exclusive operations team maintains safe cordons for premier star cast entries.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-heading font-bold text-gold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>Elite Event Perks Included:</span>
                </div>
                <ul className={`text-xs space-y-2 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-650'}`}>
                  <li>⚡ Free dynamic seat upgrades for pre-registrants</li>
                  <li>⚡ Multi-city promotional pass synchronization</li>
                  <li>⚡ Secured digital payment gateways using modern checkout systems</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Statistics Ribbon (Requested) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl text-center border overflow-hidden relative group transition-all duration-300 hover:scale-103 hover:shadow-xl ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/5 hover:border-gold/30'
                  : 'bg-white border-slate-200 hover:border-accent-red/30'
              }`}
            >
              {/* background vector shine */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-red/5 rounded-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform" />
              
              <p className="font-heading text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500 mb-2">
                {stat.number}
              </p>
              <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider line-clamp-1">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  {stat.label}
                </span>
              </h4>
              <p className="font-sans text-[10px] text-slate-400 mt-1 line-clamp-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
