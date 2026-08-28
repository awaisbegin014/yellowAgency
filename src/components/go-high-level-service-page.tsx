import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const goHighLevelFaqs = [
  {
    question: "What is included in white-label GoHighLevel support?",
    answer: "A scope can include agency and sub-account setup, custom branding, snapshots, pipelines, calendars, forms, funnels, websites, workflows, email and SMS configuration, integrations, testing, documentation, reporting, and ongoing technical support.",
  },
  {
    question: "Can Yellow work inside our existing GoHighLevel account?",
    answer: "Yes. We can review and improve an existing agency account or build a new implementation. Access is role-based, changes follow an agreed approval process, and your agency keeps ownership and visibility throughout the engagement.",
  },
  {
    question: "Can you create reusable snapshots for our client niche?",
    answer: "Yes. Yellow can organize proven pipelines, workflows, calendars, forms, funnels, custom fields, tags, templates, and reporting views into a documented snapshot that your team can adapt for future client accounts.",
  },
  {
    question: "How do you test automations before launch?",
    answer: "Workflows are checked against a written trigger-and-action map. We test enrollment rules, timing, branches, field updates, ownership, messages, stop conditions, booking paths, error handling, and reporting before the automation is activated.",
  },
  {
    question: "Will the platform appear under our agency brand?",
    answer: "Where your GoHighLevel plan supports white-label configuration, we can help apply your agency domain, logo, colors, login experience, and agreed client-facing settings. Your team controls how the service is presented and supported.",
  },
  {
    question: "Do you provide documentation and ongoing support?",
    answer: "Yes. Handoffs can include account maps, workflow notes, naming conventions, testing records, access guidance, and short operating instructions. Ongoing support can be organized as a recurring queue with clear priorities and response expectations.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. We can complete the appropriate confidentiality agreement and confirm account access, data handling, client communication, approval, and escalation expectations before work begins.",
  },
];

