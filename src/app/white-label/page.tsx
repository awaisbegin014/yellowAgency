import type { Metadata } from "next";
import { CollectionPage } from "@/components/page-templates";
import { services } from "@/content/site-data";

export const metadata: Metadata = { title: "Marketing Services", description: "Explore Yellow Agency's connected strategy, creative, media, and technology services." };

export default function ServicesPage() {
  return <CollectionPage eyebrow="Our services" title="Every capability your growth plan needs." intro="From one urgent project to a fully connected program, Yellow gives you specialist depth and one accountable team." items={services.map((service) => ({ title: service.title, summary: service.summary, href: `/white-label/${service.slug}` }))} cardLabel="Explore service" />;
}
