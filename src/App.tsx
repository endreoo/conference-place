import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ConferenceForm } from '@/components/conference/ConferenceForm';
import { VenueSearch } from '@/components/venues/VenueSearch';
import { VenueDetails } from '@/components/venues/VenueDetails';
import { VenueListingForm } from '@/components/venues/list/VenueListingForm';
import { VenueDashboard } from '@/components/dashboard/venue/VenueDashboard';
import { ClientDashboard } from '@/components/dashboard/client/ClientDashboard';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HowItWorks />
                <ConferenceForm />
              </>
            } />
            <Route path="/venues" element={<VenueSearch />} />
            <Route path="/venues/:id" element={<VenueDetails />} />
            <Route path="/list-venue" element={<VenueListingForm />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard/venue" element={<VenueDashboard />} />
            <Route path="/dashboard/client" element={<ClientDashboard />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}