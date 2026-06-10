import { MovieEvent, ServiceItem, PortfolioItem, TestimonialItem, TimelineEvent, StatItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Movie Event Management',
    description: 'Flawless strategic planning and end-to-end execution of blockbuster movie premieres, launches, and promotional campaigns.',
    iconName: 'Clapperboard',
    highlight: 'Red Carpet Coordination'
  },
  {
    id: 's2',
    title: 'Audio Launch Events',
    description: 'Grand scale musical event production featuring top composers, active venue setups, and spectacular stage design for crowd appeal.',
    iconName: 'Music',
    highlight: 'Immersive Sound setup'
  },
  {
    id: 's3',
    title: 'Celebrity Meet & Greets',
    description: 'Exclusive fan-experience programs, offering dedicated VIP badges, photobooths, and structured scheduling with tier-1 celebrities.',
    iconName: 'Sparkles',
    highlight: 'VIP Management'
  },
  {
    id: 's4',
    title: 'Film Promotions',
    description: 'Optimized multiplex visibility campaigns, regional marketing tours, mall takeovers, and smart digital promotions.',
    iconName: 'Megaphone',
    highlight: 'Multi-city campaigns'
  },
  {
    id: 's5',
    title: 'Ticket Booking Support',
    description: 'Instant, secure and robust ticketing interfaces supporting dynamic seating overlays, token scanning, and on-spot paper credentials.',
    iconName: 'Ticket',
    highlight: 'Secured Checkout Integration'
  },
  {
    id: 's6',
    title: 'Corporate Entertainment',
    description: 'Bespoke corporate private previews, employee engagement screen bookings, and luxurious custom-themed social hours.',
    iconName: 'Briefcase',
    highlight: 'Premium Corporate packages'
  },
  {
    id: 's7',
    title: 'Award Functions',
    description: 'Star-studded national and international cinema award ceremony curation, full broadcasting setup, and luxury hospitality.',
    iconName: 'Trophy',
    highlight: 'Broadcasting & VIP Hostess'
  },
  {
    id: 's8',
    title: 'Film Festivals',
    description: 'Curation of regional and global film festivals, complete speaker panels, viewer screenings, and media network channels.',
    iconName: 'Film',
    highlight: 'Global Screening setups'
  }
];

