import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const webDevelopmentFaqs = [
  {
    question: "What are white-label web development services?",
    answer: "White-label web development gives agencies a behind-the-scenes engineering team for technical planning, frontend and CMS builds, integrations, responsive implementation, quality assurance, launch, and ongoing support. Your agency owns the client relationship and presents the work under its own brand.",
  },
  {
    question: "Which platforms and technologies can Yellow support?",
    answer: "Scopes can include WordPress, Webflow, Shopify, headless CMS implementations, React and Next.js interfaces, Node.js services, API integrations, and custom frontend development. We confirm the appropriate stack after reviewing the project requirements and long-term ownership needs.",
  },
  {
    question: "Can you build from our agency’s approved designs?",
    answer: "Yes. Yellow can implement your approved Figma or design-system files, identify missing responsive or interaction states, and coordinate technical questions through your agency. We preserve the intended visual system while producing maintainable components and templates.",
  },
  {
    question: "How are staging, reviews, and revisions handled?",
    answer: "Projects move through defined milestones with staging links, written release notes, and agreed review windows. Your agency consolidates client feedback, Yellow completes the approved changes, and critical functionality is retested before the next milestone or launch.",
  },
  {
    question: "Do you test performance, accessibility, and technical SEO?",
    answer: "Yes. The QA scope can cover responsive behavior, browser compatibility, keyboard access, semantic structure, images, forms, redirects, metadata, indexing controls, structured data, performance, and other requirements agreed for the project.",
  },
  {
    question: "Can Yellow maintain websites after launch?",
    answer: "Yes. Ongoing scopes can include updates, monitoring, backups, dependency maintenance, content changes, bug fixes, performance reviews, and planned feature work. Responsibilities and service levels are documented separately from the initial build.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is fundamental to white-label delivery. We can complete the appropriate agreement and confirm repository access, credentials, communication, approvals, and client-contact expectations before development begins.",
  },
];

