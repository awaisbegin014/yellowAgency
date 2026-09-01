import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceTabs } from "@/components/home-interactions";
import { LeadForm } from "@/components/interactive";
import { AccentHeading } from "@/components/page-templates";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the people, principles, and connected agency model behind Yellow Agency.",
};

const team = [
  {
    name: "Amelia Hart",
    role: "Growth Strategy Director",
    image: "/images/unsplash/portrait-01.jpg",
    bio: "Amelia connects commercial goals with clear channel priorities so every specialist works toward the same outcome.",
  },
  {
    name: "Daniel Foster",
    role: "Client Success Director",
    image: "/images/unsplash/portrait-03.jpg",
    bio: "Daniel keeps communication direct, delivery visible, and every agency relationship protected from kickoff onward.",
  },
  {
    name: "Maya Collins",
    role: "Creative & Content Lead",
    image: "/images/unsplash/portrait-02.jpg",
    bio: "Maya leads the writers and designers who turn strategy into useful, recognizable work across every customer touchpoint.",
  },
  {
    name: "Josh Radford",
    role: "Performance Marketing Lead",
    image: "/images/unsplash/portrait-04.jpg",
    bio: "Josh guides paid media, search, measurement, and optimization with a practical focus on qualified demand.",
  },
];

const onboarding = [
  ["01", "Client privacy", "We begin with NDAs, account-access rules, and white-label safeguards that protect every client relationship, shared asset, and piece of campaign data."],
  ["02", "Onboarding call", "Your account lead confirms the business goals, target audiences, responsibilities, communication channels, priorities, and expected turnaround times."],
  ["03", "Initiating setup", "We securely connect the required platforms, collect brand and campaign assets, review historical performance, and document the starting position."],
  ["04", "Launch plan", "Together we approve the scope, milestones, workflows, campaign KPIs, review stages, reporting format, and final production schedule."],
  ["05", "Project kickoff", "Delivery begins with clear ownership, recurring progress updates, specialist quality checks, and an optimization plan for continuous improvement."],
];

function AboutHexagon({ children }: { children: React.ReactNode }) {
  return <div className="about-reference__hexagon">{children}</div>;
}

