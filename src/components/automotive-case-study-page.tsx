import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/interactive";

const deliverySteps = [
  "SEO strategy", "Keyword research", "On-page SEO", "Google Business Profile", "Authority building",
  "Competitor analysis", "Content marketing", "Market research", "Google Ads", "Call-focused PPC",
];

const leadMagnetBenefits = [
  "Generate more qualified leads and conversions",
  "Build a useful first-party prospect list",
  "Keep potential customers engaged",
  "Improve lead retention and sales follow-up",
  "Strengthen the impact of paid campaigns",
];

const results = [
  ["+303.33%", "qualified leads"],
  ["+232.98%", "conversion rate"],
  ["−75.04%", "cost per lead"],
  ["+101%", "organic users"],
];

const trafficBars = [32, 45, 39, 58, 51, 68, 62, 79, 71, 88, 82, 96];
const campaignRows = [
  ["Regional freight", "124", "$31.40", "78%"],
  ["Trucking services", "97", "$39.12", "62%"],
  ["Call campaign", "82", "$44.86", "51%"],
];
const seoRows = [
  ["trucking company near me", "03", "+18"],
  ["regional freight services", "05", "+12"],
  ["commercial trucking quote", "08", "+21"],
];

function BoardHeader({ title, context }: { title: string; context: string }) {
  return (
    <header className="automotive-board__header">
      <span className="automotive-board__window" aria-hidden="true"><i /><i /><i /></span>
      <strong>{title}</strong>
      <small>{context}</small>
    </header>
  );
}