export function WebDevelopmentServicePage() {
  return (
    <main id="top" className="inner-page facebook-service web-development-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label web engineering</p>
          <h1>White Label <span>Web Development</span></h1>
          <p>Technical planning, frontend and CMS builds, integrations, responsive implementation, QA, launch, and maintenance—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Reliable builds without recruiting overhead</p>
          <ServiceHeading>Web development services built for growing agencies.</ServiceHeading>
          <p>Turning an approved design into a dependable website requires careful technical decisions, reusable architecture, responsive behavior, accessible interactions, content-management planning, quality assurance, and a launch process that protects the client’s existing traffic and operations.</p>
          <p>Yellow works behind your agency to build marketing sites, lead-generation experiences, ecommerce storefronts, CMS implementations, and custom interfaces. Your team leads the client conversation while our developers manage the detailed engineering and delivery.</p>
          <CheckList items={["Frontend and responsive implementation", "WordPress, Webflow, Shopify, and headless CMS", "React, Next.js, and API integrations", "Quality assurance and launch support", "Clean handoff and documentation", "Flexible maintenance after launch"]} />
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="development" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners choose Yellow for practical engineering decisions, responsive communication, and dependable work delivered behind their brand.</p><CheckList items={["Scale development without fixed overhead", "Protect every client relationship", "Deliver through experienced engineers"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's web development support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a website development success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Optimization, usability, and security from the beginning."
        paragraphs={[
          "Performance, accessibility, maintainability, and security are easier to protect when they are considered during architecture—not added after launch. Yellow reviews the content model, user journeys, integrations, hosting constraints, data handling, editing needs, and expected traffic before committing to implementation decisions.",
          "Responsive behavior, semantic structure, keyboard access, image delivery, forms, search, ecommerce functions, and third-party scripts are tested as connected parts of the experience. Critical findings are prioritized and documented for your agency.",
        ]}
        dashboard="audience"
        channel="development"
        soft
      />

      <ContentSection
        title="A bespoke development process with visible milestones."
        paragraphs={[
          "Every build begins with onboarding, requirements, access, technical discovery, approved designs, content readiness, and a clear definition of done. Yellow then breaks the work into milestones so your agency can review meaningful progress instead of waiting for one large reveal.",
          "Components and templates are built systematically, functionality is tested on staging, feedback is consolidated, and launch requirements are confirmed before release. Final handoff includes the agreed documentation, access, and maintenance guidance.",
        ]}
        items={["Onboarding and technical discovery", "Site, content, and integration review", "Architecture and component planning", "Frontend, CMS, and functionality implementation", "Agency and client milestone reviews", "Responsive, browser, and functional QA", "Launch, handoff, and refinement"]}
        dashboard="proposal"
        channel="development"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable engineering capacity while your internal team stays focused on relationships, sales, strategy, and design leadership.</p><CheckList items={["Expand your website service offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support different platforms and client niches", "Gain reliable technical delivery and QA"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete engineering delivery model</p><ServiceHeading>Benefits of Yellow’s white-label web development services.</ServiceHeading><p>Planning, implementation, testing, launch, documentation, and maintenance stay connected through one workflow built around your agency.</p><p>Responsive behavior, performance, accessibility, forms, integrations, technical SEO, and browser quality are reviewed together so your agency can launch with greater confidence.</p></div></section>

      <ContentSection
        title="Customized landing pages built to convert."
        paragraphs={[
          "Landing pages have one concentrated job: carry the campaign promise into a clear, credible action. Yellow builds responsive pages around approved messaging, visual hierarchy, proof, forms, tracking, page speed, and the technical requirements of the client’s marketing stack.",
          "Reusable sections make future campaigns faster to launch without turning every page into the same template. Where experiments are planned, variants are implemented cleanly so results can be attributed and reviewed with confidence.",
        ]}
        dashboard="landing"
        channel="development"
        soft
      />

      <ContentSection
        title="Responsive builds across devices and browsers."
        paragraphs={[
          "A responsive build must preserve hierarchy and functionality, not only fit inside smaller screens. Navigation, grids, typography, imagery, forms, tables, interactive states, touch targets, and performance are implemented and tested around realistic device behavior.",
          "Yellow validates agreed browsers and key breakpoints, documents important decisions, and resolves issues before launch so your agency can demonstrate a consistent experience from large displays through phones.",
        ]}
        dashboard="campaigns"
        channel="development"
      />

      <ContentSection
        title="Custom templates and reusable component systems."
        paragraphs={[
          "Reusable components make websites easier to extend and safer to maintain. Yellow turns approved design patterns into structured sections, templates, fields, and editing controls that give clients useful flexibility without allowing the visual system to drift.",
          "Naming, content rules, states, spacing, variants, and dependencies are organized so future developers can understand the system. The result is a website that can grow through planned reuse rather than accumulating inconsistent one-off pages.",
        ]}
        dashboard="creative"
        channel="development"
        soft
      />

      <ContentSection
        title="In-depth technical analysis before implementation."
        paragraphs={[
          "Complex builds often carry hidden dependencies: old redirects, analytics, form routing, CRM workflows, ecommerce data, third-party scripts, user roles, hosting limits, and content-migration requirements. Yellow identifies these risks early and incorporates them into the delivery plan.",
          "The technical review separates critical launch requirements from future improvements, giving your agency a realistic scope, clearer estimates, and fewer late surprises. Decisions and outstanding items remain visible through staging and release.",
        ]}
        dashboard="reporting"
        channel="development"
      />

      <section className="facebook-service__section facebook-service__section--soft">
        <div className="container facebook-service__content">
          <ServiceHeading>Technical foundations that support stronger SEO.</ServiceHeading>
          <p>Search visibility depends partly on whether search engines can access, understand, and trust the website’s structure. Yellow implements semantic markup, crawl controls, metadata support, canonical rules, structured data, redirects, internal pathways, image handling, and performance practices according to the agreed scope.</p>
          <p>Development does not replace an SEO strategy, but it should give that strategy a sound platform. Our handoff helps search and content specialists continue improving the site without fighting avoidable technical limitations.</p>
          <CheckList items={["Semantic page and heading structure", "Metadata and structured-data support", "Redirect and canonical planning", "Image and performance optimization", "Crawl, indexing, and sitemap controls"]} />
        </div>
      </section>

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label web development support.</p></div>
          <div className="facebook-service__faq-list">
            {webDevelopmentFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your development team behind the scenes</p><ServiceHeading>Ready to add web development capacity?</ServiceHeading><p>Let’s map the right white-label engineering model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
