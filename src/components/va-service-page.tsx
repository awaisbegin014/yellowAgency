import Image from "next/image";
import Link from "next/link";
import { CheckList, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const vaFaqs = [
  {
    question: "How do you maintain confidentiality for white-label VA partnerships?",
    answer: "Assistants work under clear confidentiality and access rules. Client files, credentials, conversations, and work products remain under your agency’s ownership, with role-based access and documented handling expectations for every workflow.",
  },
  {
    question: "What kind of tasks can my agency delegate?",
    answer: "Common scopes include calendar and inbox support, research, data entry, CRM updates, project coordination, reporting preparation, content uploads, social scheduling, campaign checks, client follow-up, document organization, and other repeatable tasks with a defined process.",
  },
  {
    question: "How do assistants learn our agency’s workflow?",
    answer: "Onboarding covers your tools, naming conventions, priorities, examples, approval owners, response expectations, and quality checklist. The assistant begins with a controlled task set and expands responsibility as the process is confirmed.",
  },
  {
    question: "Can we scale the team as our workload grows?",
    answer: "Yes. Support can begin with a focused recurring queue and expand as new clients, channels, or departments create demand. Capacity changes are planned around documented tasks, clear ownership, and a reliable handoff process.",
  },
  {
    question: "What makes Yellow different from general outsourcing companies?",
    answer: "Yellow is built around agency operations. Assistants work inside a managed delivery system with an account lead, defined processes, quality checks, task visibility, and people who understand marketing fulfillment and client-service expectations.",
  },
  {
    question: "How do you track and measure assistant performance?",
    answer: "Performance is reviewed through agreed indicators such as task completion, accuracy, turnaround, response time, backlog health, documentation quality, and recurring feedback. Reporting focuses on useful operational context rather than activity alone.",
  },
  {
    question: "Do you provide training or guidance for new agency partners?",
    answer: "Yes. Onboarding includes delegation guidance, workflow mapping, access planning, task templates, communication rhythm, and approval rules. We help your team create a clear operating model before recurring work begins.",
  },
];

function VaPhotoSection({
  title,
  paragraphs,
  image,
  alt,
  items,
  soft = false,
}: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  items?: string[];
  soft?: boolean;
}) {
  return (
    <section className={`va-service__section va-service__story${soft ? " va-service__section--soft" : ""}`}>
      <div className="container">
        <div className="va-service__story-copy">
          <ServiceHeading>{title}</ServiceHeading>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {items ? <CheckList items={items} /> : null}
        </div>
        <div className="va-service__photo"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 86vw" /></div>
      </div>
    </section>
  );
}

