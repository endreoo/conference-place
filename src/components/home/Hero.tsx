import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { HeroStats } from "./HeroStats";

export function Hero() {
  const benefits = [
    "One request, multiple venue proposals",
    "Save up to 40% with competitive bidding",
    "Verified East African venues only",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
          alt="Conference hall"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <div className="min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-white">Premier Conference Venues in East Africa</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Find Your Perfect
                <span className="block text-primary mt-2">Conference Venue</span>
              </h1>
              
              {/* Value Proposition */}
              <div className="mb-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button 
                  size="lg" 
                  className="text-lg h-14 bg-primary hover:bg-primary/90 group"
                  asChild
                >
                  <a href="#post-conference">
                    Post Your Conference
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg h-14 bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  Browse Venues
                </Button>
              </div>
              
              {/* Stats */}
              <HeroStats className="pt-8 border-t border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}