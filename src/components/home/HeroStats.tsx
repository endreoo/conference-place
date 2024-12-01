import { cn } from "@/lib/utils";

interface HeroStatsProps {
  className?: string;
}

export function HeroStats({ className }: HeroStatsProps) {
  const stats = [
    { value: "200+", label: "Premier Venues" },
    { value: "500+", label: "Successful Events" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
  ];

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
            {stat.value}
          </div>
          <div className="text-white/60 text-sm md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}