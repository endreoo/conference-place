import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { venueFormSchema } from "./VenueFormSchema";
import { formSteps } from "./VenueFormSteps";
import { BasicInfoStep } from "./steps/BasicInfoStep";
import { SpacesStep } from "./steps/SpacesStep";
import { AmenitiesStep } from "./steps/AmenitiesStep";
import { MediaStep } from "./steps/MediaStep";
import { PricingStep } from "./steps/PricingStep";

export function VenueListingForm() {
  const [activeTab, setActiveTab] = useState("basic-info");
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(venueFormSchema),
    defaultValues: {
      name: "",
      description: "",
      location: {
        address: "",
        city: "",
        country: "",
        coordinates: { lat: 0, lng: 0 },
      },
      spaces: [],
      amenities: [],
      images: [],
      pricing: {
        basePrice: 0,
        currency: "USD",
      },
    },
  });

  function onSubmit(values: any) {
    console.log(values);
    toast({
      title: "Venue Listed Successfully! 🎉",
      description: "Your venue has been submitted for review. We'll notify you once it's approved.",
    });
  }

  return (
    <div className="min-h-screen bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">List Your Venue</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join East Africa's premier network of conference venues and start receiving booking requests from quality clients.
            </p>
          </div>

          <Card className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-8">
                {formSteps.map((step) => (
                  <TabsTrigger
                    key={step.id}
                    value={step.id}
                    className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <step.icon className="h-5 w-5 mb-2" />
                    <span className="text-sm font-medium">{step.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <TabsContent value="basic-info" className="mt-0">
                    <BasicInfoStep form={form} />
                  </TabsContent>

                  <TabsContent value="spaces" className="mt-0">
                    <SpacesStep form={form} />
                  </TabsContent>

                  <TabsContent value="amenities" className="mt-0">
                    <AmenitiesStep form={form} />
                  </TabsContent>

                  <TabsContent value="media" className="mt-0">
                    <MediaStep form={form} />
                  </TabsContent>

                  <TabsContent value="pricing" className="mt-0">
                    <PricingStep form={form} />
                  </TabsContent>

                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const currentIndex = formSteps.findIndex(step => step.id === activeTab);
                        if (currentIndex > 0) {
                          setActiveTab(formSteps[currentIndex - 1].id);
                        }
                      }}
                      className="w-32"
                    >
                      Previous
                    </Button>

                    {activeTab === "pricing" ? (
                      <Button type="submit" className="w-32 bg-primary hover:bg-primary/90">
                        Submit
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => {
                          const currentIndex = formSteps.findIndex(step => step.id === activeTab);
                          if (currentIndex < formSteps.length - 1) {
                            setActiveTab(formSteps[currentIndex + 1].id);
                          }
                        }}
                        className="w-32"
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}