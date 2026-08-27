import Image from "next/image";
import Link from "next/link";
import { AnimatedStats, CaseStudiesSlider, NicheTabs, PartnerEquation, ResultsComparison, ServiceTabs } from "@/components/home-interactions";

const onboarding = [
  ["01", "Client Privacy", "NDAs and contracts protect every client relationship."],
  ["02", "Onboarding Call", "Meet your account manager and delivery team."],
  ["03", "Initiating Set Up", "We securely connect the accounts and tools we need."],
  ["04", "Launch Plan", "Workflows, schedules, and deliverables are agreed."],
  ["05", "Project Kickoff", "Delivery begins with recurring progress reporting."],
];
function MiniBars({ count = 12 }: { count?: number }) {
  return <div className="hc-bars" aria-hidden="true">{Array.from({ length: count }, (_, index) => <i key={index} style={{ height: `${28 + ((index * 19) % 58)}%` }} />)}</div>;
}

function AnalyticsDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`hc-analytics ${compact ? "hc-analytics--compact" : ""}`} aria-label="Marketing analytics dashboard illustration">
      <div className="hc-analytics__window">
        <div className="hc-window-bar"><i /><i /><i /><span>Analytics overview</span></div>
        <div className="hc-analytics__body">
          <aside><b>Analytics</b>{["Home", "Realtime", "Audience", "Acquisition", "Behavior"].map((item) => <span key={item}>{item}</span>)}</aside>
          <div className="hc-analytics__content"><div className="hc-dashboard-metrics"><span><b>6K</b>Users</span><span><b>2m 14s</b>Engagement</span><span><b>$23K</b>Revenue</span></div><div className="hc-area-chart"><i /></div></div>
        </div>
      </div>
      <div className="hc-analytics__float hc-analytics__float--left"><b>175</b><span>Users in last 30 minutes</span><MiniBars count={14} /></div>
      <div className="hc-analytics__float hc-analytics__float--right"><span>Organic search</span><MiniBars count={5} /></div>
    </div>
  );
}

