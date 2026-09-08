import type { Metadata } from "next";
import { DetailPage } from "@/components/page-templates";

export const metadata: Metadata = { title: "Dedicated Marketing Teams", description: "A flexible, embedded agency team shaped around your growth priorities." };
export default function DedicatedTeamsPage() {
  return (
    <DetailPage
      eyebrow="Dedicated teams & fractional talent"
      title="Your marketing department just got bigger—and much easier to manage."
      summary="Embed senior strategists, copywriters, performance buyers, and developers directly into your operational rhythm, coordinated by a single dedicated growth lead."
      description="Our dedicated team model gives you the speed and agility of an elite external agency combined with the deep institutional context, weekly cadence, and accountability of an internal squad."
      points={[
        "Dedicated senior growth director leading weekly sprints",
        "On-demand specialist bench across creative, paid media, and dev",
        "Unified project management inside Slack, ClickUp, or your tools",
        "Transparent hours, clear milestone roadmaps, and executive reporting",
      ]}
      metric="1 Lead"
      metricLabel="coordinating your entire multi-disciplinary growth team"
      image="/images/unsplash/team-collaboration-01.jpg"
      teamImage="/images/unsplash/team-collaboration-02.jpg"
      opportunityEyebrow="The Fractional Advantage"
      opportunityHeading="Eliminate recruiting bottlenecks, overhead drag, and fragmented contractors."
      opportunityBody="Hiring five separate in-house specialists takes months of recruiter fees, payroll taxes, and onboarding headaches. With Yellow Dedicated Teams, you activate a fully integrated squad within days, scaling team allocation up or down as your pipeline fluctuates."
      deliveryEyebrow="Integrated Agile Structure"
      deliveryHeading="A plug-and-play delivery engine built to ship high-impact campaigns weekly."
      stepsHeading="Seamless onboarding into your daily operations."
      steps={[
        { heading: "Sprint Calibration", body: "We audit your tech stack, marketing roadmap, and historical performance to configure the ideal specialist roster." },
        { heading: "Tool & Workflow Sync", body: "Your dedicated lead joins your Slack, Asana, or ClickUp, establishing shared weekly standups and backlog priorities." },
        { heading: "Continuous Execution", body: "Designers, writers, and media buyers produce and launch deliverables in fast weekly cycles." },
        { heading: "Quarterly Evolution", body: "We analyze ROI, shift specialist focus toward high-performing channels, and scale team capacity on demand." },
      ]}
      teamEyebrow="Your Embedded Squad"
      teamHeading="Senior practitioners who treat your commercial goals as their own."
      teamCopy="No junior handoffs or opaque billing. You work directly with battle-tested specialists who have scaled seven and eight-figure brands across competitive categories."
      teamCtaLabel="Configure Your Team"
      teamCtaHref="/book-appointment"
    />
  );
}

