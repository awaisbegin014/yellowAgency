import type { Metadata } from "next";
import Link from "next/link";
import { ContactSalesForm } from "@/components/contact-sales-form";
import { FeatureTabs } from "@/components/interactive";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { services } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk with Yellow Agency about white-label marketing delivery, client growth, and your next opportunity.",
};

export default function ContactPage() {
  return (
    <main id="top" className="yellow-contact">
      <section className="yellow-contact__hero">
        <div className="container">
          <p className="eyebrow">Let&apos;s grow your agency together</p>
          <h1>Bring us the challenge. <span>We&apos;ll make the next move clear.</span></h1>
          <p>From a single client project to a complete white-label delivery partnership, Yellow gives your agency a reliable, proactive, and transparent team behind the scenes.</p>
          <div className="yellow-contact__hero-actions">
            <a href="#contact-sales" className="button button--yellow">Contact our team <span aria-hidden="true">↘</span></a>
            <Link href="/book-appointment" className="text-link">Book a free consultation <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="yellow-contact__trust-row" aria-label="How Yellow works">
            {['Reliable delivery', 'Secure collaboration', 'Proactive support', 'Transparent reporting'].map((item, index) => (
              <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="yellow-contact__sales" id="contact-sales">
        <div className="container yellow-contact__sales-grid">
          <div className="yellow-contact__sales-copy">
            <div className="yellow-contact__section-number">01</div>
            <p className="eyebrow">Contact our sales team</p>
            <h2>Big brief, small question, or a half-formed idea—we&apos;re listening.</h2>
            <p>Tell us what the client needs, what is slowing your team down, or where you want to expand. We&apos;ll come back with useful questions and an honest next step.</p>
            <div className="yellow-contact__details">
              <a href="mailto:hello@yellowagency.co"><span>Email</span><strong>hello@yellowagency.co</strong><b aria-hidden="true">↗</b></a>
              <div><span>Availability</span><strong>Monday–Friday · 24/5 delivery support</strong></div>
              <div><span>Where we work</span><strong>Remote-first · supporting agencies worldwide</strong></div>
              <div><span>Response time</span><strong>Within one business day</strong></div>
            </div>
            <MediaPlaceholder label="Yellow agency strategy team working with a partner" />
          </div>
          <ContactSalesForm />
        </div>
      </section>

      <section className="yellow-contact__services">
        <div className="container">
          <div className="yellow-contact__section-heading">
            <div><p className="eyebrow">Our services</p><h2>A complete digital delivery team, ready when your agency is.</h2></div>
            <p>Start with one specialist need or connect multiple services around a wider client goal. Every engagement stays under your agency&apos;s name.</p>
          </div>
          <div className="yellow-contact__service-tabs">
            <FeatureTabs
              label="White-label services"
              items={services.map((service) => ({
                title: service.shortTitle,
                summary: service.description,
                href: `/white-label/${service.slug}`,
                metric: service.metric,
                metricLabel: service.metricLabel,
                points: service.points,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="yellow-contact__direction">
        <div className="container yellow-contact__direction-grid">
          <div className="yellow-contact__direction-copy">
            <p className="eyebrow">Focused on a clear direction</p>
            <h2>Built to help agencies grow without growing overhead.</h2>
            <p>We combine specialist depth with straightforward collaboration so your team can keep winning and leading client relationships while Yellow handles dependable fulfillment.</p>
            <Link href="/about-us" className="text-link">More about Yellow <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="yellow-contact__principles">
            <article><span>Our vision</span><h3>Make expert digital delivery accessible to every ambitious agency.</h3><p>A flexible specialist team should feel like a growth advantage—not another layer to manage.</p></article>
            <article><span>Our mission</span><h3>Carry the fulfillment load so agency leaders can focus on relationships and growth.</h3><p>Clear processes, useful reporting, and accountable specialists keep every project moving.</p></article>
          </div>
        </div>
      </section>

      <section className="yellow-contact__cta">
        <div className="container">
          <div><p className="eyebrow">Ready when you are</p><h2>Can the right delivery partner help your agency move faster?</h2><p>Use a free consultation to explore the fit, pressure-test the next opportunity, and leave with a clearer action plan.</p></div>
          <Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
