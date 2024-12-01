import { Card } from "@/components/ui/card";
import { Calendar, DollarSign, MessageSquare, Star } from "lucide-react";

export function VenueStats() {
  const stats = [
    {
      icon: Calendar,
      label: "Total Bookings",
      value: "24",
    },
    {
      icon: DollarSign,
      label: "Revenue",
      value: "$45,800",
    },
    {
      icon: MessageSquare,
      label: "Active Bids",
      value: "8",
    },
    {
      icon: Star,
      label: "Rating",
      value: "4.8",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="font-semibold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}