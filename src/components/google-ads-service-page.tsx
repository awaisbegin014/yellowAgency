import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const googleAdsFaqs = [
  {
    question: "What is a white-label Google Ads service?",
    answer: "It is a behind-the-scenes paid-search delivery service for agencies. Yellow plans, builds, manages, and reports on Google Ads campaigns under your agency name, giving your team specialist capacity without exposing a third-party fulfillment provider to the client.",
  },
  {
    question: "Which Google Ads campaign types can Yellow manage?",
    answer: "Scopes can include Search, Display, Shopping, Performance Max, YouTube, lead-generation, and remarketing campaigns. We recommend the right mix after reviewing the client’s goals, offer, market, conversion path, tracking readiness, and available budget.",
  },
  {
    question: "How does communication work with our agency?",
    answer: "A dedicated account lead coordinates priorities, access, approvals, reporting, and specialist questions through your preferred channels. Yellow can remain completely behind the scenes or join selected conversations as a member of your agency team.",
  },
  {
    question: "Who owns the Google Ads account and campaign data?",
    answer: "Your agency or client retains ownership of the Google Ads account, conversion data, audiences, and related assets. We work through secure access, document important setup decisions, and keep your team informed throughout the engagement.",
  },
  {
    question: "How do you report updates and progress?",
    answer: "Reports connect spend, clicks, conversions, lead quality, and revenue signals to the agreed commercial goals. Your team receives plain-language context, optimization notes, current priorities, and recommended next actions in an agency-ready format.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. White-label confidentiality is central to the delivery model. We can complete the appropriate confidentiality agreement and confirm access, communication, and brand-handling expectations before campaign work begins.",
  },
  {
    question: "Can you support landing pages, ads, and conversion tracking?",
    answer: "Yes. Campaign performance often depends on the complete conversion path, so scopes can include keyword and ad development, landing-page recommendations or production, Google Tag Manager coordination, analytics setup, and conversion validation.",
  },
];

export function GoogleAdsServicePage() {
  return (
    <main id="top" className="inner-page facebook-service google-ads-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label paid search</p>
          <h1>White Label <span>Google Ads</span></h1>
          <p>High-intent campaign strategy, account builds, keyword planning, conversion tracking, optimization, and reporting—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Capture demand with clarity</p>
          <ServiceHeading>Reach high-intent customers with Yellow.</ServiceHeading>
          <p>Google Ads can put a client in front of people already searching for a solution, but valuable traffic depends on disciplined account structure, relevant keywords, persuasive ads, accurate conversion tracking, and landing pages that carry the promise through to action.</p>
          <p>Yellow’s paid-search specialists work behind your brand to plan, build, and improve campaigns around the client’s commercial goals. Your agency receives practical strategy, consistent optimization, and clear reporting without adding another specialist department in-house.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="google" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading"><ServiceHeading>Hear what our partners have to say about us.</ServiceHeading><div><p>Agency partners rely on Yellow for responsive communication, practical search expertise, and delivery that stays confidently behind their brand.</p><CheckList items={["Scale paid-search delivery without fixed overhead", "Retain complete ownership of client relationships", "Present clear recommendations and agency-ready reports"]} /></div></div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's Google Ads support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a paid search success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Getting measurable Google Ads ROI is hard."
        paragraphs={[
          "Search campaigns can spend quickly when account structure, query intent, match types, bidding, geography, or conversion signals are not aligned. Yellow begins with the business goal and the complete conversion path, then turns platform activity into a focused plan your agency can explain and defend.",
          "Our team reviews historical performance, search demand, competitors, landing pages, tracking, budgets, and lead quality before deciding where to concentrate spend. We keep testing disciplined and priorities visible so optimization serves the client’s commercial result rather than surface-level platform metrics.",
          "The model adapts to established accounts that need stronger control as well as new campaigns that require research, setup, and a clear launch framework from the beginning.",
        ]}
        dashboard="audience"
        channel="google"
        soft
      />

      <ContentSection
        title="What is included in white-label Google Ads services?"
        paragraphs={["Your scope is built around the client’s market, objective, funnel, and measurement readiness. Yellow can manage a focused Search program or coordinate a broader Google Ads mix while keeping one accountable strategy and reporting rhythm."]}
        items={["Google Search campaigns", "Google Display campaigns", "Shopping and Performance Max", "YouTube advertising", "Search and display remarketing", "Lead-generation campaigns", "Keyword, competitor, and search-term research", "Conversion tracking and analytics coordination"]}
        dashboard="campaigns"
        channel="google"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add experienced Google Ads capacity while your internal team stays focused on relationships, sales, strategy, and client leadership.</p><CheckList items={["Expand your paid-search service offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support different client niches and budgets", "Gain practical search insight and reporting"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete search delivery model</p><ServiceHeading>Benefits of Yellow’s white-label Google Ads services.</ServiceHeading><p>From the search query to the final conversion, every part of the system is reviewed, managed, and reported with your agency’s reputation in mind.</p><p>Your clients receive focused campaign strategy, disciplined budget control, ongoing search-term refinement, conversion insight, and presentation-ready reports—all delivered quietly under your brand.</p></div></section>

      <ContentSection
        title="Conversion-focused landing page support."
        paragraphs={[
          "Google Ads quality and conversion efficiency depend on the experience after the click. Yellow helps align keyword intent, ad messaging, page hierarchy, offer clarity, mobile usability, form friction, speed, and tracking so the landing experience supports the campaign rather than limiting it.",
          "Our strategists, writers, designers, and developers can review existing pages or create focused landing-page recommendations and production scopes. Where useful, we define structured A/B tests to identify which messages, layouts, and calls to action improve conversion quality.",
        ]}
        dashboard="landing"
        channel="google"
        soft
      />

      <ContentSection
        title="In-depth Google Ads proposals."
        paragraphs={[
          "Strong proposals show prospects that the campaign recommendation is grounded in their market rather than copied from a standard template. Yellow supports your sales process with focused research, account observations, keyword themes, channel recommendations, measurement requirements, budget scenarios, and a phased launch plan.",
          "The result is a professional, agency-ready proposal that explains the opportunity, sets realistic expectations, and helps your team sell a coherent strategy instead of a list of platform tasks.",
        ]}
        dashboard="proposal"
        channel="google"
      />

      <ContentSection
        title="Ads, keywords, and creative development."
        paragraphs={[
          "Search performance begins with relevance. We organize keyword themes around intent, build useful exclusions, and develop ad messaging that connects the searcher’s need with a clear reason to choose the client. Every campaign is structured to make testing and optimization easier to understand.",
          "For Display, Performance Max, and YouTube scopes, our media, copy, and design specialists coordinate creative requirements with the campaign objective. Performance data then informs the next round of headlines, descriptions, imagery, video, and offer tests.",
        ]}
        dashboard="creative"
        channel="google"
        soft
      />

      <ContentSection
        title="Optimization and reporting your agency can use."
        paragraphs={[
          "Ongoing management covers the decisions that compound performance: search-term quality, bids, budgets, audiences, locations, schedules, devices, ads, assets, landing pages, and conversion signals. Changes are prioritized around business impact and documented clearly.",
          "Agency-ready reports explain what moved, why it matters, what we learned, and what should happen next. Your team receives useful context for client conversations instead of a dashboard full of unexplained numbers.",
        ]}
        dashboard="reporting"
        channel="google"
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often when adding white-label Google Ads support.</p></div>
          <div className="facebook-service__faq-list">
            {googleAdsFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your search team behind the scenes</p><ServiceHeading>Ready to add Google Ads capacity?</ServiceHeading><p>Let’s map the right white-label paid-search model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
