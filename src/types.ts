export interface MovieEvent {
  id: string;
  name: string;
  type: 'upcoming' | 'live' | 'completed' | 'vip';
  category: string; // "Celebrity Meet", "Audio Launch", "Movie Launch", "Film Festival", etc.
  celebrity: string;
  date: string;
  time: string;
  venue: string;
  ticketPrice: number;
  vipPrice?: number;
  totalTickets: number;
  soldTickets: number;
  availability: 'available' | 'limited' | 'sold_out';
  poster: string;
  description: string;
  countdownDate?: string; // ISO date string for active ticking countdown
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  avatar: string;
  eventName: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'completed' | 'ongoing';
  description: string;
  phase: number;
}

export interface BookingDetail {
  eventId: string;
  name: string;
  email: string;
  phone: string;
  ticketCount: number;
  ticketType: 'Standard' | 'VIP';
  totalCost: number;
}
