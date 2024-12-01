import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, MapPin, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RequestListProps {
  type: "active" | "past";
}

export function RequestList({ type }: RequestListProps) {
  const requests = [
    {
      id: "1",
      title: "Annual Tech Summit 2024",
      location: "Nairobi Area",
      date: "Aug 15-17, 2024",
      attendees: 500,
      budget: 15000,
      status: "pending",
      bids: [
        {
          id: "b1",
          venueName: "Serena Hotel",
          price: 14000,
          rating: 4.8,
          message: "We would be delighted to host your event...",
        },
        {
          id: "b2",
          venueName: "Hilton Hotel",
          price: 13500,
          rating: 4.7,
          message: "Our conference center is perfect for your needs...",
        },
      ],
    },
    // Add more requests...
  ];

  return (
    <div className="space-y-6">
      {requests.map((request) => (
        <Card key={request.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{request.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{request.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{request.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{request.attendees} attendees</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>Budget: ${request.budget.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between items-end">
              <Badge>{request.status}</Badge>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    View {request.bids.length} Bids
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Venue Proposals</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {request.bids.map((bid) => (
                        <Card key={bid.id} className="p-4">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold">{bid.venueName}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>Rating: {bid.rating}</span>
                                  <span>•</span>
                                  <span>${bid.price.toLocaleString()}</span>
                                </div>
                              </div>
                              <Button variant="outline">View Venue</Button>
                            </div>
                            <p className="text-sm">{bid.message}</p>
                            <div className="flex gap-2">
                              <Button className="flex-1 bg-primary hover:bg-primary/90">
                                Accept Bid
                              </Button>
                              <Button variant="outline" className="flex-1">
                                Message Venue
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}