export function VaServicePage() {
  return (
    <main id="top" className="inner-page facebook-service va-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label operational support</p>
          <h1>White Label VA Services That Help Agencies <span>Work Smarter</span></h1>
          <p>Dependable administrative, marketing, coordination, and client-support capacity—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="va-service__section va-service__section--soft">
        <div className="container va-service__split">
          <div className="va-service__copy">
            <p className="eyebrow">More capacity without more fixed overhead</p>
            <ServiceHeading>Expand capacity with structured virtual assistant support.</ServiceHeading>
            <p>Your agency grows when important work moves forward without pulling senior people into repetitive coordination. Yellow provides trained virtual assistants who learn your tools, priorities, quality standards, and communication rhythm.</p>
            <p>You stay focused on client strategy and growth while your behind-the-scenes support team handles the recurring execution with clear ownership and reporting.</p>
            <CheckList items={["Skilled support across administration, marketing, and client tasks", "Documented delegation systems that fit your workflow", "Flexible capacity for changing agency demand", "Confidential delivery under your agency name", "Task tracking and reporting for total visibility", "Process-led assistants trained for accuracy"]} />
            <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="va-service__visual va-service__visual--hero">
            <Image src="/images/unsplash/agency-team.jpg" alt="Agency team coordinating client work in a bright office" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
            <div className="va-service__tool-card" aria-hidden="true"><span>✓</span><span>✉</span><span>◷</span><span>↗</span><span>☎</span><span>▣</span></div>
            <div className="va-service__status-card"><b>32 hrs</b><span>returned to your team</span></div>
          </div>
        </div>
      </section>

      <section className="facebook-service__proof va-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading va-service__proof-heading">
            <ServiceHeading>Partner with a VA team that understands agency life.</ServiceHeading>
            <div><p>Agency work balances client management, marketing, delivery, and operations. Yellow assistants adapt to your tools and workflow while an account lead keeps responsibilities visible and organized.</p><CheckList items={["Dedicated support that learns your systems", "Communication that matches your agency process"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency owner discussing Yellow's virtual assistant support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency owner sharing an operations support story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <VaPhotoSection
        title="Why smart agencies use virtual assistant support to scale faster."
        paragraphs={[
          "The highest-leverage people in your agency should spend their time on strategy, relationships, decisions, and growth. Yet inboxes, scheduling, research, uploads, status updates, data entry, and recurring project tasks can quietly consume the week.",
          "Yellow transfers defined work to trained assistants within a managed system. Tasks have owners, instructions, deadlines, approval points, and visible status, giving your team more focus without sacrificing consistency or control.",
          "Support can flex from one focused assistant to a coordinated team as client volume changes. That flexibility helps your agency improve turnaround, protect service quality, and grow without immediately adding permanent overhead.",
        ]}
        image="/images/unsplash/team-collaboration-01.jpg"
        alt="Remote operations team collaborating on agency work"
        soft
      />

      <VaPhotoSection
        title="A white-label virtual assistant company built for agencies."
        paragraphs={[
          "Yellow combines practical training, communication discipline, task visibility, and secure access to deliver reliable work under your brand. Assistants are matched to the responsibilities, tools, schedule, and level of judgment the role requires.",
          "We document processes, confirm examples, establish quality checks, and define when a task should be escalated. Your agency remains the client-facing lead while our team manages the recurring execution behind the scenes.",
          "Regular feedback keeps the partnership aligned as priorities change. New tasks are introduced deliberately, which helps protect accuracy and makes the support model easier to scale across multiple accounts.",
        ]}
        image="/images/unsplash/agency-team.jpg"
        alt="Agency operations team reviewing priorities together"
      />

      <VaPhotoSection
        title="The real advantages of structured white-label VA support."
        paragraphs={[
          "The right support model returns time to your team while making daily delivery easier to see and manage. Yellow focuses on clear delegation, dependable follow-through, and useful reporting rather than unstructured activity.",
        ]}
        items={["Assistants aligned to administration, marketing, and client support", "Flexible staffing without full-time recruitment overhead", "Consistent task visibility across client projects", "Documented work that follows your tools and processes", "Proactive updates and clear escalation paths", "Capacity that adapts to new clients and changing priorities"]}
        image="/images/unsplash/team-collaboration-02.jpg"
        alt="Team coordinating daily work in a shared operations environment"
        soft
      />

      <section className="facebook-service__form-section va-service__form-section">
        <div className="container facebook-service__form-grid va-service__form-grid">
          <div className="va-service__copy">
            <p className="eyebrow">Find the right work to delegate first</p>
            <ServiceHeading>Discover how a VA can transform your daily workflow.</ServiceHeading>
            <p>Your time is your agency’s most valuable resource. We’ll map the recurring work, identify practical delegation opportunities, and outline a support model that fits your operation.</p>
            <CheckList items={["Receive a workflow review designed for your agency", "Identify time-draining tasks that can move immediately", "Match responsibilities with the right skill profile", "Protect client trust through white-label execution", "Start with a clear process before onboarding begins"]} />
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="va-service__services-intro"><div className="container"><p className="eyebrow">Flexible support across agency operations</p><ServiceHeading>How Yellow VAs streamline operations and strengthen growth.</ServiceHeading><p>Each service area is designed to improve clarity, consistency, and delivery while your team keeps its attention on work that requires strategy and client leadership.</p></div></section>

      <VaPhotoSection
        title="Administrative and scheduling assistance."
        paragraphs={[
          "Yellow assistants can organize calendars, coordinate meetings, monitor shared inboxes, prepare agendas, maintain documents, and support appointment scheduling through the systems your agency already uses.",
          "Every task is tracked and aligned to the correct owner, deadline, and approval rule. This operational foundation keeps leadership out of routine coordination while making important commitments easier to protect.",
        ]}
        image="/images/unsplash/content-writing.jpg"
        alt="Organized laptop and notebook workspace for administrative support"
      />

      <VaPhotoSection
        title="Marketing and campaign support."
        paragraphs={[
          "Assistants can help coordinate content uploads, social scheduling, campaign checklists, asset organization, email preparation, deadline monitoring, reporting inputs, and routine quality checks across multiple client accounts.",
          "Your strategists and specialists remain responsible for direction and decisions. The VA keeps the production details moving so campaigns launch with fewer missed handoffs and a more consistent operating rhythm.",
        ]}
        image="/images/unsplash/digital-marketing.jpg"
        alt="Marketing tools open on a laptop during campaign coordination"
        soft
      />

      <VaPhotoSection
        title="Client communication and CRM management."
        paragraphs={[
          "A well-organized CRM gives your agency a dependable record of leads, conversations, tasks, and next steps. Yellow assistants can update contact data, maintain pipeline stages, prepare follow-up lists, record notes, and flag items that need client-facing attention.",
          "Inbox and status support can be shaped around approved templates and escalation rules. Your agency communicates faster while keeping sensitive decisions and relationship ownership with the right internal people.",
        ]}
        image="/images/unsplash/analytics-03.jpg"
        alt="Laptop displaying organized reporting and client data"
      />

      <VaPhotoSection
        title="Scaling support and long-term partnership."
        paragraphs={[
          "As workload expands, Yellow can add trained capacity for new clients, projects, or departments while preserving the operating rules that already work. New assistants enter through documented tasks, access controls, examples, and quality expectations.",
          "Regular reviews help the support model evolve with your agency. We assess workload, task health, recurring issues, documentation, and opportunities to simplify delivery so growth does not create unnecessary operational friction.",
        ]}
        image="/images/unsplash/team-collaboration-03.jpg"
        alt="Agency team reviewing systems during a long-term operations partnership"
        soft
      />

      <section className="facebook-service__faq va-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label virtual assistant support.</p></div>
          <div className="facebook-service__faq-list">
            {vaFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your operations team behind the scenes</p><ServiceHeading>Let’s simplify your workload and scale together.</ServiceHeading><p>Keep your focus on strategy, clients, and growth while Yellow handles the recurring details with care.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
