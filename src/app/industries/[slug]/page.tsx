import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/page-templates";
import { findIndustry, industries } from "@/content/site-data";

export function generateStaticParams() { return industries.map((industry) => ({ slug: industry.slug })); }

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) return {};
  return { title: `${industry.title} Marketing Agency`, description: industry.summary };
}

export default async function IndustryDetailPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) notFound();
  return <DetailPage eyebrow={`${industry.title} marketing`} title={`Growth marketing for ${industry.title.toLowerCase()} teams that want to stand out.`} summary={industry.summary} description={industry.description} points={["Audience and market research", "Conversion-ready digital experience", "Demand generation campaigns", "Reputation and lifecycle growth"]} metric="Y+" metricLabel={`a connected ${industry.title.toLowerCase()} growth team`} />;
}
