import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

interface SpacesStepProps {
  form: UseFormReturn<any>;
}

const spaceTypes = [
  { value: "conference", label: "Conference Room" },
  { value: "theater", label: "Theater" },
  { value: "ballroom", label: "Ballroom" },
  { value: "meeting", label: "Meeting Room" },
];

export function SpacesStep({ form }: SpacesStepProps) {
  const [spaces, setSpaces] = useState([{ id: "1" }]);

  const addSpace = () => {
    setSpaces([...spaces, { id: Date.now().toString() }]);
  };

  const removeSpace = (id: string) => {
    setSpaces(spaces.filter(space => space.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Venue Spaces</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Add the different spaces available in your venue.
        </p>
      </div>

      <div className="space-y-6">
        {spaces.map((space, index) => (
          <Card key={space.id} className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Space {index + 1}</h4>
              {spaces.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSpace(space.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name={`spaces.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Space Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Grand Ballroom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`spaces.${index}.type`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Space Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a space type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {spaceTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`spaces.${index}.capacity`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Maximum number of people"
                        {...field}
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`spaces.${index}.area`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area (m²)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Size in square meters"
                        {...field}
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addSpace}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Another Space
        </Button>
      </div>
    </div>
  );
}