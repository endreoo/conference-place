import { z } from "zod";

export const conferenceFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  attendees: z.number().min(1, "Must have at least 1 attendee"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  budget: z.number().min(1000, "Minimum budget is $1,000"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  requirements: z.object({
    spaceTypes: z.array(z.enum(["conference", "theater", "ballroom", "meeting"])),
    amenities: z.array(z.string()),
    minArea: z.number().optional(),
    layout: z.enum(["theater", "classroom", "banquet", "reception"]).optional(),
  }),
});