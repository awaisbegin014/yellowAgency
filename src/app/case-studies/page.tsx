import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { StandardCta } from "@/components/page-templates";
import { caseStudies } from "@/content/site-data";

export const metadata: Metadata = { title: "Case Studies", description: "See how Yellow Agency turns connected strategy and creative into measurable growth." };

export default function CaseStudiesPage() {
  return <main id="top">
    <section className="page-hero page-hero--dark"><div className="container"><div className="article-header"><p className="eyebrow">Selected transformations</p><h1>Work that earns attention—and keeps earning.</h1><p className="page-hero__lead">Real challenges, connected thinking, and results our clients can build on.</p></div></div></section>
    <section className="section"><div className="container"><div className="filters"><span className="filter-pill">All work</span>{[...new Set(caseStudies.map((study) => study.industry))].map((industry) => <span key={industry} className="filter-pill">{industry}</span>)}</div><div className="case-grid">{caseStudies.map((study, index) => <Link href={`/case-studies/${study.slug}`} key={study.slug} className={`case-card case-card--${(index % 3) + 1}`}><MediaPlaceholder label={`${study.client} case study image`} /><div className="case-card__content"><span>{study.client} / {study.industry}</span><h3>{study.title}</h3><p>{study.summary}</p><div><strong>{study.metric}</strong><small>{study.result}</small></div></div></Link>)}</div></div></section>
    <StandardCta title="Your next case study could start with one conversation." />
  </main>;
}
