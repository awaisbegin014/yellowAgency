import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const graphicsDesignFaqs = [
  {
    question: "What are white-label graphic design services?",
    answer: "White-label graphic design gives agencies a behind-the-scenes creative team for concepts, brand systems, digital assets, social graphics, advertising, presentations, documents, print collateral, revisions, and production-ready files. Your agency presents the work under its own brand.",
  },
  {
    question: "Which types of design assets can Yellow produce?",
    answer: "Scopes can include identity systems, campaign graphics, social content, display ads, sales materials, presentations, reports, infographics, website graphics, email assets, brochures, one-sheets, signage, and other agreed digital or print formats.",
  },
  {
    question: "How do creative briefs and approvals work?",
    answer: "Your agency submits the objective, audience, message, format, specifications, brand references, source content, deadline, and approval owner. Yellow confirms the brief, develops the agreed concepts, and manages revisions through a clear review cycle.",
  },
  {
    question: "Can Yellow follow multiple client brand systems?",
    answer: "Yes. Brand guidelines, approved examples, templates, fonts, color systems, imagery, tone, and production notes are organized by client. Quality review checks each deliverable against the correct system before it reaches your agency.",
  },
  {
    question: "Which source and export files will we receive?",
    answer: "Deliverables are matched to the project and may include organized editable source files plus web, social, presentation, or print-ready exports. File formats, dimensions, bleed, color mode, and handoff requirements are confirmed in the brief.",
  },
  {
    question: "Can the team support recurring creative production?",
    answer: "Yes. Yellow can support project-based work or a recurring design queue with agreed priorities, turnaround expectations, review cycles, and capacity. Reusable templates and brand libraries make ongoing production faster and more consistent.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is fundamental to white-label delivery. We can complete the appropriate agreement and confirm file access, brand handling, communication, approvals, and client-contact expectations before creative work begins.",
  },
];

export function GraphicsDesignServicePage() {
  return (
    <main id="top" className="inner-page facebook-service graphics-design-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label creative production</p>
          <h1>White Label <span>Graphic Design</span></h1>
          <p>Brand systems, campaign assets, social graphics, advertising, presentations, documents, and print-ready production—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">A dependable creative team behind your name</p>
          <ServiceHeading>Improve client creative without expanding fixed overhead.</ServiceHeading>
          <p>Agencies need a steady stream of visuals across campaigns, channels, presentations, sales materials, and brand touchpoints. The challenge is maintaining quality and consistency while deadlines, formats, and client expectations change every day.</p>
          <p>Yellow gives your agency flexible design capacity with an organized briefing, production, review, and handoff workflow. We create under your direction and behind your brand while your team owns the strategy and client relationship.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="graphics" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners rely on Yellow for responsive collaboration, on-brand execution, and organized assets ready to share.</p><CheckList items={["Scale creative delivery without fixed overhead", "Keep control of client direction and approvals", "Deliver through an experienced design team"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's graphic design support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a creative production success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Bring client ideas to life with professional design."
        paragraphs={[
          "A raw idea becomes useful creative only when the message, format, audience, hierarchy, brand, and desired action are resolved together. Yellow turns clear briefs into polished assets that communicate quickly and remain consistent across the places customers encounter the brand.",
          "The team can support everyday production and larger campaigns, from social graphics, ads, presentations, reports, and email assets to infographics, brochures, event materials, identity applications, and website visuals.",
        ]}
        items={["Build recognizable business identity", "Strengthen campaigns and advertising", "Create consistent customer touchpoints", "Support sales and lead-generation materials", "Establish trust through professional presentation", "Connect brand messages with customer motivations"]}
        dashboard="creative"
        channel="graphics"
        soft
      />

      <ContentSection
        title="Purpose-driven design that strengthens brand identity."
        paragraphs={[
          "Design should solve a communication problem rather than decorate a message. Yellow reviews the client’s audience, market, competitors, positioning, brand personality, campaign objective, and required formats before choosing a visual approach.",
          "Concepts combine strategy, hierarchy, typography, imagery, color, and production craft so the work feels distinctive while remaining easy to understand. Approved decisions are documented and reused to build stronger consistency over time.",
        ]}
        dashboard="audience"
        channel="graphics"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable creative capacity while your internal team stays focused on relationships, sales, campaigns, and strategic direction.</p><CheckList items={["Expand your creative service offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support multiple clients and asset formats", "Gain reliable creative production and QA"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete creative delivery model</p><ServiceHeading>Benefits of Yellow’s white-label graphic design services.</ServiceHeading><p>Briefing, concept development, production, review, revisions, and organized handoff stay connected through one system designed around your agency.</p><p>From campaign assets to reusable brand templates, every file is checked for message, hierarchy, consistency, dimensions, and export quality before it reaches your team.</p></div></section>

      <ContentSection
        title="Cost-effective creative capacity that flexes with demand."
        paragraphs={[
          "Creative demand rarely arrives at a perfectly even pace. Yellow gives agencies access to a coordinated design team without carrying permanent overhead through quiet periods or scrambling for new freelancers when several client requests arrive together.",
          "Project scopes or recurring production queues can be organized around priorities, formats, review cycles, turnaround expectations, and available capacity. Reusable templates and client brand libraries make repeated work faster without lowering standards.",
        ]}
        dashboard="proposal"
        channel="graphics"
        soft
      />

      <ContentSection
        title="Highly engaging designs built around the message."
        paragraphs={[
          "Attention comes from relevance and clarity, not visual noise. Yellow identifies the most important message, the audience context, the viewing environment, and the action the asset should support before developing hierarchy and creative direction.",
          "Digital assets are adapted to their real placements and tested against format requirements. Strong concepts can then expand across campaign variations while preserving the message and recognizable visual system.",
        ]}
        dashboard="landing"
        channel="graphics"
      />

      <ContentSection
        title="Establish a recognizable identity across every deliverable."
        paragraphs={[
          "Consistency turns individual designs into a brand. Yellow organizes approved typography, colors, imagery, graphic devices, icon styles, layout rules, and templates so each new asset reinforces the same visual story instead of starting from zero.",
          "The system can support social channels, advertising, email, web, sales materials, documents, presentations, and print. Your agency receives files that are clearly named, organized, and prepared for the correct use.",
        ]}
        dashboard="campaigns"
        channel="graphics"
        soft
      />

      <ContentSection
        title="Creative quality control your agency can trust."
        paragraphs={[
          "Every deliverable passes a review for the correct brief, brand system, message, dimensions, hierarchy, typography, imagery, spelling, export settings, and required source files before it reaches your team.",
          "Clear feedback cycles protect creative control without creating unnecessary revision loops. Recurring issues are documented so the workflow becomes faster and more accurate as the partnership develops.",
        ]}
        items={["Brief and objective alignment", "Brand consistency review", "Copy and visual hierarchy checks", "Format and production specifications", "Organized source files and exports", "Documented revisions and final approval"]}
        dashboard="reporting"
        channel="graphics"
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label graphic design support.</p></div>
          <div className="facebook-service__faq-list">
            {graphicsDesignFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your creative team behind the scenes</p><ServiceHeading>Ready to add graphic design capacity?</ServiceHeading><p>Let’s map the right white-label creative model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
