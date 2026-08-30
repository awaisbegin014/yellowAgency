import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";

export const growthCaseStudySlugs = [
  "hvac-digital-marketing-case-study",
  "outdoor-blinds-digital-marketing-case-study",
  "cold-email-outreach-digital-marketing-case-study",
  "auto-dealer-google-ads-case-study",
  "party-rentals-google-ads-case-study",
] as const;

export type GrowthCaseStudySlug = (typeof growthCaseStudySlugs)[number];

type GrowthStudy = {
  eyebrow: string;
  headlineStart: string;
  headlineAccent: string;
  headlineEnd: string;
  clientOverview: string;
  objective: string;
  challenge: string;
  solutionHeading: string;
  solution: string[];
  mediaLabel: string;
  methodHeading: string;
  methodIntro: string;
  methods: string[];
  resultHeading: string;
  resultCopy: string[];
  metrics: readonly [string, string][];
  chartLabel: string;
  chartValues: number[];
  before: string[];
  after: string[];
  conclusionHeading: string;
  conclusion: string[];
};

const sharedLeadBenefits = [
  "Generate more qualified leads and conversions",
  "Build a useful first-party contact list",
  "Maintain prospect engagement and interest",
  "Improve retention and sales follow-up",
  "Amplify the impact of every campaign",
];

