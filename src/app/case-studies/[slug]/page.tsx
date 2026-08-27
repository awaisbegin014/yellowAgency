import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading, StandardCta } from "@/components/page-templates";
import { caseStudies, findCaseStudy } from "@/content/site-data";

export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })); }
export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> { const { slug } = await params; const study = findCaseStudy(slug); return study ? { title: `${study.client} Case Study`, description: study.summary } : {}; }

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params; const study = findCaseStudy(slug); if (!study) notFound();
  return <main id="top" className="inner-page">
    <section className="page-hero page-hero--yellow"><div className="container"><div className="article-header"><p className="eyebrow">{study.industry} case study / {study.client}</p><AccentHeading as="h1">{study.title}</AccentHeading><p className="page-hero__lead">{study.summary}</p></div></div></section>
    <section className="section"><div className="container"><MediaPlaceholder label={`${study.client} campaign video placeholder`} type="video" /></div></section>
    <section className="section section--soft"><div className="container detail-outcomes"><div><p className="eyebrow">The result</p><div className="mini-metrics"><div><strong>{study.metric}</strong><span>{study.result}</span></div></div></div><div><AccentHeading>One connected system changed the trajectory.</AccentHeading><p className="large-copy">Yellow aligned the customer story, acquisition plan, website experience, and follow-up around one measurable growth goal.</p><p>These are placeholder case-study details ready to be replaced by approved client evidence, final statistics, quotes, and campaign visuals.</p></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">The work</p><AccentHeading>A campaign designed as one experience.</AccentHeading></div><p>Every touchpoint was built to reinforce the same useful promise and make the next step feel natural.</p></div><div className="collection-grid">{["Strategy and positioning", "Campaign creative", "Digital experience"].map((item) => <article key={item} className="collection-card collection-card--media"><MediaPlaceholder label={`${item} image placeholder`} /><h3>{item}</h3></article>)}</div></div></section>
    <StandardCta title="Let's make your results the next story we tell." />
  </main>;
}