function Hexagon({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return <div className={`hc-hex ${accent ? "hc-hex--accent" : ""}`}>{children}</div>;
}

export default function Home() {
  return (
    <main id="top" className="reference-home">
      <section className="hc-hero">
        <div className="hc-shell hc-hero__copy"><h1>Full Stack White Label<br /><span>Digital Marketing Agency</span></h1><p>We aim to keep your clients exceptionally satisfied and your project management smooth. Partner with us for a professional yet easy approach to digital marketing success.</p><div className="hc-actions"><Link href="/book-appointment" className="hc-btn hc-btn--blue">Schedule A Consultation</Link><a href="#services" className="hc-btn hc-btn--outline">Learn More</a></div></div>
        <div className="hc-shell hc-hero__visual"><AnalyticsDashboard /></div>
      </section>

      <section className="hc-section hc-partners"><div className="hc-shell"><div className="hc-split-heading"><h2>Hear What Our Partners<br />Have To Say About Us</h2><div><p>Our partners value responsive communication, specialist knowledge, and dependable delivery that stays invisible behind their brand. We help agencies confidently accept more work while protecting the client relationships they worked hard to build.</p><ul className="hc-checks"><li>Scale your agency without expanding overhead</li><li>Retain high-quality client relationships</li><li>Deliver campaigns through proven specialists</li><li>Receive clear updates, reports, and strategic support</li></ul></div></div><div className="hc-video-grid"><article className="hc-video-card"><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner Seth Brown" fill sizes="50vw" /><div><h3>Seth Brown</h3><span>Agency Owner</span></div></article><article className="hc-video-card"><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner Josh Radford" fill sizes="50vw" /><div><h3>Josh Radford</h3><span>Agency Owner</span></div></article></div></div></section>

      <section className="hc-section hc-help"><div className="hc-shell hc-two-col"><div className="hc-photo-collage"><Image src="/images/unsplash/team-collaboration-01.jpg" alt="Agency strategy meeting" fill sizes="50vw" /><div className="hc-chart-card hc-chart-card--top"><span>Users</span><div className="hc-area-chart"><i /></div></div><div className="hc-chart-card hc-chart-card--bottom"><span>Search volume trends</span><MiniBars count={9} /></div></div><div><h2>How Can Yellow Help You?</h2><p>Yellow is your elite white label growth and fulfillment partner for digital marketing services. We will:</p><ul className="hc-arrow-list"><li>Streamline your client onboarding process</li><li>Scale your profits fast</li><li>Generate more revenue</li><li>Reduce overhead costs</li><li>Save and reallocate your time</li><li>Customize your services across niches</li></ul><p>Gain refined insight with complete transparency under your agency&apos;s name. Our reseller services evolve with the market to offer premium white label marketing services.</p><p className="hc-help__note">From the first strategy call through campaign delivery and monthly reporting, our specialists work quietly behind your brand. You keep ownership of every client relationship while gaining the capacity, systems, and expertise of an experienced fulfillment department.</p><Link href="/about-us" className="hc-btn hc-btn--outline">About Us</Link></div></div></section>

      <AnimatedStats />

      <section className="hc-section hc-services" id="services"><div className="hc-shell"><h2>Our Services</h2><ServiceTabs /></div></section>

      <section className="hc-section hc-dental"><div className="hc-shell hc-centered"><h2>How We Increased Organic Leads For Our Dental Client?</h2><p>Partnering with a dental practice, we built a digital marketing strategy around SEO, PPC, and targeted social campaigns. The result was a dramatic improvement in organic visibility, qualified leads, and booked patients.</p><ResultsComparison /></div></section>

      <section className="hc-section hc-partner-model"><div className="hc-shell"><div className="hc-split-heading"><h2>What Our White Label<br />Partners Have To Say</h2><p>See the difference we make through our partners&apos; eyes. Read their stories and learn how our digital marketing solutions have helped boost their success.</p></div><PartnerEquation /></div></section>

      <section className="hc-section hc-niches"><div className="hc-shell"><div className="hc-centered"><h2>Our Niches And Specializations</h2><p>We bring our expertise to the table and go the extra mile for our clients. Our strategies help drive campaigns towards leads, sales, profit, and growth across competitive service industries.</p></div><NicheTabs /></div></section>

      <section className="hc-band"><div className="hc-shell"><h2><em>Need GoHighLevel For Clients?</em><br />Or Custom White Label GHL</h2><Link href="/white-label/go-high-level-services" className="hc-btn hc-btn--outline">Learn More</Link></div></section>

      <section className="hc-section hc-cases"><div className="hc-shell hc-centered"><h2>Backup Your Agency With<br />Data-Driven Case Studies</h2><p>All it takes for clients to choose your services is a stellar case study. Use proof from niche campaigns to improve conversion rates and grow with confidence.</p><CaseStudiesSlider /><Link href="/case-studies" className="hc-btn hc-btn--outline">View All Case Studies</Link></div></section>

      <section className="hc-band hc-band--cta"><div className="hc-shell"><h2><em>Ready To Move Into</em><br />The Digital World?</h2><div><Link href="/book-appointment" className="hc-btn hc-btn--dark">Schedule A Consultation</Link><Link href="/contact-us" className="hc-btn hc-btn--outline">Contact Us</Link></div></div></section>

      <section className="hc-section hc-small-business">
        <div className="hc-shell hc-two-col">
          <AnalyticsDashboard compact />
          <div>
            <h2>Does Your Agency Offer Digital Marketing Solutions To Small Businesses?</h2>
            <p>To build a dependable, profitable service for small-business clients, your agency needs:</p>
            <ul className="hc-arrow-list">
              <li>Qualified leads and conversion-focused campaigns</li>
              <li>Curated business and channel plans</li>
              <li>Seasoned specialists across every discipline</li>
              <li>A clear, value-based onboarding proposition</li>
              <li>Reporting and resource enhancement tools</li>
              <li>Reliable, competitive campaign delivery</li>
              <li>Flexible capacity for busy growth periods</li>
              <li>Consistent quality under your agency&apos;s name</li>
            </ul>
            <p>Yellow supplies the strategy, production, optimization, and reporting support behind your brand. Your team can stay focused on relationships and sales while we quietly handle the specialist work.</p>
            <p className="hc-small-business__note">Add complete fulfillment capacity without recruiting a separate department, increasing overhead, or giving up control of your client experience.</p>
            <Link href="/dedicated-teams" className="hc-btn hc-btn--outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="hc-section hc-onboarding"><div className="hc-shell hc-centered"><h2>White Label Digital Marketing<br />Onboarding Process</h2><p>Our onboarding process is simple and swift. We support your agency from discovery and audit through launch, reporting, and ongoing optimization.</p><div className="hc-onboarding-flow">{onboarding.map(([number, title, text]) => <article key={number}><Hexagon><b>{number}</b></Hexagon><i /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="hc-section hc-agency-model">
        <div className="hc-shell hc-two-col">
          <div className="hc-agency-model__copy">
            <span className="hc-agency-model__eyebrow">Your brand. Our delivery team.</span>
            <h2>White Label Digital<br />Marketing Agency Model</h2>
            <p>Yellow helps agencies offer a complete digital marketing department without the time, cost, and risk of building every specialty in-house.</p>
            <p>Your agency remains the trusted client-facing partner. Our strategists, campaign specialists, designers, developers, and account team work behind the scenes to deliver dependable results under your name.</p>
            <p>Each engagement includes a defined delivery plan, shared priorities, quality checks, and straightforward reporting. That gives your team a reliable way to add services, protect turnaround times, and keep every client informed as their campaigns grow.</p>
            <div className="hc-agency-model__benefits">
              <span><b>01</b> You own every client relationship</span>
              <span><b>02</b> We manage specialist fulfillment</span>
              <span><b>03</b> Your margins and brand stay protected</span>
              <span><b>04</b> Capacity scales with your pipeline</span>
            </div>
            <p className="hc-agency-model__note">Sell more confidently, deliver consistently, and grow without adding unnecessary overhead.</p>
            <div className="hc-link-columns"><ul><li>White Label PPC Services</li><li>White Label SMM Services</li><li>Book an Appointment</li><li>Read Client Reviews</li></ul><ul><li>White Label SEO Services</li><li>About Yellow Agency</li><li>Get in Touch</li><li>What We Offer</li></ul></div>
          </div>
          <div className="hc-model-diagram" aria-label="Yellow white label agency partnership model"><div className="hc-model-client"><span className="hc-model-client__icon" aria-hidden="true"><i /></span><b>Your Client</b></div><div className="hc-model-connector"><span>↑</span><i /><span>↓</span></div><div className="hc-model-agency"><div><b>$$</b><strong>Agency</strong></div><div><span>Margins</span><b>$$</b></div></div><span className="hc-model-side hc-model-side--revenue">$$$ <small>Partner revenue</small></span><span className="hc-model-side hc-model-side--channels">SEO&nbsp;&nbsp; PPC&nbsp;&nbsp; SOCIAL</span><div className="hc-model-connector"><i /></div><div className="hc-model-yellow"><b>Y</b><strong>Yellow</strong><span>Your fulfillment team</span></div></div>
        </div>
      </section>

      <section className="hc-section hc-support"><div className="hc-shell hc-centered"><h2>How Will Our Support Team<br />Help You?</h2><p>Every client project is supervised by a client success manager and project manager, with clear KPIs, reports, analysis, and updates ready for your clients.</p><Link href="/dedicated-teams" className="hc-btn hc-btn--outline">Learn More</Link><div className="hc-support-flow-image"><Image src="/images/yellow-support-flow.svg" alt="Yellow Agency support delivery flow from client to fulfillment team" width={1756} height={760} sizes="100vw" priority unoptimized /></div></div></section>

      <section className="hc-section hc-lead">
        <div className="hc-shell hc-two-col">
          <div className="hc-lead__copy">
            <span className="hc-lead__eyebrow">Grow without the overhead</span>
            <h2>Power-Up And Join Other Great Businesses Focusing On Their Growth</h2>
            <p>Build a stronger service offering with a specialist fulfillment team working quietly behind your agency. You own the client relationship while Yellow supports strategy, delivery, optimization, and reporting.</p>
            <ul>
              <li>Scale your business by expanding your services</li>
              <li>Generate more revenue without increasing fixed costs</li>
              <li>Save and reallocate your time towards growth</li>
              <li>Customize services across industries and niches</li>
              <li>Gain useful digital marketing insights</li>
              <li>Take on more client work with dependable capacity</li>
              <li>Deliver campaigns under your own agency brand</li>
              <li>Get clear communication and performance reporting</li>
            </ul>
            <p className="hc-lead__note">Tell us what your agency needs today, and we&apos;ll recommend a practical fulfillment setup that can grow with you.</p>
          </div>
          <form className="hc-lead-form">
            <div><input aria-label="Full name" placeholder="Full Name*" /><input aria-label="Company" placeholder="Company*" /></div>
            <div><input type="email" aria-label="Email" placeholder="Email*" /><input type="tel" aria-label="Phone" placeholder="Phone*" /></div>
            <div className="hc-options"><label><input type="checkbox" /> Immediate Need, Let&apos;s Talk</label><label><input type="checkbox" /> Agency</label><label><input type="checkbox" /> In Research Mode</label><label><input type="checkbox" /> Business Owner</label></div>
            <textarea aria-label="Message" placeholder="Message" rows={5} />
            <label className="hc-consent"><input type="checkbox" /> I consent to receive updates about my consultation and service inquiry.</label>
            <button className="hc-btn hc-btn--blue" type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="hc-final-cta"><div className="hc-shell"><div><h2>Can A Third Party Agency Truly Take Care Of My Clients?</h2><p>Set up a free session with us to learn how our process and services can help drive your agency&apos;s growth.</p></div><Link href="/book-appointment" className="hc-btn hc-btn--dark">Free 20-Mins Consultation</Link></div></section>
    </main>
  );
}
