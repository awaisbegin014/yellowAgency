import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { StandardCta } from "@/components/page-templates";

const projects = [
  ["northstar-identity", "Northstar Dental", "Brand identity / Web design"],
  ["kinetic-product-launch", "Kinetic Cloud", "Campaign / Product marketing"],
  ["kindred-commerce", "Kindred Goods", "Ecommerce / Paid social"],
  ["oak-stone-rebrand", "Oak & Stone", "Brand identity / Development"],
  ["harbor-legal-content", "Harbor Legal", "Content / Search"],
  ["bright-air-campaign", "Bright Air Co.", "Campaign / Local growth"],
] as const;

export const metadata: Metadata = { title: "Creative Portfolio", description: "Explore selected brand, campaign, content, and digital experience work from Yellow Agency." };
export default function PortfolioPage() { return <main id="top"><section className="page-hero page-hero--yellow"><div className="container article-header"><p className="eyebrow">Creative portfolio</p><h1>Bright work, made to work.</h1><p className="page-hero__lead">A selection of identities, campaigns, websites, and experiences from across the Yellow studio.</p></div></section><section className="section"><div className="container"><div className="filters"><span className="filter-pill">All projects</span><span className="filter-pill">Brand</span><span className="filter-pill">Campaigns</span><span className="filter-pill">Websites</span><span className="filter-pill">Content</span></div><div className="case-grid">{projects.map(([slug, title, category], index) => <Link href={`/portfolio/${slug}`} className={`case-card case-card--${(index % 3) + 1}`} key={slug}><MediaPlaceholder label={`${title} project image placeholder`} /><div className="case-card__content"><span>{category}</span><h3>{title}</h3><b>View project ↗</b></div></Link>)}</div></div></section><StandardCta title="Have a project that needs a brighter point of view?" /></main>; }
