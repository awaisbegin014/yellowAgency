"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const resultSets = {
  before: [
    { value: "28%", label: "Organic Traffic", offset: 3 },
    { value: "8%", label: "Leads", offset: 0 },
    { value: "18%", label: "Customers", offset: 4 },
  ],
  after: [
    { value: "90%", label: "Organic Traffic", offset: 8 },
    { value: "30%", label: "Leads", offset: 2 },
    { value: "120%", label: "Customers", offset: 12 },
  ],
};

const testimonials = [
  {
    name: "Josh Radford",
    role: "Agency Partner",
    image: "/images/unsplash/portrait-04.jpg",
    quote: "Yellow gave us the specialist team we needed to confidently call ourselves a full-service marketing agency.",
    services: ["Facebook Ads", "Google Ads", "Search Engine Optimization", "Local SEO", "Website Design", "Website Development", "Social Media Marketing", "Go High Level"],
    partnerFocus: ["Win and onboard new clients", "Lead sales conversations", "Own client relationships", "Guide account strategy", "Approve priorities and offers", "Share timely client feedback", "Present transparent reports", "Identify retention opportunities"],
  },
  {
    name: "Seth Brown",
    role: "Agency Owner",
    image: "/images/unsplash/portrait-02.jpg",
    quote: "The communication is clear, delivery is dependable, and our clients see consistently stronger results.",
    services: ["Google Ads", "Facebook Ads", "Landing Page Design", "Conversion Tracking", "Campaign Reporting", "Lead Quality Reviews", "Creative Testing", "Retargeting"],
    partnerFocus: ["Define campaign goals", "Approve budgets and offers", "Keep clients informed", "Review growth opportunities", "Share sales-team feedback", "Confirm creative direction", "Present monthly performance", "Plan the next campaign phase"],
  },
  {
    name: "Maya Collins",
    role: "Growth Partner",
    image: "/images/unsplash/portrait-01.jpg",
    quote: "We expanded our services without adding overhead. Yellow feels like a natural extension of our own team.",
    services: ["Technical SEO", "Local SEO", "Content Strategy", "Content Writing", "Link Building", "GBP Optimization", "SEO Reporting", "Competitor Research"],
    partnerFocus: ["Set the growth roadmap", "Share brand knowledge", "Present monthly results", "Identify expansion opportunities", "Confirm target audiences", "Approve content priorities", "Coordinate client decisions", "Guide long-term retention"],
  },
  {
    name: "Daniel Foster",
    role: "Digital Agency Founder",
    image: "/images/unsplash/portrait-03.jpg",
    quote: "Their white-label process lets us stay focused on relationships while every campaign is handled with care.",
    services: ["Website Design", "Website Development", "Graphic Design", "Go High Level", "CRM Automation", "Content Writing", "Quality Assurance", "Ongoing Support"],
    partnerFocus: ["Gather client requirements", "Approve creative direction", "Manage client feedback", "Lead launch and retention", "Confirm scope and timelines", "Share access and brand assets", "Present delivery updates", "Spot account-growth opportunities"],
  },
];

const agencyStats = [
  { value: 100, suffix: "+", label: "Talented Team Members" },
  { value: 25, suffix: "+", label: "Trusted Partner Agencies" },
  { value: 10, suffix: "+", label: "Years of Success" },
  { value: 6, suffix: "+", label: "Dynamic Verticals" },
  { value: 3, suffix: "", label: "Countries" },
];

