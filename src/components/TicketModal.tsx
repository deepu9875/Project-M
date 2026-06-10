import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data';
import { MovieEvent, BookingDetail } from '../types';
import { X, ShieldCheck, Ticket, Calendar, MapPin, Sparkles, AlertTriangle, Fingerprint, RefreshCcw, Download, Printer, CheckCircle } from 'lucide-react';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetEventId?: string;
  presetEventName?: string;
}

export default function TicketModal({ isOpen, onClose, presetEventId, presetEventName }: TicketModalProps) {
  // Find preset event
  const initialEvent = presetEventId 
    ? EVENTS.find(e => e.id === presetEventId) 
    : presetEventName
    ? EVENTS.find(e => e.name.toLowerCase().includes(presetEventName.toLowerCase()))
    : EVENTS[0];

  const [selectedEvent, setSelectedEvent] = useState<MovieEvent>(initialEvent || EVENTS[0]);
  const [ticketType, setTicketType] = useState<'Standard' | 'VIP'>('Standard');
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // States for purchase process
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [bookingRef, setBookingRef] = useState('');

  // Watch preset changes
  useEffect(() => {
    if (presetEventId) {
      const found = EVENTS.find(e => e.id === presetEventId);
      if (found) setSelectedEvent(found);
    } else if (presetEventName) {
      const found = EVENTS.find(e => e.name.toLowerCase().includes(presetEventName.toLowerCase()));
      if (found) setSelectedEvent(found);
    }
  }, [presetEventId, presetEventName, isOpen]);

  if (!isOpen) return null;

  // Calculate fees
  const priceUnit = ticketType === 'VIP' ? (selectedEvent.vipPrice || selectedEvent.ticketPrice * 2.5) : selectedEvent.ticketPrice;
  const subtotal = priceUnit * ticketCount;
  const convenienceFee = ticketType === 'VIP' ? 12 : 4.5;
  const totalCost = subtotal + convenienceFee;

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill out all billing details.');
      return;
    }

    setIsProcessing(true);
    
    // Simulate API reservation latency
    setTimeout(() => {
      setIsProcessing(false);
      setBookingRef(`MET-RE-${Math.round(Math.random() * 899999 + 100000)}`);
      setStep('success');
    }, 1800);
  };

  const handleDownloadStub = () => {
    alert('Preparing your ticket pass stub PDF... Success! Your download was initiated.');
  };

  const handlePrintStub = () => {
    window.print();
  };

  const handleResetBooking = () => {
    setStep('details');
    setName('');
    setEmail('');
    setPhone('');
    setTicketCount(1);
    setTicketType('Standard');
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-150 flex items-center justify-center p-4 overflow-y-auto no-scrollbar">
      
      {/* Modal Dialog Body */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-white">
        
        {/* Absolute header visual background gradient strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-accent-red to-gold" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <Ticket className="w-5 h-5 text-gold animate-bounce" />
            <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight">
              {step === 'details' ? 'Secure Movie Ticket Booking' : 'Pass Booking Authorized'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-accent-red text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Dismiss Booking"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          /* SECTION 1: Form Details Input */
          <form onSubmit={handleCreateBooking} className="p-6 space-y-6">
            
            {/* Choose Event Selector */}
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading">
                Step 1: Choose Movie Event / Experience
              </label>
              <select
                value={selectedEvent.id}
                onChange={(e) => {
                  const ev = EVENTS.find(x => x.id === e.target.value);
                  if (ev) setSelectedEvent(ev);
                }}
                className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold"
              >
                {EVENTS.map((ev) => (
                  <option key={ev.id} value={ev.id} disabled={ev.availability === 'sold_out'}>
                    {ev.name} ({ev.availability === 'sold_out' ? 'Sold Out' : `$${ev.ticketPrice}`})
                  </option>
                ))}
              </select>
            </div>

            {/* Event Summary Ribbon */}
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-bold text-gold tracking-widest font-heading">
                  ★ Celebrity: {selectedEvent.celebrity}
                </span>
                <h4 className="font-heading text-sm font-bold text-white leading-tight">{selectedEvent.name}</h4>
                <div className="flex items-center space-x-3 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center"><Calendar className="w-3 h-3 text-accent-red mr-1 shrink-0" />{selectedEvent.date}</span>
                  <span className="flex items-center"><MapPin className="w-3 h-3 text-accent-red mr-1 shrink-0" />{selectedEvent.venue}</span>
                </div>
              </div>
              <div className="shrink-0 flex items-center space-x-2 bg-slate-900 border border-white/5 py-1.5 px-3 rounded-lg text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                <span className="font-bold text-slate-300">Live Status: {selectedEvent.type.toUpperCase()}</span>
              </div>
            </div>

            {/* Step 2: Choose Tiers and Quotas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              
              {/* Left Column: Tiers Selection */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading block">
                  Step 2: Admission Circle Tier
                </label>
                
                <div className="grid grid-cols-1 gap-3">
                  {/* Standard option */}
                  <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ticketType === 'Standard' 
                      ? 'border-accent-red bg-accent-red/5' 
                      : 'border-white/5 bg-slate-950/40 hover:bg-slate-950'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        checked={ticketType === 'Standard'}
                        onChange={() => setTicketType('Standard')}
                        className="text-accent-red focus:ring-accent-red rounded-full"
                      />
                      <div>
                        <span className="font-heading text-sm font-bold block">Standard Circle</span>
                        <span className="text-[10px] text-slate-400">Regular Arena entries</span>
                      </div>
                    </div>
                    <span className="font-heading text-sm font-bold text-slate-300">${selectedEvent.ticketPrice}</span>
                  </label>

                  {/* VIP option */}
                  <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ticketType === 'VIP' 
                      ? 'border-gold bg-gold/5' 
                      : 'border-white/5 bg-slate-950/40 hover:bg-slate-950'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        checked={ticketType === 'VIP'}
                        onChange={() => setTicketType('VIP')}
                        className="text-gold focus:ring-gold rounded-full"
                      />
                      <div>
                        <span className="font-heading text-sm font-bold block text-gold flex items-center space-x-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Elite VIP Access</span>
                        </span>
                        <span className="text-[10px] text-slate-400">Red carpet &amp; photoshoot passes</span>
                      </div>
                    </div>
                    <span className="font-heading text-sm font-bold text-gold">
                      ${selectedEvent.vipPrice || selectedEvent.ticketPrice * 2.5}
                    </span>
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading block">
                    Headcount Quota (Max 10)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={ticketCount}
                    onChange={(e) => setTicketCount(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="w-full px-4 py-2 bg-slate-950 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Right Column: Billing Information */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-heading block">
                  Step 3: Secure Guest details
                </label>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your First & Last Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Booking Email Inbox"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Mobile Contact No"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Secure warning tag */}
                <div className="p-3 bg-slate-950 rounded-xl border border-white/5 flex items-start space-x-2 text-[10px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <p>Secured via 256-Bit SSL Encryption. Your payment simulation is sandboxed and encrypted.</p>
                </div>
              </div>

            </div>

            {/* Pricing math receipt box */}
            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Rate Allocation: {ticketType} x {ticketCount}</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Secured Node Processing Fee</span>
                <span className="font-bold">${convenienceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold">
                <span className="text-gold flex items-center space-x-1">
                  <span>Authorized Cost Checklist</span>
                </span>
                <span className="text-accent-red font-mono text-base">${totalCost.toFixed(2)}</span>
              </div>
            </div>

            {/* Check terms */}
            <label className="flex items-start space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="text-accent-red focus:ring-accent-red rounded mt-0.5"
              />
              <span className="text-[10px] text-slate-400 leading-relaxed text-left">
                I hereby accept Movie Events policies, admitting that tickets are refundable up to 72 hours before the premiere date, and agreeing to behave in accordance with theater rules.
              </span>
            </label>

            {/* Action buttons */}
            <div className="flex gap-4 pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-heading text-xs font-bold text-center transition-all cursor-pointer"
              >
                Dismiss Booking
              </button>
              
              <button
                type="submit"
                disabled={isProcessing || !agreeTerms}
                className={`flex-1 py-3 px-4 rounded-xl font-heading text-xs font-bold text-center glow-red transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  isProcessing || !agreeTerms
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-accent-red hover:bg-red-700 text-white'
                }`}
              >
                {isProcessing ? (
                  <>
                    <RefreshCcw className="w-4 h-4 animate-spin text-white" />
                    <span>Reserving Seats Node...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>Authorize Simulated Checkout</span>
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          /* SECTION 2: Highly Visual Simulated Ticket Stub Success display (Requested under Confirmations) */
          <div className="p-6 space-y-6 text-center">
            
            <div className="space-y-2">
              <div className="p-3 bg-green-500/15 text-green-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto border border-green-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-black text-white">Seats Reserved successfully!</h3>
              <p className="font-sans text-xs text-slate-400 max-w-sm mx-auto">
                A copy of your QR ticket badge was dispatched to <strong className="text-white">{email}</strong> and SMS phone notifications channels.
              </p>
            </div>

            {/* Premium physical simulated ticket block */}
            <div className="relative max-w-md mx-auto bg-gradient-to-br from-slate-950 to-slate-900 border border-gold/40 rounded-2xl overflow-hidden shadow-2xl text-left font-sans">
              
              {/* Top status flag */}
              <div className="bg-gradient-to-r from-gold to-yellow-600 text-slate-950 text-[10px] font-heading font-black tracking-widest text-center py-1.5 uppercase flex items-center justify-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL ADMISSION CREW PASS</span>
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              </div>

              {/* Ticket Body Content */}
              <div className="p-5 space-y-4">
                {/* Event Name */}
                <div className="space-y-1">
                  <span className="text-[9px] text-gold font-bold uppercase tracking-widest font-heading">
                    {selectedEvent.category} - {ticketType} tier
                  </span>
                  <h4 className="font-heading text-base font-extrabold text-white leading-tight line-clamp-1">{selectedEvent.name}</h4>
                  <p className="text-[10px] text-slate-400 uppercase">Guest star: {selectedEvent.celebrity}</p>
                </div>

                {/* Grid schedule */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-dashed border-white/10 text-xs text-slate-300">
                  <div>
                    <span className="block text-[9px] uppercase text-slate-500 font-bold tracking-wider">Date &amp; Schedule</span>
                    <span className="font-mono">{selectedEvent.date}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-slate-500 font-bold tracking-wider">Stadium Venue</span>
                    <span className="line-clamp-1">{selectedEvent.venue.split(',')[0]}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 text-xs text-slate-300">
                  <div>
                    <span className="block text-[9px] uppercase text-slate-500 font-bold tracking-wider">Holder Name</span>
                    <span className="font-bold text-white uppercase">{name || 'GUEST HOLDER'}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-slate-500 font-bold tracking-wider">Ticket Barcode</span>
                    <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
                      {bookingRef} ({ticketCount} Seats)
                    </span>
                  </div>
                </div>

                {/* Dynamic QR Code Simulation (Requested under Confirmation) */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="space-y-1 text-slate-450">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">DIGITAL PASS SECURITY</span>
                    <p className="text-[9px] max-w-[210px] leading-tight">Present this QR code on your mobile phone at the Royal Red Carpet entry point. Access begins 90 mins prior.</p>
                  </div>

                  {/* QR Core Box */}
                  <div className="p-1.5 bg-white rounded-xl shrink-0 shadow-lg border border-gold/40 flex flex-col items-center justify-center">
                    {/* Simulated barcode grids */}
                    <div className="grid grid-cols-5 gap-0.5 w-14 h-14 font-mono select-none pointer-events-none">
                      {Array.from({ length: 25 }).map((_, i) => {
                        const filled = (i * 7 + 3) % 2 === 0 || i % 3 === 0;
                        return (
                          <div key={i} className={`w-full h-full rounded-[1px] ${filled ? 'bg-black' : 'bg-transparent'}`} />
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Ticket micro receipt details footer */}
              <div className="bg-slate-950 p-3 text-center border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>SIMULATED TRANSACTION STYLING</span>
                <span>SECURED SEC: {Math.round(Math.random() * 8 + 1)}-A3</span>
              </div>
            </div>

            {/* PDF print triggers */}
            <div className="flex gap-4 pt-4 justify-center">
              <button
                onClick={handlePrintStub}
                className="flex items-center space-x-2 py-2.5 px-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-heading text-xs font-bold cursor-pointer"
                title="Print Ticket Stub"
              >
                <Printer className="w-4 h-4 text-gold" />
                <span>Print Paper Pass</span>
              </button>
              
              <button
                onClick={handleDownloadStub}
                className="flex items-center space-x-2 py-2.5 px-5 bg-gold hover:bg-amber-400 text-slate-950 rounded-xl font-heading text-xs font-black cursor-pointer glow-gold"
                title="Download Ticket Pass"
              >
                <Download className="w-4 h-4" />
                <span>Download digital Ticket</span>
              </button>
            </div>

            {/* Back button */}
            <button
              onClick={handleResetBooking}
              className="text-xs text-slate-500 hover:text-gold block mx-auto underline pt-3 cursor-pointer"
            >
              Reserve another ticket experience
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
