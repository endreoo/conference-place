import { z } from "zod";

export const venueFormSchema = z.object({
  name: z.string().min(3, "Venue name must be at least 3 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  location: z.object({
    address: z.string().min(5, "Address is required"),
    city: z.string().min(2, "City is required"),
    country: z.string().min(2, "Country is required"),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  spaces: z.array(z.object({
    name: z.string(),
    capacity: z.number(),
    area: z.number(),
    type: z.enum(["conference", "theater", "ballroom", "meeting"]),
    features: z.array(z.string()),
    images: z.array(z.string()),
    pricing: z.object({
      basePrice: z.number(),
      currency: z.string(),
    }),
  })),
  amenities: z.array(z.string()),
  images: z.array(z.string()),
  pricing: z.object({
    basePrice: z.number(),
    currency: z.string(),
  }),
});