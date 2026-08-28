import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const webDesignFaqs = [
  {
    question: "What are white-label website design services?",
    answer: "White-label website design gives agencies a behind-the-scenes design team for discovery, UX planning, wireframes, responsive interface design, prototypes, revisions, and developer handoff. Your agency leads the client relationship and presents the work under its own brand.",
  },
  {
    question: "What types of websites can Yellow design?",
    answer: "Scopes can include lead-generation websites, service-business sites, landing pages, marketing sites, ecommerce experiences, multi-location sites, redesigns, and interface systems for web applications. We confirm the platform and development requirements before design begins.",
  },
  {
    question: "What will our agency receive at handoff?",
    answer: "Depending on scope, handoff can include approved responsive screens, reusable components, interaction notes, content and asset guidance, design tokens, prototype links, accessibility considerations, and implementation notes for the development team.",
  },
  {
    question: "How do reviews and revisions work?",
    answer: "The project is divided into defined review stages such as direction, wireframes, key-page design, responsive screens, and final QA. Your agency consolidates client feedback, and Yellow applies revisions within the agreed rounds so decisions stay clear and delivery remains predictable.",
  },
  {
    question: "Can Yellow design with SEO and conversion goals in mind?",
    answer: "Yes. We plan page hierarchy, navigation, content structure, calls to action, trust elements, responsive behavior, and technical handoff with search visibility and conversion paths in mind. Design supports the strategy rather than treating appearance as the only goal.",
  },
  {
    question: "Can you work with our existing developers or CMS?",
    answer: "Yes. We can prepare implementation-ready design systems for your development team and account for WordPress, Webflow, Shopify, headless platforms, or custom builds. If development is also required, it can be scoped separately through Yellow.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is fundamental to white-label delivery. We can complete the appropriate agreement and confirm brand handling, file access, approvals, communication, and client-contact expectations before project work begins.",
  },
];

