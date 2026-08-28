import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const ppcFaqs = [
  {
    question: "What is a white-label PPC service?",
    answer: "White-label PPC gives agencies a specialist paid-media team that plans, builds, manages, and reports campaigns behind the agency’s brand. Your team owns the client relationship while Yellow supplies the channel expertise and delivery capacity.",
  },
  {
    question: "Which advertising platforms can Yellow manage?",
    answer: "Scopes can include Google Ads, Microsoft Advertising, Meta, LinkedIn, YouTube, display, remarketing, and selected marketplace or programmatic channels. We recommend a practical mix after reviewing the audience, offer, budget, funnel, and measurement readiness.",
  },
  {
    question: "How does communication work with our agency?",
    answer: "A dedicated account lead coordinates priorities, access, approvals, reporting, and specialist questions through your preferred channels. Yellow can stay completely behind the scenes or join selected conversations as a member of your team.",
  },
  {
    question: "How is white-label support different from a freelancer or in-house hire?",
    answer: "The model gives your agency access to coordinated media, strategy, creative, tracking, and reporting capability without relying on one person or carrying permanent recruitment overhead. Scope and capacity can flex as your client portfolio changes.",
  },
  {
    question: "How do you report campaign progress?",
    answer: "Reports connect spend, conversions, lead quality, revenue signals, and optimization work to the agreed commercial goals. Your team receives plain-language context, current priorities, testing insights, and recommended next actions in an agency-ready format.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidential delivery is central to the partnership. We can complete the appropriate agreement and confirm brand handling, account access, communication, and client-contact expectations before campaign work begins.",
  },
  {
    question: "Can Yellow support landing pages, creative, and tracking?",
    answer: "Yes. PPC performance depends on the whole conversion path, so scopes can include landing-page strategy or production, copy and creative coordination, analytics setup, tag management, conversion validation, and ongoing experiment planning.",
  },
];

