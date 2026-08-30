import Link from "next/link";

const capabilities = [
  "SEO strategy",
  "Keyword research",
  "On-page SEO",
  "Google Business Profile",
  "Authority building",
  "Competitor analysis",
  "Content marketing",
  "Market research",
  "Google Ads",
  "Call-focused PPC",
];

const leadMagnetBenefits = [
  "Generate more qualified patient enquiries",
  "Build a useful first-party email list",
  "Maintain patient interest between visits",
  "Improve lead retention and follow-up",
  "Amplify paid and organic campaign performance",
];

const resultMetrics = [
  ["+1,161.76%", "organic traffic growth"],
  ["+472.17%", "yearly organic page traffic"],
  ["+73.85%", "conversion growth"],
  ["−64.83%", "cost per lead"],
];

const monthlyGrowth = [18, 24, 29, 38, 45, 53, 61, 72, 78, 87, 93, 100];

function CaseStudyHeading({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);
  const splitAt = Math.ceil(words.length / 2);
  const lead = words.slice(0, splitAt).join(" ");
  const accent = words.slice(splitAt).join(" ");

  return (
    <h2>
      <span>{lead}</span>
      {accent ? <>{" "}<span className="case-study-heading__accent">{accent}</span></> : null}
    </h2>
  );
}

function DashboardHeader({ title, label }: { title: string; label: string }) {
  return (
    <header className="dental-board__header">
      <span className="dental-board__mark" aria-hidden="true">Y</span>
      <strong>{title}</strong>
      <small>{label}</small>
    </header>
  );
}

function PatientJourneyBoard() {
  return (
    <div className="dental-board dental-journey" role="img" aria-label="Patient acquisition journey from search discovery to booked appointment">
      <DashboardHeader title="Patient acquisition system" label="Connected journey" />
      <div className="dental-journey__stages">
        <article><span>01</span><strong>Local discovery</strong><small>High-intent search</small></article>
        <i aria-hidden="true">→</i>
        <article><span>02</span><strong>Treatment trust</strong><small>Useful patient content</small></article>
        <i aria-hidden="true">→</i>
        <article><span>03</span><strong>Easy action</strong><small>Call or book online</small></article>
      </div>
      <div className="dental-journey__footer"><span>One strategy</span><strong>From first search to first visit.</strong><span>One measurement plan</span></div>
    </div>
  );
}

