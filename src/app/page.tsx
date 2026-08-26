import Link from "next/link";
import { FeatureTabs, TestimonialCarousel } from "@/components/interactive";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { caseStudies, faqs, industries, posts, services, testimonials } from "@/content/site-data";

const serviceTabs = services.map((service) => ({
  title: service.shortTitle,
  summary: service.summary,
  href: `/white-label/${service.slug}`,
  metric: service.metric,
  metricLabel: service.metricLabel,
  points: service.points,
}));

const industryTabs = industries.map((industry) => ({
  title: industry.title,
  summary: industry.summary,
  href: `/industries/${industry.slug}`,
}));

export default function Home() {
  return (
    <main id="top">
      <section className="hero section">
        <div className="container hero__inner">
          <p className="eyebrow hero__eyebrow"><span /> The connected growth agency</p>
          <h1>Big ideas. Bright thinking.<br /><span className="marker-ring">Serious growth.</span></h1>
          <p className="hero__lead">We bring strategy, creative, media, and technology under one roof—so ambitious brands can move faster and grow with confidence.</p>
          <div className="button-row">
            <Link href="/book-appointment" className="button button--dark">Book a free consultation <span aria-hidden="true">↗</span></Link>
            <Link href="/case-studies" className="button button--ghost">See our work <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
        <div className="container hero-media">
          <MediaPlaceholder label="Hero campaign video placeholder" type="video" className="hero-media__main" />
          <div className="hero-media__note"><span className="scribble-arrow" aria-hidden="true">↗</span><p>Strategy that looks good<br />and works even harder.</p></div>
          <MediaPlaceholder label="Campaign image placeholder" type="portrait" className="hero-media__side" />
        </div>
      </section>

      <section className="logo-strip section section--compact" aria-label="Selected partners">
        <div className="container">
          <p className="eyebrow centered">Trusted by growing teams, from local leaders to global challengers</p>
          <div className="logo-grid">
            {["NORTHSTAR", "KINETIC", "BRIGHT AIR", "KINDRED", "HARBOR", "OAK & STONE"].map((logo) => <div key={logo} className="logo-tile">{logo}</div>)}
          </div>
        </div>
      </section>

      <section className="section intro-split">
        <div className="container two-column two-column--wide">
          <div><p className="eyebrow">How we help</p><h2>All the specialists you need. One team that sees the whole picture.</h2></div>
          <div className="rich-copy">
            <p className="large-copy">Disconnected marketing creates disconnected results. Yellow brings your strategy, story, channels, and customer experience together.</p>
            <p>You get senior thinking, hands-on specialists, and a practical plan built around the business outcomes that actually matter.</p>
            <Link className="text-link" href="/about-us">Meet Yellow Agency <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {[["14+", "specialist disciplines"], ["92%", "client retention"], ["4.9/5", "partner satisfaction"], ["11 yrs", "building growth systems"]].map(([metric, label]) => (
            <div key={label} className="stat"><strong>{metric}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">What we do</p><h2>Connected services.<br />Compounding results.</h2></div>
            <p>Start with the problem in front of you or bring us the whole growth challenge. Our specialists plug in where they create the most value.</p>
          </div>
          <FeatureTabs items={serviceTabs} label="Growth service" />
        </div>
      </section>

      <section className="featured-work section section--yellow">
        <div className="container featured-work__grid">
          <div className="featured-work__copy">
            <p className="eyebrow">Featured transformation / Dental</p>
            <h2>A patient pipeline that finally made the numbers smile.</h2>
            <p>Northstar Dental needed one connected system across search, reputation, content, and conversion. The result was sustainable growth the front desk could feel.</p>
            <div className="mini-metrics"><div><strong>184%</strong><span>more appointment requests</span></div><div><strong>42%</strong><span>lower acquisition cost</span></div></div>
            <Link href="/case-studies/northstar-dental-growth" className="button button--dark">View the case study <span>↗</span></Link>
          </div>
          <MediaPlaceholder label="Northstar Dental case study image" type="portrait" />
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading section-heading--tight"><div><p className="eyebrow">Partners, not passengers</p><h2>Good work gets noticed.<br />Great work gets remembered.</h2></div><p>Our favorite proof comes from the people doing the work with us.</p></div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="section niches-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Industry experience</p><h2>We learn the market.<br />Then look beyond it.</h2></div><p>Category fluency helps us move quickly. Fresh perspective keeps the work from looking and sounding like everyone else.</p></div>
          <FeatureTabs items={industryTabs} label="Industry" />
        </div>
      </section>

      <section className="section crm-banner-wrap">
        <div className="container crm-banner">
          <div className="crm-banner__mark">Y<span>+</span></div>
          <div><p className="eyebrow">Yellow Flow</p><h2>Your leads, follow-up, and reporting—finally connected.</h2><p>Our practical CRM and automation layer helps small teams deliver a big-team customer experience.</p></div>
          <Link href="/white-label/email-automation" className="button button--yellow">Explore Yellow Flow <span>↗</span></Link>
        </div>
      </section>

      <section className="section work-grid-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Proof, in full color.</h2></div><Link href="/case-studies" className="text-link">View all case studies <span>↗</span></Link></div>
          <div className="case-grid">
            {caseStudies.slice(0, 3).map((study, index) => (
              <Link href={`/case-studies/${study.slug}`} key={study.slug} className={`case-card case-card--${index + 1}`}>
                <MediaPlaceholder label={`${study.client} project image`} />
                <div className="case-card__content"><span>{study.industry}</span><h3>{study.title}</h3><div><strong>{study.metric}</strong><small>{study.result}</small></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Yellow Agency approach"><div>THINK BRIGHTER <span>✦</span> GROW SMARTER <span>✦</span> MOVE TOGETHER <span>✦</span> THINK BRIGHTER</div></section>

      <section className="section benefits-section">
        <div className="container two-column two-column--wide">
          <div className="sticky-copy"><p className="eyebrow">Built for growing businesses</p><h2>A senior agency team without the agency maze.</h2><p>Clear owners. Fast decisions. Work that moves from idea to market without losing the thread.</p><Link href="/dedicated-teams" className="button button--outline">Build your team <span>↗</span></Link></div>
          <div className="benefit-list">
            {[["01", "One connected plan", "Every specialist works from the same commercial priorities and customer story."], ["02", "Senior attention", "Experienced leads stay close to the work instead of disappearing after the pitch."], ["03", "Flexible expertise", "Scale the team and channel mix as your priorities change—without starting over."], ["04", "Plain-language proof", "Know what shipped, what changed, what we learned, and what happens next."]].map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section section--soft">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">A brighter beginning</p><h2>From first call to first win.</h2></div><p>A calm, clear onboarding process gives the team context without slowing momentum.</p></div>
          <div className="process-grid">
            {[["01", "Discover", "We align on the business, audience, goals, constraints, and the real problem to solve."], ["02", "Design", "We shape the strategy, channel plan, creative system, measures, and 90-day priorities."], ["03", "Deliver", "Specialists build, launch, measure, and communicate in one visible working rhythm."], ["04", "Develop", "We use live evidence to improve the work and compound what is already performing."]].map(([number, title, copy]) => (
              <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section agency-model">
        <div className="container agency-model__grid">
          <div className="agency-model__visual"><MediaPlaceholder label="Yellow Agency collaboration video" type="video" /><div className="yellow-sticker">NO<br />SILOS</div></div>
          <div><p className="eyebrow">The Yellow model</p><h2>Specialists in their lane. Together at the table.</h2><p className="large-copy">The best answer rarely belongs to one discipline. Our model puts strategists, creatives, media specialists, and developers in the same conversation from day one.</p><ul className="check-list check-list--large"><li>A dedicated growth lead</li><li>The right specialists for each phase</li><li>Weekly visibility and direct access</li><li>A shared roadmap and scorecard</li></ul></div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container comparison">
          <div className="comparison__heading"><p className="eyebrow">Less software. More signal.</p><h2>A useful growth dashboard, not another tab graveyard.</h2></div>
          <div className="comparison__grid"><div className="comparison-card comparison-card--yellow"><span>Y+</span><h3>Yellow Flow</h3><ul><li>One customer view</li><li>Automated lead follow-up</li><li>Simple attribution</li><li>Human support included</li></ul></div><div className="comparison-card"><span>∞</span><h3>Disconnected tools</h3><ul><li>Scattered customer data</li><li>Manual handoffs</li><li>Conflicting reports</li><li>No clear owner</li></ul></div></div>
        </div>
      </section>

      <section className="section team-section section--dark">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Your extended team</p><h2>People who care about the work—and the result.</h2></div><p>Small enough to know your business. Deep enough to solve the hard parts.</p></div>
          <div className="team-grid">
            {["Strategy lead", "Creative director", "Performance specialist", "Development lead"].map((role, index) => <article key={role}><MediaPlaceholder label={`${role} portrait placeholder`} type="portrait" /><span>0{index + 1}</span><h3>{role}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="section growth-section">
        <div className="container growth-section__grid"><div><p className="eyebrow">Ready when you are</p><h2>The next bright idea could change your whole year.</h2></div><div><p className="large-copy">Tell us where growth feels stuck. We&apos;ll bring a fresh perspective, a practical next step, and absolutely no hard sell.</p><Link href="/book-appointment" className="button button--dark">Start a conversation <span>↗</span></Link></div></div>
      </section>

      <section className="section insights-section section--soft">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Fresh thinking</p><h2>Ideas you can use.</h2></div><Link href="/blog" className="text-link">Explore all insights <span>↗</span></Link></div>
          <div className="post-grid">{posts.slice(0, 3).map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card"><MediaPlaceholder label={`${post.title} article image`} /><span>{post.category} · {post.readTime}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read article ↗</b></Link>)}</div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div><p className="eyebrow">Frequently asked</p><h2>A few things you might be wondering.</h2><p>Still curious? We&apos;re happy to talk it through.</p><Link href="/contact-us" className="text-link">Ask us anything <span>↗</span></Link></div>
          <div className="accordion-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
    </main>
  );
}
