export interface Venue {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  spaces: Space[];
  amenities: string[];
  images: string[];
  rating: number;
  reviews: Review[];
}

export interface Space {
  id: string;
  name: string;
  capacity: number;
  area: number;
  type: 'conference' | 'meeting' | 'ballroom' | 'theater';
  features: string[];
  images: string[];
  availability: DateRange[];
  pricing: {
    basePrice: number;
    currency: string;
  };
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: Date;
}

export interface ConferenceRequest {
  id: string;
  title: string;
  description: string;
  attendees: number;
  dates: DateRange;
  requirements: {
    spaceType: Space['type'][];
    minArea: number;
    amenities: string[];
  };
  budget: {
    amount: number;
    currency: string;
  };
  status: 'open' | 'in-progress' | 'closed';
  bids: Bid[];
}

export interface Bid {
  id: string;
  venueId: string;
  requestId: string;
  price: {
    amount: number;
    currency: string;
  };
  spaces: Space[];
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}