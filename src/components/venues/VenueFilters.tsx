import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VenueFiltersProps {
  className?: string;
}

const spaceTypes = [
  { id: "conference", label: "Conference Rooms" },
  { id: "ballroom", label: "Ballrooms" },
  { id: "theater", label: "Theaters" },
  { id: "meeting", label: "Meeting Rooms" },
];

const amenities = [
  { id: "av", label: "AV Equipment" },
  { id: "catering", label: "Catering" },
  { id: "wifi", label: "High-Speed WiFi" },
  { id: "parking", label: "Parking" },
  { id: "accommodation", label: "Accommodation" },
  { id: "breakout", label: "Breakout Rooms" },
];

export function VenueFilters({ className }: VenueFiltersProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8", className)}>
      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold">Price Range (per day)</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[500, 5000]}
            min={0}
            max={10000}
            step={100}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span>$0</span>
            <span>$10,000+</span>
          </div>
        </div>
      </div>

      {/* Space Types */}
      <div className="space-y-4">
        <h3 className="font-semibold">Space Types</h3>
        <div className="space-y-3">
          {spaceTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={type.id} />
              <Label htmlFor={type.id}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-4">
        <h3 className="font-semibold">Amenities</h3>
        <div className="space-y-3">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox id={amenity.id} />
              <Label htmlFor={amenity.id}>{amenity.label}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div className="space-y-4">
        <h3 className="font-semibold">Rating</h3>
        <div className="space-y-3">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}