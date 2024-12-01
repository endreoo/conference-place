import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, MapPin, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BidListProps {
  type: "opportunities" | "active";
}

export function BidList({ type }: BidListProps) {
  const opportunities = [
    {
      id: "1",
      title: "Annual Tech Summit 2024",
      location: "Nairobi Area",
      date: "Aug 15-17, 2024",
      attendees: 500,
      budget: 15000,
      status: "open",
    },
    {
      id: "2",
      title: "East African Business Conference",
      location: "Mombasa",
      date: "Sep 5-7, 2024",
      attendees: 300,
      budget: 10000,
      status: "pending",
    },
    // Add more opportunities...
  ];

  return (
    <div className="space-y-6">
      {opportunities.map((opp) => (
        <Card key={opp.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{opp.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{opp.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{opp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{opp.attendees} attendees</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>Budget: ${opp.budget.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between items-end">
              <Badge variant={opp.status === "open" ? "default" : "secondary"}>
                {opp.status === "open" ? "Open for Bids" : "Bid Submitted"}
              </Badge>

              {opp.status === "open" ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90">
                      Submit Bid
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit Your Bid</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div className="space-y-2">
                        <Label>Proposed Price (USD)</Label>
                        <Input type="number" placeholder="Enter your bid amount" />
                      </div>
                      <div className="space-y-2">
                        <Label>Message to Organizer</Label>
                        <Textarea 
                          placeholder="Describe why your venue is perfect for this event..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Submit Bid
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button variant="outline">View Bid</Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}