import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/interactive";

export type DashboardVariant = "performance" | "audience" | "campaigns" | "reporting" | "landing" | "proposal" | "creative";
export type DashboardChannel = "facebook" | "google" | "seo" | "ppc" | "social" | "design" | "development" | "graphics" | "content" | "ghl";

type DashboardCopy = { title: string; metric: string; label: string; secondary: string; cost: string; pipeline: string };

const dashboardCopy: Record<DashboardChannel, Record<DashboardVariant, DashboardCopy>> = {
  facebook: {
    performance: { title: "Paid social performance", metric: "3.42×", label: "return on ad spend", secondary: "+38.6%", cost: "$18.40", pipeline: "$37,724" },
    audience: { title: "Audience insights", metric: "268K", label: "qualified impressions", secondary: "+24.8%", cost: "$16.90", pipeline: "$41,260" },
    campaigns: { title: "Campaign manager", metric: "42", label: "active campaigns", secondary: "91%", cost: "$19.25", pipeline: "$35,480" },
    reporting: { title: "Agency reporting", metric: "459", label: "qualified leads", secondary: "$18.40", cost: "$18.40", pipeline: "$37,724" },
    landing: { title: "Landing page performance", metric: "100", label: "on-platform leads", secondary: "$3.10", cost: "$3.10", pipeline: "$28,940" },
    proposal: { title: "Media proposal builder", metric: "$24K", label: "recommended budget", secondary: "4 phases", cost: "$21.80", pipeline: "$52,600" },
    creative: { title: "Creative workspace", metric: "18", label: "approved concepts", secondary: "+31%", cost: "$17.65", pipeline: "$44,820" },
  },
  google: {
    performance: { title: "Google Ads performance", metric: "4.18×", label: "conversion value / cost", secondary: "+28.4%", cost: "$42.16", pipeline: "$52,980" },
    audience: { title: "Search intent insights", metric: "12.1K", label: "qualified searches", secondary: "+19.2%", cost: "$38.70", pipeline: "$48,320" },
    campaigns: { title: "Google Ads manager", metric: "36", label: "active campaigns", secondary: "94%", cost: "$41.80", pipeline: "$56,440" },
    reporting: { title: "Search campaign reporting", metric: "752", label: "tracked conversions", secondary: "$42.16", cost: "$42.16", pipeline: "$61,280" },
    landing: { title: "Landing page performance", metric: "19.02%", label: "conversion rate", secondary: "8.7/10", cost: "$36.25", pipeline: "$58,760" },
    proposal: { title: "Google Ads proposal builder", metric: "$32.5K", label: "recommended budget", secondary: "4 phases", cost: "$44.10", pipeline: "$72,500" },
    creative: { title: "Ads and keyword workspace", metric: "214", label: "approved ads", secondary: "+22.7%", cost: "$39.85", pipeline: "$64,920" },
  },
  seo: {
    performance: { title: "Organic search performance", metric: "+68%", label: "qualified organic traffic", secondary: "+42.3%", cost: "24.1", pipeline: "1,284" },
    audience: { title: "Local search visibility", metric: "82%", label: "map pack coverage", secondary: "+31.6%", cost: "4.8★", pipeline: "426" },
    campaigns: { title: "SEO delivery workspace", metric: "148", label: "priority tasks complete", secondary: "93%", cost: "91/100", pipeline: "2,760" },
    reporting: { title: "Agency SEO reporting", metric: "4.2K", label: "search impressions", secondary: "+522", cost: "1.2%", pipeline: "50" },
    landing: { title: "On-page optimization", metric: "74", label: "pages improved", secondary: "+28.9%", cost: "89/100", pipeline: "318" },
    proposal: { title: "SEO opportunity audit", metric: "126", label: "growth opportunities", secondary: "34 fixes", cost: "96/100", pipeline: "840" },
    creative: { title: "Content and authority plan", metric: "38", label: "content briefs approved", secondary: "+46.2%", cost: "62", pipeline: "1,940" },
  },
  ppc: {
    performance: { title: "Cross-channel PPC performance", metric: "4.36×", label: "blended return on spend", secondary: "+32.8%", cost: "$39.20", pipeline: "$68,740" },
    audience: { title: "Paid audience intelligence", metric: "438K", label: "qualified impressions", secondary: "+26.4%", cost: "$21.70", pipeline: "$58,320" },
    campaigns: { title: "PPC campaign control", metric: "64", label: "active campaigns", secondary: "95%", cost: "$34.85", pipeline: "$72,460" },
    reporting: { title: "Agency PPC reporting", metric: "986", label: "tracked conversions", secondary: "+41.2%", cost: "$36.40", pipeline: "$84,920" },
    landing: { title: "PPC landing page results", metric: "18.7%", label: "conversion rate", secondary: "+29.5%", cost: "$31.10", pipeline: "$76,580" },
    proposal: { title: "PPC opportunity proposal", metric: "$48K", label: "recommended media plan", secondary: "5 channels", cost: "$40.25", pipeline: "$96,400" },
    creative: { title: "PPC creative and keyword lab", metric: "286", label: "approved assets", secondary: "+24.6%", cost: "$33.90", pipeline: "$81,260" },
  },
  social: {
    performance: { title: "Social content performance", metric: "+74%", label: "meaningful engagement", secondary: "+38.2%", cost: "4.8%", pipeline: "1.42M" },
    audience: { title: "Community audience insights", metric: "286K", label: "engaged community reach", secondary: "+29.6%", cost: "68%", pipeline: "42,680" },
    campaigns: { title: "Content calendar control", metric: "84", label: "posts scheduled", secondary: "96%", cost: "12", pipeline: "318" },
    reporting: { title: "Agency social reporting", metric: "6.8K", label: "content interactions", secondary: "+44.1%", cost: "5.2%", pipeline: "52,940" },
    landing: { title: "Social conversion journey", metric: "14.6%", label: "profile-to-site action rate", secondary: "+21.8%", cost: "3.9%", pipeline: "8,760" },
    proposal: { title: "Social strategy roadmap", metric: "90 days", label: "content growth plan", secondary: "4 channels", cost: "24", pipeline: "36" },
    creative: { title: "Social content studio", metric: "126", label: "approved social assets", secondary: "+36.4%", cost: "18", pipeline: "92" },
  },
  design: {
    performance: { title: "Website experience overview", metric: "+46%", label: "qualified visitor actions", secondary: "+31.2%", cost: "1.8s", pipeline: "94/100" },
    audience: { title: "User journey insights", metric: "72%", label: "priority journey completion", secondary: "+24.7%", cost: "4.6/5", pipeline: "18,420" },
    campaigns: { title: "Website design delivery", metric: "28", label: "screens approved", secondary: "92%", cost: "12", pipeline: "48" },
    reporting: { title: "Design QA and performance", metric: "96", label: "experience quality score", secondary: "+18.4%", cost: "98/100", pipeline: "2.1s" },
    landing: { title: "Responsive website preview", metric: "16.8%", label: "visitor conversion rate", secondary: "+27.6%", cost: "1.7s", pipeline: "8,920" },
    proposal: { title: "Website design roadmap", metric: "6 weeks", label: "planned design delivery", secondary: "4 phases", cost: "24", pipeline: "36" },
    creative: { title: "UI and visual design library", metric: "64", label: "approved components", secondary: "+42.1%", cost: "18", pipeline: "96" },
  },
  development: {
    performance: { title: "Website engineering overview", metric: "99.9%", label: "stable production uptime", secondary: "+36.8%", cost: "1.4s", pipeline: "98/100" },
    audience: { title: "Usability and device coverage", metric: "97%", label: "journeys passing QA", secondary: "+22.4%", cost: "AA", pipeline: "42" },
    campaigns: { title: "Release pipeline control", metric: "36", label: "features delivered", secondary: "94%", cost: "18", pipeline: "128" },
    reporting: { title: "Technical QA and monitoring", metric: "98", label: "engineering quality score", secondary: "+19.6%", cost: "0.04%", pipeline: "1.6s" },
    landing: { title: "Custom landing page build", metric: "17.4%", label: "conversion completion", secondary: "+26.3%", cost: "1.3s", pipeline: "9,480" },
    proposal: { title: "Web development roadmap", metric: "8 weeks", label: "planned build delivery", secondary: "5 phases", cost: "32", pipeline: "54" },
    creative: { title: "Component and template system", metric: "86", label: "reusable components", secondary: "+48.5%", cost: "24", pipeline: "99" },
  },
  graphics: {
    performance: { title: "Creative production overview", metric: "142", label: "assets delivered", secondary: "+43.8%", cost: "96%", pipeline: "18" },
    audience: { title: "Brand and audience insights", metric: "84%", label: "message recognition", secondary: "+26.1%", cost: "4.7/5", pipeline: "36,480" },
    campaigns: { title: "Creative production queue", metric: "48", label: "active deliverables", secondary: "94%", cost: "12", pipeline: "186" },
    reporting: { title: "Creative QA and consistency", metric: "97", label: "brand consistency score", secondary: "+18.9%", cost: "6", pipeline: "124" },
    landing: { title: "Campaign creative performance", metric: "+38%", label: "qualified engagement", secondary: "+27.4%", cost: "5.6%", pipeline: "68,420" },
    proposal: { title: "Creative services roadmap", metric: "30 days", label: "planned production cycle", secondary: "5 formats", cost: "24", pipeline: "42" },
    creative: { title: "Multi-format design studio", metric: "96", label: "approved design assets", secondary: "+41.6%", cost: "18", pipeline: "100" },
  },
  content: {
    performance: { title: "Editorial performance overview", metric: "38", label: "pieces delivered", secondary: "+34.6%", cost: "4m 18s", pipeline: "21.6K" },
    audience: { title: "Audience and voice insights", metric: "82%", label: "priority-topic coverage", secondary: "+27.8%", cost: "4.7/5", pipeline: "148" },
    campaigns: { title: "Content production calendar", metric: "46", label: "active assignments", secondary: "96%", cost: "12", pipeline: "186" },
    reporting: { title: "Content impact reporting", metric: "+62%", label: "qualified organic clicks", secondary: "+29.4%", cost: "3.8%", pipeline: "42,680" },
    landing: { title: "Website copy performance", metric: "16.2%", label: "reader-to-action rate", secondary: "+24.1%", cost: "73%", pipeline: "8,940" },
    proposal: { title: "Editorial strategy roadmap", metric: "90 days", label: "planned content cycle", secondary: "5 formats", cost: "24", pipeline: "52" },
    creative: { title: "Brand voice writing studio", metric: "84", label: "approved content assets", secondary: "+38.7%", cost: "18", pipeline: "96" },
  },
  ghl: {
    performance: { title: "Agency CRM performance", metric: "3,842", label: "contacts managed", secondary: "+31.8%", cost: "2m 14s", pipeline: "$86,420" },
    audience: { title: "Lead journey intelligence", metric: "72%", label: "qualified lead coverage", secondary: "+24.6%", cost: "18", pipeline: "1,286" },
    campaigns: { title: "Opportunity pipeline control", metric: "186", label: "open opportunities", secondary: "94%", cost: "24", pipeline: "$124K" },
    reporting: { title: "Agency reporting workspace", metric: "418", label: "appointments attributed", secondary: "+38.2%", cost: "6.4%", pipeline: "$148K" },
    landing: { title: "Funnel and page performance", metric: "18.4%", label: "visitor-to-lead rate", secondary: "+27.1%", cost: "1.6s", pipeline: "12,840" },
    proposal: { title: "GoHighLevel launch roadmap", metric: "30 days", label: "planned implementation", secondary: "6 systems", cost: "42", pipeline: "12" },
    creative: { title: "Automation workflow studio", metric: "46", label: "active workflows", secondary: "+43.5%", cost: "18", pipeline: "8,620" },
  },
};

