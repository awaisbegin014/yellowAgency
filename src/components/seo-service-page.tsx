import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const seoFaqs = [
  {
    question: "What is a white-label SEO service?",
    answer: "White-label SEO gives agencies a specialist delivery team that works behind their brand. Yellow can research, plan, implement, monitor, and report SEO work while your agency owns the client relationship, strategy conversation, and final presentation.",
  },
  {
    question: "What is included in Yellow’s SEO delivery?",
    answer: "A scope can include technical and content audits, keyword and competitor research, on-page optimization, content briefs, local SEO, authority development, analytics review, rank tracking, and agency-ready reporting. We define the exact work around each client’s goals and current search position.",
  },
  {
    question: "How does communication work with our agency?",
    answer: "A dedicated account lead coordinates priorities, access, approvals, timelines, deliverables, and reporting through your preferred channels. Yellow can remain completely behind the scenes or join selected conversations as a member of your team.",
  },
  {
    question: "How long does SEO take to produce results?",
    answer: "Timing depends on the site’s technical condition, authority, competition, market, content coverage, and implementation speed. We establish realistic milestones, track leading indicators, and explain progress clearly instead of promising a fixed ranking date.",
  },
  {
    question: "How do you report rankings, traffic, and progress?",
    answer: "Agency-ready reports connect completed work with visibility, rankings, organic traffic, conversions, local performance, and the next priorities. Your team receives concise context and recommendations rather than a collection of unexplained charts.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is fundamental to white-label delivery. We can complete the appropriate agreement and confirm brand handling, access, communication, and client-contact expectations before the engagement begins.",
  },
  {
    question: "Can you work with our developers and content team?",
    answer: "Yes. We can deliver implementation-ready technical tickets and content briefs, collaborate with your existing specialists, or complete selected production work through Yellow. Responsibilities and approval points are documented during onboarding.",
  },
];

