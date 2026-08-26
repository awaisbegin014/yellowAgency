import type { Metadata } from "next";
import { DetailPage } from "@/components/page-templates";

export const metadata: Metadata = { title: "Agency Partnerships", description: "Flexible production and specialist support for agencies and internal teams." };
export default function PartnershipPage() { return <DetailPage eyebrow="Agency partnerships" title="A specialist partner your clients never have to worry about." summary="Expand your capability, protect the client relationship, and deliver ambitious work with a dependable behind-the-scenes team." description="Yellow supports agencies and internal teams with flexible white-label strategy, creative, development, SEO, paid media, and delivery capacity." points={["Confidential delivery", "Flexible capacity", "Senior specialists", "Your workflow or ours"]} metric="100%" metricLabel="focused on making your team look good" />; }
