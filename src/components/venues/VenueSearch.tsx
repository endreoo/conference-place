import { useState } from "react";
import { Search, Calendar, Users, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VenueGrid } from "./VenueGrid";
import { VenueFilters } from "./VenueFilters";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { cn } from "@/lib/utils";

export function VenueSearch() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: "",
    dates: { from: undefined, to: undefined },
    guests: "",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      <div className="sticky top-[72px] z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Location Search */}
            <div className="flex-1 min-w-[280px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by location..."
                  className="pl-9 h-12"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                />
              </div>
            </div>

            {/* Date Range */}
            <div className="flex-1 min-w-[280px]">
              <DatePickerWithRange 
                className="h-12 border"
                onChange={(dates) => setSearchParams({ ...searchParams, dates })}
              />
            </div>

            {/* Guests */}
            <div className="relative flex-1 min-w-[200px]">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="number"
                placeholder="Number of guests"
                className="pl-9 h-12"
                value={searchParams.guests}
                onChange={(e) => setSearchParams({ ...searchParams, guests: e.target.value })}
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              className={cn("h-12 px-4 flex items-center gap-2", showFilters && "border-primary")}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>

            {/* Search Button */}
            <Button className="h-12 px-8 bg-primary hover:bg-primary/90">
              Search Venues
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && <VenueFilters className="py-6" />}
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Venues in East Africa</h2>
          <div className="text-sm text-muted-foreground">
            Showing 12 of 48 venues
          </div>
        </div>
        
        <VenueGrid />
      </div>
    </div>
  );
}