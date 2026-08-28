import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const contentWritingFaqs = [
  {
    question: "What are white-label content writing services?",
    answer: "White-label content writing gives your agency a behind-the-scenes editorial team for research, strategy, briefs, drafting, editing, optimization, quality review, and final delivery. Your agency owns the client relationship and presents every approved asset under its own brand.",
  },
  {
    question: "Which content formats can Yellow produce?",
    answer: "Scopes can include website and landing-page copy, service pages, blog articles, case studies, guides, e-books, email campaigns, newsletters, press releases, social copy, ad copy, sales materials, and other agreed editorial formats.",
  },
  {
    question: "How do you match each client’s brand voice?",
    answer: "We review brand guidelines, approved examples, customer language, positioning, audience needs, and words the client prefers or avoids. Those decisions become a practical voice profile that guides writers, editors, and reviewers across future assignments.",
  },
  {
    question: "Does content include keyword and competitor research?",
    answer: "When search performance is part of the goal, the workflow can include topic and keyword research, search-intent review, competitor analysis, content structure, internal-link recommendations, metadata, and natural on-page optimization without sacrificing readability.",
  },
  {
    question: "How are revisions and approvals handled?",
    answer: "Each assignment has a confirmed brief, review owner, due date, and revision path. Your team receives an edited draft with clear context, submits consolidated feedback, and approves the final version before it moves into publishing or design.",
  },
  {
    question: "Can Yellow support a recurring content calendar?",
    answer: "Yes. We can manage individual projects or a recurring editorial queue across several clients. Monthly priorities, content types, responsible reviewers, deadlines, and capacity are organized in one visible production calendar.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is central to white-label delivery. We can complete the appropriate agreement and confirm access, communication, authorship, client contact, and file-handling expectations before production begins.",
  },
];

export function ContentWritingServicePage() {
  return (
    <main id="top" className="inner-page facebook-service content-writing-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label editorial production</p>
          <h1>Premium White Label <span>Content Writing</span></h1>
          <p>Research-led website copy, articles, campaigns, and resources—planned, written, edited, and delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Useful words with a commercial purpose</p>
          <ServiceHeading>Generate more value from every client message.</ServiceHeading>
          <p>Good content helps people understand a business, trust its expertise, and choose a clear next step. Yellow brings strategy, research, writing, editing, search awareness, and quality control into one dependable production system for your agency.</p>
          <p>We create around the audience and the objective—not a word count. Every brief connects the client’s offer, brand voice, customer questions, channel, and desired action so the final piece feels useful, specific, and ready to publish.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="content" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners rely on Yellow for responsive collaboration, consistent voice, and polished content delivered on schedule.</p><CheckList items={["Scale editorial production without fixed overhead", "Keep ownership of client strategy and approvals", "Deliver through researchers, writers, and editors"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's content writing support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a content production success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Personalized research that speaks to the right audience."
        paragraphs={[
          "Strong writing begins before the first sentence. Yellow studies the client’s offer, customers, market language, competitors, existing content, and commercial goals to understand what the audience needs to learn, feel, and do.",
          "That research becomes a focused brief with the angle, supporting points, voice, format, source requirements, search intent, and call to action. Writers can then create content with genuine specificity instead of filling a generic template.",
        ]}
        dashboard="audience"
        channel="content"
        soft
      />

      <ContentSection
        title="Optimization and competitor analysis with human clarity."
        paragraphs={[
          "Search visibility matters, but useful content must still sound natural and answer the reader’s real question. Where SEO is part of the scope, we map topics and keywords to intent, evaluate competing pages, and identify the information needed to create a more complete resource.",
          "Structure, headings, metadata, internal links, examples, and calls to action are planned together. The result is search-aware content that supports discoverability while protecting the client’s expertise and brand voice.",
        ]}
        dashboard="proposal"
        channel="content"
      />

      <ContentSection
        title="A complete content writing service for every channel."
        paragraphs={["Build one flexible editorial partnership for the formats your clients need today and the campaigns they will launch next. Each assignment moves through the same visible brief, research, writing, editing, review, and handoff process."]}
        items={["Website and service-page copy", "On-site and off-site articles", "Case studies and customer stories", "Guides, e-books, and lead magnets", "Email campaigns and newsletters", "Social media and advertising copy", "Press releases and sales materials", "Content audits and refreshes"]}
        dashboard="campaigns"
        channel="content"
        soft
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable writing capacity while your internal team stays focused on client direction, relationships, campaigns, and growth.</p><CheckList items={["Expand your existing and new services", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support multiple niches and formats", "Build a consistent editorial production rhythm"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete editorial delivery model</p><ServiceHeading>Benefits of Yellow’s white-label content writing.</ServiceHeading><p>Your agency gets flexible writing capacity plus the planning, research, editing, quality control, and communication needed to make every deliverable easier to approve and use.</p><p>Writers and editors work from defined audiences, search intent, brand voice, and conversion goals to create content that sounds credible, supports the journey, and arrives ready to publish.</p></div></section>

      <ContentSection
        title="One writing team for diverse online platforms."
        paragraphs={[
          "Website pages, search articles, email, social media, advertising, and downloadable resources each ask the reader to behave differently. Yellow matches the writer, structure, depth, and tone to the channel instead of forcing every assignment into the same format.",
          "A shared voice profile keeps the brand recognizable while channel-specific briefs protect the purpose of each piece. Your agency can offer a broader content mix without coordinating a different freelancer for every deliverable.",
        ]}
        dashboard="creative"
        channel="content"
      />

      <ContentSection
        title="Consistent quality as client needs keep changing."
        paragraphs={[
          "Growth creates more pages, campaigns, services, announcements, nurture sequences, and educational resources. A recurring production queue keeps that demand organized and gives your agency clear visibility into what is briefed, being written, under review, or approved.",
          "Editors check factual support, structure, voice, clarity, grammar, formatting, message accuracy, and the agreed search requirements before delivery. Feedback is documented so each content cycle becomes faster and more consistent.",
        ]}
        dashboard="landing"
        channel="content"
        soft
      />

      <ContentSection
        title="Turn consistent publishing into measurable business value."
        paragraphs={[
          "Content earns attention over time by answering important questions, demonstrating expertise, and connecting readers to a relevant offer. Yellow helps agencies plan purposeful content journeys rather than publishing disconnected pieces simply to fill a calendar.",
          "Agency-ready updates connect production with useful signals such as topic coverage, organic visibility, engagement, assisted actions, conversion paths, and refresh opportunities. Your team receives the context needed to explain progress and recommend the next priority.",
        ]}
        items={["Editorial calendar and production status", "Brand-voice and quality review", "Search and topic coverage", "Engagement and reader behavior", "Conversion-path observations", "Clear next-step recommendations"]}
        dashboard="reporting"
        channel="content"
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label editorial support.</p></div>
          <div className="facebook-service__faq-list">
            {contentWritingFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your editorial team behind the scenes</p><ServiceHeading>Ready to add content production capacity?</ServiceHeading><p>Let’s map the right white-label writing model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