const bars = [38, 58, 46, 72, 66, 86, 78, 94, 84];
const trendPoints = "0,128 55,108 110,116 165,72 220,88 275,48 330,61 385,28 440,42 500,14";

function DashboardVisualization({ variant, mix, channel }: { variant: DashboardVariant; mix: string[]; channel: DashboardChannel }) {
  if (variant === "campaigns" && channel === "ghl") {
    const stages = [
      { name: "New lead", count: 48, cards: [["Avery Dental", "$4,800"], ["Northline HVAC", "$6,200"]] },
      { name: "Contacted", count: 31, cards: [["Oak & Stone", "$3,400"], ["Clearview Care", "$5,100"]] },
      { name: "Appointment", count: 19, cards: [["Summit Roofing", "$8,600"], ["Brightworks", "$4,250"]] },
      { name: "Won", count: 12, cards: [["Horizon Legal", "$7,900"], ["Evergreen Co.", "$5,750"]] },
    ];

    return (
      <div className="facebook-service__dashboard-view">
        <div className="hc-ghl-pipeline">
          {stages.map((stage) => <div key={stage.name}><header><b>{stage.name}</b><span>{stage.count}</span></header>{stage.cards.map(([name, value]) => <p key={name}><b>{name}</b><small>{value} opportunity</small></p>)}</div>)}
        </div>
        <div className="hc-ghl-automation"><i>Form submitted</i><span>→</span><i>Assign owner</i><span>→</span><i>Send follow-up</i><span>→</span><i>Book appointment</i></div>
      </div>
    );
  }

  if (variant === "campaigns" && channel === "content") {
    const columns = [
      { name: "Briefed", cards: ["Service-page rewrite", "Quarterly guide"] },
      { name: "Writing", cards: ["Customer case study", "Email sequence"] },
      { name: "Editing", cards: ["Local SEO article", "Landing-page copy"] },
      { name: "Approved", cards: ["Brand story", "Campaign toolkit"] },
    ];

    return <div className="facebook-service__dashboard-view"><div className="hc-content-board">{columns.map((column) => <div key={column.name}><b>{column.name}</b>{column.cards.map((card, index) => <span key={card}>{card}<small>{index === 0 ? "DUE THIS WEEK" : "IN REVIEW"}</small></span>)}</div>)}</div></div>;
  }

  if (variant === "audience") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__audience-view">
        <div className="facebook-service__audience-map">
          <span className="bubble bubble--one">High intent</span><span className="bubble bubble--two">Returning</span><span className="bubble bubble--three">Local</span><span className="bubble bubble--four">New demand</span>
        </div>
        <div className="facebook-service__segment-list"><small>Priority segments</small>{mix.map((item, index) => <div key={item}><span>{item}</span><i><b style={{ width: `${[88, 64, 42][index]}%` }} /></i><strong>{[46, 32, 22][index]}%</strong></div>)}</div>
      </div>
    );
  }

  if (variant === "campaigns") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__campaign-table">
        <div className="facebook-service__table-row facebook-service__table-head"><span>Campaign</span><span>Status</span><span>Result</span><span>Trend</span></div>
        {["Priority growth", "High-intent core", "Retention engine", "Market expansion"].map((name, index) => <div className="facebook-service__table-row" key={name}><span><i />{name}<small>{mix[index % mix.length]}</small></span><span><b>Active</b></span><span><strong>{[128, 94, 76, 52][index]}</strong><small>conversions</small></span><span className="mini-bars">{[38, 58, 46, 72, 64].map((height, barIndex) => <i key={barIndex} style={{ height: `${height + index * 4}%` }} />)}</span></div>)}
      </div>
    );
  }

  if (variant === "reporting") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__reporting-view">
        <div className="facebook-service__report-chart"><div><span>Performance over time</span><b>+41.2%</b></div><svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="yellowArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffd21a" stopOpacity=".42" /><stop offset="1" stopColor="#ffd21a" stopOpacity="0" /></linearGradient></defs><polygon points={`0,150 ${trendPoints} 500,150`} fill="url(#yellowArea)" /><polyline points={trendPoints} fill="none" stroke="#d9a900" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg><div className="facebook-service__chart-axis"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div>
        <div className="facebook-service__report-notes"><small>Agency summary</small><strong>3 wins this period</strong><ul><li>Conversion volume increased</li><li>Cost efficiency improved</li><li>Next test is ready</li></ul><button type="button">Download report</button></div>
      </div>
    );
  }

  if (variant === "landing") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__landing-view">
        <div className="facebook-service__landing-page"><header><b>CLIENT.</b><span /><span /><button type="button">Get started</button></header><main><div><small>Built for action</small><strong>Turn attention into a qualified conversation.</strong><p /><p /><button type="button">Start now</button></div><form><b>Request a quote</b><i /><i /><i /><button type="button">Continue</button></form></main></div>
        <div className="facebook-service__experiment-card"><small>Experiment 04</small><strong>Message-first hero</strong><div><span>Conversion lift</span><b>+28.9%</b></div><i><b /></i><p>Winning variation</p></div>
      </div>
    );
  }

  if (variant === "proposal") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__proposal-view">
        <div className="facebook-service__proposal-timeline">{["Audit", "Strategy", "Launch", "Scale"].map((step, index) => <div key={step}><i>{index + 1}</i><span>{step}</span><small>{["Opportunity review", "Channel plan", "Build and QA", "Optimize growth"][index]}</small></div>)}</div>
        <div className="facebook-service__proposal-budget"><div><span>Recommended plan</span><strong>$48,000</strong><small>90-day investment</small></div>{mix.map((item, index) => <p key={item}><span>{item}</span><i><b style={{ width: `${[82, 58, 36][index]}%` }} /></i><strong>{[50, 30, 20][index]}%</strong></p>)}<button type="button">Present proposal</button></div>
      </div>
    );
  }

  if (variant === "creative") {
    return (
      <div className="facebook-service__dashboard-view facebook-service__creative-view">
        <div className="facebook-service__asset-library"><div className="asset asset--hero"><small>Concept 01</small><strong>Lead with the outcome.</strong><span>Primary creative</span></div><div className="asset asset--quote"><b>“</b><strong>A sharper reason to act.</strong></div><div className="asset asset--stat"><strong>42%</strong><span>higher engagement</span></div><div className="asset asset--cta"><small>Version B</small><button type="button">Get the result</button></div></div>
        <div className="facebook-service__creative-score"><small>Creative score</small><strong>92</strong><div><i /></div><span>Ready for testing</span><ul>{["Message match", "Visual clarity", "Call to action"].map(item => <li key={item}>{item}<b>✓</b></li>)}</ul></div>
      </div>
    );
  }

  return (
    <div className="facebook-service__dashboard-grid">
      <div className="facebook-service__dashboard-chart"><div><span>Performance trend</span><b>Growing steadily</b></div><div className="facebook-service__bars">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
      <div className="facebook-service__dashboard-panel"><span>Campaign mix</span><div className="facebook-service__donut"><b>68%</b></div><ul>{mix.map((item, index) => <li key={item}>{item} <b>{[46, 32, 22][index]}%</b></li>)}</ul></div>
    </div>
  );
}