const nicheData = [
  { slug: "hvac", title: "HVAC", clients: "20+", description: "Local visibility, paid search, and lead follow-up designed for competitive HVAC service areas.", focus: "We connect emergency demand, seasonal maintenance, and replacement opportunities into one measurable acquisition system.", outcomes: ["More booked calls", "Lower lead waste", "Clear ROI reporting"], benefits: ["Local growth strategy", "High-intent search campaigns", "Service-area SEO", "Call and lead tracking", "Seasonal offer planning", "Reputation support"] },
  { slug: "cosmetic-surgeon", title: "Cosmetic Surgeon", clients: "12+", description: "A trust-led patient journey across search, content, reputation, and high-consideration landing pages.", focus: "Every campaign is designed to educate prospective patients, establish credibility, and create a confident path to consultation.", outcomes: ["More consultations", "Stronger patient trust", "Better lead quality"], benefits: ["Patient acquisition strategy", "Procedure-focused campaigns", "Reputation support", "Consultation conversion tracking", "Educational content planning", "Lead nurture workflows"] },
  { slug: "pest-control", title: "Pest Control", clients: "18+", description: "Fast, focused acquisition and local-search programs for residential and commercial pest-control teams.", focus: "We balance urgent service demand with recurring prevention plans to create a healthier year-round pipeline.", outcomes: ["Faster response leads", "More recurring plans", "Improved local reach"], benefits: ["Seasonal demand campaigns", "Local search optimization", "Emergency-service advertising", "Qualified lead reporting", "Commercial lead targeting", "Retention campaign support"] },
  { slug: "dental", title: "Dental", clients: "25+", description: "A patient-first system spanning local search, paid media, reputation, and useful treatment content.", focus: "Our approach helps practices fill schedules with the right mix of general, cosmetic, and high-value treatment patients.", outcomes: ["More booked patients", "Higher-value treatments", "Stronger local reputation"], benefits: ["New-patient campaigns", "Treatment page SEO", "Local reputation growth", "Appointment conversion tracking", "Patient nurture content", "Monthly growth reporting"] },
  { slug: "flooring", title: "Flooring", clients: "10+", description: "Visual creative and local lead generation designed for showrooms, installers, and specialty contractors.", focus: "We turn product quality, installation expertise, and finished-project proof into a clearer path from inspiration to quotation.", outcomes: ["More quote requests", "Better project leads", "Stronger visual brand"], benefits: ["Project-led creative", "Local lead generation", "Showroom campaign support", "Quote-request optimization", "Portfolio content strategy", "Installer service SEO"] },
  { slug: "landscaping", title: "Landscaping", clients: "14+", description: "Service-area search, project-led creative, and follow-up systems for residential and commercial teams.", focus: "Campaigns adapt to seasonal demand while keeping design, maintenance, and commercial services visible throughout the year.", outcomes: ["More estimates", "Balanced seasonality", "Larger project pipeline"], benefits: ["Seasonal growth planning", "Service-area targeting", "Project portfolio content", "Estimate lead nurturing", "Commercial campaign support", "Review growth strategy"] },
  { slug: "plumbing", title: "Plumbing", clients: "22+", description: "Urgent-intent advertising, local search, and reputation programs designed to turn demand into calls.", focus: "We prioritize speed, service-area accuracy, and trust signals so customers choose your client during high-pressure moments.", outcomes: ["More qualified calls", "Lower missed demand", "Improved local trust"], benefits: ["Emergency search campaigns", "Local SEO coverage", "Call-focused landing pages", "Lead quality monitoring", "Service-area expansion", "Reputation management"] },
  { slug: "roofing", title: "Roofing", clients: "16+", description: "A full local-growth system for inspection, repair, replacement, and storm-related demand.", focus: "Our campaigns combine immediate storm opportunities with dependable inspection and replacement demand across target territories.", outcomes: ["More inspections", "Better estimate quality", "Stronger territory coverage"], benefits: ["Inspection lead campaigns", "Storm-demand targeting", "Roofing service SEO", "Estimate conversion reporting", "Project proof content", "Long-term nurture campaigns"] },
];