function TrafficDashboard() {
  return (
    <div className="automotive-board automotive-board--traffic" role="img" aria-label="Organic traffic dashboard showing sustained growth in users, sessions, and referral sources">
      <BoardHeader title="Organic growth" context="Last 12 months" />
      <div className="automotive-board__metrics">
        <article><span>Users</span><strong>18,136</strong><small>+101%</small></article>
        <article><span>New users</span><strong>16,902</strong><small>+115.53%</small></article>
        <article><span>Sessions</span><strong>22,418</strong><small>+103.54%</small></article>
      </div>
      <div className="automotive-traffic__body">
        <div className="automotive-traffic__chart">
          <div className="automotive-traffic__chart-head"><strong>Qualified visits</strong><span>+8,641</span></div>
          <div className="automotive-traffic__bars" aria-hidden="true">{trafficBars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          <div className="automotive-traffic__months"><span>Sep</span><span>Dec</span><span>Mar</span><span>Jun</span><span>Aug</span></div>
        </div>
        <div className="automotive-traffic__sources">
          <strong>Acquisition mix</strong>
          <div><span>Organic search</span><b>54%</b><i><em style={{ width: "54%" }} /></i></div>
          <div><span>Paid search</span><b>29%</b><i><em style={{ width: "29%" }} /></i></div>
          <div><span>Direct &amp; referral</span><b>17%</b><i><em style={{ width: "17%" }} /></i></div>
        </div>
      </div>
    </div>
  );
}

function ResultsDashboard() {
  return (
    <div className="automotive-board automotive-board--results" role="img" aria-label="Acquisition dashboard showing 303 qualified leads and improved conversion efficiency">
      <BoardHeader title="Acquisition performance" context="Live campaign view" />
      <div className="automotive-results__layout">
        <div className="automotive-results__score"><span>Qualified leads</span><strong>303</strong><small>+303.33% vs. previous period</small></div>
        <div className="automotive-results__funnel">
          <div><span>8,420</span><small>Visitors</small></div>
          <div><span>1,296</span><small>Intent actions</small></div>
          <div><span>303</span><small>Leads</small></div>
          <div><span>92</span><small>Sales calls</small></div>
        </div>
        <div className="automotive-results__summary">
          <article><span>Conversion rate</span><strong>3.60%</strong><small>+232.98%</small></article>
          <article><span>Cost per lead</span><strong>$42.18</strong><small>−75.04%</small></article>
          <article><span>Calls answered</span><strong>91.4%</strong><small>+26.8%</small></article>
        </div>
      </div>
    </div>
  );
}

function ComparisonDashboard() {
  const cards = [
    ["Users", "9,022", "18,136", "50%", "92%"],
    ["Backlinks", "76", "101", "42%", "66%"],
    ["Qualified leads", "75", "303", "25%", "96%"],
    ["Conversion rate", "1.08%", "3.60%", "31%", "88%"],
  ];
  return (
    <div className="automotive-comparison" role="img" aria-label="Before and after comparison for users, backlinks, qualified leads, and conversion rate">
      <div className="automotive-comparison__legend"><strong>Before / after performance</strong><span><i /> Before</span><span><i /> After Yellow</span></div>
      <div className="automotive-comparison__grid">{cards.map(([label, before, after, beforeWidth, afterWidth]) => (
        <article key={label}>
          <span>{label}</span>
          <div><small>{before}</small><i><em style={{ width: beforeWidth }} /></i></div>
          <div><small>{after}</small><i><em style={{ width: afterWidth }} /></i></div>
        </article>
      ))}</div>
    </div>
  );
}

function SeoDashboard() {
  return (
    <div className="automotive-board automotive-board--seo" role="img" aria-label="SEO dashboard with keyword positions and technical health scores">
      <BoardHeader title="Search visibility" context="Organic" />
      <div className="automotive-seo__top">
        <div><span>Visibility</span><strong>67.4%</strong><small>+38.2 pts</small></div>
        <div className="automotive-seo__scores"><i><strong>94</strong><small>Health</small></i><i><strong>89</strong><small>Content</small></i><i><strong>96</strong><small>Local</small></i></div>
      </div>
      <div className="automotive-seo__table"><div><b>Search query</b><b>Position</b><b>Change</b></div>{seoRows.map(([term, position, change]) => <div key={term}><span>{term}</span><strong>{position}</strong><em>{change}</em></div>)}</div>
    </div>
  );
}

function AdsDashboard() {
  return (
    <div className="automotive-board automotive-board--ads" role="img" aria-label="Google Ads dashboard showing campaign leads, cost per lead, and budget allocation">
      <BoardHeader title="Paid search control" context="Google Ads" />
      <div className="automotive-ads__hero"><div><span>Lead efficiency</span><strong>4.2×</strong><small>more leads from the same intent</small></div><div className="automotive-ads__pulse" aria-hidden="true">{[36, 58, 44, 76, 62, 90, 72, 100].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
      <div className="automotive-ads__table"><div><b>Campaign</b><b>Leads</b><b>Cost / lead</b><b>Budget</b></div>{campaignRows.map(([campaign, leads, cost, budget]) => <div key={campaign}><span><i />{campaign}</span><strong>{leads}</strong><span>{cost}</span><em><i style={{ width: budget }} /></em></div>)}</div>
    </div>
  );
}

function StudyHeading({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);
  const splitAt = Math.ceil(words.length / 2);
  return <h2><span>{words.slice(0, splitAt).join(" ")}</span>{" "}<span>{words.slice(splitAt).join(" ")}</span></h2>;
}

export function AutomotiveCaseStudyPage() {
  return (
    <main id="top" className="inner-page automotive-study">
      <section className="automotive-study__hero">
        <div className="container automotive-study__hero-inner">
          <p className="eyebrow">Automotive digital marketing case study</p>
          <h1>How we generated <span>303.33% more leads</span> through Google Ads.</h1>
          <p>A connected SEO, content, local visibility, and paid-search program helped a regional trucking company turn an underperforming website into a dependable source of qualified inquiries.</p>
          <div className="automotive-study__hero-actions">
            <Link href="/book-appointment" className="button button--dark">Build your growth plan <span aria-hidden="true">↗</span></Link>
            <a href="#results" className="text-link">See the results <span aria-hidden="true">↓</span></a>
          </div>
          <div className="automotive-study__hero-proof" aria-label="Campaign highlights">
            <article><strong>303.33%</strong><span>more qualified leads</span></article>
            <article><strong>75.04%</strong><span>lower cost per lead</span></article>
            <article><strong>101%</strong><span>more organic users</span></article>
          </div>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__overview">
        <div className="container automotive-study__overview-grid">
          <div><p className="eyebrow">Client overview</p><StudyHeading>A regional trucking business ready to compete for better work.</StudyHeading></div>
          <div className="automotive-study__briefs">
            <article><span>01</span><h3>Their objective</h3><p>The client had invested in a custom website, but it was not producing consistent inquiries. They needed stronger regional visibility, more qualified visitors, and a clear position in a competitive trucking market.</p></article>
            <article><span>02</span><h3>The challenge</h3><p>The custom-coded site created technical limits for search optimization. The business wanted measurable traffic and conversion gains while keeping the existing website and protecting the experience its internal team had built.</p></article>
          </div>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__section--soft">
        <div className="container automotive-study__copy">
          <p className="eyebrow">Our digital marketing solution</p>
          <StudyHeading>Search visibility, useful content, and paid demand working as one system.</StudyHeading>
          <p>Yellow began with market, competitor, and keyword research. Low-opportunity terms were replaced with queries that matched the client&apos;s services, geography, and commercial priorities. New on-page and off-page content gave search engines clearer context while giving prospects more useful reasons to engage.</p>
          <p>Local search work improved the company&apos;s presence for regional intent, while UX recommendations focused attention on the actions most likely to become real inquiries. Paid-search specialists removed irrelevant keywords, rebuilt the ad messaging, and shifted key campaigns toward phone calls to reduce friction.</p>
          <p>The same strategy connected organic discovery, paid acquisition, landing-page relevance, and lead follow-up. Each channel had a specific role, but all of them worked toward the same qualified-lead goal.</p>
          <div className="automotive-study__image automotive-study__image--site"><Image src="/images/case-studies/automotive/strategy-yellow.png" alt="Trucking company website and service pages used in the campaign" width={566} height={539} sizes="(max-width: 640px) 100vw, 566px" unoptimized /></div>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__method">
        <div className="container">
          <div className="automotive-study__section-heading"><div><p className="eyebrow">How we did it</p><StudyHeading>Ten connected capabilities. One commercial outcome.</StudyHeading></div><p>The account was rebuilt around a shared measurement plan, so research, content, local visibility, technical improvements, and paid campaigns reinforced one another.</p></div>
          <div className="automotive-study__method-grid">{deliverySteps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></article>)}</div>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__lead-magnet">
        <div className="container automotive-study__split">
          <div><p className="eyebrow">Free lead-magnet campaign</p><StudyHeading>Turn helpful expertise into measurable demand.</StudyHeading><p>High-value content became a practical acquisition asset rather than a one-time publication. Paid promotion introduced that content to the right audience, while organic optimization continued building visibility over time.</p><ul>{leadMagnetBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div>
          <TrafficDashboard />
        </div>
      </section>

      <section id="results" className="automotive-study__section automotive-study__results">
        <div className="container">
          <div className="automotive-study__section-heading"><div><p className="eyebrow">The results</p><StudyHeading>A stronger pipeline, not just more activity.</StudyHeading></div><p>Better relevance, simpler conversion paths, and coordinated optimization improved lead volume and efficiency at the same time.</p></div>
          <div className="automotive-study__metric-grid">{results.map(([metric, label]) => <article key={label}><strong>{metric}</strong><span>{label}</span></article>)}</div>
          <ResultsDashboard />
          <ComparisonDashboard />
        </div>
      </section>

      <section className="automotive-study__section automotive-study__analysis">
        <div className="container">
          <p className="eyebrow">SEO and PPC analysis</p><StudyHeading>Organic momentum and paid efficiency improved together.</StudyHeading>
          <div className="automotive-study__analysis-grid">
            <article><div><span>Organic</span><h3>SEO analysis</h3><p>Search-focused content and authority work increased relevant discovery while regional optimization connected the business with prospects in its service area.</p></div><SeoDashboard /></article>
            <article><div><span>Paid search</span><h3>PPC analysis</h3><p>Cleaner keyword targeting and call-focused ads reduced wasted spend. The team used performance data to refine the account around prospects most likely to become customers.</p></div><AdsDashboard /></article>
          </div>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__conclusion">
        <div className="container automotive-study__split">
          <div><p className="eyebrow">Spend less and earn more</p><StudyHeading>Relevance made every click work harder.</StudyHeading><p>More precise content improved engagement and reduced bounce. Stronger search relevance lifted rankings, while paid campaigns reached better-qualified prospects with clearer next steps.</p><p>The decisive result was not one isolated number. The client gained a more efficient acquisition system: lower cost per lead, higher conversion, stronger organic visibility, and a website that finally supported business development.</p></div>
          <blockquote className="automotive-testimonial">
            <div className="automotive-testimonial__top"><span aria-hidden="true">“</span><small>Client perspective</small></div>
            <p>I couldn&apos;t recommend the team more highly. Their work is impeccable, and their communication is incredibly professional.</p>
            <footer><span>SB</span><div><strong>Seth Brown</strong><small>Agency partner</small></div><div className="automotive-testimonial__rating" aria-label="Five out of five stars">★★★★★</div></footer>
          </blockquote>
        </div>
      </section>

      <section className="automotive-study__section automotive-study__form-section">
        <div className="container automotive-study__form-grid">
          <div><p className="eyebrow">Scale with Yellow</p><StudyHeading>Make your next client result the story worth sharing.</StudyHeading><p>Tell us where performance is stuck. We&apos;ll map the search, content, media, conversion, and reporting priorities that can create a clearer path to growth.</p></div>
          <LeadForm />
        </div>
      </section>

      <section className="automotive-study__section automotive-study__onboarding">
        <div className="container automotive-study__copy">
          <p className="eyebrow">White-label onboarding</p><StudyHeading>A simple, confidential path from discovery to delivery.</StudyHeading>
          <p>Your agency stays at the center of the client relationship. Yellow supports the work behind the scenes with clear access rules, a focused onboarding call, documented requirements, an agreed launch plan, and visible project ownership.</p>
          <div className="automotive-study__image automotive-study__image--onboarding"><Image src="/images/case-studies/automotive/onboarding-yellow.webp" alt="Five-step white-label onboarding process" width={1024} height={325} sizes="(max-width: 800px) 100vw, 86vw" /></div>
          <Link href="/book-appointment" className="button button--yellow">Book a free strategy call <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
