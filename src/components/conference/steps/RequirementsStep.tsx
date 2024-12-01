import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import { conferenceFormSchema } from "../ConferenceFormSchema";

interface RequirementsStepProps {
  form: UseFormReturn<z.infer<typeof conferenceFormSchema>>;
}

const spaceTypes = [
  { id: "conference", label: "Conference Room" },
  { id: "theater", label: "Theater" },
  { id: "ballroom", label: "Ballroom" },
  { id: "meeting", label: "Meeting Room" },
];

const amenities = [
  { id: "av", label: "AV Equipment" },
  { id: "catering", label: "Catering Services" },
  { id: "wifi", label: "High-Speed WiFi" },
  { id: "parking", label: "Parking" },
  { id: "accessibility", label: "Accessibility Features" },
  { id: "breakout", label: "Breakout Rooms" },
];

export function RequirementsStep({ form }: RequirementsStepProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="requirements.spaceTypes"
        render={() => (
          <FormItem>
            <FormLabel>Space Types Needed</FormLabel>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {spaceTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="requirements.spaceTypes"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(type.id as any)}
                          onCheckedChange={(checked) => {
                            const current = field.value || [];
                            const updated = checked
                              ? [...current, type.id]
                              : current.filter((value) => value !== type.id);
                            field.onChange(updated);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{type.label}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="requirements.amenities"
        render={() => (
          <FormItem>
            <FormLabel>Required Amenities</FormLabel>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {amenities.map((amenity) => (
                <FormField
                  key={amenity.id}
                  control={form.control}
                  name="requirements.amenities"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(amenity.id)}
                          onCheckedChange={(checked) => {
                            const current = field.value || [];
                            const updated = checked
                              ? [...current, amenity.id]
                              : current.filter((value) => value !== amenity.id);
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