export function WebDesignServicePage() {
  return (
    <main id="top" className="inner-page facebook-service web-design-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label digital experiences</p>
          <h1>White Label <span>Web Design</span></h1>
          <p>UX strategy, wireframes, responsive interface design, prototypes, design systems, and developer-ready handoff—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Design that looks good and works hard</p>
          <ServiceHeading>Resell thoughtful website design under your brand.</ServiceHeading>
          <p>A strong website has to do more than look polished. It should make the client’s value clear, guide the right visitor toward action, work comfortably on every device, support useful content, and give the development team a coherent system to build.</p>
          <p>Yellow works behind your agency to turn business goals, audience needs, brand direction, and content into responsive website experiences. Your team owns the relationship and presentation while our designers handle the detailed strategy and production.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="design" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our partners have to say about us.</ServiceHeading>
            <div><p>Agency partners rely on Yellow for thoughtful UX, reliable communication, and design files that arrive ready to present and build.</p><CheckList items={["Scale design delivery without fixed overhead", "Keep control of every client relationship", "Deliver through an experienced design team"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's web design support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a website design success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Work directly with a design team that understands the brand."
        paragraphs={[
          "A website is often the first complete experience a prospect has with the client’s business. Yellow begins by understanding the audience, positioning, offer, proof, customer journey, brand personality, content requirements, and practical constraints before visual direction is chosen.",
          "Your agency collaborates with a dedicated lead through discovery, direction, review, and handoff. Decisions stay visible, feedback is consolidated, and every screen is designed to support both the visitor’s needs and the client’s commercial goal.",
        ]}
        dashboard="audience"
        channel="design"
        soft
      />

      <ContentSection
        title="A custom web design process with clear review points."
        paragraphs={[
          "The process is structured to reduce late surprises. We align scope and content first, explore user and competitor context, establish the page architecture, design key sections around visitor psychology, and confirm the visual system before expanding across the full site.",
          "Responsive states, interaction notes, accessibility considerations, reusable components, and developer requirements are resolved before final handoff. Your agency receives an organized design package instead of disconnected page images.",
        ]}
        items={["Onboarding and project alignment", "Audience, competitor, and experience research", "Sitemap, content, and wireframe planning", "Visual direction and component design", "Agency and client review stages", "Responsive screens and prototype", "Refinement, QA, and developer-ready handoff"]}
        dashboard="proposal"
        channel="design"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable website-design capacity while your internal team stays focused on relationships, sales, and strategy.</p><CheckList items={["Expand your web and creative offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support different client niches and platforms", "Gain reliable UX and design expertise"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete digital design model</p><ServiceHeading>Benefits of Yellow’s white-label website design services.</ServiceHeading><p>Strategy, content structure, responsive UI, quality review, and implementation handoff stay connected through one system built around your agency.</p><p>Your team receives thoughtful page journeys, reusable visual systems, responsive states, organized feedback rounds, and developer-ready files that make every client handoff feel polished.</p></div></section>

      <ContentSection
        title="Help clients stand apart from their competitors."
        paragraphs={[
          "Industry templates often make credible businesses look interchangeable. Yellow studies the category conventions, competitor patterns, audience expectations, and the client’s strongest points of difference before defining a visual language that feels appropriate without becoming generic.",
          "Typography, layout, imagery, color, motion, proof, and conversion elements are coordinated into a reusable interface system. The result is a site your agency can present as a considered brand experience rather than a collection of decorated pages.",
        ]}
        dashboard="creative"
        channel="design"
        soft
      />

      <ContentSection
        title="Responsive design for every important screen."
        paragraphs={[
          "Responsive design is not a desktop layout squeezed into a smaller width. Navigation, hierarchy, spacing, media, forms, tables, calls to action, and interactive elements must be reconsidered around how people use each device.",
          "Yellow designs and reviews key breakpoints deliberately, protecting readability, speed, accessibility, and conversion paths from large displays through phones. Reusable rules help developers maintain that quality across the full site.",
        ]}
        dashboard="landing"
        channel="design"
      />

      <ContentSection
        title="SEO-aware design that supports discoverability."
        paragraphs={[
          "Search performance begins with a structure that makes important content easy to find and understand. We coordinate navigation, page hierarchy, headings, internal-link opportunities, content space, media treatment, performance considerations, and structured components with SEO needs in mind.",
          "Design and search strategy remain separate disciplines, but they should not work against each other. The handoff gives developers and content teams a foundation that supports crawling, usability, engagement, and future optimization.",
        ]}
        dashboard="reporting"
        channel="design"
        soft
      />

      <ContentSection
        title="Design choices that support qualified organic traffic."
        paragraphs={[
          "Useful organic traffic depends on content that answers real questions and an experience that helps visitors continue. Yellow creates layouts for service pages, location pages, resources, comparisons, proof, and supporting content without making every page feel like the same repeated template.",
          "Clear visual hierarchy, readable content, contextual calls to action, internal pathways, and trust elements help qualified visitors understand the offer and take the next useful step once they arrive from search.",
        ]}
        dashboard="campaigns"
        channel="design"
      />

      <section className="facebook-service__section facebook-service__section--soft">
        <div className="container facebook-service__content">
          <ServiceHeading>Reduce bounce by making the next step obvious.</ServiceHeading>
          <p>Visitors leave when a site is slow, confusing, visually inconsistent, difficult to read, or unclear about what should happen next. Yellow reviews the complete experience—not only the first screen—to remove unnecessary friction and create a stronger path through the content.</p>
          <p>Navigation, page purpose, message hierarchy, proof, forms, mobile behavior, accessibility, and calls to action are designed as connected parts of one journey. That helps the site hold attention for the right reasons and turn more qualified visits into meaningful actions.</p>
          <CheckList items={["Clear page purpose and message hierarchy", "Useful navigation and internal pathways", "Readable responsive content", "Credible proof and trust elements", "Focused forms and calls to action"]} />
        </div>
      </section>

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label web design support.</p></div>
          <div className="facebook-service__faq-list">
            {webDesignFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your design team behind the scenes</p><ServiceHeading>Ready to add website design capacity?</ServiceHeading><p>Let’s map the right white-label design model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
