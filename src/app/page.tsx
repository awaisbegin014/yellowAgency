import Link from "next/link";
import { FeatureTabs, TestimonialCarousel } from "@/components/interactive";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { caseStudies, faqs, industries, services, testimonials } from "@/content/site-data";

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
    <main id="top" className="home-page">
      <section className="hero section">
        <div className="container hero__inner">
          <h1>Full Stack White Label<br /><span className="marker-ring">Digital Marketing Agency</span></h1>
          <p className="hero__lead">Yellow is the quiet growth and fulfillment team behind ambitious digital agencies. You own the relationship; we deliver the specialist work your clients expect.</p>
          <div className="button-row">
            <Link href="/book-appointment" className="button button--yellow">Schedule A Consultation <span aria-hidden="true">↗</span></Link>
            <Link href="/white-label" className="button button--ghost">Learn More <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
        <div className="container hero-media hero-media--reference">
          <MediaPlaceholder label="White label agency hero video placeholder" type="video" className="hero-media__main" />
          <div className="hero-media__note"><span className="scribble-arrow" aria-hidden="true">↗</span><p>Your brand in front.<br />Our specialists behind it.</p></div>
          <MediaPlaceholder label="Agency partnership image placeholder" type="portrait" className="hero-media__side" />
        </div>
      </section>

      <section className="section partner-proof section--soft">
        <div className="container featured-work__grid">
          <div>
            <p className="eyebrow">Agency partner stories</p>
            <h2>Hear what our partners have to say about us.</h2>
            <p className="large-copy">Personable service, specialist knowledge, and dependable delivery—without competing for your client relationship.</p>
            <ul className="check-list check-list--large"><li>Scale your agency with confidence</li><li>Retain high-quality client relationships</li></ul>
          </div>
          <MediaPlaceholder label="Agency partner testimonial video placeholder" type="video" />
        </div>
      </section>

      <section className="section help-section">
        <div className="container featured-work__grid">
          <MediaPlaceholder label="White label fulfillment team image placeholder" type="portrait" />
          <div>
            <p className="eyebrow">A complete fulfillment partner</p>
            <h2>How can Yellow help your agency?</h2>
            <p>Use one specialist service or build a complete fulfillment team around your client roster. Everything stays confidential, coordinated, and easy to explain.</p>
            <ul className="check-list check-list--large">
              <li>Streamline client onboarding</li><li>Scale profit without adding fixed overhead</li><li>Expand your service list across niches</li><li>Save and reallocate your team&apos;s time</li><li>Deliver transparent agency-branded reporting</li>
            </ul>
            <Link href="/about-us" className="button button--yellow">Meet Yellow Agency <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section services-section section--soft">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">White label fulfillment</p><h2>Our Services</h2></div>
            <p>Eleven specialist capabilities, delivered under your agency name and managed through one connected team.</p>
          </div>
          <FeatureTabs items={serviceTabs} label="White label service" />
        </div>
      </section>

      <section className="featured-work section section--yellow">
        <div className="container featured-work__grid">
          <div className="featured-work__copy">
            <p className="eyebrow">Featured dental result</p>
            <h2>Organic lead growth for a dental agency partner.</h2>
            <p>A clearer local-search strategy, stronger service content, and a more focused patient journey created measurable momentum for the client and confidence for the agency.</p>
            <div className="mini-metrics"><div><strong>184%</strong><span>more organic patient leads</span></div><div><strong>42%</strong><span>lower acquisition cost</span></div></div>
            <Link href="/case-studies/dental-digital-marketing-case-study" className="button button--dark">View the case study <span>↗</span></Link>
          </div>
          <MediaPlaceholder label="Dental case study image placeholder" type="portrait" />
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading section-heading--tight"><div><p className="eyebrow">Agency partner feedback</p><h2>What our white label partners have to say.</h2></div><p>Results matter. So does the experience of working together.</p></div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="section niches-section section--soft">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Focused industry experience</p><h2>Our Niches and Specializations</h2></div><p>Move faster with teams who already understand the customer, seasonality, language, and lead journey in each market.</p></div>
          <FeatureTabs items={industryTabs} label="Industry specialization" />
        </div>
      </section>

      <section className="section crm-banner-wrap">
        <div className="container crm-banner">
          <div className="crm-banner__mark">Y<span>+</span></div>
          <div><p className="eyebrow">GoHighLevel fulfillment</p><h2>Need GoHighLevel for your clients?</h2><p>Choose ready-to-deploy agency support or a custom white-label GHL system built around your client workflow.</p></div>
          <Link href="/white-label/go-high-level-services" className="button button--yellow">Explore GHL Services <span>↗</span></Link>
        </div>
      </section>

      <section className="section work-grid-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Data-backed delivery</p><h2>Back up your agency with real case studies.</h2></div><Link href="/case-studies" className="text-link">View all case studies <span>↗</span></Link></div>
          <div className="case-grid">
            {caseStudies.slice(0, 3).map((study, index) => (
              <Link href={`/case-studies/${study.slug}`} key={study.slug} className={`case-card case-card--${index + 1}`}>
                <MediaPlaceholder label={`${study.client} project image placeholder`} />
                <div className="case-card__content"><span>{study.industry}</span><h3>{study.title}</h3><div><strong>{study.metric}</strong><small>{study.result}</small></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits-section section--soft">
        <div className="container two-column two-column--wide">
          <div className="sticky-copy"><p className="eyebrow">Solutions for small-business clients</p><h2>Help more clients without stretching your agency thinner.</h2><p>Offer a broader, more dependable digital marketing service while keeping your team focused on relationships, sales, and strategy.</p><Link href="/dedicated-teams" className="button button--yellow">Build your fulfillment team <span>↗</span></Link></div>
          <div className="benefit-list">
            {[["01", "More services", "Expand the capabilities you can confidently sell without recruiting a full department."], ["02", "More capacity", "Take on new work while a trusted specialist team protects delivery quality."], ["03", "More retention", "Give clients one connected experience and fewer reasons to look for another provider."], ["04", "More clarity", "Use plain-language dashboards, direct communication, and visible delivery workflows."]].map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Simple and swift</p><h2>White Label Marketing Onboarding Process</h2></div><p>Bring us in from the first prospect audit or once the scope is signed. The working rhythm stays clear either way.</p></div>
          <div className="process-grid">
            {[["01", "Discovery", "We learn the agency, client, offer, baseline, goals, and immediate delivery needs."], ["02", "Strategy", "Specialists prepare the audit, channel plan, scope, measures, and initial priorities."], ["03", "Fulfillment", "The team builds and launches under your brand with one visible delivery workflow."], ["04", "Reporting", "Agency-ready updates show what changed, what we learned, and what happens next."]].map(([number, title, copy]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section agency-model section--yellow">
        <div className="container agency-model__grid">
          <div className="agency-model__visual"><MediaPlaceholder label="White label agency model video placeholder" type="video" /><div className="yellow-sticker">YOUR<br />BRAND</div></div>
          <div><p className="eyebrow">A confidential extension of your team</p><h2>White Label Digital Marketing Agency Model</h2><p className="large-copy">Your agency stays in front. Yellow handles the specialist delivery, documentation, and support behind the scenes.</p><ul className="check-list check-list--large"><li>Your brand and client relationship</li><li>Our trained delivery specialists</li><li>Shared workflow and quality control</li><li>Flexible services as accounts grow</li></ul></div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container comparison">
          <div className="comparison__heading"><p className="eyebrow">GHL versus disconnected tools</p><h2>Kickstart agency success with a connected CRM.</h2><p>Manage leads, automations, funnels, and reporting from one client-ready system.</p></div>
          <div className="comparison__grid"><div className="comparison-card comparison-card--yellow"><span>Y+</span><h3>GoHighLevel</h3><ul><li>One customer view</li><li>Automated lead follow-up</li><li>Funnels and booking</li><li>White-label support</li></ul></div><div className="comparison-card"><span>∞</span><h3>Other CRMs</h3><ul><li>Scattered customer data</li><li>Manual handoffs</li><li>Separate funnel tools</li><li>No fulfillment owner</li></ul></div></div>
        </div>
      </section>

      <section className="section team-section section--dark">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Reliable white label support</p><h2>How will our support team help you?</h2></div><p>Get direct access to the people responsible for strategy, delivery, quality, and day-to-day coordination.</p></div>
          <div className="team-grid">{["Partner success", "Campaign strategy", "Creative fulfillment", "Technical support"].map((role, index) => <article key={role}><MediaPlaceholder label={`${role} team portrait placeholder`} type="portrait" /><span>0{index + 1}</span><h3>{role}</h3></article>)}</div>
        </div>
      </section>

      <section className="section growth-section">
        <div className="container growth-section__grid"><div><p className="eyebrow">Scale with a trusted team</p><h2>Power up your agency and focus on growth.</h2></div><div><p className="large-copy">Add services, protect quality, reduce overhead, and return your time to the work only your agency can do.</p><Link href="/book-appointment" className="button button--dark">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><h2>Can a third-party agency really care for your clients?</h2><p>Yes—when the process, responsibilities, confidentiality, and quality standards are clear from the start.</p><Link href="/contact-us" className="text-link">Ask us anything <span>↗</span></Link></div>
          <div className="accordion-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
    </main>
  );
}
