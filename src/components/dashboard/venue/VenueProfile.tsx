import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, MapPin, Users, Square } from "lucide-react";

export function VenueProfile() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Venue Name</Label>
                <Input defaultValue="Serena Hotel" />
              </div>
              <div className="space-y-2">
                <Label>Contact Email</Label>
                <Input defaultValue="events@serenahotels.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input defaultValue="+254 20 123 4567" />
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input defaultValue="https://www.serenahotels.com" />
              </div>
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea 
              className="mt-2 min-h-[120px]"
              defaultValue="Serena Hotel offers world-class conference facilities in the heart of Nairobi. Our venues combine elegant design with state-of-the-art technology to create the perfect setting for your event."
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Address</Label>
            <Input defaultValue="Processional Way" />
          </div>
          <div className="space-y-2">
            <Label>City</Label>
            <Input defaultValue="Nairobi" />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Input defaultValue="Kenya" />
          </div>
          <div className="space-y-2">
            <Label>Postal Code</Label>
            <Input defaultValue="00200" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Spaces Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Tsavo Ballroom</h4>
                <p className="text-sm text-muted-foreground">Main Venue</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Up to 1,000 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-4 w-4 text-muted-foreground" />
                <span>1,200 m²</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Ground Floor</span>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Amboseli Room</h4>
                <p className="text-sm text-muted-foreground">Conference Room</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Up to 300 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-4 w-4 text-muted-foreground" />
                <span>400 m²</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>First Floor</span>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel Changes</Button>
        <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
      </div>
    </div>
  );
}