const studies: Record<GrowthCaseStudySlug, GrowthStudy> = {
  "hvac-digital-marketing-case-study": {
    eyebrow: "HVAC digital marketing case study",
    headlineStart: "How we grew conversions by ",
    headlineAccent: "215.79%",
    headlineEnd: " in three months for our HVAC client?",
    clientOverview: "An established heating and cooling company serving homeowners and businesses across its region. The team was known for dependable installation, maintenance, and repair—but its digital campaigns were not producing dependable demand.",
    objective: "Generate qualified leads and sales within a fixed media budget, improve local brand awareness, and replace inconsistent advertising with a measurable acquisition plan.",
    challenge: "The campaign had to create sales during the HVAC off-season, with only three months to prove the model and improve performance.",
    solutionHeading: "Build a tighter paid-search funnel around urgent service intent.",
    solution: [
      "Yellow restructured the PPC funnel around the services and search moments most likely to produce calls. Keyword bidding, negative keywords, ad groups, and landing-page messages were aligned to one conversion plan.",
      "Research and A/B testing shaped a stronger promotional offer and clearer calls to action. Budget was moved toward the ads, audiences, and locations demonstrating the best commercial intent.",
    ],
    mediaLabel: "HVAC paid search campaign strategy and conversion planning",
    methodHeading: "Ten coordinated moves created one faster route to qualified calls.",
    methodIntro: "The three-month sprint connected research, local visibility, content, and paid media around a single conversion target. Weekly performance reviews helped the team identify wasted spend quickly, strengthen the best-performing messages, and keep every channel focused on qualified service calls.",
    methods: ["SEO strategy", "Keyword research", "On-page SEO", "Local optimization", "Authority building", "Competitor analysis", "Content marketing", "Market research", "Google Ads", "PPC optimization"],
    resultHeading: "More leads, stronger conversion, and a dramatically lower cost per opportunity.",
    resultCopy: ["Within three months, qualified leads increased by 135.85%. More visits arrived through Google Ads, while better keyword alignment brought in prospects ready to book service.", "After full optimization, conversion rate growth reached 215.79% and cost per lead fell by 81%.", "Just as importantly, the client gained a repeatable off-season acquisition model. Weekly evidence now showed which searches, offers, and locations were most likely to create a valuable service call."],
    metrics: [["+215.79%", "conversion growth"], ["+135.85%", "qualified leads"], ["−81%", "cost per lead"], ["3 months", "time to impact"]],
    chartLabel: "Conversion momentum",
    chartValues: [18, 25, 32, 28, 44, 53, 61, 68, 76, 84, 92, 100],
    before: ["Seasonal campaign inconsistency", "Broad, inefficient keywords", "Unclear offer and CTA", "High cost per lead"],
    after: ["Focused off-season demand", "High-intent service terms", "Tested promotion and messaging", "81% lower cost per lead"],
    conclusionHeading: "A more relevant click became a more valuable service call.",
    conclusion: ["The winning change was focus. Better keywords, clearer offers, and disciplined bidding helped the company reach people already looking for heating and cooling support.", "That relevance improved interaction, reduced wasted spend, and gave the client a repeatable system for generating demand outside its busiest season."],
  },
  "outdoor-blinds-digital-marketing-case-study": {
    eyebrow: "Outdoor blinds digital marketing case study",
    headlineStart: "How we increased organic leads by ",
    headlineAccent: "106%",
    headlineEnd: " for our outdoor blinds partner?",
    clientOverview: "A shade-solutions specialist installing blinds, shutters, awnings, and pergolas for homes and commercial spaces. Strong service and custom design had built its reputation across local and international markets.",
    objective: "Replace an outdated four-year-old website, strengthen local discovery, and turn higher visibility into more enquiries and sales before peak season.",
    challenge: "The new experience and acquisition plan had to be live before summer, leaving less than a year to rebuild the digital foundation and produce meaningful growth.",
    solutionHeading: "Pair a more useful website with rankable local demand.",
    solution: [
      "Yellow assessed site performance and search visibility, then prioritized focused local keywords, credible links, and service content that could compete in the client’s real market.",
      "Paid search and social creative supported the organic program. Budgets were reallocated, irrelevant categories were paused, and landing paths were simplified around quote requests.",
    ],
    mediaLabel: "Outdoor blinds website redesign and local marketing campaign",
    methodHeading: "Search, content, creative, and conversion design moved in sequence.",
    methodIntro: "The campaign was planned backward from the summer deadline so foundational work could compound before peak demand arrived. Website improvements, search visibility, creative, and paid promotion were sequenced carefully so the new experience was ready when local buying interest was highest.",
    methods: ["Website assessment", "SEO strategy", "Keyword research", "On-page SEO", "Local optimization", "Link building", "Content marketing", "Google Ads", "Social creative", "Conversion testing"],
    resultHeading: "A stronger website captured more of the market at the right time.",
    resultCopy: ["Total traffic increased by 90% and organic lead traffic grew by 106%. Better backlinks and rankings helped the client appear more often for high-value local searches.", "Business growth reached 108% in less than a year, giving the team a stronger digital platform before its busiest season.", "The redesigned journey also made that new visibility more useful. Visitors could understand the product range faster, compare relevant solutions, and move naturally toward a quote request."],
    metrics: [["+106%", "organic lead traffic"], ["+108%", "business growth"], ["+90%", "total website traffic"], ["<1 year", "delivery window"]],
    chartLabel: "Organic lead growth",
    chartValues: [24, 31, 35, 43, 48, 57, 64, 69, 77, 85, 91, 100],
    before: ["Four-year-old website", "Low local visibility", "Difficult short-tail keywords", "Fragmented media spend"],
    after: ["Conversion-ready experience", "Stronger local rankings", "Focused, rankable intent", "Coordinated organic and paid plan"],
    conclusionHeading: "A better digital foundation made the busy season work harder.",
    conclusion: ["The website, search strategy, and media plan were treated as one commercial system. Visitors arrived through more relevant searches and encountered clearer reasons to request a quote.", "That alignment improved traffic quality, organic lead volume, and overall business growth without relying on one channel alone."],
  },
  "cold-email-outreach-digital-marketing-case-study": {
    eyebrow: "Cold email outreach case study",
    headlineStart: "How cold email created ",
    headlineAccent: "$8,000",
    headlineEnd: " in opportunities in one month.",
    clientOverview: "A US-based digital marketing agency with strong delivery capabilities but limited internal capacity for scalable lead generation and outbound outreach.",
    objective: "Expand the client roster and revenue through a managed cold-email program that could deliver qualified conversations and measurable sales opportunities.",
    challenge: "The agency needed specialist email infrastructure, reliable lead sourcing, qualification, and a way to operate larger campaigns without damaging deliverability.",
    solutionHeading: "Build the outbound engine before increasing send volume.",
    solution: [
      "Yellow established the technical sending infrastructure, sourced and qualified prospects, and managed campaign execution through Instantly.ai. Messaging was shaped around relevance rather than volume alone.",
      "Deliverability, opens, clicks, replies, and opportunity quality were reviewed together so each round of outreach improved the next one.",
    ],
    mediaLabel: "Cold email outreach campaign content and lead qualification workflow",
    methodHeading: "A complete outreach system—from infrastructure to booked conversations.",
    methodIntro: "Every stage protected sender health while improving the relevance and commercial value of replies. Clean data, careful audience segments, controlled sending volume, and responsive message testing worked together to turn outreach activity into conversations the sales team could genuinely progress.",
    methods: ["Domain setup", "Mailbox warming", "Lead sourcing", "Data validation", "Audience segments", "Message strategy", "Sequence build", "Campaign launch", "Reply handling", "Reporting"],
    resultHeading: "Eleven thousand sends became sixteen real opportunities.",
    resultCopy: ["In one month, the campaign sent 11,900 emails and achieved a 43% open rate, a 1.1% click rate, and a 2% reply rate.", "The most important result was 16 qualified opportunities potentially worth $8,000 in new business, with many replies progressing to Google Meet conversations.", "The agency also finished with protected sending infrastructure, validated prospect data, and a measured outreach process it could repeat without rebuilding the channel from scratch."],
    metrics: [["$8,000", "opportunity value"], ["11,900", "emails sent"], ["43%", "open rate"], ["16", "solid opportunities"]],
    chartLabel: "Outbound response activity",
    chartValues: [15, 28, 22, 41, 36, 55, 47, 68, 61, 77, 86, 100],
    before: ["No dedicated infrastructure", "Manual prospect research", "Limited outreach expertise", "No scalable campaign system"],
    after: ["Protected sending foundation", "Qualified lead pipeline", "Measured sequence strategy", "16 commercial opportunities"],
    conclusionHeading: "Volume created reach. Relevance created revenue.",
    conclusion: ["The campaign succeeded because infrastructure, data quality, messaging, and reply handling were managed as one workflow.", "Instead of chasing vanity metrics, the program optimized toward useful conversations—giving the agency a repeatable outbound channel and a clear line to revenue."],
  },
  "auto-dealer-google-ads-case-study": {
    eyebrow: "Auto dealer Google Ads case study",
    headlineStart: "Leading an automotive dealer to ",
    headlineAccent: "Google Ads success.",
    headlineEnd: "",
    clientOverview: "A reputable Atlanta car dealership with a strong in-store presence but limited growth in leads and sales from its existing Google Ads account.",
    objective: "Generate more qualified vehicle enquiries without increasing acquisition costs, and turn more paid website visits into real customers.",
    challenge: "Low conversion rates, high cost per lead, and unstable click and conversion performance made it difficult to plan spend or scale confidently.",
    solutionHeading: "Rebuild the account around high-intent vehicle shoppers.",
    solution: [
      "Yellow audited keywords, ad copy, bidding, placement, and audience targeting to identify where spend was leaking. Negative keywords removed unrelated traffic while high-intent terms received clearer, offer-led ads.",
      "Conversion-focused bidding, remarketing lists, in-market segments, demographic signals, and A/B testing created a more disciplined route from search to enquiry.",
    ],
    mediaLabel: "Automotive Google Ads performance and audience targeting dashboard",
    methodHeading: "Every account decision moved closer to a qualified vehicle enquiry.",
    methodIntro: "The rebuild connected search intent, audience signals, ad relevance, bidding, and landing-page action. Instead of optimizing isolated metrics, the team followed the complete journey from search term to vehicle enquiry and moved budget toward the combinations producing real customer intent.",
    methods: ["Account audit", "Search-term review", "Negative keywords", "High-intent groups", "Ad copy testing", "Offer strategy", "Smart bidding", "Remarketing", "Audience targeting", "Performance reporting"],
    resultHeading: "More conversions at a more efficient cost.",
    resultCopy: ["Clicks increased to 1.16K while conversions rose to 97.33. Cost per conversion fell to $27.80, creating a much more efficient use of the dealership’s advertising budget.", "The campaign delivered 21.9K impressions from $2.71K in managed spend, expanding visibility while improving bottom-line performance.", "Cleaner search terms and stronger audience signals also gave the dealership a more predictable optimization rhythm, making it easier to protect efficiency as enquiry volume increased."],
    metrics: [["97.33", "conversions"], ["$27.80", "cost per conversion"], ["21.9K", "impressions"], ["1.16K", "qualified clicks"]],
    chartLabel: "Conversion performance",
    chartValues: [26, 21, 34, 39, 36, 51, 48, 67, 62, 79, 88, 100],
    before: ["Low conversion rate", "High acquisition cost", "Unrelated search traffic", "Unstable account performance"],
    after: ["97.33 conversions", "$27.80 cost per conversion", "High-intent traffic mix", "Predictable optimization rhythm"],
    conclusionHeading: "Better intent made the same budget go further.",
    conclusion: ["Sharper keyword selection and more relevant ad copy improved interaction and reduced the distance between click and enquiry.", "With bidding and audiences guided by conversion evidence, the dealership gained a more efficient paid-search system and a clearer basis for future growth."],
  },
  "party-rentals-google-ads-case-study": {
    eyebrow: "Party rentals Google Ads case study",
    headlineStart: "How a local party rental company achieved a ",
    headlineAccent: "39% click-through rate.",
    headlineEnd: "",
    clientOverview: "A family-run party rental company established in 2006, serving Long Island and Suffolk County with bounce houses, tents, obstacle courses, and inflatable slides.",
    objective: "Increase local online visibility and generate more enquiries for party rentals in a competitive service area.",
    challenge: "Traditional advertising was underperforming, basic online campaigns lacked optimization, and the business needed to distinguish its family-run service from larger competitors.",
    solutionHeading: "Make local intent, service range, and trust visible in every ad.",
    solution: [
      "Yellow built a focused Google Ads plan covering keyword research, persuasive ad copy, location targeting, extensions, conversion-ready landing pages, and careful budget control.",
      "Terms such as ‘party rentals Long Island’ and ‘bouncer rentals’ were matched with the client’s experience, family-run story, service details, phone number, and geographic coverage.",
    ],
    mediaLabel: "Party rental Google Ads campaign and local conversion strategy",
    methodHeading: "Local targeting and clear service intent turned attention into bookings.",
    methodIntro: "The one-week launch concentrated budget on the searches, locations, and messages most likely to produce enquiries. Daily checks kept spend close to Long Island demand, surfaced the rental categories earning attention, and gave the family-run business a clear view of which ads were creating calls and bookings.",
    methods: ["Keyword research", "Local search intent", "Ad copy", "Location targeting", "Ad extensions", "Service messaging", "Landing-page UX", "Budget control", "Call tracking", "Daily optimization"],
    resultHeading: "One week created broad reach and immediate booking demand.",
    resultCopy: ["The campaign generated 421 clicks from 1,080 impressions, producing an exceptional 39% click-through rate.", "With $992 in total spend and a $2.36 cost per click, the client saw a noticeable rise in calls and bookings—particularly for inflatable attractions.", "The first week also revealed which rental categories and local messages attracted the strongest response, giving the family-run company a clearer basis for future budget and seasonal planning."],
    metrics: [["39%", "click-through rate"], ["421", "clicks in one week"], ["$2.36", "cost per click"], ["1,080", "local impressions"]],
    chartLabel: "Local response rate",
    chartValues: [22, 35, 31, 48, 43, 60, 56, 72, 69, 84, 91, 100],
    before: ["Traditional ad dependence", "Basic digital campaigns", "Weak local differentiation", "Limited performance insight"],
    after: ["39% click-through rate", "$2.36 cost per click", "Clear family-run positioning", "Visible booking impact"],
    conclusionHeading: "Smart local ads created a bigger impact without a bigger budget.",
    conclusion: ["The campaign reached people actively searching for the exact services the client offered, in the exact places it served.", "That precision produced a high response rate, controlled click costs, and a direct increase in calls and bookings within the first week."],
  },
};

