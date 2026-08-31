import type { MetadataRoute } from "next";
import { caseStudies, industries, posts, services } from "@/content/site-data";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticRoutes = ["", "/about-us", "/white-label", "/industries", "/case-studies", "/portfolio", "/blog", "/contact-us", "/book-appointment", "/testimonials", "/dedicated-teams", "/partnership", "/privacy-policy", "/terms-and-conditions", "/disclaimer"];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...services.map((item) => ({ url: `${base}/white-label/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })),
    ...industries.map((item) => ({ url: `${base}/industries/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })),
    ...caseStudies.map((item) => ({ url: `${base}/case-studies/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 })),
    ...posts.map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