export function PpcServicePage() {
  return (
    <main id="top" className="inner-page facebook-service ppc-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label performance media</p>
          <h1>White Label <span>PPC Services</span></h1>
          <p>Cross-channel campaign strategy, research, creative coordination, conversion tracking, optimization, and reporting—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Turn media spend into accountable growth</p>
          <ServiceHeading>Drive high-quality traffic with Yellow.</ServiceHeading>
          <p>Paid media can create demand, capture active intent, and accelerate a client’s growth—but only when channels, audiences, offers, landing pages, tracking, and optimization work as one system.</p>
          <p>Yellow’s PPC specialists operate behind your brand to research opportunities, build campaigns, control budgets, improve conversion efficiency, and explain performance clearly. Your agency gains an experienced delivery team without adding fixed overhead or losing ownership of the client relationship.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="ppc" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners rely on Yellow for responsive communication, cross-channel depth, and campaign work that arrives ready to present.</p><CheckList items={["Scale paid-media delivery without fixed overhead", "Keep control of every client relationship", "Deliver through experienced channel specialists"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's PPC support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a paid media success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Who benefits from white-label PPC services?"
        paragraphs={[
          "This model is built for agencies that want to introduce paid media, strengthen an existing offer, or add capacity when internal specialists are already fully allocated. It also helps teams that need deeper platform expertise without recruiting a separate operator for every channel.",
          "Yellow supports creative, web, SEO, branding, and full-service agencies that want reliable PPC execution under their own name. We adapt to your workflow, approvals, communication style, and client portfolio instead of forcing every account into one rigid delivery template.",
          "Your client-facing team stays focused on relationships, strategy, and growth while our specialists manage research, builds, daily controls, testing, optimization, quality reviews, and performance reporting.",
        ]}
        dashboard="audience"
        channel="ppc"
        soft
      />

      <ContentSection
        title="Power up your client pay-per-click services."
        paragraphs={[
          "A coordinated white-label team gives your agency dependable campaign capacity without the delays, management load, and fixed cost of building every role internally. Yellow combines specialist execution with visible workflows so your team can scale without lowering its quality standard.",
          "The engagement can support a single high-priority account or a wider paid-media portfolio. Scope flexes around client demand, launch timing, platform mix, budget, and the capabilities already available inside your agency.",
        ]}
        items={["Clear scopes and transparent commercial terms", "Niche-aware channel and campaign strategy", "Account audits and opportunity reviews", "Flexible campaign and experiment capacity", "Dedicated account and project coordination"]}
        dashboard="campaigns"
        channel="ppc"
      />

      <ContentSection
        title="Cross-channel PPC services in one accountable system."
        paragraphs={[
          "Different channels solve different parts of the customer journey. Yellow plans the media mix around the client’s audience, intent, offer, creative resources, funnel, and measurement maturity, then keeps every campaign connected to one commercial objective.",
          "Our specialists can coordinate search, shopping, video, display, paid social, lead generation, and remarketing while your agency receives one priority list and one reporting rhythm.",
        ]}
        items={["Google Search, Display, Shopping, and Performance Max", "Microsoft Advertising", "YouTube advertising", "Meta and LinkedIn campaigns", "Lead generation and remarketing", "Cross-channel funnel and attribution planning"]}
        dashboard="reporting"
        channel="ppc"
        soft
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable PPC capacity while your internal team stays focused on relationships, sales, and strategic leadership.</p><CheckList items={["Expand your existing and new services", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support multiple client niches and budgets", "Gain practical media insight and reporting"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete performance delivery model</p><ServiceHeading>Benefits of Yellow’s white-label PPC services.</ServiceHeading><p>From initial research to reporting, the system is designed to give your agency control, specialist depth, and presentation-ready work at every stage.</p><p>Channel planning, campaign builds, tracking, testing, budget pacing, and performance analysis stay connected, giving clients clearer decisions and your agency a dependable delivery rhythm.</p></div></section>

      <ContentSection
        title="Conversion-focused PPC landing pages."
        paragraphs={[
          "Paid traffic becomes expensive when the landing experience does not match the audience, keyword, ad promise, or conversion goal. Yellow reviews message alignment, offer clarity, page hierarchy, mobile usability, speed, form friction, trust signals, and measurement before recommending changes.",
          "Our strategists, writers, designers, and developers can improve an existing page or create a focused production scope. Structured experiments then reveal which headlines, proof points, layouts, and calls to action improve conversion quality.",
        ]}
        dashboard="landing"
        channel="ppc"
      />

      <ContentSection
        title="In-depth white-label PPC proposals."
        paragraphs={[
          "A useful proposal explains why the recommended campaign will fit the prospect’s market instead of repeating a generic platform checklist. Yellow supports your sales process with focused research, channel opportunities, budget scenarios, measurement requirements, landing-page observations, and a phased launch plan.",
          "Your team receives an agency-ready story that sets sensible expectations, demonstrates strategic thinking, and helps the prospect understand how media spend will be controlled and improved.",
        ]}
        dashboard="proposal"
        channel="ppc"
        soft
      />

      <ContentSection
        title="Creative and banner design built for performance."
        paragraphs={[
          "Attention matters only when it comes from the right audience and leads toward the right action. Our media, copy, and design specialists coordinate campaign concepts, formats, messages, offers, and calls to action around a defined testing purpose.",
          "Once campaigns launch, click quality and conversion data inform the next creative cycle. Strong approaches are expanded across useful variations while weak messages are replaced before fatigue or wasted spend compounds.",
        ]}
        dashboard="creative"
        channel="ppc"
      />

      <ContentSection
        title="Keyword research grounded in customer intent."
        paragraphs={[
          "Keywords are not just traffic labels—they reveal what a customer wants and how close that person may be to acting. Yellow maps themes around intent, offer fit, commercial value, geography, competition, and the landing experience before building campaign structure.",
          "We review search terms continuously, add useful exclusions, refine match-type control, and connect query patterns with lead quality. This keeps budget concentrated on searches that have a credible path to conversion.",
        ]}
        dashboard="audience"
        channel="ppc"
        soft
      />

      <ContentSection
        title="Customized reporting and focused strategy."
        paragraphs={[
          "Your agency should never have to translate a platform export into a client story at the last minute. Yellow’s reports connect spend, reach, clicks, conversions, lead quality, revenue signals, completed work, and upcoming priorities to the goals agreed at the start.",
          "Recommendations are written in plain language and supported by the relevant data. Your team receives the context needed to lead client conversations confidently and make informed decisions about budgets, channels, creative, and the funnel.",
        ]}
        items={["Customized agency-ready reporting", "Growth-focused channel strategy", "Flexible campaign and testing plans", "Experienced media specialists", "Dedicated account and project leads", "Responsive communication and ad hoc analysis"]}
        dashboard="reporting"
        channel="ppc"
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label PPC support.</p></div>
          <div className="facebook-service__faq-list">
            {ppcFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your paid-media team behind the scenes</p><ServiceHeading>Ready to add cross-channel PPC capacity?</ServiceHeading><p>Let’s map the right white-label media model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
