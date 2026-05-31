import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { Authority } from "@/components/landing/Authority";
import { Process } from "@/components/landing/Process";
import { Differentials } from "@/components/landing/Differentials";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";
import { BookingModal } from "@/components/scheduling/BookingModal";
import { ChatWidget } from "@/components/chat/ChatWidget";

const TITLE = "Advocacia Previdenciária | Marcondes & Associados";
const DESCRIPTION =
  "Especialistas em Direito Previdenciário. Planejamento, revisão e concessão de benefícios do INSS com atendimento digital em todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Marcondes & Associados",
          description: DESCRIPTION,
          areaServed: "BR",
          serviceType: "Direito Previdenciário",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <TrustBar />
      <Services />
      <Authority />
      <Process />
      <Differentials />
      <Testimonials />
      <Faq />
      <FinalCta onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />
      <ChatWidget />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
