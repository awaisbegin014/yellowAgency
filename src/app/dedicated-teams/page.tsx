import type { Metadata } from "next";
import { DetailPage } from "@/components/page-templates";

export const metadata: Metadata = { title: "Dedicated Marketing Teams", description: "A flexible, embedded agency team shaped around your growth priorities." };
export default function DedicatedTeamsPage() { return <DetailPage eyebrow="Dedicated teams" title="Your marketing team just got bigger—and easier to manage." summary="Add the exact mix of strategy, creative, performance, and development expertise you need, with one dedicated lead keeping it connected." description="Our dedicated team model gives you the flexibility of an external partner and the context, rhythm, and commitment of an internal team." points={["Dedicated growth lead", "Flexible specialist bench", "Shared weekly workflow", "Clear roadmap and reporting"]} metric="1 team" metricLabel="built around your priorities" />; }
