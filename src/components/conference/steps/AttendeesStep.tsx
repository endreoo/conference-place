import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import { conferenceFormSchema } from "../ConferenceFormSchema";

interface AttendeesStepProps {
  form: UseFormReturn<z.infer<typeof conferenceFormSchema>>;
}

export function AttendeesStep({ form }: AttendeesStepProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="attendees"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expected Number of Attendees</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="100"
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
        name="requirements.layout"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Seating Layout</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a layout style" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="theater">Theater Style</SelectItem>
                <SelectItem value="classroom">Classroom Style</SelectItem>
                <SelectItem value="banquet">Banquet Style</SelectItem>
                <SelectItem value="reception">Reception Style</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}