export function SeoServicePage() {
  return (
    <main id="top" className="inner-page facebook-service seo-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label organic growth</p>
          <h1>White Label <span>SEO Services</span></h1>
          <p>Research, technical SEO, content optimization, local visibility, authority building, and agency-ready reporting—delivered quietly behind your brand.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Search delivery that earns trust</p>
          <ServiceHeading>SEO services designed to deliver measurable growth.</ServiceHeading>
          <p>Organic growth comes from hundreds of connected decisions: what customers search, how a website is structured, whether pages satisfy intent, how quickly search engines can understand the site, and whether the brand has enough authority to compete.</p>
          <p>Yellow brings those decisions into one accountable white-label system. We give your agency specialist research, implementation support, quality checks, and clear reporting while your team keeps ownership of the client relationship and strategic direction.</p>
          <CheckList items={["Technical, on-page, and off-page SEO", "Keyword and competitor research", "Local SEO and map visibility", "Content planning and optimization", "Flexible scopes across client niches", "Clear agency-ready reporting"]} />
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="seo" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners choose Yellow for thoughtful strategy, responsive delivery, and SEO work that arrives ready to present.</p><CheckList items={["Scale without expanding fixed overhead", "Keep complete ownership of client relationships", "Deliver through experienced search specialists"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's SEO support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing an organic growth success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Optimize client websites without building an in-house SEO department."
        paragraphs={[
          "White-label SEO lets your agency offer a complete organic search capability without recruiting technical, content, local, and authority specialists one role at a time. Yellow works inside your delivery model, follows your priorities, and provides the documentation your client-facing team needs to lead with confidence.",
          "We begin with the client’s commercial goals and current search position, then identify the technical, content, and authority gaps that matter most. The work is organized into a practical roadmap with clear ownership, dependencies, and measurable checkpoints.",
          "Your agency stays focused on growth and relationships while our specialists handle the detailed work behind the scenes—from site reviews and keyword mapping to optimization, monitoring, and reporting.",
        ]}
        dashboard="audience"
        channel="seo"
        soft
      />

      <ContentSection
        title="What is included in white-label SEO services?"
        paragraphs={[
          "Every engagement is shaped around the client’s website, market, competition, and growth target. Yellow can deliver a focused project, an ongoing managed program, or specialist support that complements your existing content and development teams.",
        ]}
        items={["Comprehensive technical, on-page, and off-page audits", "Keyword research, intent mapping, and strategy", "Metadata, headings, internal links, and content optimization", "High-quality content briefs and production support", "Local SEO, citations, and Google Business Profile guidance", "Technical fixes for crawling, indexing, speed, and schema", "Competitor, backlink, and content-gap analysis", "Branded client reporting and analytics"]}
        dashboard="campaigns"
        channel="seo"
      />

      <ContentSection
        title="A complete SEO solution built for agencies."
        paragraphs={[
          "A dependable SEO program needs more than a monthly checklist. Research, technical health, content coverage, authority, local relevance, and measurement must support the same commercial outcome. Yellow coordinates those disciplines through one roadmap and one quality standard.",
          "Your team receives clear recommendations, implementation notes, completed deliverables, and progress context at every stage. That makes the work easier to approve, easier to explain, and easier to connect with the client’s broader marketing plan.",
        ]}
        dashboard="proposal"
        channel="seo"
        soft
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable organic-search capacity while your team stays focused on client leadership, sales, and strategy.</p><CheckList items={["Expand your SEO service offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support local, national, and niche clients", "Gain practical search insight and reporting"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">Your search team behind the scenes</p><ServiceHeading>White-label SEO reseller services built around your agency.</ServiceHeading><p>The delivery model flexes around your workflow, client portfolio, internal capabilities, and growth plan without lowering your quality standard.</p><p>Research, technical fixes, on-page improvements, authority building, local visibility, and reporting are coordinated as one measurable search program your team can confidently present.</p></div></section>

      <ContentSection
        title="Well-researched SEO strategies."
        paragraphs={[
          "Every project starts with evidence. We examine the client’s goals, audience, market demand, existing visibility, competitors, site architecture, content coverage, backlink profile, analytics, and conversion path before deciding where effort will create the strongest return.",
          "The resulting roadmap balances quick improvements with the deeper work required for sustainable visibility. Priorities are sequenced around impact, effort, risk, and implementation dependencies so your agency always knows what should happen next and why.",
        ]}
        dashboard="reporting"
        channel="seo"
      />

      <ContentSection
        title="On-page and off-page SEO working together."
        paragraphs={[
          "On-page optimization helps search engines and customers understand why a page deserves to rank. We improve titles, descriptions, headings, copy structure, entities, internal links, media, structured data, and page intent while protecting the client’s tone and conversion goals.",
          "Off-page work builds the external signals that support authority. We identify relevant outreach and digital PR opportunities, review backlink quality, monitor risk, and develop realistic authority plans that complement the client’s content and competitive position.",
        ]}
        dashboard="landing"
        channel="seo"
        soft
      />

      <ContentSection
        title="Local SEO and Google Business Profile management."
        paragraphs={[
          "Local search connects service businesses with customers who are ready to act nearby. Yellow helps agencies improve Google Business Profile completeness, category and service alignment, local landing pages, citation consistency, review strategy, and map visibility around priority service areas.",
          "We track meaningful local signals and recommend work around the client’s real footprint rather than chasing broad visibility that cannot convert. Multi-location and service-area scopes can be organized into repeatable systems as your portfolio grows.",
        ]}
        dashboard="audience"
        channel="seo"
      />

      <ContentSection
        title="Technical SEO that creates a stronger foundation."
        paragraphs={[
          "Technical problems can limit every content and authority investment made above them. Our specialists review crawling, indexing, architecture, canonicals, redirects, structured data, duplicate content, JavaScript rendering, mobile usability, Core Web Vitals, and other issues that affect search access and experience.",
          "Findings are translated into prioritized, implementation-ready recommendations. We can collaborate with your developers, support selected fixes, and validate completed work so critical issues do not disappear into an unactionable audit document.",
        ]}
        dashboard="campaigns"
        channel="seo"
        soft
      />

      <ContentSection
        title="Free audits and opportunity analysis."
        paragraphs={[
          "A focused audit can help your agency qualify an opportunity, strengthen a proposal, or reveal why an existing campaign has stalled. Yellow reviews the areas most relevant to the prospect and presents the findings as a clear story rather than an automated list of warnings.",
          "Recommendations separate urgent blockers, practical improvements, and longer-term growth opportunities. Your team receives enough context to explain the value, define an appropriate scope, and set expectations before the engagement begins.",
        ]}
        dashboard="creative"
        channel="seo"
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label SEO support.</p></div>
          <div className="facebook-service__faq-list">
            {seoFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your organic growth team behind the scenes</p><ServiceHeading>Ready to add dependable SEO capacity?</ServiceHeading><p>Let’s map the right white-label SEO model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
