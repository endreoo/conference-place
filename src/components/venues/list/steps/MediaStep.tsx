import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImagePlus, X } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

interface MediaStepProps {
  form: UseFormReturn<any>;
}

export function MediaStep({ form }: MediaStepProps) {
  const addImage = () => {
    const currentImages = form.getValues("images") || [];
    form.setValue("images", [...currentImages, ""]);
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images") || [];
    form.setValue("images", currentImages.filter((_: any, i: number) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Venue Photos</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Add high-quality photos of your venue spaces and facilities.
        </p>
      </div>

      <div className="space-y-4">
        {form.watch("images")?.map((image: string, index: number) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name={`images.${index}`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        placeholder="Enter image URL"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addImage}
          className="w-full"
        >
          <ImagePlus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>
    </div>
  );
}