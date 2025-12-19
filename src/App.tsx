import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Support from "./pages/Support";
import Tarifs from "./pages/Tarifs";
import MentionsLegales from "./pages/MentionsLegales";
import LegalUpdates from "./pages/LegalUpdates"; // New
import DataPrivacyFramework from "./pages/DataPrivacyFramework"; // New
import IntellectualPropertyRules from "./pages/IntellectualPropertyRules"; // New
import UserInfo from "./pages/UserInfo"; // New
import DataSubjectRightsForm from "./pages/DataSubjectRightsForm"; // New
import RegulatoryReports from "./pages/RegulatoryReports"; // New
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/mentions" element={<MentionsLegales />} />
          <Route path="/legal/updates" element={<LegalUpdates />} /> {/* New Route */}
          <Route path="/legal/data-privacy" element={<DataPrivacyFramework />} /> {/* New Route */}
          <Route path="/legal/ip-rules" element={<IntellectualPropertyRules />} /> {/* New Route */}
          <Route path="/legal/user-info" element={<UserInfo />} /> {/* New Route */}
          <Route path="/legal/data-rights" element={<DataSubjectRightsForm />} /> {/* New Route */}
          <Route path="/legal/reports" element={<RegulatoryReports />} /> {/* New Route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;