function AnalyticsMontage() {
  return (
    <div className="about-reference__analytics" aria-label="Yellow marketing analytics and campaign dashboard illustration">
      <div className="about-reference__analytics-window">
        <div className="about-reference__window-bar"><i /><i /><i /><span>Growth performance</span></div>
        <div className="about-reference__analytics-body">
          <aside><b>Analytics</b><span>Overview</span><span>Acquisition</span><span>Campaigns</span><span>Reporting</span></aside>
          <div>
            <div className="about-reference__metric-row"><span><b>50.9K</b>Users</span><span><b>73.4K</b>Sessions</span><span><b>1,958</b>Leads</span></div>
            <div className="about-reference__line-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="about-reference__analytics-card about-reference__analytics-card--left">
        <span>Audience growth</span><b>+40.94%</b><i />
      </div>
      <div className="about-reference__analytics-card about-reference__analytics-card--right">
        <span>Qualified pipeline</span><b>$37,724</b>
        <div><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

function AgencyCollage() {
  const services = ["SEO", "PPC", "Content", "Social", "Design", "Development"];

  return (
    <div className="about-reference__collage" aria-label="Yellow's connected white-label services">
      <div className="about-reference__collage-photo about-reference__collage-photo--one">
        <Image src="/images/unsplash/team-collaboration-02.jpg" alt="Yellow specialists collaborating" fill sizes="(max-width: 800px) 40vw, 260px" />
      </div>
      <div className="about-reference__collage-photo about-reference__collage-photo--two">
        <Image src="/images/unsplash/team-collaboration-04.jpg" alt="Yellow delivery team at work" fill sizes="(max-width: 800px) 40vw, 260px" />
      </div>
      <div className="about-reference__collage-mark"><span>Y</span><strong>Yellow</strong><small>one connected team</small></div>
      {services.map((service, index) => <span className={`about-reference__service-orbit about-reference__service-orbit--${index + 1}`} key={service}><b>{service}</b></span>)}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main id="top" className="inner-page about-reference">
      <section className="about-reference__hero">
        <div className="container about-reference__hero-inner">
          <p className="eyebrow">The team behind your team</p>
          <AccentHeading as="h1">About Yellow Agency</AccentHeading>
          <p>Yellow is a full-stack white-label digital marketing agency built for ambitious agencies that need specialist depth without adding another department. You own every client relationship; our team delivers the work behind your brand.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section about-reference__overview">
        <div className="container">
          <div className="about-reference__section-copy">
            <p className="eyebrow">Built for dependable growth</p>
            <AccentHeading>Result-driven white-label digital marketing.</AccentHeading>
            <div className="about-reference__prose">
              <p>With more than a decade of white-label digital marketing experience, Yellow helps agencies expand their capabilities and deliver dependable work without building every discipline in-house. Our connected team of strategists, paid media specialists, SEO experts, writers, designers, developers, and analysts works as an extension of your agency, giving you the depth to serve more clients while keeping every relationship firmly under your brand.</p>
              <p>We support the complete campaign lifecycle, from research, planning, and channel strategy through creative production, technical implementation, launch, optimization, and reporting. Every engagement begins with clear commercial goals, defined responsibilities, realistic timelines, and measurable KPIs. A dedicated account lead coordinates the specialists, manages approvals and dependencies, and keeps your team informed so delivery stays organized from the first briefing to the final client-ready report.</p>
              <p>Our fulfillment model is designed to grow with your pipeline. You can add capacity for a new account, broaden an existing scope, or bring in focused expertise for a launch without increasing fixed overhead or rushing recruitment. Before anything reaches your agency, the work passes through specialist quality checks for accuracy, brand alignment, technical setup, and strategic fit. The result is polished, confidential delivery, useful performance context, and practical recommendations your team can confidently present as its own.</p>
            </div>
            <div className="about-reference__stats"><span><b>10+</b>years of experience</span><span><b>100+</b>specialists</span><span><b>25+</b>agency partners</span></div>
          </div>
          <AnalyticsMontage />
        </div>
      </section>

      <section className="section about-reference__team">
        <div className="container">
          <div className="about-reference__centered-heading"><p className="eyebrow">The people</p><AccentHeading>The management team.</AccentHeading><p>Senior guidance stays close to the work, while specialist delivery teams bring every plan to life.</p></div>
          <div className="about-reference__team-grid">
            {team.map((member) => (
              <article key={member.name}>
                <div><Image src={member.image} alt={member.name} fill sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 25vw" /></div>
                <h3>{member.name}</h3><span>{member.role}</span><p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-reference__connected">
        <div className="container about-reference__connected-grid">
          <AgencyCollage />
          <div>
            <p className="eyebrow">One partner, every specialty</p>
            <AccentHeading>Purposeful work, connected from end to end.</AccentHeading>
            <p className="large-copy">From the first audit to ongoing optimization, every discipline works from one shared plan.</p>
            <p>Our delivery model connects performance media, organic search, creative, content, websites, automation, and reporting. Your agency gets the breadth of a full department with one clear point of contact and one dependable standard.</p>
            <ul className="about-reference__check-list"><li>Specialists matched to every client need</li><li>One account lead coordinating delivery</li><li>Agency-ready reporting and documentation</li><li>Flexible capacity that scales with your pipeline</li></ul>
          </div>
        </div>
      </section>

      <section className="section about-reference__services" id="about-services">
        <div className="container">
          <div className="about-reference__centered-heading"><p className="eyebrow">Our services</p><AccentHeading>Complete digital delivery under your name.</AccentHeading><p>Choose a service to see the specialist dashboard and the work Yellow manages behind your brand.</p></div>
          <ServiceTabs />
        </div>
      </section>

      <section className="section about-reference__vision">
        <div className="container">
          <div className="about-reference__centered-heading"><p className="eyebrow">What keeps us focused</p><AccentHeading>Our vision and mission.</AccentHeading><p>Growth matters most when the process is clear, the work is useful, and every partner feels supported.</p></div>
          <div className="about-reference__vision-grid">
            <div className="about-reference__vision-copy"><article><span>01</span><h3>Our vision</h3><p>To become the most dependable white-label growth partner for agencies that want to expand their services without compromising quality or client trust.</p></article><article><span>02</span><h3>Our mission</h3><p>To remove fulfillment friction through experienced specialists, connected strategy, transparent reporting, and work that creates measurable progress.</p></article></div>
            <div className="about-reference__vision-media"><Image src="/images/unsplash/agency-team.jpg" alt="Yellow agency team discussing client growth" fill sizes="(max-width: 800px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><b>Built around partnership</b><small>See how Yellow works behind your brand</small></div></div>
          </div>
          <Link href="/testimonials" className="button button--outline">View partner stories <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section about-reference__contact">
        <div className="container about-reference__contact-grid">
          <div>
            <p className="eyebrow">Grow without growing overhead</p>
            <AccentHeading>Power up and join other ambitious agencies.</AccentHeading>
            <p>Build a broader, more dependable service offering while your internal team stays focused on relationships, sales, and strategy.</p>
            <ul className="about-reference__arrow-list"><li>Expand your existing and new services</li><li>Generate more revenue without adding fixed costs</li><li>Save and reallocate your team&apos;s time</li><li>Customize delivery across client niches</li><li>Gain clearer reporting and specialist insight</li><li>Protect every client relationship under your brand</li></ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section about-reference__onboarding">
        <div className="container">
          <div className="about-reference__centered-heading"><p className="eyebrow">Simple from the start</p><AccentHeading>White-label onboarding process.</AccentHeading><p>A secure, practical five-step process keeps responsibilities clear and gets your delivery team moving quickly. Before production begins, we align goals, platforms, ownership, approval stages, and reporting expectations with your agency. You leave onboarding with a documented launch plan, a dedicated point of contact, and complete visibility into what happens next.</p></div>
          <div className="about-reference__onboarding-flow">
            {onboarding.map(([number, title, text]) => <article key={number}><AboutHexagon><b>{number}</b></AboutHexagon><i /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="about-reference__onboarding-support">
            <article><span>01</span><div><h3>One shared workspace</h3><p>Assets, access details, priorities, and approvals stay organized for both teams.</p></div></article>
            <article><span>02</span><div><h3>Visible weekly progress</h3><p>Your agency receives concise updates on completed work, active tasks, and next actions.</p></div></article>
            <article><span>03</span><div><h3>Clear approval points</h3><p>Nothing client-facing moves forward until the responsible agency stakeholder signs off.</p></div></article>
          </div>
        </div>
      </section>

      <section className="about-reference__cta">
        <div className="container"><div><p className="eyebrow">A quiet team behind your brand</p><h2>Can a third-party agency truly take care of your clients?</h2><p>Book a free conversation and see how our systems, specialists, and white-label safeguards support confident agency growth.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
