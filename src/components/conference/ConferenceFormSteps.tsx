import { Building2, CalendarDays, ListChecks, Users } from "lucide-react";

export const formSteps = [
  {
    id: "basics",
    icon: Building2,
    title: "Basics",
  },
  {
    id: "dates",
    icon: CalendarDays,
    title: "Dates",
  },
  {
    id: "attendees",
    icon: Users,
    title: "Attendees",
  },
  {
    id: "requirements",
    icon: ListChecks,
    title: "Requirements",
  },
] as const;