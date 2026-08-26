import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/page-templates";
import { findService, services } from "@/content/site-data";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: PageProps<"/white-label/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: PageProps<"/white-label/[slug]">) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  return <DetailPage eyebrow="Yellow service" title={service.title} summary={service.summary} description={service.description} points={service.points} metric={service.metric} metricLabel={service.metricLabel} />;
}
