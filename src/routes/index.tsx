import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import {
  AllFeatures,
  ExperiencePreview,
  GuestUnlimited,
  ResponsiveDevices,
  TemplateShowcase,
  ValueHook,
} from "@/components/landing/sections-a";
import {
  AdminService,
  BlogPreview,
  Comparison,
  Faq,
  FinalCta,
  Footer,
  HowItWorks,
  Pricing,
  Testimonials,
  WhyUs,
} from "@/components/landing/sections-b";

const title = "AksaraCinta — Undangan Digital Mulai Rp15.000";
const description =
  "Marketplace undangan digital dengan ratusan tema: minimalis, floral, Korean, luxury, islamic, dan lainnya. Unlimited nama tamu, tanpa masa aktif, mulai Rp15.000.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ValueHook />
        <TemplateShowcase />
        <GuestUnlimited />
        <AllFeatures />
        <ExperiencePreview />
        <ResponsiveDevices />
        <HowItWorks />
        <AdminService />
        <WhyUs />
        <Pricing />
        <Comparison />
        <Testimonials />
        <Faq />
        <BlogPreview />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
