import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { ServiceStory } from "@/components/ServiceStory";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Philosophy } from "@/components/Philosophy";
import { Specialists } from "@/components/Specialists";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppButton";
import { brand, contact } from "@/content/site";

const title = "لوکسورا | کلینیک تخصصی زیبایی، پوست و لیزر در تهران";
const description =
  "لوکسورا؛ کلینیک تخصصی پوست، لیزر، جوانسازی و فرم‌دهی صورت در تهران. مشاوره تخصصی، برنامه درمانی شخصی و نتایجی طبیعی و پایدار.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: brand.name,
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tehran",
            addressCountry: "IR",
          },
          telephone: "+982112345678",
          email: contact.email,
          openingHours: "Sa-Th 09:00-20:00",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <ServiceStory />
        <BeforeAfter />
        <Philosophy />
        <Specialists />
        <Gallery />
        <Testimonials />
        <Process />
        <Faq />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
