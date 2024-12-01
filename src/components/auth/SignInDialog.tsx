import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DEMO_CREDENTIALS = {
  client: {
    email: "client@demo.com",
    password: "demo1234",
  },
  venue: {
    email: "venue@demo.com",
    password: "demo1234",
  },
};

export function SignInDialog({ open, onOpenChange }: SignInDialogProps) {
  const [activeTab, setActiveTab] = useState<"client" | "venue">("client");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fillDemoCredentials = () => {
    const credentials = DEMO_CREDENTIALS[activeTab];
    form.setValue("email", credentials.email);
    form.setValue("password", credentials.password);
  };

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    // Check if using demo credentials
    const demoCredentials = DEMO_CREDENTIALS[activeTab];
    const isValidDemo = 
      values.email === demoCredentials.email && 
      values.password === demoCredentials.password;

    if (!isValidDemo) {
      toast({
        title: "Invalid credentials",
        description: "Please use the demo credentials provided below the form.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to appropriate dashboard
    if (activeTab === "client") {
      navigate("/dashboard/client");
    } else {
      navigate("/dashboard/venue");
    }

    toast({
      title: "Signed in successfully!",
      description: `Welcome back to conference.place`,
    });

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Sign in to manage your conference requests or venue listings.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(value: "client" | "venue") => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">Event Organizer</TabsTrigger>
            <TabsTrigger value="venue">Venue Manager</TabsTrigger>
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <Alert variant="info" className="bg-muted">
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>
                  Use the demo credentials below to explore the {activeTab === "client" ? "client" : "venue"} dashboard.
                </AlertDescription>
              </Alert>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={DEMO_CREDENTIALS[activeTab].email} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Sign In
                </Button>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={fillDemoCredentials}
                >
                  Use Demo Account
                </Button>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p>Demo Credentials:</p>
                <code className="block bg-muted p-2 rounded text-xs">
                  Email: {DEMO_CREDENTIALS[activeTab].email}<br />
                  Password: {DEMO_CREDENTIALS[activeTab].password}
                </code>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                {activeTab === "client" ? (
                  <a href="#post-conference" className="text-primary hover:underline">
                    Post a Conference
                  </a>
                ) : (
                  <a href="/list-venue" className="text-primary hover:underline">
                    List Your Venue
                  </a>
                )}
              </div>
            </form>
          </Form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}