const serviceTabs = [
  { slug: "facebook-ads-services", title: "Facebook Ads", dashboard: "Meta Ads Manager", image: "social-media.jpg", description: "Audience-led Facebook and Instagram campaigns built to create qualified demand and measurable growth.", benefits: ["Audience and competitor research", "Creative testing and optimization", "Conversion tracking and reporting"] },
  { slug: "google-ads-services", title: "Google Ads", dashboard: "Google Ads Dashboard", image: "analytics-01.jpg", description: "High-intent search and display campaigns that connect client offers with people ready to take action.", benefits: ["Keyword and search-term strategy", "Campaign and bidding optimization", "Lead-quality performance reporting"] },
  { slug: "seo-services", title: "Search Engine Optimization", dashboard: "SEO Performance Dashboard", image: "analytics-02.jpg", description: "Technical, content, and authority improvements designed to grow sustainable organic visibility.", benefits: ["Technical and on-page audits", "Content opportunity planning", "Ranking and conversion measurement"] },
  { slug: "seo-services", title: "Local SEO", dashboard: "Local Search Dashboard", image: "contractor.jpg", description: "Location-focused search programs that help service businesses appear when nearby customers need them.", benefits: ["Google Business Profile optimization", "Local landing-page strategy", "Review and citation support"] },
  { slug: "web-design-services", title: "Website Design", dashboard: "Website Design Preview", image: "creative-design-01.jpg", description: "Clear, polished website experiences designed around brand trust, usability, and conversion.", benefits: ["Conversion-focused page layouts", "Responsive interface design", "Brand-consistent design systems"] },
  { slug: "web-development-services", title: "Website Development", dashboard: "Development Workspace", image: "web-development.jpg", description: "Reliable, responsive websites developed for speed, maintainability, and a smooth customer journey.", benefits: ["Responsive frontend development", "Performance optimization", "Quality assurance and launch support"] },
  { slug: "social-media-management-services", title: "Social Media Management", dashboard: "Social Content Planner", image: "social-02.jpg", description: "Consistent social content and community activity that keep client brands relevant and recognizable.", benefits: ["Monthly content planning", "Platform-specific creative", "Engagement and growth reporting"] },
  { slug: "content-writing-services", title: "Content Writing", dashboard: "Content Calendar", image: "content-writing.jpg", description: "Useful, search-aware writing that communicates expertise and guides readers toward the next step.", benefits: ["Website and landing-page copy", "SEO articles and resources", "Editing and brand-voice alignment"] },
  { slug: "graphics-design-services", title: "Graphic Designing", dashboard: "Creative Studio", image: "creative-design-03.jpg", description: "On-brand visual assets that give every campaign, channel, and client touchpoint a professional finish.", benefits: ["Campaign and social graphics", "Brand collateral and templates", "Digital ad creative production"] },
  { slug: "go-high-level-services", title: "Go High Level", dashboard: "CRM Automation Dashboard", image: "analytics-03.jpg", description: "White-label CRM setup and automation that organize leads, communication, and follow-up under your brand.", benefits: ["CRM and pipeline configuration", "Workflow and nurture automation", "White-label account support"] },
];

const homeCaseStudies = [
  { title: "Cold Email Outreach Digital Marketing Case Study", image: "content-writing.jpg" },
  { title: "Auto Dealer Google Ads Case Study", image: "contractor-02.jpg" },
  { title: "Party Rentals Google Ads Case Study", image: "brand-growth.jpg" },
];

const serviceDashboardMetrics: Record<string, Array<{ label: string; value: string; change: string }>> = {
  "Facebook Ads": [{ label: "Reach", value: "128K", change: "+24%" }, { label: "Qualified leads", value: "842", change: "+18%" }, { label: "ROAS", value: "4.8x", change: "+0.7x" }],
  "Google Ads": [{ label: "Clicks", value: "18.4K", change: "+21%" }, { label: "Conversions", value: "1,206", change: "+16%" }, { label: "Cost per lead", value: "$31", change: "-12%" }],
  "Search Engine Optimization": [{ label: "Organic visits", value: "42.8K", change: "+32%" }, { label: "Top 10 keywords", value: "186", change: "+41" }, { label: "Organic leads", value: "936", change: "+27%" }],
  "Local SEO": [{ label: "Map views", value: "26.3K", change: "+29%" }, { label: "Phone calls", value: "684", change: "+22%" }, { label: "Direction requests", value: "1,142", change: "+18%" }],
  "Website Design": [{ label: "Pages approved", value: "18", change: "+6" }, { label: "Conversion rate", value: "6.4%", change: "+1.8%" }, { label: "Mobile score", value: "96", change: "+11" }],
  "Website Development": [{ label: "Deployments", value: "24", change: "+8" }, { label: "Uptime", value: "99.99%", change: "+0.4%" }, { label: "Load time", value: "1.2s", change: "-0.8s" }],
  "Social Media Management": [{ label: "Posts published", value: "86", change: "+14" }, { label: "Engagement", value: "8.7%", change: "+2.1%" }, { label: "Followers", value: "14.2K", change: "+19%" }],
  "Content Writing": [{ label: "Articles delivered", value: "32", change: "+9" }, { label: "Organic clicks", value: "21.6K", change: "+26%" }, { label: "Avg. read time", value: "4m 12s", change: "+38s" }],
  "Graphic Designing": [{ label: "Assets created", value: "148", change: "+36" }, { label: "Approval rate", value: "94%", change: "+7%" }, { label: "Turnaround", value: "1.8d", change: "-0.6d" }],
  "Go High Level": [{ label: "Leads managed", value: "3,820", change: "+31%" }, { label: "Automations live", value: "46", change: "+12" }, { label: "Response time", value: "2m 08s", change: "-41%" }],
};

