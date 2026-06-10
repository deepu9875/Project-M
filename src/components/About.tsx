import React from 'react';
import { Target, Eye, ShieldCheck, Award, Heart, TrendingUp } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const coreValues = [
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: 'Uncompromised Excellence',
      description: 'We orchestrate every cinematic event to absolute perfection, from acoustics to security.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-red" />,
      title: 'Premium Security',
      description: 'Robust offline-and-online validation secures safe passages for talent and general ticketholders.'
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      title: 'Fan Centricity',
      description: 'Creating heart-to-heart moments between fans and their silver screen idols.'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Images Section (Requested) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Decorative accent highlight box behind the main image */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gold to-accent-red opacity-30 blur-lg group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] object-cover">
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop"
                  alt="Red Carpet Premiere VIP"
                  className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating graphic overlay with statistics overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gold/20 rounded-md">
                      <TrendingUp className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">A-List Certified</h4>
                      <p className="text-[11px] text-slate-300">Formally authorized partnerships with Top Production Houses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Behind the scenes overlay */}
            <div className="hidden sm:grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/5 aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop"
                  alt="Spotlights and Audio Event"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/5 aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1496337589254-7e19d01eae44?q=80&w=400&auto=format&fit=crop"
                  alt="Award Event Crowd"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right: Pitch & Mission/Vision Content (Requested) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Pill badge */}
              <span className="inline-flex items-center space-x-2 bg-accent-red/10 text-accent-red px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
                ★ Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Crafting Red Carpet{' '}
                <span className="text-gold">Moments</span> Beyond the Screen
              </h2>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-slate-400">
                Movie Events and Tickets specializes in creating unforgettable entertainment experiences. From blockbuster movie launches to celebrity interactions and premium ticketing solutions, we deliver seamless event management with excellence.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-900/60 border-white/5 hover:border-gold/30' 
                  : 'bg-white border-slate-200 hover:border-accent-red/30'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gold/10 text-gold rounded-xl">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">Our Mission</h3>
                </div>
                <p className={`font-sans text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  To bridge global fans and silver-screen superstars through state-of-the-art secure booking nodes and impeccably curated celebrity events.
                </p>
              </div>

              {/* Vision */}
              <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-900/60 border-white/5 hover:border-gold/30' 
                  : 'bg-white border-slate-200 hover:border-accent-red/30'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent-red/10 text-accent-red rounded-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">Our Vision</h3>
                </div>
                <p className={`font-sans text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  To expand raw cinematic grandeur beyond physical theaters, making premium promotions and festival passes available universally.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4 pt-4 border-t border-slate-850">
              <h3 className="font-heading text-lg font-bold flex items-center space-x-2">
                <span>Core Values We Live By</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {val.icon}
                      <h4 className="font-heading text-sm font-bold">{val.title}</h4>
                    </div>
                    <p className={`font-sans text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