function StudyHeading({ children }: { children: string }) {
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

function PerformanceBoard({ study }: { study: GrowthStudy }) {
  return (
    <div className="growth-study__board" role="img" aria-label={`${study.chartLabel} dashboard featuring ${study.metrics.map(([value, label]) => `${value} ${label}`).join(", ")}`}>
      <header><span className="growth-study__board-mark" aria-hidden="true">Y</span><strong>{study.chartLabel}</strong><small>Campaign performance</small></header>
      <div className="growth-study__board-stats">{study.metrics.slice(0, 3).map(([value, label], index) => <article className={index === 0 ? "is-primary" : ""} key={label}><span>{label}</span><strong>{value}</strong><small>{index === 0 ? "Primary outcome" : "Measured result"}</small></article>)}</div>
      <div className="growth-study__board-chart"><div><strong>Performance trend</strong><span>Campaign period</span></div><div aria-hidden="true">{study.chartValues.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><footer><span>Start</span><span>Optimize</span><span>Scale</span><span>Result</span></footer></div>
    </div>
  );
}

function BeforeAfter({ study }: { study: GrowthStudy }) {
  return (
    <div className="growth-study__comparison">
      <article><span>Before Yellow</span><h3>What held performance back.</h3><ul>{study.before.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><span>After Yellow</span><h3>What changed the trajectory.</h3><ul>{study.after.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </div>
  );
}

function OnboardingFlow() {
  const steps = ["Discovery", "Access", "Audit", "90-day plan", "Launch"];
  return <div className="growth-study__onboarding-flow" aria-label="Five-step white-label onboarding process">{steps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 ? <i aria-hidden="true">→</i> : null}</article>)}</div>;
}

export function GrowthCaseStudyPage({ slug }: { slug: GrowthCaseStudySlug }) {
  const study = studies[slug];

  return (
    <main id="top" className={`inner-page growth-study growth-study--${slug}`}>
      <section className="growth-study__hero"><div className="container"><p className="eyebrow">{study.eyebrow}</p><h1>{study.headlineStart}<span>{study.headlineAccent}</span>{study.headlineEnd}</h1><Link href="/book-appointment" className="button button--dark">Free 20-min consultation <span aria-hidden="true">↗</span></Link></div></section>

      <section className="growth-study__section growth-study__overview"><div className="container growth-study__overview-grid"><div><p className="eyebrow">Client overview</p><StudyHeading>A strong business ready for a stronger acquisition system.</StudyHeading><p>{study.clientOverview}</p></div><div className="growth-study__briefs"><article><span>01</span><h3>Their objective</h3><p>{study.objective}</p></article><article><span>02</span><h3>The challenge</h3><p>{study.challenge}</p></article></div></div></section>

      <section className="growth-study__section growth-study__solution"><div className="container growth-study__copy"><p className="eyebrow">Our digital marketing solution</p><StudyHeading>{study.solutionHeading}</StudyHeading><div className="growth-study__solution-copy">{study.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><MediaPlaceholder label={study.mediaLabel} className="growth-study__media" /></div></section>

      <section className="growth-study__section growth-study__method"><div className="container"><div className="growth-study__section-heading"><div><p className="eyebrow">How we did it</p><StudyHeading>{study.methodHeading}</StudyHeading></div><p>{study.methodIntro}</p></div><div className="growth-study__method-grid">{study.methods.map((method, index) => <article key={method}><span>{String(index + 1).padStart(2, "0")}</span><h3>{method}</h3></article>)}</div></div></section>

      <section className="growth-study__section growth-study__lead-magnet"><div className="container growth-study__lead-grid"><div><p className="eyebrow">Free lead-magnet campaign</p><StudyHeading>Turn useful expertise into measurable demand.</StudyHeading><p>Helpful content creates a reason for the right prospect to engage before they are ready to buy. Yellow connects that value to focused promotion and clear follow-up.</p><ul>{sharedLeadBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><Link href="/book-appointment" className="button button--dark">Plan your campaign <span aria-hidden="true">↗</span></Link></div><div className="growth-study__lead-card"><span>Free growth playbook</span><strong>{study.metrics[0][0]}</strong><p>{study.metrics[0][1]}</p><div><i /><i /><i /></div><small>Strategy · Media · Conversion</small></div></div></section>

      <section id="results" className="growth-study__section growth-study__results"><div className="container"><div className="growth-study__section-heading growth-study__results-heading"><div><p className="eyebrow">The results</p><StudyHeading>{study.resultHeading}</StudyHeading><div className="growth-study__results-copy">{study.resultCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></div><div className="growth-study__metric-grid">{study.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div><PerformanceBoard study={study} /></div></section>

      <section className="growth-study__section growth-study__analysis"><div className="container growth-study__copy"><p className="eyebrow">Before + after analysis</p><StudyHeading>See what changed—not just what increased.</StudyHeading><p>Better results came from fixing the system behind the numbers: targeting, message, journey, and measurement.</p><BeforeAfter study={study} /></div></section>

      <section className="growth-study__section growth-study__conclusion"><div className="container growth-study__conclusion-grid"><div><p className="eyebrow">Spend less and earn more</p><StudyHeading>{study.conclusionHeading}</StudyHeading>{study.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><blockquote><span aria-hidden="true">“</span><p>I couldn&apos;t recommend the team more highly. Their work is impeccable and their communication is incredibly professional.</p><footer><b>SB</b><div><strong>Seth Brown</strong><small>Agency partner</small></div><em aria-label="Five out of five stars">★★★★★</em></footer></blockquote></div></section>

      <section className="growth-study__section growth-study__onboarding"><div className="container growth-study__copy"><p className="eyebrow">White-label onboarding</p><StudyHeading>A simple, confidential path from opportunity to delivery.</StudyHeading><p>Your agency remains at the center of the client relationship. Yellow brings the audit, strategy, specialists, and reporting structure that make confident delivery possible.</p><OnboardingFlow /></div></section>

      <section className="growth-study__cta"><div className="container"><div><p className="eyebrow">Your next growth story</p><h2>Can Yellow take care of your clients?</h2><p>Book a focused strategy call and see how our white-label team can support your agency&apos;s next result.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
