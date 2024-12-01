import type { Venue } from "@/types";

export const venues: Venue[] = [
  {
    id: "1",
    name: "Serena Hotel Conference Center",
    location: {
      address: "Processional Way, Nairobi",
      city: "Nairobi",
      country: "Kenya",
      coordinates: { lat: -1.2833, lng: 36.8172 }
    },
    spaces: [
      {
        id: "s1",
        name: "Tsavo Ballroom",
        capacity: 1000,
        area: 1200,
        type: "ballroom",
        features: ["Stage", "High Ceilings", "Natural Light"],
        images: ["https://images.unsplash.com/photo-1576072060548-964f4fee49cc?auto=format&fit=crop&q=80"],
        availability: [],
        pricing: { basePrice: 5000, currency: "USD" }
      },
      {
        id: "s2",
        name: "Amboseli Conference Room",
        capacity: 300,
        area: 400,
        type: "conference",
        features: ["Built-in AV", "Flexible Layout"],
        images: ["https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80"],
        availability: [],
        pricing: { basePrice: 2000, currency: "USD" }
      }
    ],
    amenities: ["AV Equipment", "Catering", "WiFi", "Parking", "Accommodation"],
    images: [
      "https://images.unsplash.com/photo-1576072060548-964f4fee49cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment: "Exceptional service and beautiful spaces",
        author: "John Smith",
        date: new Date("2024-01-15")
      }
    ]
  },
  {
    id: "2",
    name: "Kigali Convention Centre",
    location: {
      address: "KG 2 Roundabout",
      city: "Kigali",
      country: "Rwanda",
      coordinates: { lat: -1.9537, lng: 30.0937 }
    },
    spaces: [
      {
        id: "s3",
        name: "Grand Auditorium",
        capacity: 2500,
        area: 2800,
        type: "theater",
        features: ["Theater Seating", "State-of-the-art AV"],
        images: ["https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80"],
        availability: [],
        pricing: { basePrice: 8000, currency: "USD" }
      }
    ],
    amenities: ["AV Equipment", "Catering", "WiFi", "Parking", "Translation Services"],
    images: [
      "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviews: []
  },
  {
    id: "3",
    name: "Pearl of Africa Hotel",
    location: {
      address: "Plot 2-4 Kintu Road",
      city: "Kampala",
      country: "Uganda",
      coordinates: { lat: 0.3136, lng: 32.5811 }
    },
    spaces: [
      {
        id: "s4",
        name: "Victoria Hall",
        capacity: 800,
        area: 1000,
        type: "ballroom",
        features: ["Lake View", "Outdoor Terrace"],
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"],
        availability: [],
        pricing: { basePrice: 4000, currency: "USD" }
      }
    ],
    amenities: ["AV Equipment", "Catering", "WiFi", "Spa", "Pool"],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviews: []
  },
  // Add more venues...
];