const facebookAdsFaqs = [
  {
    question: "What is included in white-label Facebook Ads management?",
    answer: "Your scope can include account audits, campaign strategy, audience research, tracking coordination, campaign builds, budget pacing, ongoing optimization, creative coordination, landing-page recommendations, and agency-ready performance reporting. We confirm the exact deliverables before onboarding begins.",
  },
  {
    question: "Will clients know that Yellow is managing their campaigns?",
    answer: "Only if you want them to. Yellow is built to work quietly behind your agency, following your communication model and producing deliverables under your brand. We can remain completely behind the scenes or join selected calls as a member of your team.",
  },
  {
    question: "Who owns the ad account, pixel, audiences, and campaign data?",
    answer: "Your agency or client retains ownership of the accounts, assets, and data. Yellow works through secure, role-based access and documents the setup so your team keeps visibility and control throughout the engagement.",
  },
  {
    question: "Do you provide ad copy, creative, and landing-page support?",
    answer: "Yes. We can coordinate paid-social copy, static and motion creative, offer positioning, and conversion-focused landing-page support as part of the scope. Creative work is planned alongside media strategy so every asset has a clear testing purpose.",
  },
  {
    question: "How do onboarding and approvals work?",
    answer: "We begin with goals, account access, historical performance, brand guidance, responsibilities, and communication preferences. Your account lead then prepares the launch plan, approval points, reporting rhythm, and first campaign priorities before production moves forward.",
  },
  {
    question: "What will our agency receive in performance reports?",
    answer: "Reports connect spend and platform activity to the agreed business goals. They include clear performance context, notable changes, testing insights, current priorities, and recommended next actions—formatted so your team can confidently use them in client conversations.",
  },
];