function MetricCard({ value, label, offset, active }: { value: string; label: string; offset: number; active: boolean }) {
  const numericValue = Number.parseFloat(value);
  const chartHeight = Math.min(41, 30 + numericValue * 0.12);
  const lift = Math.min(4, offset * 0.25);
  const graphLevels = (active
    ? [35, 39, 29, 36, 22, 30, 15, 24, 7, 14]
    : [38, 40, 34, 38, 29, 34, 24, 29, 18, 23]
  ).map((level) => Math.max(4, level - lift));
  const graphPoints = graphLevels
    .map((level, index) => `${(index / (graphLevels.length - 1)) * 100},${level}`)
    .join(", ");

  return (
    <article className={`hc-metric-card ${active ? "is-after" : "is-before"}`}>
      <b>{value}</b>
      <span>{label}</span>
      <div className="hc-metric-card__mountain" aria-hidden="true" style={{ height: `${chartHeight}%` }}>
        <svg key={`${active}-${value}`} viewBox="0 0 100 40" preserveAspectRatio="none">
          <line x1="0" y1="30" x2="100" y2="30" />
          <line x1="0" y1="20" x2="100" y2="20" />
          <polygon points={`${graphPoints} 100,40 0,40`} />
          <polyline points={graphPoints} />
        </svg>
      </div>
    </article>
  );
}

export function ResultsComparison() {
  const [isAfter, setIsAfter] = useState(true);
  const metrics = isAfter ? resultSets.after : resultSets.before;

  return (
    <>
      <div className="hc-toggle">
        <span className={!isAfter ? "is-active" : ""}>Before Yellow</span>
        <button
          type="button"
          role="switch"
          aria-checked={isAfter}
          aria-label="Show results after working with Yellow"
          className={isAfter ? "is-after" : ""}
          onClick={() => setIsAfter((current) => !current)}
        >
          <i />
        </button>
        <span className={isAfter ? "is-active" : ""}>After Yellow</span>
      </div>
      <div className="hc-metrics" aria-live="polite">
        {metrics.map((metric) => <MetricCard key={metric.label} {...metric} active={isAfter} />)}
      </div>
    </>
  );
}

export function AnimatedStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);
  const hasPlayedRef = useRef(false);
  const [values, setValues] = useState(() => agencyStats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasPlayedRef.current) return;
      hasPlayedRef.current = true;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValues(agencyStats.map((stat) => stat.value));
        return;
      }

      const startedAt = performance.now();
      const duration = 1400;
      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(agencyStats.map((stat) => Math.round(stat.value * eased)));
        if (progress < 1) animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="hc-stats" ref={sectionRef}>
      <div className="hc-shell">
        {agencyStats.map((stat, index) => <div key={stat.label}><b>{values[index]}{stat.suffix}</b><span>{stat.label}</span></div>)}
      </div>
    </section>
  );
}

