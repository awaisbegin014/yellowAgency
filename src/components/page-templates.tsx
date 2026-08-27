import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { faqs } from "@/content/site-data";

type CollectionItem = { title: string; summary: string; href: string };

export function AccentHeading({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2";
  children: string;
  className?: string;
}) {
  const words = children.trim().split(/\s+/);
  const splitAt = Math.max(1, Math.ceil(words.length / 2));
  const lead = words.slice(0, splitAt).join(" ");
  const accent = words.slice(splitAt).join(" ");

  return (
    <Tag className={`inner-heading ${className}`.trim()}>
      <span>{lead}</span>
      {accent && <><br /><span className="inner-heading__accent">{accent}</span></>}
    </Tag>
  );
}

export function CollectionPage({
  eyebrow,
  title,
  intro,
  items,
  cardLabel = "Explore",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: CollectionItem[];
  cardLabel?: string;
}) {
  return (
    <main id="top" className="inner-page">
      <section className="page-hero page-hero--yellow">
        <div className="container page-hero__grid">
          <div><p className="eyebrow">{eyebrow}</p><AccentHeading as="h1">{title}</AccentHeading><p className="page-hero__lead">{intro}</p></div>
          <MediaPlaceholder label={`${title} hero image placeholder`} type="portrait" priority />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-intro"><p className="eyebrow">Everything connected</p><AccentHeading>The right specialists, working as one.</AccentHeading><p className="large-copy">Choose a focused starting point or combine capabilities around a larger growth goal. Either way, the work stays connected to one strategy.</p></div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container collection-grid">
          {items.map((item, index) => (
            <Link key={item.href} href={item.href} className="collection-card">
              <span className="collection-card__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3><p>{item.summary}</p><span className="text-link">{cardLabel} <span>↗</span></span>
            </Link>
          ))}
        </div>
      </section>
      <StandardCta title="Not sure where to start? That's a useful place to begin." />
    </main>
  );
}

export function DetailPage({
  eyebrow,
  title,
  summary,
  description,
  points,
  metric,
  metricLabel,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  metric?: string;
  metricLabel?: string;
}) {
  return (
    <main id="top" className="inner-page">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow">{eyebrow}</p><AccentHeading as="h1">{title}</AccentHeading><p className="page-hero__lead">{summary}</p>
            <Link href="/book-appointment" className="button button--dark">Talk to a specialist <span>↗</span></Link>
          </div>
          <MediaPlaceholder label={`${title} video placeholder`} type="video" priority />
        </div>
      </section>
      <section className="section">
        <div className="container detail-outcomes">
          <div><p className="eyebrow">The opportunity</p><AccentHeading>Make every part work harder together.</AccentHeading></div>
          <div><p className="large-copy">{description}</p><p>We begin with the customer and commercial goal, then build the clearest path from attention to action. That means useful strategy, disciplined execution, and reporting everyone can understand.</p></div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container detail-outcomes">
          <div><p className="eyebrow">What you get</p><AccentHeading>A complete, practical delivery system.</AccentHeading>{metric && <div className="mini-metrics"><div><strong>{metric}</strong><span>{metricLabel}</span></div></div>}</div>
          <div className="detail-outcomes__cards">
            {points.map((point, index) => <article key={point}><span>0{index + 1}</span><h3>{point}</h3></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">How it works</p><AccentHeading>Clear from day one.</AccentHeading></div><p>Our approach is structured enough to keep momentum and flexible enough to respond to what the evidence tells us.</p></div>
          <div className="detail-steps">
            <div className="detail-step"><h3>Understand</h3><p>Align on the audience, market, baseline, goals, and the highest-value problems to solve.</p></div>
            <div className="detail-step"><h3>Shape</h3><p>Create the strategy, messages, channel plan, experience, and measurement framework.</p></div>
            <div className="detail-step"><h3>Launch</h3><p>Build and release in focused stages so useful work reaches customers sooner.</p></div>
            <div className="detail-step"><h3>Improve</h3><p>Review performance, learn from real behavior, and compound the work that creates value.</p></div>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container featured-work__grid">
          <div><p className="eyebrow">A connected team</p><AccentHeading>Strategy is only useful when the whole team can act on it.</AccentHeading><p>Yellow brings every needed discipline into one visible working rhythm, with senior leads close to the detail.</p><Link href="/dedicated-teams" className="button button--yellow">Meet the model <span>↗</span></Link></div>
          <MediaPlaceholder label="Specialist team image placeholder" type="portrait" />
        </div>
      </section>
      <FaqBlock />
      <StandardCta title={`Ready to make ${title.toLowerCase()} work harder?`} />
    </main>
  );
}

export function StandardCta({ title }: { title: string }) {
  return (
    <section className="section inner-cta-section">
      <div className="container cta-panel"><AccentHeading>{title}</AccentHeading><Link href="/book-appointment" className="button button--dark">Book a consultation <span>↗</span></Link></div>
    </section>
  );
}

export function FaqBlock() {
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <div><p className="eyebrow">Common questions</p><AccentHeading>Good questions lead to better work.</AccentHeading></div>
        <div className="accordion-list">{faqs.slice(0, 4).map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  );
}
