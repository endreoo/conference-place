import { ArrowRight, Building2, Calendar, CheckCircle2, ClipboardCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HowItWorks() {
  const eventOrganizerSteps = [
    {
      icon: Calendar,
      title: "Post Your Conference",
      description: "Fill out a simple form with your event details, requirements, and budget.",
    },
    {
      icon: MessageSquare,
      title: "Receive Proposals",
      description: "Get competitive bids from verified venues within 24 hours.",
    },
    {
      icon: CheckCircle2,
      title: "Compare & Select",
      description: "Review proposals in your dashboard and choose the perfect venue.",
    },
  ];

  const venueSteps = [
    {
      icon: Building2,
      title: "List Your Venue",
      description: "Create a detailed profile showcasing your spaces and amenities.",
    },
    {
      icon: ClipboardCheck,
      title: "Review Requests",
      description: "Get matched with relevant conference requests in your area.",
    },
    {
      icon: MessageSquare,
      title: "Submit Proposals",
      description: "Send competitive bids and secure bookings directly.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            conference.place connects event organizers with premier venues across East Africa through a simple, efficient process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Event Organizers */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">For Event Organizers</h3>
              <p className="text-muted-foreground">Find your perfect venue in three easy steps</p>
            </div>
            
            <div className="space-y-6">
              {eventOrganizerSteps.map((step, index) => (
                <Card key={index} className="p-6 relative group hover:border-primary transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 top-1/2 -translate-y-1/2" />
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="#post-conference">
                  Post Your Conference
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Venues */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">For Venues</h3>
              <p className="text-muted-foreground">Start receiving quality booking requests</p>
            </div>
            
            <div className="space-y-6">
              {venueSteps.map((step, index) => (
                <Card key={index} className="p-6 relative group hover:border-primary transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 top-1/2 -translate-y-1/2" />
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/list-venue">
                  List Your Venue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}