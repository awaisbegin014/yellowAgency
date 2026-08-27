import { AccentHeading } from "@/components/page-templates";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return <main id="top" className="inner-page"><section className="page-hero page-hero--yellow"><div className="container article-header"><p className="eyebrow">Yellow Agency / Legal</p><AccentHeading as="h1">{title}</AccentHeading><p className="page-hero__lead">Last updated: {updated}</p></div></section><section className="section"><div className="container legal-page">{children}</div></section></main>;
}
