import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import type { UseFormReturn } from "react-hook-form";

interface AmenitiesStepProps {
  form: UseFormReturn<any>;
}

const amenities = [
  { id: "av", label: "AV Equipment" },
  { id: "catering", label: "Catering Services" },
  { id: "wifi", label: "High-Speed WiFi" },
  { id: "parking", label: "Parking" },
  { id: "accommodation", label: "Accommodation" },
  { id: "breakout", label: "Breakout Rooms" },
  { id: "translation", label: "Translation Services" },
  { id: "stage", label: "Built-in Stage" },
  { id: "lighting", label: "Professional Lighting" },
  { id: "security", label: "Security Services" },
  { id: "accessibility", label: "Accessibility Features" },
  { id: "outdoor", label: "Outdoor Space" },
];

export function AmenitiesStep({ form }: AmenitiesStepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Venue Amenities</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select all the amenities and services available at your venue.
        </p>
      </div>

      <FormField
        control={form.control}
        name="amenities"
        render={() => (
          <FormItem>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {amenities.map((amenity) => (
                <FormField
                  key={amenity.id}
                  control={form.control}
                  name="amenities"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(amenity.id)}
                          onCheckedChange={(checked) => {
                            const current = field.value || [];
                            const updated = checked
                              ? [...current, amenity.id]
                              : current.filter((value: string) => value !== amenity.id);
                            field.onChange(updated);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{amenity.label}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}