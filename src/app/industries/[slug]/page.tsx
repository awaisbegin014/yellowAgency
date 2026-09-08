import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/page-templates";
import { findIndustry, industries } from "@/content/site-data";

export function generateStaticParams() { return industries.map((industry) => ({ slug: industry.slug })); }

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) return {};
  return { title: `${industry.title} Marketing Agency`, description: industry.summary };
}

type IndustryConfig = {
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  metric: string;
  metricLabel: string;
  image: string;
  teamImage: string;
  opportunityEyebrow: string;
  opportunityHeading: string;
  opportunityBody: string;
  deliveryEyebrow: string;
  deliveryHeading: string;
  stepsHeading: string;
  steps: { heading: string; body: string }[];
  teamEyebrow: string;
  teamHeading: string;
  teamCopy: string;
  teamCtaLabel: string;
  teamCtaHref: string;
};

const industryConfigs: Record<string, IndustryConfig> = {
  hvac: {
    eyebrow: "HVAC marketing & demand generation",
    title: "High-urgency customer acquisition for heating and cooling contractors.",
    summary: "Dominate local service areas, capture emergency replacement demand, and build dependable year-round service maintenance agreements.",
    description: "HVAC homeowners don't spend weeks researching when their furnace fails in freezing weather or their AC cuts out during a heatwave. They call the first licensed, reputable team that answers the phone with confirmed dispatch availability.",
    points: [
      "Real-time 24/7 call tracking with direct dispatch CRM attribution",
      "Emergency weather-spike PPC & Google Local Services (LSA) bidding",
      "Annual maintenance agreement nurturing & automated tune-up reminders",
      "Automated 5-star Google review capture across technician service routes",
    ],
    metric: "+215%",
    metricLabel: "growth in seasonal service calls & changeout estimates",
    image: "/images/unsplash/contractor.jpg",
    teamImage: "/images/unsplash/hvac-team.jpg",
    opportunityEyebrow: "The HVAC Growth Formula",
    opportunityHeading: "Capture urgent emergency demand and lock in profitable changeouts.",
    opportunityBody: "We monitor regional weather alerts and heatwave forecasts in real time, dialing up ad spend on high-intent search terms exactly when homeowners pick up the phone. The result is maximum route density and zero wasted budget during mild weeks.",
    deliveryEyebrow: "Field-Tested Dispatch Engine",
    deliveryHeading: "A predictable inbound pipeline for installations and service calls.",
    stepsHeading: "From emergency search to signed service ticket.",
    steps: [
      { heading: "Territory Audit", body: "Analyze local service areas, competitor density, peak seasonal weather trends, and average ticket margins." },
      { heading: "Rapid Deployment", body: "Launch click-to-call ads, Google Guaranteed local service ads, and mobile-first emergency booking funnels." },
      { heading: "Dispatch Integration", body: "Route incoming calls directly to dispatch with automated instant SMS follow-up for any missed ring." },
      { heading: "Club Maintenance", body: "Automate seasonal tune-up reminders, warranty inspections, and recurring preventative care club signups." },
    ],
    teamEyebrow: "Home Services Squad",
    teamHeading: "Specialists who understand emergency dispatch, seasonal spikes, and route density.",
    teamCopy: "Our dedicated HVAC team monitors weather fluctuations, regional heatwaves, and freeze warnings to dial up ad spend exactly when homeowners pick up the phone.",
    teamCtaLabel: "View HVAC Case Study",
    teamCtaHref: "/case-studies/hvac-digital-marketing-case-study",
  },
  dental: {
    eyebrow: "Dental practice marketing & patient acquisition",
    title: "Fill treatment schedules with high-value cosmetic and restorative cases.",
    summary: "A patient-first system spanning hyper-local search, smile makeover creative, reputation authority, and frictionless online booking.",
    description: "Routine cleanings keep the doors open, but high-ticket cosmetic veneers, Invisalign, and dental implants create true practice enterprise value. We design digital journeys that address patient anxiety, build clinical trust, and fill surgical chairs.",
    points: [
      "High-ticket treatment funnels (Invisalign, Implants, Smile Makeovers)",
      "Local map pack & Google Business Profile ranking dominance",
      "Frictionless online booking & automated consultation reminders",
      "HIPAA-compliant conversion tracking and lead routing",
    ],
    metric: "+1,161%",
    metricLabel: "increase in organic patient discovery & case bookings",
    image: "/images/unsplash/dental-care.jpg",
    teamImage: "/images/unsplash/dental-team.jpg",
    opportunityEyebrow: "The Patient Acquisition Shift",
    opportunityHeading: "Attract high-value cases that transform practice profitability.",
    opportunityBody: "Patients researching cosmetic dentistry need empathy, visual proof, and clinical transparency. We position your doctors as premier local authorities through smile transformation galleries, educational video snippets, and seamless consultation scheduling.",
    deliveryEyebrow: "Clinical Precision Growth",
    deliveryHeading: "Targeted patient acquisition built for single and multi-location practices.",
    stepsHeading: "Guiding patients from hesitation to the dental chair.",
    steps: [
      { heading: "Clinical Alignment", body: "Analyze treatment profit margins, geographic patient demographics, and competitor practice offerings." },
      { heading: "Patient Journey", body: "Craft warm, empathetic video content, smile gallery transformations, and transparent payment option guides." },
      { heading: "Omnichannel Launch", body: "Target neighborhood ZIP codes with Google Search, Meta smile makeovers, and retargeting ads." },
      { heading: "Lifetime Recall", body: "Automate appointment reminders, hygiene recall campaigns, and post-visit review requests." },
    ],
    teamEyebrow: "Healthcare Growth Guild",
    teamHeading: "Dental marketing strategists committed to filling your hygiene and surgical chairs.",
    teamCopy: "Our healthcare specialists craft patient journeys that build genuine clinical trust before the first consultation, protecting patient privacy while scaling high-margin procedures.",
    teamCtaLabel: "View Dental Case Study",
    teamCtaHref: "/case-studies/dental-digital-marketing-case-study",
  },
  "cosmetic-surgeon": {
    eyebrow: "Plastic & cosmetic surgery marketing",
    title: "Discreet, trust-first digital experiences for elective surgical procedures.",
    summary: "Position your surgical clinic as the premier regional authority across facelifts, rhinoplasty, breast procedures, and body contouring.",
    description: "Elective surgical candidates spend months researching surgeons, board certifications, and before-and-after galleries before scheduling a private consultation. We design sophisticated, high-consideration digital touchpoints that convert discreet inquiries into confirmed surgical bookings.",
    points: [
      "Curated before-and-after portfolios optimized for privacy and engagement",
      "Private-pay candidate targeting across high-income residential corridors",
      "Concierge consultation booking with direct coordinator notification",
      "Comprehensive surgical reputation management and verified patient stories",
    ],
    metric: "4.8×",
    metricLabel: "average return on ad spend for surgical consultations",
    image: "/images/unsplash/cosmetic-surgeon.jpg",
    teamImage: "/images/unsplash/cosmetic-surgeon-team.jpg",
    opportunityEyebrow: "Aesthetic Patient Architecture",
    opportunityHeading: "Elevate your private practice above generic medical advertising.",
    opportunityBody: "Aesthetic surgery demands refined creative, surgical accuracy, and absolute patient privacy. We combine luxury visual design with hyper-targeted private-pay search campaigns that attract patients seeking master-level artistic outcomes.",
    deliveryEyebrow: "Private Practice System",
    deliveryHeading: "A bespoke patient acquisition ecosystem for board-certified surgeons.",
    stepsHeading: "Navigating the high-consideration patient decision.",
    steps: [
      { heading: "Brand Elevation", body: "Establish your surgical philosophies, board certifications, and artistic credentials." },
      { heading: "Portfolio Curation", body: "Curate elegant procedure guides, 3D simulation showcases, and real patient journey stories." },
      { heading: "High-Intent Media", body: "Deploy discreet search campaigns targeting private-pay candidates and prospective surgical patients." },
      { heading: "Concierge Flow", body: "Empower patient coordinators with instant inquiry notifications and tailored consultation prep kits." },
    ],
    teamEyebrow: "Medical Aesthetic Specialists",
    teamHeading: "Elevated creative and discreet media buying for premier surgical clinics.",
    teamCopy: "We know cosmetic surgery demands restraint, sophisticated aesthetics, and strict privacy standards. We treat your brand with the precision of a surgical theater.",
    teamCtaLabel: "Book Strategy Session",
    teamCtaHref: "/book-appointment",
  },
  roofing: {
    eyebrow: "Roofing contractor marketing & storm response",
    title: "Secure high-margin residential replacements and commercial roofing contracts.",
    summary: "Outrank storm chasers with local trust, drone inspection showcases, manufacturer certification badges, and immediate storm-response landing pages.",
    description: "Homeowners spending $15,000 to $40,000 on a roof replacement demand ironclad credibility and local accountability. We build dominant search positioning and rapid storm-response engines that deliver qualified estimate requests directly to your sales estimators.",
    points: [
      "Storm damage geo-fencing & rapid hail response campaigns",
      "Instant roof estimate calculator tools that capture qualified homeowners",
      "Financing-focused landing pages that overcome price objections",
      "Automated appointment scheduling for sales inspection crews",
    ],
    metric: "$3.4M+",
    metricLabel: "in trackable roofing estimate pipeline generated",
    image: "/images/unsplash/roofing.jpg",
    teamImage: "/images/unsplash/roofing-team.jpg",
    opportunityEyebrow: "Storm & Replacement Pipeline",
    opportunityHeading: "Secure residential re-roofs and commercial contracts ahead of storm chasers.",
    opportunityBody: "When severe hail or wind hits, homeowners are inundated with out-of-state door knockers. We position your established local roofing company as the verified community choice, capturing high-intent searches the moment insurance adjusters are called.",
    deliveryEyebrow: "Contractor Revenue Engine",
    deliveryHeading: "High-value estimate requests delivered directly to your sales estimators.",
    stepsHeading: "Turning neighborhood roofs into predictable revenue.",
    steps: [
      { heading: "Territory Mapping", body: "Map target subdivisions with roofs approaching 15-25 year replacement lifespans." },
      { heading: "Authority Proof", body: "Produce drone footage, manufacturer warranty guarantees, and local case study maps." },
      { heading: "Targeted Deployment", body: "Deploy Google Local Services, storm alert ads, and hyper-local neighborhood PPC." },
      { heading: "Estimator Handoff", body: "Qualify homeowners by roof age, pitch, and insurance status before sending leads to your estimators." },
    ],
    teamEyebrow: "Roofing Growth Squad",
    teamHeading: "Roofing growth specialists who know hail maps, insurance claims, and square-foot pricing.",
    teamCopy: "Our team tracks weather events in real-time, instantly adjusting bids in zip codes affected by severe weather while keeping retail replacement leads steady during quiet seasons.",
    teamCtaLabel: "Scale Your Roofing Company",
    teamCtaHref: "/book-appointment",
  },
  plumbing: {
    eyebrow: "Plumbing contractor marketing & emergency calls",
    title: "Be the first call when burst pipes, sewer backups, and water heater failures hit.",
    summary: "Dominate zero-moment-of-truth searches with Google Guaranteed ads, map pack supremacy, and instant mobile click-to-call mechanics.",
    description: "When a sewer line backs up or a water heater floods a basement, homeowners don't shop around for days—they call the first reputable contractor that answers. We ensure your plumbing company captures emergency calls 24/7 while scaling high-ticket sewer and repiping jobs.",
    points: [
      "Instant call routing with whisper messages identifying campaign sources",
      "Repiping, sewer repair, and water filtration high-ticket funnel campaigns",
      "Google Guaranteed badge acquisition and LSA bid management",
      "Geo-targeted PPC during peak freeze, thaw, and heavy rain periods",
    ],
    metric: "92%",
    metricLabel: "of ad budget directly generating live inbound phone calls",
    image: "/images/unsplash/contractor-02.jpg",
    teamImage: "/images/unsplash/plumbing-team.jpg",
    opportunityEyebrow: "Emergency Demand Capture",
    opportunityHeading: "Dominate zero-moment-of-truth searches when crisis strikes.",
    opportunityBody: "We build dedicated funnels for high-margin jobs—trenchless sewer replacement, tankless water heater retrofits, and whole-home water filtration—balancing urgent repair calls with lucrative scheduled installations.",
    deliveryEyebrow: "High-Urgency Dispatch Marketing",
    deliveryHeading: "A relentless inbound phone pipeline for residential and commercial plumbing.",
    stepsHeading: "Connecting urgent homeowner crises to your on-call vans.",
    steps: [
      { heading: "Service Area Grid", body: "Optimize your Google Business Profile across every neighborhood in your licensed jurisdiction." },
      { heading: "Emergency Engine", body: "Launch mobile call-only ad groups configured to bid aggressively during operating hours." },
      { heading: "High-Margin Pages", body: "Build dedicated funnels for trenchless sewer repair, tankless heaters, and whole-house repiping." },
      { heading: "Review Automation", body: "Trigger automated SMS review requests the moment a technician closes a work order." },
    ],
    teamEyebrow: "Plumbing & Mechanical Guild",
    teamHeading: "Inbound call specialists focused on keeping every plumber's van fully booked.",
    teamCopy: "We track cost per booked call, not just meaningless web traffic. Your investment is measured by real service tickets and completed high-margin jobs.",
    teamCtaLabel: "Get More Plumbing Calls",
    teamCtaHref: "/book-appointment",
  },
  landscaping: {
    eyebrow: "Landscaping & outdoor living marketing",
    title: "Bridge seasonal lawn maintenance into high-margin outdoor living design builds.",
    summary: "Attract affluent homeowners seeking custom patios, outdoor kitchens, pool pavilions, and multi-year commercial maintenance agreements.",
    description: "Stop competing on low-margin weekly mowing bids. We transition your landscaping business into commanding premium five-figure design-build contracts while keeping commercial groundskeeping retainers predictable across all four seasons.",
    points: [
      "Visual design portfolio funnels showcasing luxury outdoor living spaces",
      "Commercial property manager B2B outreach and proposal collateral",
      "Early-spring pre-booking campaigns for hardscaping and lawn care",
      "Winterization and snow removal transition strategies",
    ],
    metric: "+140%",
    metricLabel: "growth in five-figure outdoor living project inquiries",
    image: "/images/unsplash/landscaping-01.jpg",
    teamImage: "/images/unsplash/landscaping-team.jpg",
    opportunityEyebrow: "Four-Season Pipeline",
    opportunityHeading: "Command five-figure design-build contracts and lucrative commercial retainers.",
    opportunityBody: "We target affluent homeowners in high-equity subdivisions searching for architectural landscaping, paver patios, and outdoor entertaining spaces, qualifying budgets before your design consultants ever set foot on the property.",
    deliveryEyebrow: "Outdoor Living Growth Engine",
    deliveryHeading: "High-ticket outdoor design builds and recurring maintenance retainers.",
    stepsHeading: "From backyard inspiration to signed construction contracts.",
    steps: [
      { heading: "Portfolio Audit", body: "Photograph and catalog completed outdoor living builds with before-and-after storytelling." },
      { heading: "Affluent Targeting", body: "Target homeowners in high-equity subdivisions searching for landscape architecture and patios." },
      { heading: "Project Estimator", body: "Capture scope, budget expectations, and property dimensions before design visits." },
      { heading: "Maintenance Retainer", body: "Upsell design-build clients into annual fertilization, irrigation, and weekly maintenance agreements." },
    ],
    teamEyebrow: "Landscape & Hardscape Squad",
    teamHeading: "Outdoor design marketers who understand project seasonality and job profitability.",
    teamCopy: "We help landscape contractors transition from trading time for hourly mowing into commanding premium contracts for outdoor living environments.",
    teamCtaLabel: "Grow Your Landscape Company",
    teamCtaHref: "/book-appointment",
  },
  "pest-control": {
    eyebrow: "Pest control marketing & route density",
    title: "Convert one-time pest emergencies into quarterly recurring subscription plans.",
    summary: "Targeted neighborhood penetration that cuts technician drive time, builds route density, and stacks predictable recurring revenue.",
    description: "The enterprise value of a pest control business lives in recurring quarterly protection agreements. We craft digital acquisition campaigns that treat the initial extermination crisis as the gateway to a signed 12-month recurring route contract.",
    points: [
      "Targeted termite, bedbug, and rodent emergency acquisition funnels",
      "Quarterly home protection plan subscription conversion mechanics",
      "Hyper-local neighborhood radius advertising around active job sites",
      "Automated seasonal prevention reminders (spring bugs, fall rodents)",
    ],
    metric: "+68%",
    metricLabel: "increase in recurring quarterly service agreements",
    image: "/images/unsplash/contractor-03.jpg",
    teamImage: "/images/unsplash/pest-control-team.jpg",
    opportunityEyebrow: "Recurring Route Density",
    opportunityHeading: "Convert one-time pest emergencies into quarterly recurring subscriptions.",
    opportunityBody: "We help pest operators build dense customer clusters along technician routes, dramatically reducing windshield travel time while maximizing gross revenue per truck hour.",
    deliveryEyebrow: "Route-Dense Customer Acquisition",
    deliveryHeading: "Targeted neighborhood penetration that cuts technician drive time.",
    stepsHeading: "From panic extermination call to multi-year protection plan.",
    steps: [
      { heading: "Local Pest Map", body: "Identify seasonal infestation cycles and high-density neighborhood corridors." },
      { heading: "Instant Dispatch", body: "Deploy Google Guaranteed and emergency click-to-call ads for immediate extermination inquiries." },
      { heading: "Subscription Upsell", body: "Implement pricing tables and technician sales scripts that present recurring plans as the smart choice." },
      { heading: "Radius Expansion", body: "Run targeted digital door-hangers in neighborhoods where you currently service homes." },
    ],
    teamEyebrow: "Pest Management Growth Team",
    teamHeading: "Acquisition specialists who measure success in route density and recurring contract value.",
    teamCopy: "Our team helps pest operators maximize route density, cutting down travel hours between stops while stacking high-margin recurring residential subscriptions.",
    teamCtaLabel: "Scale Pest Control Routes",
    teamCtaHref: "/book-appointment",
  },
  flooring: {
    eyebrow: "Flooring showroom & contractor marketing",
    title: "Drive showroom foot traffic and booked in-home measurement appointments.",
    summary: "Visual inspiration funnels and local advertising designed for hardwood, tile, carpet, and luxury vinyl installers and showrooms.",
    description: "Flooring is an emotional, high-touch investment. We guide homeowners from Pinterest and Google searches directly into your showroom or into a scheduled in-home measurement appointment with your mobile flooring specialists.",
    points: [
      "Interactive room visualizer landing pages that capture early interest",
      "Free in-home measurement booking funnels with automated calendar sync",
      "Commercial flooring contractor procurement bid generation",
      "Showroom event promotions and clearance sales campaigns",
    ],
    metric: "+84%",
    metricLabel: "increase in completed in-home measurement appointments",
    image: "/images/unsplash/flooring.jpg",
    teamImage: "/images/unsplash/flooring-team.jpg",
    opportunityEyebrow: "Showroom & Measurement Flow",
    opportunityHeading: "Drive qualified foot traffic and in-home measurement appointments.",
    opportunityBody: "Whether customers want hardwood, luxury vinyl plank, or custom tile, flooring is a tactile decision. We guide homeowners from inspiration boards into your showroom or directly into an in-home measurement with your sales specialists.",
    deliveryEyebrow: "Specialty Flooring Pipeline",
    deliveryHeading: "A multi-touch system turning inspiration into installed square footage.",
    stepsHeading: "From online swatch browsing to installed floors.",
    steps: [
      { heading: "Showroom Showcase", body: "Digitize your material catalog with high-resolution texture galleries and video walkthroughs." },
      { heading: "Local Designer Ads", body: "Target homeowners undergoing kitchen and home remodels with design inspiration ads." },
      { heading: "Measurement Booking", body: "Capture address, square footage estimate, and preferred materials to prepare sales reps." },
      { heading: "Post-Install Referrals", body: "Request room photo submissions and neighborhood referrals once the floor is laid." },
    ],
    teamEyebrow: "Flooring Surface Guild",
    teamHeading: "Specialists in visual creative, showroom foot traffic, and in-home estimator conversion.",
    teamCopy: "We showcase the craftsmanship, durability, and elegance of your flooring installations, turning casual price-shoppers into eager in-home measurement appointments.",
    teamCtaLabel: "Boost Showroom Sales",
    teamCtaHref: "/book-appointment",
  },
};

export default async function IndustryDetailPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) notFound();
  
  const config = industryConfigs[slug];
  if (!config) notFound();

  return (
    <DetailPage
      eyebrow={config.eyebrow}
      title={config.title}
      summary={config.summary}
      description={config.description}
      points={config.points}
      metric={config.metric}
      metricLabel={config.metricLabel}
      image={config.image}
      teamImage={config.teamImage}
      opportunityEyebrow={config.opportunityEyebrow}
      opportunityHeading={config.opportunityHeading}
      opportunityBody={config.opportunityBody}
      deliveryEyebrow={config.deliveryEyebrow}
      deliveryHeading={config.deliveryHeading}
      stepsHeading={config.stepsHeading}
      steps={config.steps}
      teamEyebrow={config.teamEyebrow}
      teamHeading={config.teamHeading}
      teamCopy={config.teamCopy}
      teamCtaLabel={config.teamCtaLabel}
      teamCtaHref={config.teamCtaHref}
    />
  );
}

