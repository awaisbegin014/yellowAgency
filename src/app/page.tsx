import Image from "next/image";
import Link from "next/link";
import { PartnerEquation, ResultsComparison } from "@/components/home-interactions";

const serviceNames = ["Facebook Ads", "Google Ads", "Search Engine Optimization", "Local SEO", "Website Design", "Website Development", "Social Media Management", "Content Writing", "Graphic Designing", "Go High Level"];
const niches = ["HVAC", "Cosmetic Surgeon", "Pest Control", "Dental", "Flooring", "Landscaping", "Plumbing", "Roofing"];
const onboarding = [
  ["01", "Client Privacy", "NDAs and contracts protect every client relationship."],
  ["02", "Onboarding Call", "Meet your account manager and delivery team."],
  ["03", "Initiating Set Up", "We securely connect the accounts and tools we need."],
  ["04", "Launch Plan", "Workflows, schedules, and deliverables are agreed."],
  ["05", "Project Kickoff", "Delivery begins with recurring progress reporting."],
];
const supportFlow = [
  { role: "Your Client", icon: "$", tone: "dark" },
  { role: "You - Agency", icon: "◎", tone: "yellow" },
  { role: "Yellow - Agency Growth Partner", icon: "Y", tone: "brand" },
  { role: "Client Success Delivery Manager", icon: "☆", tone: "light" },
  { role: "Project Manager", icon: "⚙", tone: "light" },
  { role: "Project Lead", icon: "⌘", tone: "light" },
  { role: "Team Lead", icon: "♙", tone: "light" },
  { role: "Fulfillment Team", icon: "♧", tone: "light" },
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

      <section className="hc-section hc-partners"><div className="hc-shell"><div className="hc-split-heading"><h2>Hear What Our Partners<br />Have To Say About Us</h2><div><p>Our clients endorse and appreciate our personable service, expert knowledge and on-time delivery. This section explores our recent highlights.</p><ul className="hc-checks"><li>We want you to scale your business</li><li>Retaining your high quality</li></ul></div></div><div className="hc-video-grid"><article className="hc-video-card"><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner Seth Brown" fill sizes="50vw" /><div><h3>Seth Brown</h3><span>Agency Owner</span></div></article><article className="hc-video-card"><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner Josh Radford" fill sizes="50vw" /><div><h3>Josh Radford</h3><span>Agency Owner</span></div></article></div></div></section>

      <section className="hc-section hc-help"><div className="hc-shell hc-two-col"><div className="hc-photo-collage"><Image src="/images/unsplash/team-collaboration-01.jpg" alt="Agency strategy meeting" fill sizes="50vw" /><div className="hc-chart-card hc-chart-card--top"><span>Users</span><div className="hc-area-chart"><i /></div></div><div className="hc-chart-card hc-chart-card--bottom"><span>Search volume trends</span><MiniBars count={9} /></div></div><div><h2>How Can Yellow Help You?</h2><p>Yellow is your elite white label growth and fulfillment partner for digital marketing services. We will:</p><ul className="hc-arrow-list"><li>Streamline your client onboarding process</li><li>Scale your profits fast</li><li>Generate more revenue</li><li>Reduce overhead costs</li><li>Save and reallocate your time</li><li>Customize your services across niches</li></ul><p>Gain refined insight with complete transparency under your agency&apos;s name. Our reseller services evolve with the market to offer premium white label marketing services.</p><Link href="/about-us" className="hc-btn hc-btn--outline">About Us</Link></div></div></section>

      <section className="hc-stats"><div className="hc-shell">{[["100+", "Talented Team Members"], ["25+", "Trusted Partner Agencies"], ["10+", "Years of Success"], ["6+", "Dynamic Verticals"], ["3", "Countries"]].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div></section>

      <section className="hc-section hc-services" id="services"><div className="hc-shell"><h2>Our Services</h2><div className="hc-services__grid"><div className="hc-service-list">{serviceNames.map((service, index) => <Link key={service} href="/white-label" className={index === 0 ? "is-active" : ""}><span>{service}</span><b>→</b></Link>)}</div><div className="hc-service-detail"><div className="hc-browser-shot"><div className="hc-window-bar"><i /><i /><i /><span>Campaign manager</span></div><Image src="/images/unsplash/social-media.jpg" alt="Facebook advertising dashboard" fill sizes="50vw" /></div><h3>Facebook Ads</h3><p>We adapt strategies to evolving trends, ensuring tailored campaigns that resonate. Let us manage your clients&apos; ads, freeing you to focus on business growth.</p><ul><li>Expertise in evolving targeting techniques</li><li>Innovative strategies for diverse niches</li><li>Adaptive, ROI-focused solutions</li></ul><Link href="/white-label/facebook-ads-services" className="hc-text-link">Learn More ↗</Link></div></div></div></section>

      <section className="hc-section hc-dental"><div className="hc-shell hc-centered"><h2>How We Increased Organic Leads For Our Dental Client?</h2><p>Partnering with a dental practice, we built a digital marketing strategy around SEO, PPC, and targeted social campaigns. The result was a dramatic improvement in organic visibility, qualified leads, and booked patients.</p><ResultsComparison /></div></section>

      <section className="hc-section hc-partner-model"><div className="hc-shell"><div className="hc-split-heading"><h2>What Our White Label<br />Partners Have To Say</h2><p>See the difference we make through our partners&apos; eyes. Read their stories and learn how our digital marketing solutions have helped boost their success.</p></div><PartnerEquation services={serviceNames} /></div></section>

      <section className="hc-section hc-niches"><div className="hc-shell"><div className="hc-centered"><h2>Our Niches And Specializations</h2><p>We bring our expertise to the table and go the extra mile for our clients. Our strategies help drive campaigns towards leads, sales, profit, and growth across competitive service industries.</p></div><div className="hc-pills">{niches.map((niche, index) => <span className={index === 0 ? "is-active" : ""} key={niche}>{niche}</span>)}</div><div className="hc-niche-detail"><div><h3>HVAC</h3><span>Worked on 20+ clients</span><p>We offer white label digital marketing services for HVAC, driving leads, sales, and growth while elevating online visibility and brand reputation.</p></div><div><h3>What You&apos;ll Get:</h3><ul><li>Growth focused strategy</li><li>Targeted advertising campaigns</li><li>Fluid and adaptive services</li><li>Certified and experienced team</li></ul><Link href="/industries/hvac" className="hc-text-link">Learn More ↗</Link></div></div></div></section>

      <section className="hc-band"><div className="hc-shell"><h2><em>Need GoHighLevel For Clients?</em><br />Or Custom White Label GHL</h2><Link href="/white-label/go-high-level-services" className="hc-btn hc-btn--outline">Learn More</Link></div></section>

      <section className="hc-section hc-cases"><div className="hc-shell hc-centered"><h2>Backup Your Agency With<br />Data-Driven Case Studies</h2><p>All it takes for clients to choose your services is a stellar case study. Use proof from niche campaigns to improve conversion rates and grow with confidence.</p><div className="hc-case-grid">{[["Cold Email Outreach Digital Marketing Case Study", "content-writing.jpg"], ["Auto Dealer Google Ads Case Study", "contractor-02.jpg"], ["Party Rentals Google Ads Case Study", "brand-growth.jpg"]].map(([title, image]) => <article key={title}><div><Image src={`/images/unsplash/${image}`} alt={title} fill sizes="33vw" /><span className="hc-case-chart"><MiniBars count={5} /></span></div><h3>{title}</h3><Link href="/case-studies" aria-label={`View ${title}`}>→</Link></article>)}</div><Link href="/case-studies" className="hc-btn hc-btn--outline">View All Case Studies</Link></div></section>

      <section className="hc-band hc-band--cta"><div className="hc-shell"><h2><em>Ready To Move Into</em><br />The Digital World?</h2><div><Link href="/book-appointment" className="hc-btn hc-btn--dark">Schedule A Consultation</Link><Link href="/contact-us" className="hc-btn hc-btn--outline">Contact Us</Link></div></div></section>

      <section className="hc-section hc-small-business"><div className="hc-shell hc-two-col"><AnalyticsDashboard compact /><div><h2>Does Your Agency Offer Digital Marketing Solutions To Small Businesses?</h2><p>To be successful in this industry, you will need:</p><ul className="hc-arrow-list"><li>Qualified leads and conversions</li><li>Curated business plans</li><li>Seasoned and experienced teams</li><li>Value-based onboarding proposition</li><li>Resource enhancement tools</li><li>Better and competitive deliverability</li></ul><p>We want to help you maintain high-quality digital marketing services for your clients so you can grow and scale your agency.</p><Link href="/dedicated-teams" className="hc-btn hc-btn--outline">Learn More</Link></div></div></section>

      <section className="hc-section hc-onboarding"><div className="hc-shell hc-centered"><h2>White Label Digital Marketing<br />Onboarding Process</h2><p>Our onboarding process is simple and swift. We support your agency from discovery and audit through launch, reporting, and ongoing optimization.</p><div className="hc-onboarding-flow">{onboarding.map(([number, title, text]) => <article key={number}><Hexagon><b>{number}</b></Hexagon><i /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="hc-section hc-agency-model"><div className="hc-shell hc-two-col"><div><h2>White Label Digital<br />Marketing Agency Model</h2><p>Yellow is structured to help agencies offer complete digital marketing services to small businesses, speed up delivery, and grow without compromising quality.</p><p>Your agency stays in front while our specialists focus on fulfillment, documentation, and quality service delivery.</p><div className="hc-link-columns"><ul><li>White Label PPC Services</li><li>White Label SMM Services</li><li>Book an Appointment</li><li>Read Client Reviews</li></ul><ul><li>White Label SEO Services</li><li>About Yellow Agency</li><li>Get in Touch</li><li>What We Offer</li></ul></div></div><div className="hc-model-diagram" aria-label="Yellow white label agency partnership model"><div className="hc-model-client"><span className="hc-model-client__icon" aria-hidden="true"><i /></span><b>Your Client</b></div><div className="hc-model-connector"><span>↑</span><i /><span>↓</span></div><div className="hc-model-agency"><div><b>$$</b><strong>Agency</strong></div><div><span>Margins</span><b>$$</b></div></div><span className="hc-model-side hc-model-side--revenue">$$$ <small>Partner revenue</small></span><span className="hc-model-side hc-model-side--channels">SEO&nbsp;&nbsp; PPC&nbsp;&nbsp; SOCIAL</span><div className="hc-model-connector"><i /></div><div className="hc-model-yellow"><b>Y</b><strong>Yellow</strong><span>Your fulfillment team</span></div></div></div></section>

      <section className="hc-section hc-support"><div className="hc-shell hc-centered"><h2>How Will Our Support Team<br />Help You?</h2><p>Every client project is supervised by a client success manager and project manager, with clear KPIs, reports, analysis, and updates ready for your clients.</p><Link href="/dedicated-teams" className="hc-btn hc-btn--outline">Learn More</Link><div className="hc-support-flow" aria-label="Support delivery flow">{supportFlow.map(({ role, icon, tone }, index) => <div className={`hc-support-step hc-support-step--${tone}`} key={role}><div className="hc-support-node"><span aria-hidden="true">{icon}</span><strong>{role}</strong></div>{index < supportFlow.length - 1 ? <i aria-hidden="true" /> : null}</div>)}</div></div></section>

      <section className="hc-section hc-lead"><div className="hc-shell hc-two-col"><div><h2>Power-Up And Join Other Great Businesses Focusing On Their Growth</h2><ul><li>Scale your business by expanding your services</li><li>Generate more revenue without increasing costs</li><li>Save and reallocate your time towards growth</li><li>Customize services across niches</li><li>Gain useful digital marketing insights</li></ul></div><form className="hc-lead-form"><div><input aria-label="Full name" placeholder="Full Name*" /><input aria-label="Company" placeholder="Company*" /></div><div><input type="email" aria-label="Email" placeholder="Email*" /><input type="tel" aria-label="Phone" placeholder="Phone*" /></div><div className="hc-options"><label><input type="checkbox" /> Immediate Need, Let&apos;s Talk</label><label><input type="checkbox" /> Agency</label><label><input type="checkbox" /> In Research Mode</label><label><input type="checkbox" /> Business Owner</label></div><textarea aria-label="Message" placeholder="Message" rows={5} /><label className="hc-consent"><input type="checkbox" /> I consent to receive updates about my consultation and service inquiry.</label><button className="hc-btn hc-btn--blue" type="submit">Submit</button></form></div></section>

      <section className="hc-final-cta"><div className="hc-shell"><div><h2>Can A Third Party Agency Truly Take Care Of My Clients?</h2><p>Set up a free session with us to learn how our process and services can help drive your agency&apos;s growth.</p></div><Link href="/book-appointment" className="hc-btn hc-btn--dark">Free 20-Mins Consultation</Link></div></section>
    </main>
  );
}