export function NicheTabs() {
  const [activeSlug, setActiveSlug] = useState(nicheData[0].slug);
  const activeNiche = nicheData.find((niche) => niche.slug === activeSlug) ?? nicheData[0];

  return (
    <>
      <div className="hc-pills" aria-label="Choose an industry specialization">
        {nicheData.map((niche) => (
          <button
            type="button"
            className={niche.slug === activeSlug ? "is-active" : ""}
            aria-pressed={niche.slug === activeSlug}
            onClick={() => setActiveSlug(niche.slug)}
            key={niche.slug}
          >
            {niche.title}
          </button>
        ))}
      </div>
      <div className="hc-niche-detail" key={activeNiche.slug}>
        <div><h3>{activeNiche.title}</h3><span>Worked on {activeNiche.clients} clients</span><p>{activeNiche.description}</p><p className="hc-niche-detail__focus"><b>Our strategic focus:</b> {activeNiche.focus}</p></div>
        <div><h3>What You&apos;ll Get:</h3><ul>{activeNiche.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><div className="hc-niche-outcomes">{activeNiche.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}</div><Link href={`/industries/${activeNiche.slug}`} className="hc-text-link">Learn More ↗</Link></div>
      </div>
    </>
  );
}

function CaseStudyCard({ study, sizes }: { study: (typeof homeCaseStudies)[number]; sizes: string }) {
  return (
    <article>
      <div>
        <Image src={`/images/unsplash/${study.image}`} alt={study.title} fill sizes={sizes} />
        <span className="hc-case-chart"><span className="hc-bars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <i key={index} style={{ height: `${28 + ((index * 19) % 58)}%` }} />)}</span></span>
      </div>
      <h3>{study.title}</h3>
      <Link href="/case-studies" aria-label={`View ${study.title}`}>→</Link>
    </article>
  );
}

export function CaseStudiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const move = (amount: number) => {
    setDirection(amount > 0 ? "right" : "left");
    setActiveIndex((current) => (current + amount + homeCaseStudies.length) % homeCaseStudies.length);
  };

  return (
    <>
      <div className="hc-case-grid hc-case-grid--desktop">
        {homeCaseStudies.map((study) => <CaseStudyCard key={study.title} study={study} sizes="33vw" />)}
      </div>
      <div className="hc-case-slider" aria-live="polite">
        <div className={`hc-case-slider__slide is-${direction}`} key={activeIndex}>
          <CaseStudyCard study={homeCaseStudies[activeIndex]} sizes="92vw" />
        </div>
        <div className="hc-case-slider__controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous case study">‹</button>
          <button type="button" onClick={() => move(1)} aria-label="Next case study">›</button>
        </div>
      </div>
    </>
  );
}

type DashboardMetric = { label: string; value: string; change: string };
type ServiceTab = (typeof serviceTabs)[number];

function DashboardHeader({ title, period = "Last 30 days" }: { title: string; period?: string }) {
  return <div className="hc-unique-dashboard__header"><div><span>Yellow reporting</span><b>{title}</b></div><small>{period}</small></div>;
}

function MetricStrip({ metrics }: { metrics: DashboardMetric[] }) {
  return <div className="hc-unique-dashboard__metrics">{metrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><b>{metric.value}</b><small>{metric.change}</small></article>)}</div>;
}

