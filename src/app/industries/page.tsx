import type { Metadata } from "next";
import { CollectionPage } from "@/components/page-templates";
import { industries } from "@/content/site-data";

export const metadata: Metadata = { title: "Industries", description: "Growth programs shaped around the way your industry and customers actually work." };

export default function IndustriesPage() {
  return <CollectionPage eyebrow="Industry experience" title="Market knowledge. Fresh eyes." intro="We bring the fluency to move quickly and the curiosity to find an answer your competitors have not already copied." items={industries.map((industry) => ({ title: industry.title, summary: industry.summary, href: `/industries/${industry.slug}` }))} cardLabel="Explore industry" />;
}
