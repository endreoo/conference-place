import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Users, Square, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { venues } from "@/data/venues";

export function VenueDetails() {
  const { id } = useParams();
  const venue = venues.find(v => v.id === id);
  const [selectedSpace, setSelectedSpace] = useState(venue?.spaces[0]);

  if (!venue) return <div>Venue not found</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={venue.images[0]}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {venue.name}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold">{venue.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-5 w-5" />
                  <span>{venue.location.city}, {venue.location.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="spaces">
              <TabsList>
                <TabsTrigger value="spaces">Spaces</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="spaces" className="space-y-6">
                {venue.spaces.map((space) => (
                  <Card key={space.id} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={space.images[0]}
                          alt={space.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">{space.name}</h3>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary">
                            <Users className="h-4 w-4 mr-1" />
                            Up to {space.capacity}
                          </Badge>
                          <Badge variant="secondary">
                            <Square className="h-4 w-4 mr-1" />
                            {space.area}m²
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          {space.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-4">
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90"
                            onClick={() => setSelectedSpace(space)}
                          >
                            Select Space
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="amenities">
                <Card className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {venue.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6">
                  {venue.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {venue.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold">{review.author}</div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span>{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      No reviews yet
                    </div>
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Selected Space</h3>
                  <p className="text-lg">{selectedSpace?.name || "Select a space"}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Event Dates</h3>
                  <DatePickerWithRange className="w-full" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Base Price</h3>
                  <p className="text-2xl font-bold">
                    ${selectedSpace?.pricing.basePrice.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground"> / day</span>
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  Check Availability
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}