function ServiceDashboardVisual({ metrics, activeIndex }: { metrics: DashboardMetric[]; activeIndex: number }) {
  const bars = Array.from({ length: 12 }, (_, index) => 26 + ((index * 17 + activeIndex * 13) % 68));

  if (activeIndex === 0) return <div className="hc-unique-dashboard hc-board--meta"><DashboardHeader title="Meta campaign overview" /><MetricStrip metrics={metrics} /><div className="hc-board-split"><div className="hc-board-chart"><b>Reach by campaign</b><div className="hc-dashboard-bars">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div><div className="hc-board-donut"><i /><b>68%</b><span>Primary audience</span></div></div></div>;

  if (activeIndex === 1) return <div className="hc-unique-dashboard hc-board--google"><DashboardHeader title="Google search campaigns" /><MetricStrip metrics={metrics} /><div className="hc-search-campaigns"><div><b>Campaign</b><b>Budget</b><b>Conversions</b></div>{[["Brand search", "$4,200", "486"], ["Service search", "$8,750", "391"], ["Competitor", "$2,180", "174"], ["Remarketing", "$1,940", "155"]].map((row) => <div key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}</div></div>;

  if (activeIndex === 2) return <div className="hc-unique-dashboard hc-board--seo"><DashboardHeader title="Organic search visibility" /><div className="hc-seo-overview"><div><span>Visibility score</span><b>78.4</b><small>+12.8 this quarter</small><div className="hc-seo-line"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="hc-keyword-list"><b>Keyword movement</b>{[["white label marketing", "3", "+4"], ["agency fulfillment", "5", "+7"], ["local growth partner", "8", "+11"]].map((row) => <p key={row[0]}><span>{row[0]}</span><b>#{row[1]}</b><small>{row[2]}</small></p>)}</div></div><MetricStrip metrics={metrics} /></div>;

  if (activeIndex === 3) return <div className="hc-unique-dashboard hc-board--local"><DashboardHeader title="Local search map" /><div className="hc-local-layout"><div className="hc-local-map"><i className="pin-1">1</i><i className="pin-2">2</i><i className="pin-3">3</i><i className="pin-4">4</i><span /><span /><span /></div><div className="hc-local-list"><b>Location performance</b>{[["Downtown", "#1", "312 calls"], ["Northside", "#2", "186 calls"], ["West District", "#3", "142 calls"]].map((row) => <p key={row[0]}><span>{row[0]}</span><b>{row[1]}</b><small>{row[2]}</small></p>)}</div></div><MetricStrip metrics={metrics} /></div>;

  if (activeIndex === 4) return <div className="hc-unique-dashboard hc-board--design"><DashboardHeader title="Website design workspace" period="Design review" /><div className="hc-design-workspace"><aside>{["Home", "Services", "About", "Contact"].map((item, index) => <span className={index === 0 ? "is-current" : ""} key={item}>{item}</span>)}</aside><div className="hc-design-canvas"><div className="hc-design-nav" /><div className="hc-design-hero"><i /><span /><span /></div><div className="hc-design-cards"><i /><i /><i /></div></div><div className="hc-design-tools"><span>Aa</span><span>◐</span><span>▦</span><span>↗</span></div></div></div>;

  if (activeIndex === 5) return <div className="hc-unique-dashboard hc-board--development"><DashboardHeader title="Development and deployments" period="Production" /><div className="hc-dev-layout"><div className="hc-dev-terminal"><p><span>01</span><b>const</b> site = await build();</p><p><span>02</span><b>if</b> (tests.pass) deploy(site);</p><p><span>03</span>optimize(images, fonts);</p><p><span>04</span>monitor(&quot;performance&quot;);</p><small>✓ Build successful · deployed 2m ago</small></div><div className="hc-dev-status"><b>System status</b>{[["Frontend", "Healthy"], ["API", "Healthy"], ["CDN", "Optimized"], ["Core Web Vitals", "Passed"]].map((row) => <p key={row[0]}><span>{row[0]}</span><small>{row[1]}</small></p>)}</div></div><MetricStrip metrics={metrics} /></div>;

  if (activeIndex === 6) return <div className="hc-unique-dashboard hc-board--social"><DashboardHeader title="Social content calendar" period="August" /><div className="hc-social-calendar">{Array.from({ length: 21 }, (_, index) => <div className={[2, 5, 8, 12, 15, 19].includes(index) ? "has-post" : ""} key={index}><span>{index + 1}</span>{[2, 8, 15].includes(index) ? <i>IG</i> : null}{[5, 12, 19].includes(index) ? <i>FB</i> : null}</div>)}</div><div className="hc-social-summary"><span><b>18</b>Scheduled</span><span><b>9</b>Approved</span><span><b>4</b>In review</span></div></div>;

  if (activeIndex === 7) return <div className="hc-unique-dashboard hc-board--content"><DashboardHeader title="Editorial production board" /><div className="hc-content-board">{[["Ideas", "Local SEO guide", "Service comparison"], ["Writing", "Dental landing page", "HVAC case study"], ["Editing", "Roofing article", "Email sequence"], ["Published", "August newsletter", "Pest control page"]].map(([title, ...items]) => <div key={title}><b>{title}</b>{items.map((item) => <span key={item}>{item}<small>•••</small></span>)}</div>)}</div><MetricStrip metrics={metrics} /></div>;

  if (activeIndex === 8) return <div className="hc-unique-dashboard hc-board--graphics"><DashboardHeader title="Creative asset library" period="148 assets" /><div className="hc-graphics-gallery">{["Ad creative", "Brand template", "Social carousel", "Campaign banner", "Case study", "Email header"].map((item, index) => <div className={`tile-${index + 1}`} key={item}><i>{index % 2 === 0 ? "Y" : "Aa"}</i><span>{item}</span></div>)}</div><div className="hc-graphics-footer"><span>94% approved first round</span><span>Average turnaround 1.8 days</span></div></div>;

  return <div className="hc-unique-dashboard hc-board--ghl"><DashboardHeader title="GoHighLevel opportunity pipeline" period="Live CRM" /><div className="hc-ghl-pipeline">{[["New leads", "128", "Consultation request", "Website lead"], ["Contacted", "74", "Follow-up sent", "Call scheduled"], ["Qualified", "39", "Proposal ready", "Decision maker"], ["Won", "18", "New retainer", "Onboarding"]].map(([title, count, ...cards]) => <div key={title}><header><b>{title}</b><span>{count}</span></header>{cards.map((card) => <p key={card}>{card}<small>Automation active</small></p>)}</div>)}</div><div className="hc-ghl-automation"><i>Trigger</i><span>→</span><i>SMS + Email</i><span>→</span><i>Book call</i><span>→</span><i>Pipeline update</i></div></div>;
}

function ServiceDetail({ service, activeIndex, variant }: { service: ServiceTab; activeIndex: number; variant: "desktop" | "mobile" }) {
  const dashboardMetrics = serviceDashboardMetrics[service.title];

  return (
    <div className={`hc-service-detail hc-service-detail--${variant}`}>
      <div className="hc-browser-shot">
        <div className="hc-window-bar"><i /><i /><i /><span>{service.dashboard}</span></div>
        <ServiceDashboardVisual metrics={dashboardMetrics} activeIndex={activeIndex} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      <Link href={`/white-label/${service.slug}`} className="hc-text-link">Learn More ↗</Link>
    </div>
  );
}

export function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeService = activeIndex === null ? null : serviceTabs[activeIndex];

  return (
    <div className="hc-services__grid">
      <div className="hc-service-list" aria-label="Choose a service dashboard">
        {serviceTabs.map((service, index) => (
          <div className="hc-service-list__item" key={service.title}>
            <button type="button" className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} aria-expanded={index === activeIndex} onClick={() => setActiveIndex((current) => current === index ? null : index)}>
              <span>{service.title}</span><b aria-hidden="true">→</b>
            </button>
            {index === activeIndex ? <ServiceDetail service={service} activeIndex={index} variant="mobile" /> : null}
          </div>
        ))}
      </div>
      {activeService && activeIndex !== null ? <ServiceDetail service={activeService} activeIndex={activeIndex} variant="desktop" /> : <div className="hc-service-detail hc-service-detail--desktop" />}
    </div>
  );
}

export function PartnerEquation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];
  const move = (direction: number) => setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <div className="hc-model-cards" aria-live="polite">
      <article className="hc-equation-card hc-equation-card--yellow" key={`services-${activeIndex}`}>
        <div className="hc-equation-brand"><span aria-hidden="true">Y</span><b>Yellow</b></div>
        <ul>{testimonial.services.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <span className="hc-equation-symbol hc-equation-symbol--plus" aria-hidden="true"><b>+</b></span>
      <article className="hc-equation-card" key={`partner-${activeIndex}`}>
        <h3>You As Our Partner</h3>
        <ul>{testimonial.partnerFocus.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <span className="hc-equation-symbol hc-equation-symbol--equals" aria-hidden="true"><b>=</b></span>
      <article className="hc-equation-card is-yellow">
        <div className="hc-testimonial-person">
          <div className="hc-avatar"><Image src={testimonial.image} alt={testimonial.name} fill sizes="95px" /></div>
          <div><h3>{testimonial.name}</h3><span>{testimonial.role}</span></div>
        </div>
        <blockquote>“{testimonial.quote}”</blockquote>
        <div className="hc-testimonial-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">‹</button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">›</button>
        </div>
      </article>
    </div>
  );
}