export const EVENTS: MovieEvent[] = [
  {
    id: 'e1',
    name: 'Nebula Skies - Grand Audio Launch',
    type: 'live',
    category: 'Audio Launch Events',
    celebrity: 'A.R. Rahman & Cast',
    date: 'June 18, 2026',
    time: '18:00',
    venue: 'Royal Cinema Arena, Los Angeles',
    ticketPrice: 45,
    vipPrice: 120,
    totalTickets: 2500,
    soldTickets: 2410,
    availability: 'limited',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    description: 'Witness the live musical launch of the year’s most anticipated space odyssey, Nebula Skies. Live orchestral performance with star cast interactions.',
    countdownDate: '2026-06-18T18:00:00'
  },
  {
    id: 'e2',
    name: 'Shadow Protocol - VIP Fan Screening & Meet',
    type: 'vip',
    category: 'Celebrity Meet & Greets',
    celebrity: 'Chris Evans & Director',
    date: 'July 05, 2026',
    time: '19:30',
    venue: 'Starlight Theater Mall, Las Vegas',
    ticketPrice: 95,
    vipPrice: 250,
    totalTickets: 300,
    soldTickets: 120,
    availability: 'available',
    poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    description: 'Get exclusive access to the premium pre-release showcase of Shadow Protocol. VIP passholders get standard red carpet entry, selfie passes, and commemorative autographed merchandise.',
    countdownDate: '2026-07-05T19:30:00'
  },
  {
    id: 'e3',
    name: 'Eternal Legends - Premiere Event',
    type: 'upcoming',
    category: 'Movie Event Management',
    celebrity: 'Cast of Eternal Legends',
    date: 'June 25, 2026',
    time: '17:00',
    venue: 'Grand Metropole Banquet, Chicago',
    ticketPrice: 60,
    vipPrice: 180,
    totalTickets: 500,
    soldTickets: 420,
    availability: 'limited',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
    description: 'Be the first to see the epic saga unfold. The premium red carpet event features active camera crews, fan podiums, and exclusive post-screening champagne banquet access.',
    countdownDate: '2026-06-25T17:00:00'
  },
  {
    id: 'e4',
    name: 'Cyber Horizon - Promo Live Meetup',
    type: 'live',
    category: 'Film Promotions',
    celebrity: 'Zendaya & Tom Holland',
    date: 'June 15, 2026',
    time: '15:00',
    venue: 'Elysium Plaza Outlets, Houston',
    ticketPrice: 20,
    vipPrice: 80,
    totalTickets: 1500,
    soldTickets: 1500,
    availability: 'sold_out',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    description: 'Promotional tour stop in Houston! Meet the superstar duo talking interactive VFX, behind-the-scenes diaries, and lucky-draw winner interactions.',
    countdownDate: '2026-06-15T15:00:00'
  },
  {
    id: 'e5',
    name: 'Annual Independent Film Festival',
    type: 'upcoming',
    category: 'Film Festivals',
    celebrity: 'Guillermo del Toro',
    date: 'August 12, 2026',
    time: '10:00',
    venue: 'Civic Cultural Center, San Francisco',
    ticketPrice: 35,
    vipPrice: 100,
    totalTickets: 1200,
    soldTickets: 840,
    availability: 'available',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
    description: 'Three-days of independent arthouse cinema, premium masterclasses with esteemed filmmakers, local food stalls, and critique awards.',
    countdownDate: '2026-08-12T10:00:00'
  },
  {
    id: 'e6',
    name: 'CineGlow Excellence Awards Night',
    type: 'completed',
    category: 'Award Functions',
    celebrity: 'Hollywood Top Names',
    date: 'May 28, 2026',
    time: '19:00',
    venue: 'Nokia Amphitheater, Los Angeles',
    ticketPrice: 150,
    vipPrice: 500,
    totalTickets: 3000,
    soldTickets: 3000,
    availability: 'sold_out',
    poster: 'https://images.unsplash.com/photo-1496337589254-7e19d01eae44?q=80&w=800&auto=format&fit=crop',
    description: 'Recapping the historic CineGlow Awards which hosted 30+ regional showcases, celebrating cinematic breakthroughs under the radiant night.',
    countdownDate: '2026-05-28T19:00:00'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'Celebrity events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    title: 'Star Summit 2025',
    subtitle: 'Exclusive fan panel Q&A'
  },
  {
    id: 'p2',
    category: 'Movie launches',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop',
    title: 'Galaxy Nexus Teaser Gala',
    subtitle: 'Epic theater countdown reveal'
  },
  {
    id: 'p3',
    category: 'Fan meets',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
    title: 'Neon Nights Tour',
    subtitle: '5000+ Fans live vocal setup'
  },
  {
    id: 'p4',
    category: 'Stage performances',
    imageUrl: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=600&auto=format&fit=crop',
    title: 'Audio Anthem Live',
    subtitle: 'Dazzling laser and pyrotechnics'
  },
  {
    id: 'p5',
    category: 'Red carpet events',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    title: 'Golden Globes Pre-Party',
    subtitle: 'Elite movie cast photo op'
  },
  {
    id: 'p6',
    category: 'Live audiences',
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop',
    title: 'Film Con Opening Dome',
    subtitle: 'Crowds cheer for blockbuster trailers'
  }
];

