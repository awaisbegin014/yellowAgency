import type { Metadata } from "next";
import { DetailPage } from "@/components/page-templates";

export const metadata: Metadata = { title: "Agency Partnerships", description: "Flexible production and specialist support for agencies and internal teams." };
export default function PartnershipPage() {
  return (
    <DetailPage
      eyebrow="Agency white-label partnerships"
      title="A specialist partner your clients never have to worry about."
      summary="Expand your agency capability, protect every client relationship, and deliver ambitious work with a dependable, invisible behind-the-scenes fulfillment engine."
      description="Yellow supports digital, creative, and performance agencies with flexible white-label strategy, media buying, SEO, web development, and content creation. We operate completely white-labeled under your brand standards."
      points={[
        "100% confidential non-disclosure delivery behind your agency brand",
        "Elastic fulfillment capacity that flexes with your sales pipeline",
        "Senior department specialists ready to join client calls under your email",
        "Direct integration into your agency Slack, ClickUp, or Monday boards",
      ]}
      metric="100%"
      metricLabel="focused on protecting your margin and client relationships"
      image="/images/unsplash/brand-growth.jpg"
      teamImage="/images/unsplash/team-collaboration-03.jpg"
      opportunityEyebrow="The Agency Margin Equation"
      opportunityHeading="Accept bigger client contracts without bloating fixed overhead."
      opportunityBody="Turning away lucrative client requests because your internal team is slammed costs your agency valuable revenue and risks client churn. Our white-label partnership gives you an immediate production bench to pitch and close larger retainers with total fulfillment confidence."
      deliveryEyebrow="White-Label Infrastructure"
      deliveryHeading="A battle-tested fulfillment system built specifically for agency founders."
      stepsHeading="From client pitch to flawless white-label delivery."
      steps={[
        { heading: "Pitch & Scope Support", body: "We help you craft winning proposal audits, technical scopes, and realistic media estimates that close prospects." },
        { heading: "White-Label Onboarding", body: "Set up branded reporting dashboards, client communication protocols, and dedicated Slack channels." },
        { heading: "Invisible Fulfillment", body: "Our specialists execute campaigns, write code, and build creative assets adhering strictly to your quality benchmarks." },
        { heading: "Client Retention Reviews", body: "We provide monthly presentation-ready performance decks that make your agency look indispensable." },
      ]}
      teamEyebrow="Agency Back-Office Bench"
      teamHeading="Experienced specialists whose only job is making your agency look exceptional."
      teamCopy="We never solicit your clients or advertise our involvement. We exist to be your secret operational advantage in a competitive agency landscape."
      teamCtaLabel="Become a Partner"
      teamCtaHref="/book-appointment"
    />
  );
}

