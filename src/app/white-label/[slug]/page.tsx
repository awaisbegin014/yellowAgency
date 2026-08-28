import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacebookAdsServicePage } from "@/components/facebook-ads-service-page";
import { GoogleAdsServicePage } from "@/components/google-ads-service-page";
import { ContentWritingServicePage } from "@/components/content-writing-service-page";
import { GraphicsDesignServicePage } from "@/components/graphics-design-service-page";
import { GoHighLevelServicePage } from "@/components/go-high-level-service-page";
import { PpcServicePage } from "@/components/ppc-service-page";
import { SeoServicePage } from "@/components/seo-service-page";
import { SocialMediaServicePage } from "@/components/social-media-service-page";
import { WebDesignServicePage } from "@/components/web-design-service-page";
import { WebDevelopmentServicePage } from "@/components/web-development-service-page";
import { VaServicePage } from "@/components/va-service-page";
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
  if (slug === "facebook-ads-services") return <FacebookAdsServicePage />;
  if (slug === "google-ads-services") return <GoogleAdsServicePage />;
  if (slug === "seo-services") return <SeoServicePage />;
  if (slug === "ppc-services") return <PpcServicePage />;
  if (slug === "social-media-management-services") return <SocialMediaServicePage />;
  if (slug === "web-design-services") return <WebDesignServicePage />;
  if (slug === "web-development-services") return <WebDevelopmentServicePage />;
  if (slug === "graphics-design-services") return <GraphicsDesignServicePage />;
  if (slug === "content-writing-services") return <ContentWritingServicePage />;
  if (slug === "go-high-level-services") return <GoHighLevelServicePage />;
  if (slug === "va-services") return <VaServicePage />;
  return <DetailPage eyebrow="Yellow service" title={service.title} summary={service.summary} description={service.description} points={service.points} metric={service.metric} metricLabel={service.metricLabel} />;
}
