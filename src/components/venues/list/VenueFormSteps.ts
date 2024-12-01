import { Building2, LayoutGrid, Settings2, Image, DollarSign } from "lucide-react";

export const formSteps = [
  {
    id: "basic-info",
    title: "Basic Info",
    icon: Building2,
  },
  {
    id: "spaces",
    title: "Spaces",
    icon: LayoutGrid,
  },
  {
    id: "amenities",
    title: "Amenities",
    icon: Settings2,
  },
  {
    id: "media",
    title: "Media",
    icon: Image,
  },
  {
    id: "pricing",
    title: "Pricing",
    icon: DollarSign,
  },
] as const;