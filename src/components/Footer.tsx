import React, { useState } from 'react';
import { Film, Send, ShieldCheck, MailCheck, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Featured Events', href: '#events' },
    { name: 'Gallery Portfolio', href: '#portfolio' },
    { name: 'Event Timeline', href: '#timeline' },
    { name: 'Accordion FAQs', href: '#faqs' },
    { name: 'Contact Desk', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'Movie Event Management', href: '#services' },
    { name: 'Audio Launch Events', href: '#services' },
    { name: 'Celebrity Meet & Greets', href: '#services' },
    { name: 'Film Promotions Support', href: '#services' },
    { name: 'Secured Ticket Booking', href: '#services' },
    { name: 'Corporate Entertainment', href: '#services' },
    { name: 'Prestige Award Functions', href: '#services' },
  ];

  return (
    <footer
      id="site-footer"
      className={`border-t transition-colors duration-300 relative ${
        theme === 'dark' 
          ? 'bg-dark-bg border-white/5 text-slate-400' 
          : 'bg-slate-900 border-white/5 text-slate-350'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & Brand Pitch Block */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center space-x-2 group">
              <div className="bg-accent-red p-2 rounded-lg glow-red transform group-hover:rotate-12 transition-transform duration-300">
                <Film className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white">
                Movie Events <span className="text-gold">&amp; Tickets</span>
              </span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-400">
              Authorized red carpet orchestrator and premier physical event ticketing platform. Bridging fans and major cast legends under cinematic conditions flawlessly.
            </p>

            <div className="inline-flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-white/5 text-gold font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>SSL SECURED TICKET NETWORK</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Newsletter subscription (Stay updated with upcoming movie events) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest">
              Newsletter Signup
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Stay updated with upcoming movie events, celebrity meetups, and exclusive pre-sale ticket discounts directly in your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/10 text-green-400 p-3 rounded-xl border border-green-500/20 text-xs flex items-center space-x-2 font-sans font-semibold">
                <MailCheck className="w-4 h-4 shrink-0 text-green-400 animate-bounce" />
                <span>Added! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex">
                <input
                  type="email"
                  placeholder="name@domain.com"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white rounded-xl text-xs font-sans focus:outline-none focus:ring-1 focus:ring-gold pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-accent-red hover:bg-gold text-white hover:text-black transition-colors cursor-pointer"
                  title="Subscribe Email"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[10px] block text-slate-500 font-sans">
              🛡 We respect privacy. No spam. Unsubscribe anytime.
            </span>
          </div>

        </div>

        {/* Support links & Copyright bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-slate-500 gap-4">
          <p>
            © 2026 Movie Events and Tickets. All Rights Reserved. Created under elite cinematic guidelines.
          </p>

          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-gold transition-colors">Terms &amp; Conditions</a>
            <a href="#contact" className="hover:text-gold transition-colors">Support Desk Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
