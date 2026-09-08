import type { Metadata } from "next";
import { CollectionPage } from "@/components/page-templates";
import { industries } from "@/content/site-data";

export const metadata: Metadata = { title: "Industries", description: "Growth programs shaped around the way your industry and customers actually work." };

export default function IndustriesPage() {
  return (
    <CollectionPage
      eyebrow="Industry experience & vertical mastery"
      title="Deep market knowledge. Zero copy-paste tactics."
      intro="We bring the fluency to move quickly and the strategic curiosity to build customer acquisition engines your local competitors cannot match."
      items={industries.map((industry) => ({ title: industry.title, summary: industry.summary, href: `/industries/${industry.slug}` }))}
      cardLabel="Explore industry"
      image="/images/unsplash/contractor.jpg"
      introEyebrow="Sector-specific fluency"
      introHeading="We understand your margins, service territory, and customer urgency."
      introCopy="Every vertical requires a distinct growth architecture. From emergency 24/7 HVAC dispatches and multi-chair dental implants to luxury hardwood flooring showrooms and storm-response roofing, our playbooks match how your customers actually decide and buy."
      ctaTitle="Ready to dominate your industry's local market?"
    />
  );
}