function GrowthDashboard() {
  return (
    <div className="dental-board dental-growth" role="img" aria-label="Organic growth dashboard showing a 1,161.76 percent increase">
      <DashboardHeader title="Organic demand" label="12 month view" />
      <div className="dental-growth__summary">
        <div><span>Organic growth</span><strong>1,161.76%</strong><small>↑ target exceeded</small></div>
        <div><span>Qualified actions</span><strong>+73.85%</strong><small>calls + appointments</small></div>
      </div>
      <div className="dental-growth__chart">
        <div className="dental-growth__chart-head"><strong>High-intent discovery</strong><span>Sep — Aug</span></div>
        <div className="dental-growth__bars" aria-hidden="true">
          {monthlyGrowth.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <div className="dental-growth__axis"><span>Sep</span><span>Dec</span><span>Mar</span><span>Jun</span><span>Aug</span></div>
      </div>
    </div>
  );
}

function ResultsDashboard() {
  return (
    <div className="dental-results-board" role="img" aria-label="Dental campaign dashboard summarising patient search, conversion, and lead efficiency">
      <div className="dental-results-board__rail">
        <span className="dental-board__mark" aria-hidden="true">Y</span>
        <i className="is-active">01</i><i>02</i><i>03</i><i>04</i>
        <small>Growth console</small>
      </div>
      <div className="dental-results-board__main">
        <header><div><span>Campaign overview</span><strong>Patient acquisition</strong></div><small>Updated today</small></header>
        <div className="dental-results-board__stats">
          <article><span>Organic reach</span><strong>+1,161.76%</strong><small>year over year</small></article>
          <article><span>Conversions</span><strong>+73.85%</strong><small>qualified actions</small></article>
          <article><span>Cost per lead</span><strong>−64.83%</strong><small>efficiency gain</small></article>
        </div>
        <div className="dental-results-board__lower">
          <div className="dental-results-board__line">
            <div><strong>Search visibility</strong><span>Compounding growth</span></div>
            <svg viewBox="0 0 640 180" aria-hidden="true">
              <defs><linearGradient id="dental-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffd21a" stopOpacity=".5"/><stop offset="1" stopColor="#ffd21a" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 160 C70 154 70 140 130 142 S220 122 270 126 S350 88 405 98 S485 55 535 70 S585 28 640 18 L640 180 L0 180 Z" fill="url(#dental-area)" />
              <path d="M0 160 C70 154 70 140 130 142 S220 122 270 126 S350 88 405 98 S485 55 535 70 S585 28 640 18" fill="none" stroke="#efb900" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="dental-results-board__mix"><strong>Lead mix</strong><div><i style={{ width: "72%" }} /><span>Organic <b>72%</b></span></div><div><i style={{ width: "19%" }} /><span>Paid search <b>19%</b></span></div><div><i style={{ width: "9%" }} /><span>Direct <b>9%</b></span></div></div>
        </div>
      </div>
    </div>
  );
}

function SeoBoard() {
  const rows = [
    ["dentist near me", "03", "+21"],
    ["family dental clinic", "05", "+16"],
    ["orthodontist consultation", "07", "+24"],
  ];
  return (
    <div className="dental-analysis-board dental-analysis-board--light" role="img" aria-label="Local SEO keyword visibility dashboard">
      <DashboardHeader title="Local search visibility" label="SEO" />
      <div className="dental-analysis-board__score"><div><span>Visibility</span><strong>86.4%</strong><small>+54.2 pts</small></div><i><strong>96</strong><small>Local health</small></i></div>
      <div className="dental-analysis-board__table"><div><b>Patient search</b><b>Rank</b><b>Change</b></div>{rows.map(([term, rank, change]) => <div key={term}><span>{term}</span><strong>{rank}</strong><em>{change}</em></div>)}</div>
    </div>
  );
}

function PpcBoard() {
  const rows = [
    ["Emergency care", "142", "$28.14"],
    ["New patient", "118", "$31.60"],
    ["Orthodontics", "84", "$39.22"],
  ];
  return (
    <div className="dental-analysis-board dental-analysis-board--dark" role="img" aria-label="Paid search campaign performance dashboard">
      <DashboardHeader title="Paid patient demand" label="Google Ads" />
      <div className="dental-analysis-board__paid"><div><span>Lead efficiency</span><strong>2.8×</strong><small>more qualified actions</small></div><div aria-hidden="true">{[32, 51, 43, 64, 59, 82, 73, 96].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
      <div className="dental-analysis-board__table"><div><b>Campaign</b><b>Leads</b><b>Cost / lead</b></div>{rows.map(([campaign, leads, cost]) => <div key={campaign}><span>{campaign}</span><strong>{leads}</strong><em>{cost}</em></div>)}</div>
    </div>
  );
}

function OnboardingFlow() {
  const steps = ["Discovery", "Access", "Audit", "90-day plan", "Launch"];
  return <div className="dental-onboarding__flow" aria-label="Five step white-label onboarding process">{steps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 ? <i aria-hidden="true">→</i> : null}</article>)}</div>;
}

export function DentalCaseStudyPage() {
  return (
    <main id="top" className="inner-page dental-study">
      <section className="dental-study__hero">
        <div className="container dental-study__hero-inner">
          <div className="dental-study__hero-copy">
            <p className="eyebrow">Dental digital marketing case study</p>
            <h1>How we grew organic leads by <span>1,161.76%</span> for our dental client?</h1>
            <div className="dental-study__hero-actions"><Link href="/book-appointment" className="button button--dark">Free 20-min consultation <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="dental-study__section dental-study__overview">
        <div className="container dental-study__overview-grid">
          <div className="dental-study__overview-intro"><p className="eyebrow">Client overview</p><CaseStudyHeading>A trusted local practice ready to be found by more patients.</CaseStudyHeading><p>The client provides dental and orthodontic care across its region, combining modern technology with a professional, patient-first experience. Strong referrals had built the practice—but digital discovery had not kept pace.</p></div>
          <div className="dental-study__challenge-grid">
            <article><span>01</span><h3>The objective</h3><p>Create a more functional website journey, strengthen search rankings, and turn organic and paid visibility into measurable appointment requests.</p></article>
            <article><span>02</span><h3>The challenge</h3><p>Rankings fluctuated because the practice depended on word of mouth. Yellow needed to build lasting demand in a competitive local healthcare market.</p></article>
          </div>
        </div>
      </section>

      <section className="dental-study__section dental-study__solution">
        <div className="container dental-study__copy">
          <p className="eyebrow">Our digital marketing solution</p>
          <CaseStudyHeading>Make every channel feel like one reassuring patient journey.</CaseStudyHeading>
          <div className="dental-study__solution-copy"><p>We began with market, competitor, and keyword research, replacing low-volume terms with searches that reflected real treatment needs and local intent. New ad messaging spoke directly to patient concerns while clearer landing-page paths made calls and appointment requests easier.</p><p>Local visibility, Google Business Profile optimization, useful treatment content, and authoritative links helped the practice build a credible search footprint. In parallel, a more disciplined paid-search structure reduced waste and focused investment on the services most likely to produce qualified enquiries.</p></div>
          <PatientJourneyBoard />
        </div>
      </section>

      <section className="dental-study__section dental-study__method">
        <div className="container">
          <div className="dental-study__section-heading"><div><p className="eyebrow">How we did it</p><CaseStudyHeading>Ten capabilities. One patient-growth system.</CaseStudyHeading></div><p>Strategy, content, local visibility, paid media, and conversion design shared the same priorities and measurement plan. The team mapped every activity to a patient decision—from discovering a nearby practice to understanding a treatment and confidently requesting an appointment.</p></div>
          <div className="dental-study__method-grid">{capabilities.map((capability, index) => <article key={capability}><span>{String(index + 1).padStart(2, "0")}</span><h3>{capability}</h3></article>)}</div>
        </div>
      </section>

      <section className="dental-study__section dental-study__lead-magnet">
        <div className="container dental-study__split">
          <div><p className="eyebrow">Free lead-magnet campaign</p><CaseStudyHeading>Turn helpful expertise into a reason to connect.</CaseStudyHeading><p>Patient education became an acquisition asset. Helpful content introduced the practice before treatment was urgent, while paid distribution and organic optimization kept that expertise working over time.</p><ul>{leadMagnetBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><Link href="/book-appointment" className="button button--dark">Plan your campaign <span aria-hidden="true">↗</span></Link></div>
          <GrowthDashboard />
        </div>
      </section>

      <section id="results" className="dental-study__section dental-study__results">
        <div className="container">
          <div className="dental-study__section-heading dental-study__results-heading"><div><p className="eyebrow">The results</p><CaseStudyHeading>A much stronger digital footprint—and a healthier pipeline.</CaseStudyHeading><div className="dental-study__results-copy"><p>The campaign exceeded its original growth target, raised high-intent visibility, and improved conversion efficiency at the same time.</p><p>More patients found the practice through relevant local and treatment searches, while stronger educational content gave them the confidence to call, request an appointment, or explore a service in greater detail.</p><p>Because organic search, paid media, and the landing experience were measured together, the practice gained more than a traffic increase—it gained a dependable patient-acquisition system built to keep compounding.</p></div></div></div>
          <div className="dental-study__metric-grid">{resultMetrics.map(([metric, label]) => <article key={label}><strong>{metric}</strong><span>{label}</span></article>)}</div>
          <ResultsDashboard />
        </div>
      </section>

      <section className="dental-study__section dental-study__analysis">
        <div className="container">
          <div className="dental-study__copy"><p className="eyebrow">SEO + PPC analysis</p><CaseStudyHeading>Organic authority and paid efficiency moved together.</CaseStudyHeading><p>More relevant keywords improved both search visibility and media performance—bringing the practice closer to patients already looking for care.</p></div>
          <div className="dental-study__analysis-grid"><article><div><span>Organic search</span><h3>Local SEO built compounding visibility.</h3><p>Treatment content, local optimization, and stronger authority signals improved rankings for the searches that lead to appointments.</p></div><SeoBoard /></article><article><div><span>Paid search</span><h3>Sharper intent made every click work harder.</h3><p>Refined targeting, better ad relevance, and easier conversion paths increased enquiries while reducing cost per lead.</p></div><PpcBoard /></article></div>
        </div>
      </section>

      <section className="dental-study__section dental-study__conclusion">
        <div className="container dental-study__split">
          <div><p className="eyebrow">Spend less and earn more</p><CaseStudyHeading>Relevance turned visibility into booked appointments.</CaseStudyHeading><p>More precise keywords attracted better-qualified prospects. Stronger content built confidence before the first call, while simpler landing-page actions removed friction from the decision.</p><p>The result was not just more traffic. The practice gained a connected acquisition system that improved visibility, conversion, and media efficiency together.</p></div>
          <blockquote><div className="dental-study__quote-mark" aria-hidden="true">“</div><p>I couldn&apos;t recommend the team more highly. Their work is impeccable and their communication is incredibly professional.</p><footer><span>SB</span><div><strong>Seth Brown</strong><small>Agency partner</small></div><div aria-label="Five out of five stars">★★★★★</div></footer></blockquote>
        </div>
      </section>

      <section className="dental-study__section dental-study__onboarding">
        <div className="container dental-study__copy">
          <p className="eyebrow">White-label onboarding</p>
          <CaseStudyHeading>Simple, confidential, and ready to move.</CaseStudyHeading>
          <p>Your agency stays in control of the client relationship. Yellow brings the audit, strategy, delivery team, and reporting structure that help you move from opportunity to execution with confidence.</p>
          <OnboardingFlow />
        </div>
      </section>

      <section className="dental-study__cta"><div className="container"><div><p className="eyebrow">Your next growth story</p><h2>Can Yellow take care of your clients?</h2><p>Book a focused strategy call and see how our white-label team can support your agency&apos;s next win.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
