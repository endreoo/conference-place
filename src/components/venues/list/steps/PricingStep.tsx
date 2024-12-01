import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { UseFormReturn } from "react-hook-form";

interface PricingStepProps {
  form: UseFormReturn<any>;
}

const currencies = [
  { value: "USD", label: "USD - US Dollar" },
  { value: "KES", label: "KES - Kenyan Shilling" },
  { value: "RWF", label: "RWF - Rwandan Franc" },
  { value: "TZS", label: "TZS - Tanzanian Shilling" },
  { value: "UGX", label: "UGX - Ugandan Shilling" },
];

export function PricingStep({ form }: PricingStepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Pricing Information</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Set your venue's base pricing and currency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="pricing.basePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Price (per day)</FormLabel>
              <FormControl>
                <Input 
                  type="number"
                  placeholder="e.g., 1000"
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
          name="pricing.currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {currencies.map(currency => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}