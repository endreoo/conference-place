import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, DollarSign, MessageSquare, Users } from "lucide-react";
import { RequestList } from "./RequestList";
import { ClientStats } from "./ClientStats";

export function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("active");

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
                    <h2 className="font-semibold">John Smith</h2>
                    <p className="text-sm text-muted-foreground">Tech Corp Ltd.</p>
                  </div>
                </div>
              </div>
            </Card>

            <ClientStats />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="active" className="flex-1">Active Requests</TabsTrigger>
                <TabsTrigger value="past" className="flex-1">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6">
                <RequestList type="active" />
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <RequestList type="past" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}