import { Building2, Users, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { venues } from "@/data/venues";

export function VenueGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {venues.map((venue) => (
        <Card key={venue.id} className="overflow-hidden group">
          {/* Venue Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={venue.images[0]}
              alt={venue.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              asChild
            >
              <Link to={`/venues/${venue.id}`}>Quick View</Link>
            </Button>
          </div>

          <CardContent className="p-4">
            {/* Venue Info */}
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold truncate">{venue.name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{venue.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>
                  {venue.location.city}, {venue.location.country}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  <Users className="h-3 w-3 mr-1" />
                  Up to {Math.max(...venue.spaces.map(s => s.capacity))}
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  {venue.spaces.length} Spaces
                </Badge>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
              <Link to={`/venues/${venue.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}