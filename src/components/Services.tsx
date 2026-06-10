import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { Clapperboard, Music, Sparkles, Megaphone, Ticket, Briefcase, Trophy, Film, X, Check, ArrowRight } from 'lucide-react';

// Help component map string icons cleanly inside typescript
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Clapperboard,
  Music,
  Sparkles,
  Megaphone,
  Ticket,
  Briefcase,
  Trophy,
  Film
};

interface ServicesProps {
  theme: 'dark' | 'light';
  onQuickBook: () => void;
}

export default function Services({ theme, onQuickBook }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    const Component = IconMap[iconName];
    return Component ? <Component className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />;
  };

  const serviceFeatures: { [key: string]: string[] } = {
    s1: [
      'Gala Premiere Stage Configuration',
      'VIP Red Carpet Photographic Pathways',
      'Media Press Conference Coordination',
      'Behind-the-scenes Videography Crews'
    ],
    s2: [
      'Immersive Surround Acoustics Rigging',
      'Laser & Pyrotechnics Synchronization',
      'Live Orchestra Stage Direction',
      'Large Scale Crowd Control Systems'
    ],
    s3: [
      'Strict A-list Security Escorts',
      'Private Interaction VIP Lounges',
      'Professional Lighting Portrait Stands',
      'Pre-signed Autograph Badges'
    ],
    s4: [
      'Promotional Multiplex Schedulers',
      'Digital Influencer Meetups Campaigns',
      'Trailer Release Synchronized Launch',
      'Flashmobs and Mall Audio Campaigns'
    ],
    s5: [
      'High-throughput Cloud Server Sales',
      'Anti-bot Ticket Queue Mechanics',
      'Paper QR Credentials Delivery',
      'WhatsApp and SMS Ticket Tickets'
    ],
    s6: [
      'Exclusive Team Closed Screenings',
      'Executive Lounge Hospitality Bars',
      'Customized Film-themed Decor',
      'Post-gala Executive Banqueting'
    ],
    s7: [
      'International Event Broadcasting Live',
      'Award Trophies Metallic Custom Fabrication',
      'A-list Host and Hostess Script Curation',
      'Media Press Room Setup & Curation'
    ],
    s8: [
      'Screening Panel Juror Coordination',
      'Arthouse Film Submission Registrations',
      'Cinema Masterclass Setup Panels',
      'Regional Subtitle Integration Screens'
    ]
  };

  return (
    <section
      id="services"
      className={`py-20 sm:py-28 transition-colors duration-300 relative ${
        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Visual Accent glow */}
      <div className="absolute top-1/2 left-0 right-0 h-96 pointer-events-none bg-gradient-to-tr from-accent-red/5 to-gold/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            🎞 Our Core Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Comprehensive <span className="text-accent-red">Cinema Event</span> Solutions
          </h2>
          <p className={`font-sans text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            We handle everything from movie launches and massive audio release stages to secure ticketing nodes and high-profile VIP client escorts.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-white/5 hover:border-gold/30 hover:bg-slate-900'
                  : 'bg-slate-50 border-slate-200/80 hover:border-accent-red/30 hover:bg-white'
              }`}
            >
              {/* Highlight badge overlay */}
              <div className="absolute top-3 right-3 text-[10px] font-bold font-heading px-2 py-1 rounded-md bg-accent-red/10 text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.highlight}
              </div>

              <div>
                {/* Icon box */}
                <div className={`p-4 rounded-xl w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  theme === 'dark'
                    ? 'bg-slate-800 text-gold group-hover:bg-gold group-hover:text-black'
                    : 'bg-slate-200 text-accent-red group-hover:bg-accent-red group-hover:text-white'
                }`}>
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-heading text-lg font-bold mb-3 tracking-tight group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>

                <p className={`font-sans text-xs sm:text-sm mb-6 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Learn More Interactive button */}
              <button
                onClick={() => setSelectedService(service)}
                className={`w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-800 hover:bg-gold text-white hover:text-slate-950 border border-white/5'
                    : 'bg-slate-200 hover:bg-accent-red text-slate-800 hover:text-white border border-black/5'
                }`}
              >
                <span>Learn More Expertise</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Interactive Modal Drawer Overlay */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-100 flex items-center justify-center p-4">
          <div
            className={`w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative border animate-fade-in ${
              theme === 'dark' 
                ? 'bg-slate-900 border-white/10 text-white' 
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Header image banner context */}
            <div className="relative h-44 bg-slate-950 flex items-end p-6">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-75"
                alt="Production Backdrop"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 flex items-center space-x-4">
                <div className="bg-gold text-black p-3 rounded-xl shadow-lg">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest">{selectedService.highlight}</span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-white">{selectedService.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-accent-red text-white p-2 rounded-full transition-colors cursor-pointer"
                title="Close overlay"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core Modal Contents */}
            <div className="p-6 space-y-6">
              <p className={`font-sans text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-650'}`}>
                {selectedService.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-heading text-xs font-bold uppercase text-slate-500 tracking-wider">Premium Package Includes:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceFeatures[selectedService.id]?.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="p-0.5 bg-green-500/20 text-green-500 rounded-full mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`font-sans text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Close */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className={`flex-1 py-3 px-4 rounded-xl font-heading text-xs font-bold text-center transition-all cursor-pointer ${
                    theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onQuickBook();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-accent-red hover:bg-red-700 text-white font-heading text-xs font-bold text-center glow-red transition-all cursor-pointer"
                >
                  Request Event Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
