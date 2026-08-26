export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return <main id="top"><section className="page-hero page-hero--yellow"><div className="container article-header"><p className="eyebrow">Yellow Agency / Legal</p><h1>{title}</h1><p className="page-hero__lead">Last updated: {updated}</p></div></section><section className="section"><div className="container legal-page">{children}</div></section></main>;
}
