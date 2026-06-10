import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Facebook, Instagram, Youtube, Linkedin, Star, ShieldCheck } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Movie Event Management',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Movie Event Management',
    'Audio Launch Events',
    'Celebrity Meet & Greets',
    'Film Promotions',
    'Ticket Booking Support',
    'Corporate Entertainment',
    'Award Functions',
    'Film Festivals'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phone)) {
      errors.phone = 'Please provide a valid phone key';
    }
    if (!formData.message.trim()) errors.message = 'Please input your project constraints';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSubmitted(true);
      // Automatically reset after 5 seconds to allow another form submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'Movie Event Management',
          message: ''
        });
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-heading">
            ✉ Project Consultation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Connect With Our <span className="text-accent-red">Event Team</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Request pricing brackets, schedule celebrity secure escorts, or partner with our regional multiplex tour coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Company Information + Custom Map Placeholder (Requested) */}
          <div className="lg:col-span-5 space-y-8 text-black dark:text-white">
            
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-white">
                Los Angeles <span className="text-gold">Headquarters</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                Experience movie pre-release preparation at our high-fidelity suite or drop our sales manager an email.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-accent-red/10 text-accent-red rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-slate-350">
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Office Address</h4>
                  <p className="font-sans text-xs mt-1 leading-relaxed">
                    121 Cinema Drive, Suite 500<br />Los Angeles, CA 90028
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-gold/10 text-gold rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-slate-350">
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Hotline Dial</h4>
                  <p className="font-sans text-xs mt-1 leading-relaxed leading-loose">
                    +1 (555) 124-STAR<br />events@movieevents.com
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-slate-350">
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Email Support</h4>
                  <p className="font-sans text-xs mt-1 leading-relaxed">
                    desk@moviesandtickets.com<br />24/7 VIP assistance
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-slate-350">
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Business Hours</h4>
                  <p className="font-sans text-xs mt-1 leading-relaxed">
                    Mon - Sat: 09:00 - 19:00 PST<br />Sunday VIP Bookings On-Call
                  </p>
                </div>
              </div>

            </div>

            {/* Custom Interactive Google Map Placeholder (Requested) */}
            <div className="space-y-3">
              <span className="font-heading text-xs font-bold text-slate-500 uppercase tracking-widest block">
                🗺 SIMULATED GEOGRAPHIC PIN (HOLLYWOOD BLVD)
              </span>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-inner group">
                {/* Simulated Street Grid map using vector elements */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-4 font-mono select-none">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>GPS: 34.0928 N, 118.3287 W</span>
                    <span>HD RADAR ACTIVE</span>
                  </div>
                  
                  {/* Grid lines vectors */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-wrap gap-4 p-2">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-white/20 w-8 h-8 rounded-sm shrink-0" />
                    ))}
                  </div>

                  {/* Simulated Landmark pointers */}
                  <div className="relative flex flex-col items-center justify-center space-y-1.5 h-full">
                    {/* Pulsing visual Pin */}
                    <div className="relative">
                      <span className="absolute -inset-2 bg-accent-red/40 rounded-full animate-ping"></span>
                      <div className="relative bg-accent-red p-2.5 rounded-full border border-white glow-red">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                      <h5 className="font-heading text-xs font-bold text-white">Movie Events Headquarters</h5>
                      <p className="text-[9px] text-gold mt-0.5">Hollywood Blvd, Suite 500</p>
                    </div>
                  </div>

                  <div className="text-right text-[10px] text-slate-500">
                    <span>© 2026 Map-Engine Studio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons links (Requested: Facebook, Instagram, X, Youtube, Linkedin) */}
            <div className="space-y-3">
              <span className="font-heading text-xs font-bold text-slate-500 uppercase tracking-widest block">
                Connect on Media Platforms
              </span>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://facebook.com' },
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com' },
                  { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: 'https://youtube.com' },
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-gold hover:bg-slate-800 transition-colors border border-white/5 active:scale-95"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Professional Contact Form with Validation (Requested) */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/5 p-6 sm:p-10 rounded-2xl relative shadow-2xl">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="p-4 bg-green-500/10 text-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-green-500/20 glow-green">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-white">Application Received!</h3>
                  <p className="font-sans text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you {formData.name}. Your movie event inquiry was authorized. An expert regional manager has been notified and will reach out to your {formData.email} inbox within 12 hours.
                  </p>
                </div>
                <div className="inline-flex items-center space-x-2 text-xs bg-slate-950/60 px-3.5 py-1.5 rounded-lg border border-white/5 text-gold font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>SECURE REQUEST ID: MET-{Math.round(Math.random() * 89999 + 10000)}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-white">Event Booking Curation Inquiry</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400">
                    Fields are secured using industry SSL certificates.
                  </p>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-950 border text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold ${
                        formErrors.name ? 'border-accent-red focus:ring-red-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-accent-red font-semibold">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-950 border text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold ${
                        formErrors.email ? 'border-accent-red focus:ring-red-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-accent-red font-semibold">{formErrors.email}</p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone field */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 124-7827"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-950 border text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold ${
                        formErrors.phone ? 'border-accent-red focus:ring-red-500' : 'border-white/10'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-accent-red font-semibold">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Event Interest dropdown field (Requested) */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                      Event Interest Type
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      {interestOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Message field */}
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                    Project Message / Constraints *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Provide details of your expected audience headcount, celebrity request targets, preferred venues, or dates..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950 border text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold ${
                      formErrors.message ? 'border-accent-red focus:ring-red-500' : 'border-white/10'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-accent-red font-semibold">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-accent-red hover:bg-red-700 text-white font-heading font-bold rounded-xl shadow-xl transition-all hover:scale-101 cursor-pointer active:scale-95 glow-red"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Secure Curation Inquiry</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