export function GoHighLevelServicePage() {
  return (
    <main id="top" className="inner-page facebook-service go-high-level-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label CRM and automation</p>
          <h1>White Label <span>Go High Level</span></h1>
          <p>CRM configuration, pipelines, funnels, calendars, automation, reporting, and technical support—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">One operating system for client growth</p>
          <ServiceHeading>Turn GoHighLevel into a dependable agency service.</ServiceHeading>
          <p>GoHighLevel can connect lead capture, conversations, appointments, opportunities, follow-up, funnels, and reporting in one platform. The value comes from configuring those parts around a real client journey—not simply switching on more features.</p>
          <p>Yellow helps your agency design, build, test, document, and support practical systems under your brand. Your team keeps the client relationship and strategic direction while our specialists handle the detailed platform work behind the scenes.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="ghl" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners value structured implementation, responsive support, and systems that are easier for their teams and clients to use.</p><CheckList items={["Scale platform delivery without fixed overhead", "Keep ownership of client strategy and data", "Build through experienced CRM specialists"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's GoHighLevel support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a CRM automation success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Organize every lead around one visible customer journey."
        paragraphs={[
          "Scattered forms, inboxes, spreadsheets, and booking tools make it difficult to see what happens after a new inquiry. Yellow maps the client journey from first contact to appointment, opportunity, sale, and follow-up so the account has one dependable source of truth.",
          "Contacts, custom fields, tags, owners, pipelines, stages, tasks, calendars, and conversation history are configured around the team’s actual process. Clear naming and permissions help users find what they need without creating duplicate records or inconsistent workflows.",
        ]}
        dashboard="audience"
        channel="ghl"
        soft
      />

      <ContentSection
        title="Build a pipeline your clients can understand and use."
        paragraphs={[
          "A useful pipeline makes the next action obvious. Yellow defines stages, entry rules, ownership, task expectations, aging signals, lost reasons, and reporting requirements so opportunities move through a consistent process.",
          "Automated assignments and reminders can support the team without hiding responsibility. The result is a clear operating view that helps agencies explain lead status, identify bottlenecks, and improve follow-up discipline.",
        ]}
        dashboard="campaigns"
        channel="ghl"
      />

      <ContentSection
        title="Launch with a documented GoHighLevel roadmap."
        paragraphs={[
          "Every implementation begins with the business model, users, services, lead sources, communication requirements, current tools, and reporting needs. From there, Yellow defines the account architecture and a phased plan for configuration, migration, testing, training, and launch.",
          "The roadmap keeps dependencies and approvals visible. Your agency can start with the systems that create immediate value and expand into more advanced workflows once the foundation is stable.",
        ]}
        items={["Agency and sub-account architecture", "Custom domains and white-label settings", "Fields, tags, users, and permissions", "Pipelines, calendars, and conversations", "Workflow and integration map", "Testing, documentation, and handoff"]}
        dashboard="proposal"
        channel="ghl"
        soft
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable GoHighLevel capacity while your internal team stays focused on client direction, relationships, sales, and growth.</p><CheckList items={["Expand your CRM and automation offer", "Generate revenue without increasing fixed costs", "Save and reallocate technical time", "Create reusable systems across niches", "Support client accounts through one organized queue"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete platform delivery model</p><ServiceHeading>Benefits of Yellow’s white-label GoHighLevel services.</ServiceHeading><p>Strategy, configuration, testing, documentation, and support stay connected through one accountable workflow designed around your agency.</p><p>Pipelines, automations, forms, calendars, messaging, snapshots, permissions, and reporting are organized as one operating system your team can understand, manage, and scale.</p></div></section>

      <ContentSection
        title="Create funnels and pages that connect directly to follow-up."
        paragraphs={[
          "A form or landing page is only one step in the conversion journey. Yellow builds responsive pages, funnels, forms, surveys, and booking experiences that connect directly to the correct contact record, pipeline, owner, and follow-up sequence.",
          "Before launch, we review message flow, mobile usability, required fields, validation, tracking, notifications, calendar logic, confirmation states, and automation enrollment. The experience stays consistent from the first click through the next conversation.",
        ]}
        dashboard="landing"
        channel="ghl"
      />

      <ContentSection
        title="Automate repetitive work without losing the human handoff."
        paragraphs={[
          "Automation should make the team more responsive, not create a maze of messages. Yellow designs workflows around specific events such as new inquiries, missed calls, appointments, no-shows, status changes, estimates, reviews, nurture, and reactivation.",
          "Triggers, delays, branches, ownership, stop conditions, and communication limits are documented and tested. Important moments still route to a person, while predictable follow-up happens reliably in the background.",
        ]}
        items={["Lead assignment and instant response", "Appointment reminders and no-show recovery", "Pipeline-stage follow-up", "Email and SMS nurture sequences", "Review and reputation requests", "Reactivation and long-term follow-up"]}
        dashboard="creative"
        channel="ghl"
        soft
      />

      <section className="facebook-service__section">
        <div className="container facebook-service__content">
          <ServiceHeading>Use reusable snapshots without creating rigid accounts.</ServiceHeading>
          <p>Snapshots can reduce setup time when they capture proven foundations instead of forcing every client into the same process. Yellow organizes reusable fields, tags, pipelines, calendars, forms, workflows, templates, and reporting views around a clear niche or service model.</p>
          <p>Each new sub-account is then reviewed against the client’s real offer, locations, users, hours, lead sources, and communication rules. This gives your agency a faster starting point while preserving the flexibility needed for responsible implementation.</p>
          <CheckList items={["Reusable account foundations", "Client-specific configuration review", "Consistent names and documentation", "Faster setup without copy-and-forget risk"]} />
        </div>
      </section>

      <ContentSection
        title="Give clients reporting that connects activity to outcomes."
        paragraphs={[
          "Platform activity only becomes useful when clients can see what it means. Yellow organizes dashboards and agency-ready summaries around lead sources, speed to contact, pipeline movement, appointment outcomes, conversion rates, follow-up activity, and revenue where data is available.",
          "Reporting also identifies operational issues such as stalled opportunities, missed tasks, failed workflow steps, booking friction, or inconsistent data. Your team receives clear context and practical next actions for the next client conversation.",
        ]}
        dashboard="reporting"
        channel="ghl"
        soft
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label GoHighLevel support.</p></div>
          <div className="facebook-service__faq-list">
            {goHighLevelFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your platform team behind the scenes</p><ServiceHeading>Ready to add GoHighLevel capacity?</ServiceHeading><p>Let’s map the right white-label CRM and automation model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