export function DashboardMock({ variant, channel = "facebook" }: { variant: DashboardVariant; channel?: DashboardChannel }) {
  const copy = dashboardCopy[channel][variant];
  const navigation = channel === "google"
    ? ["Overview", "Campaigns", "Keywords", "Ads", "Reports"]
    : channel === "seo"
      ? ["Overview", "Rankings", "Pages", "Links", "Reports"]
      : channel === "ppc"
        ? ["Overview", "Channels", "Campaigns", "Creative", "Reports"]
        : channel === "social"
          ? ["Overview", "Calendar", "Community", "Content", "Reports"]
          : channel === "design"
            ? ["Overview", "Pages", "Components", "Prototype", "Review"]
            : channel === "development"
              ? ["Overview", "Backlog", "Components", "Releases", "QA"]
              : channel === "graphics"
                ? ["Overview", "Requests", "Brands", "Assets", "Review"]
              : channel === "content"
                  ? ["Overview", "Briefs", "Drafts", "Calendar", "Review"]
                  : channel === "ghl"
                    ? ["Overview", "Contacts", "Pipeline", "Automation", "Reports"]
      : ["Overview", "Campaigns", "Audiences", "Creative", "Reports"];
  const mix = channel === "google"
    ? ["Search", "Display", "Shopping"]
    : channel === "seo"
      ? ["On-page", "Technical", "Authority"]
      : channel === "ppc"
        ? ["Google", "Microsoft", "Social"]
        : channel === "social"
          ? ["Instagram", "LinkedIn", "Facebook"]
          : channel === "design"
            ? ["Desktop", "Tablet", "Mobile"]
            : channel === "development"
              ? ["Frontend", "CMS", "Integrations"]
              : channel === "graphics"
                ? ["Digital", "Print", "Brand"]
              : channel === "content"
                  ? ["Website", "Editorial", "Campaign"]
                  : channel === "ghl"
                    ? ["CRM", "Funnels", "Automation"]
      : ["Prospecting", "Retargeting", "Retention"];
  const workspaceLabel = channel === "google" ? "Search workspace" : channel === "seo" ? "Organic growth workspace" : channel === "ppc" ? "Cross-channel media workspace" : channel === "social" ? "Social content workspace" : channel === "design" ? "Website design workspace" : channel === "development" ? "Web engineering workspace" : channel === "graphics" ? "Creative production workspace" : channel === "content" ? "Content production workspace" : channel === "ghl" ? "GoHighLevel operations workspace" : "Campaign workspace";

  return (
    <div className={`facebook-service__dashboard facebook-service__dashboard--${variant}`} role="img" aria-label={`${copy.title} dashboard illustration`}>
      <div className="facebook-service__browser-bar"><i /><i /><i /><span>{copy.title}</span><b>Last 30 days</b></div>
      <div className="facebook-service__dashboard-body">
        <aside><strong>Y.</strong>{navigation.map((item, index) => <span className={index === 0 ? "is-active" : undefined} key={item}>{item}</span>)}</aside>
        <div className="facebook-service__dashboard-main">
          <div className="facebook-service__dashboard-heading"><div><small>{workspaceLabel}</small><h3>{copy.title}</h3></div><span>Export report</span></div>
          <div className="facebook-service__dashboard-metrics">
            <span><small>Primary result</small><b>{copy.metric}</b><em>{copy.label}</em></span>
            <span><small>Performance</small><b>{copy.secondary}</b><em>vs. previous period</em></span>
            <span><small>Quality score</small><b>92</b><em>healthy delivery</em></span>
          </div>
          <DashboardVisualization variant={variant} mix={mix} channel={channel} />
        </div>
      </div>
      <div className="facebook-service__float-card facebook-service__float-card--left"><small>Cost per result</small><b>{copy.cost}</b><i /></div>
      <div className="facebook-service__float-card facebook-service__float-card--right"><small>Qualified pipeline</small><b>{copy.pipeline}</b><div>{[35, 58, 82, 64].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="facebook-service__check-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ServiceHeading({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);
  const splitAt = Math.ceil(words.length / 2);

  return (
    <h2>
      <span>{words.slice(0, splitAt).join(" ")}</span>{" "}
      <span className="facebook-service__heading-accent">{words.slice(splitAt).join(" ")}</span>
    </h2>
  );
}

export function ContentSection({
  title,
  paragraphs,
  dashboard,
  items,
  soft = false,
  channel = "facebook",
}: {
  title: string;
  paragraphs: string[];
  dashboard: DashboardVariant;
  items?: string[];
  soft?: boolean;
  channel?: DashboardChannel;
}) {
  return (
    <section className={`facebook-service__section${soft ? " facebook-service__section--soft" : ""}`}>
      <div className="container facebook-service__content">
        <ServiceHeading>{title}</ServiceHeading>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {items && <CheckList items={items} />}
        <DashboardMock variant={dashboard} channel={channel} />
      </div>
    </section>
  );
}

export function FacebookAdsServicePage() {
  return (
    <main id="top" className="inner-page facebook-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label paid social</p>
          <h1>White Label <span>Facebook Ads</span></h1>
          <p>Campaign strategy, creative coordination, media buying, optimization, and agency-ready reporting—delivered quietly behind your brand.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Built for qualified demand</p>
          <ServiceHeading>Drive qualified sales and leads with Yellow.</ServiceHeading>
          <p>Facebook and Instagram can create demand at every stage of the customer journey, but dependable results require more than boosting posts. Yellow combines audience research, offer strategy, conversion-focused creative, accurate tracking, and disciplined media buying to help your agency turn paid social into a measurable growth channel.</p>
          <p>Our specialists work as an extension of your team. We plan campaigns around the client&apos;s goals, test messages and audiences, monitor spend, improve performance, and prepare clear reports that your agency can confidently present as its own.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading"><ServiceHeading>Hear what our partners have to say about us.</ServiceHeading><div><p>Agency partners value responsive communication, specialist depth, and work that arrives ready to share.</p><CheckList items={["Scale without expanding fixed overhead", "Protect every client relationship", "Deliver through experienced specialists"]} /></div></div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency partner discussing Yellow's Facebook Ads support" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner sharing a paid social success story" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Who are white-label Facebook Ads services for?"
        paragraphs={[
          "This service is designed for agencies that want to sell or strengthen paid social without building a complete media department in-house. It is equally useful when your current team is at capacity, a client needs deeper platform expertise, or campaign performance requires a more structured testing and optimization process.",
          "Yellow supports web, branding, SEO, creative, and full-service agencies that want dependable Facebook and Instagram delivery under their own name. We adapt to your workflow, communicate through your preferred channels, and give your client-facing team the context needed to lead every conversation with confidence.",
          "You stay focused on relationships, strategy, and growth while our specialists manage the detailed fulfillment work—from account audits and audience planning to daily monitoring, creative testing, and conversion reporting.",
        ]}
        dashboard="audience"
        soft
      />

      <ContentSection
        title="Achieve more by doing less."
        paragraphs={[
          "A flexible white-label model gives your agency the benefits of a trained paid social team without the cost, delays, and management load of recruiting every role internally. Yellow supplies the systems, specialist attention, and production capacity required to keep campaigns moving.",
          "We manage planning, setup, testing, budget pacing, optimization, and reporting while keeping approvals and priorities visible to your team. The result is consistent client delivery, more time for business development, and an offering that can grow without lowering your quality standard.",
        ]}
        dashboard="campaigns"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add a specialist paid social team to your offer while your people stay focused on relationships, sales, and strategy.</p><CheckList items={["Expand your existing and new services", "Generate more revenue without increasing fixed costs", "Save and reallocate your team&apos;s time", "Customize delivery across client niches", "Gain practical platform insight and reporting"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete delivery model</p><ServiceHeading>Benefits of Yellow&apos;s white-label Facebook Ads services.</ServiceHeading><p>More than media buying, this is an accountable system for planning, producing, improving, and reporting paid social campaigns under your agency&apos;s name.</p><p>Your account lead coordinates audiences, creative, approvals, optimization, and reporting so every campaign moves forward with clear ownership and a consistent standard of delivery.</p></div></section>

      <ContentSection
        title="Power up your Facebook Ads offering."
        paragraphs={["Give clients the focused strategy and ongoing attention their campaigns need while reclaiming time for project leadership and business development. Yellow combines accessible specialists with clear workflows, so your team receives dependable delivery without losing visibility or control."]}
        items={["Transparent scopes and pricing", "Focused platform guidance", "Niche-aware campaign strategy", "Account audits and performance reviews", "Flexible campaign and testing capacity"]}
        dashboard="reporting"
        soft
      />

      <ContentSection
        title="Conversion-focused landing page support."
        paragraphs={[
          "Paid social performance depends on what happens after the click. Our strategists, writers, designers, and developers help shape landing pages around the audience, offer, message, and conversion action so campaign intent carries through the complete experience.",
          "We review message match, page hierarchy, mobile usability, form friction, tracking, and speed. Where appropriate, we recommend structured A/B tests that reveal which value propositions, layouts, and calls to action produce stronger lead quality and conversion rates.",
        ]}
        dashboard="landing"
      />

      <ContentSection
        title="Fully managed white-label Facebook Ads services."
        paragraphs={["Your agency receives a practical combination of strategic direction, hands-on campaign management, and presentation-ready reporting. The delivery model can support one account or a broader client portfolio and flex as your pipeline changes."]}
        items={["Customized agency-ready reporting", "Growth-focused campaign strategy", "Adaptive budgets and testing plans", "Experienced paid social specialists", "Dedicated account and project leads", "Responsive communication and clear next actions", "Meta account, pixel, and event setup", "Analytics and conversion tracking coordination"]}
        dashboard="campaigns"
        soft
      />

      <ContentSection
        title="In-depth Facebook Ads proposals."
        paragraphs={[
          "Generic proposals make it difficult for prospects to understand the opportunity. Yellow helps your agency prepare focused recommendations based on the client&apos;s market, offer, audience, current funnel, competitive context, and realistic media requirements.",
          "Our proposal support can include account observations, campaign priorities, audience direction, creative recommendations, measurement requirements, budget scenarios, and a phased launch plan. You receive a clear, professional story that helps your team sell the strategy—not just a list of platform tasks.",
        ]}
        dashboard="proposal"
      />

      <ContentSection
        title="Copywriting and creative design."
        paragraphs={[
          "Attention is earned through relevance. Our paid social copy and creative process connects the client&apos;s offer with the real motivations, questions, and objections of the target audience, producing ads designed for the feed rather than adapted from generic brand content.",
          "Writers, designers, and media buyers collaborate on concepts, hooks, formats, and calls to action before launch. Once campaigns are live, performance data informs the next creative cycle so the strongest messages can be expanded and weaker approaches replaced quickly.",
        ]}
        dashboard="creative"
        soft
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>Still deciding whether white-label paid social fits your agency? These are the questions we hear most often.</p></div>
          <div className="facebook-service__faq-list">
            {facebookAdsFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your team behind the scenes</p><ServiceHeading>Ready to add paid social capacity?</ServiceHeading><p>Let&apos;s map the right white-label Facebook Ads model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