export const STATS: StatItem[] = [
  { number: '500+', label: 'Events Managed', sublabel: 'Flawless execution' },
  { number: '100K+', label: 'Tickets Sold', sublabel: 'Through secure servers' },
  { number: '50+', label: 'Celebrity Collaborations', sublabel: 'A-list partnerships' },
  { number: '98%', label: 'Customer Satisfaction', sublabel: 'Post-event stellar ratings' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Samantha Vance',
    role: 'Lead Movie Producer',
    rating: 5,
    feedback: 'Movie Events and Tickets handled our dynamic premiere in London without a single glitch. The QR-ticket scanners were secure, the stage management was professional, and their staff treated our cast with peak respect.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    eventName: 'Apex Horizon Premiere'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Premium VIP Club Member',
    rating: 5,
    feedback: 'Booking the Golden Circle ticket for Chris Evans Meet & Greet was effortless. I received immediate SMS confirmations, pre-visit instructions, and the VIP hospitality area was spectacularly elegant.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    eventName: 'Shadow Protocol VIP'
  },
  {
    id: 't3',
    name: 'David Miller',
    role: 'CEO, Miller Media Group',
    rating: 5,
    feedback: 'We partnered with them for our corporate film screening. From catering to stage design, they delivered top-tier services. Highly recommend their corporate entertainment setups!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    eventName: 'Corporate Holiday Screenings'
  },
  {
    id: 't4',
    name: 'Rajinder Sharma',
    role: 'Movie Enthusiast',
    rating: 4,
    feedback: 'Always my go-to for audio launch passes. The live search is fast, sorting by celebrity saves time, and tickets are sent immediately to WhatsApp and Email. Customer support is incredible too.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    eventName: 'Nebula Skies Audio Event'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'tl1',
    title: 'Premium Movie Launch Party',
    date: 'June 15, 2026',
    time: '19:00',
    venue: 'Sunset Regal Studios, Hollywood',
    status: 'ongoing',
    description: 'Curating the official debut of sci-fi stellar project. Media briefing, red carpet gala walks, and teaser countdown playback.',
    phase: 1
  },
  {
    id: 'tl2',
    title: 'Spectacular Audio Release',
    date: 'June 18, 2026',
    time: '18:00',
    venue: 'Royal Cinema Arena, Los Angeles',
    status: 'upcoming',
    description: 'Immersive sound stage configuration for live orchestra performances by top artists under glowing spotlights.',
    phase: 2
  },
  {
    id: 'tl3',
    title: 'International Celebrity Fan Meet',
    date: 'July 05, 2026',
    time: '19:30',
    venue: 'Starlight Theater Mall, Las Vegas',
    status: 'upcoming',
    description: 'Structured autograph stations, high-security photography rails, and VIP fan private lounges.',
    phase: 3
  },
  {
    id: 'tl4',
    title: 'Interactive Fan Carnival',
    date: 'July 20, 2026',
    time: '11:00',
    venue: 'Metro Tech Pavilion, Brooklyn',
    status: 'upcoming',
    description: 'Cosplay runways, gaming battles, movie merchandise vendor stalls, and interactive VR simulators of movie universes.',
    phase: 4
  },
  {
    id: 'tl5',
    title: 'Grand Cinema Award Night',
    date: 'August 08, 2026',
    time: '19:00',
    venue: 'Nokia Amphitheater, Los Angeles',
    status: 'upcoming',
    description: 'Prestige cinematic accolades distribution, stellar music dance intervals, and international broadcaster networks live link.',
    phase: 5
  }
];

export const SPONSORS = [
  { name: 'Paramount Group', logo: '🎥 Paramount' },
  { name: 'Universal Cinema', logo: '🌍 Universal' },
  { name: 'Dolby Cinemas', logo: '🔊 Dolby Atmos' },
  { name: 'Sony Lights', logo: '🔋 Sony Pictures' },
  { name: 'IMAX Labs', logo: '🎞️ IMAX Dome' },
  { name: 'Warner Bros', logo: '🛡️ WB Media' },
  { name: 'Marvel Studios', logo: '⚡ Marvel Ent.' }
];

export const FAQS = [
  {
    question: 'How can I book tickets?',
    answer: 'Simply browse our "Featured Events" list, filter by live or upcoming, search for your favorite celebrity and venue, and click "Book Now". Our secure booking drawer will guide you to select ticket counts, VIP options, and instantly process simulated secured checkout.'
  },
  {
    question: 'Are VIP passes available?',
    answer: 'Absolutely! Most of our premier events feature high-profile VIP bookings. Select "VIP Badge Pass" in the Ticket Booking pop-up to unlock exclusive red carpets, press area lounges, meet-and-greets, and specialized autographed gift boxes.'
  },
  {
    question: 'Can tickets be refunded?',
    answer: 'Tickets are refundable up to 72 hours before the scheduled event start. You can submit your ticket cancel request through our customer support email or dial-in phone lines listed in our contact footer.'
  },
  {
    question: 'How do I receive event updates?',
    answer: 'Sign up for our verified Newsletter in the footer or contact section. We send real-time alerts, celebrity lineup announcements, early-bird VIP discount tokens, and live venue schedules straight to your inbox!'
  },
  {
    question: 'Can I organize an event through your company?',
    answer: 'Yes, we provide end-to-end event planning, audio-system layout, celebrity partnerships, red-carpet coordination, and regional multiplex promotions. Fill out our comprehensive Contact Form requesting "Private Movie Launcher" or "Private Festival Curation", and our executive managers will reach out within 24 hours.'
  }
];
