import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, DollarSign, MessageSquare, Star } from "lucide-react";
import { BidList } from "./BidList";
import { VenueStats } from "./VenueStats";
import { VenueProfile } from "./VenueProfile";

export function VenueDashboard() {
  const [activeTab, setActiveTab] = useState("opportunities");

  return (
    <div className="min-h-screen bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="font-semibold">Serena Hotel</h2>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm">4.8 (42 reviews)</span>
                </div>
              </div>
            </Card>

            <VenueStats />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="opportunities" className="flex-1">Opportunities</TabsTrigger>
                <TabsTrigger value="active-bids" className="flex-1">Active Bids</TabsTrigger>
                <TabsTrigger value="profile" className="flex-1">Venue Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="opportunities" className="mt-6">
                <BidList type="opportunities" />
              </TabsContent>

              <TabsContent value="active-bids" className="mt-6">
                <BidList type="active" />
              </TabsContent>

              <TabsContent value="profile" className="mt-6">
                <VenueProfile />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}