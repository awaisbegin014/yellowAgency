import type { Metadata } from "next";
import { CollectionPage } from "@/components/page-templates";
import { services } from "@/content/site-data";

export const metadata: Metadata = { title: "Marketing Services", description: "Explore Yellow Agency's connected strategy, creative, media, and technology services." };

export default function ServicesPage() {
  return (
    <CollectionPage
      eyebrow="White-label agency services"
      title="Every fulfillment capability your agency needs to scale."
      intro="From individual channel sprints to fully managed omnichannel delivery, Yellow gives your agency dedicated specialist departments without the fixed overhead."
      items={services.map((service) => ({ title: service.title, summary: service.summary, href: `/white-label/${service.slug}` }))}
      cardLabel="Explore service"
      image="/images/unsplash/creative-design-01.jpg"
      introEyebrow="Full-spectrum fulfillment bench"
      introHeading="Scalable delivery built to protect your margins and client trust."
      introCopy="Sell more retainers with zero delivery bottlenecks. From high-ROAS paid media and technical SEO to custom Next.js web applications and viral AI video, our specialists operate completely behind your agency brand."
      ctaTitle="Ready to expand your agency's service catalog?"
    />
  );
}
