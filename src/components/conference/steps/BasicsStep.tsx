import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import { conferenceFormSchema } from "../ConferenceFormSchema";

interface BasicsStepProps {
  form: UseFormReturn<z.infer<typeof conferenceFormSchema>>;
}

export function BasicsStep({ form }: BasicsStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Event Title</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Annual Tech Summit 2024" 
                  className="h-12"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Event Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your event, its purpose, and any special requirements..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Location</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter any location, city, region, or area (e.g., Nairobi CBD, Lake Victoria Region)"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Budget (USD)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="5000"
                  className="h-12"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}