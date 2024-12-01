import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, CalendarDays, LogIn, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { SignInDialog } from "@/components/auth/SignInDialog";

export function Header() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">conference.place</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/venues" className="text-muted-foreground hover:text-primary transition-colors">
                Find Venues
              </Link>
              <Link to="/list-venue" className="text-muted-foreground hover:text-primary transition-colors">
                List Your Venue
              </Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:flex text-muted-foreground hover:text-primary"
              onClick={() => setShowSignIn(true)}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/#post-conference">
                <CalendarDays className="mr-2 h-4 w-4" />
                Post Event
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} />
    </header>
  );
}