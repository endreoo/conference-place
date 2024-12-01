import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { conferenceFormSchema } from "./ConferenceFormSchema";
import { formSteps } from "./ConferenceFormSteps";
import { BasicsStep } from "./steps/BasicsStep";
import { DatesStep } from "./steps/DatesStep";
import { AttendeesStep } from "./steps/AttendeesStep";
import { RequirementsStep } from "./steps/RequirementsStep";
import { UserRegistrationDialog } from "./UserRegistrationDialog";

export function ConferenceForm() {
  const [activeTab, setActiveTab] = useState("basics");
  const [showRegistration, setShowRegistration] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof conferenceFormSchema>>({
    resolver: zodResolver(conferenceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      attendees: 0,
      startDate: "",
      endDate: "",
      budget: 0,
      location: "",
      requirements: {
        spaceTypes: [],
        amenities: [],
      },
    },
  });

  function onSubmit(values: z.infer<typeof conferenceFormSchema>) {
    setShowRegistration(true);
    localStorage.setItem('pendingConference', JSON.stringify(values));
  }

  return (
    <section id="post-conference" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Post Your Conference</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the details below and receive competitive proposals from verified venues across East Africa within 24 hours.
            </p>
          </div>
          
          <Card className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-8">
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
                  <TabsContent value="basics" className="mt-0">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">Basic Information</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tell us about your event and its requirements.
                      </p>
                    </div>
                    <BasicsStep form={form} />
                  </TabsContent>

                  <TabsContent value="dates" className="mt-0">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">Event Dates</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Select your preferred event dates.
                      </p>
                    </div>
                    <DatesStep form={form} />
                  </TabsContent>

                  <TabsContent value="attendees" className="mt-0">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">Attendee Information</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Specify the number of attendees and seating preferences.
                      </p>
                    </div>
                    <AttendeesStep form={form} />
                  </TabsContent>

                  <TabsContent value="requirements" className="mt-0">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">Venue Requirements</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Select the space types and amenities you need.
                      </p>
                    </div>
                    <RequirementsStep form={form} />
                  </TabsContent>

                  <div className="flex justify-between pt-6 border-t mt-8">
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
                    
                    {activeTab === "requirements" ? (
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

          <UserRegistrationDialog 
            open={showRegistration} 
            onOpenChange={setShowRegistration}
            onSuccess={() => {
              const pendingData = localStorage.getItem('pendingConference');
              if (pendingData) {
                const conferenceData = JSON.parse(pendingData);
                toast({
                  title: "Request Submitted Successfully! 🎉",
                  description: "We'll match you with the best venues in your preferred location and you'll receive proposals within 24 hours.",
                });
                localStorage.removeItem('pendingConference');
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}