export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  metric: string;
  metricLabel: string;
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  result: string;
  metric: string;
};

export type Post = {
  id?: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
  image?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
  isPinned?: boolean;
};

export const services: Service[] = [
  {
    slug: "facebook-ads-services",
    shortTitle: "Facebook Ads",
    title: "White Label Facebook Ads Services",
    summary: "Give your clients sharper social campaigns without adding another in-house media team.",
    description: "Yellow plans, creates, launches, and improves white-label Meta campaigns under your agency name, with clear reporting and complete confidentiality.",
    points: ["Audience and offer research", "Campaign setup and tracking", "Ad creative coordination", "Weekly optimization and reports"],
    metric: "2.9×",
    metricLabel: "stronger paid-social efficiency",
  },
  {
    slug: "google-ads-services",
    shortTitle: "Google Ads",
    title: "White Label Google Ads Services",
    summary: "Capture high-intent demand with focused campaigns, cleaner tracking, and practical optimization.",
    description: "Our paid-search specialists manage client accounts behind your brand, from research and setup through landing-page alignment and ongoing improvement.",
    points: ["Search and display campaigns", "Keyword and competitor research", "Conversion tracking", "Ongoing testing and optimization"],
    metric: "41%",
    metricLabel: "lower cost per qualified lead",
  },
  {
    slug: "seo-services",
    shortTitle: "SEO",
    title: "White Label SEO Services",
    summary: "Build sustainable organic visibility for client brands with a complete, agency-ready SEO team.",
    description: "We combine technical fixes, search-led content, authority building, and transparent reporting into a repeatable fulfillment system.",
    points: ["Technical and on-page SEO", "Content strategy", "Authority building", "Agency-branded reporting"],
    metric: "3.2×",
    metricLabel: "average organic growth potential",
  },
  {
    slug: "ppc-services",
    shortTitle: "PPC",
    title: "White Label PPC Services",
    summary: "A performance-focused paid media team for campaigns that need close attention and clear accountability.",
    description: "Yellow manages the full PPC workflow behind the scenes so your agency can offer reliable acquisition services at scale.",
    points: ["Cross-channel media planning", "Account audits", "Bid and budget management", "White-label dashboards"],
    metric: "38%",
    metricLabel: "less wasted media spend",
  },
  {
    slug: "social-media-management-services",
    shortTitle: "Social Media Management",
    title: "White Label Social Media Management Services",
    summary: "Keep client brands active, useful, and recognizable with dependable content and channel management.",
    description: "We plan calendars, coordinate creative, publish content, and report performance while your agency owns the client relationship.",
    points: ["Channel strategy", "Content calendars", "Creative coordination", "Publishing and reporting"],
    metric: "30 days",
    metricLabel: "to a consistent content rhythm",
  },
  {
    slug: "web-design-services",
    shortTitle: "Web Design",
    title: "White Label Web Design Services",
    summary: "Conversion-focused website design your agency can confidently present as its own.",
    description: "Yellow turns strategy and content into polished, responsive interfaces designed to make the customer journey simple.",
    points: ["UX planning", "Responsive interface design", "Landing-page design", "Client-ready presentation files"],
    metric: "68%",
    metricLabel: "average usability improvement",
  },
  {
    slug: "web-development-services",
    shortTitle: "Web Development",
    title: "White Label Web Development Services",
    summary: "Clean, scalable frontend and CMS development delivered quietly behind your agency.",
    description: "Our developers turn approved designs into responsive, accessible, and maintainable websites across modern platforms.",
    points: ["Frontend development", "WordPress and Shopify", "CMS integrations", "Performance and accessibility"],
    metric: "100%",
    metricLabel: "responsive delivery",
  },
  {
    slug: "graphics-design-services",
    shortTitle: "Graphics Design",
    title: "White Label Graphics Design Services",
    summary: "Flexible creative support for the everyday assets and larger campaigns your clients need.",
    description: "Yellow gives your agency a dependable design bench for social, web, advertising, documents, and brand materials.",
    points: ["Campaign graphics", "Social and display assets", "Sales materials", "Brand-consistent production"],
    metric: "1 team",
    metricLabel: "for every creative format",
  },
  {
    slug: "content-writing-services",
    shortTitle: "Content Writing",
    title: "White Label Content Writing Services",
    summary: "Useful, search-aware copy written in the voice of each client brand.",
    description: "Our writers create blogs, landing pages, guides, case studies, and campaign copy ready for your agency to review and deliver.",
    points: ["Website and landing-page copy", "Articles and guides", "Case studies", "Campaign messaging"],
    metric: "90 days",
    metricLabel: "to a repeatable publishing engine",
  },
  {
    slug: "go-high-level-services",
    shortTitle: "Go High Level",
    title: "White Label Go High Level Services",
    summary: "Build, automate, and support client systems inside GoHighLevel without stretching your internal team.",
    description: "From snapshots and pipelines to landing pages and automations, we help agencies turn GoHighLevel into a dependable client service.",
    points: ["Account and snapshot setup", "Funnels and landing pages", "Workflow automation", "Ongoing technical support"],
    metric: "24/7",
    metricLabel: "automated follow-up coverage",
  },
  {
    slug: "va-services",
    shortTitle: "VA Services",
    title: "White Label VA Services",
    summary: "Reliable operational support that helps your agency protect focus and serve more clients.",
    description: "Yellow virtual assistants support repeatable marketing, reporting, research, CRM, and coordination tasks under a clear workflow.",
    points: ["Campaign assistance", "Research and reporting", "CRM administration", "Project coordination"],
    metric: "20+ hrs",
    metricLabel: "returned to your team each month",
  },
  {
    slug: "ai-ugc-services",
    shortTitle: "AI UGC",
    title: "White Label AI UGC Services",
    summary: "High-converting AI-powered User Generated Content videos and ad creatives at scale.",
    description: "Yellow scripts, generates, edits, and optimizes white-label AI UGC creator videos and high-converting video ad variations under your agency brand.",
    points: ["AI creator video & avatar generation", "Viral hooks & persuasive scriptwriting", "Multi-platform vertical video ads", "Creative iteration & performance testing"],
    metric: "4.5×",
    metricLabel: "faster video creative turnaround",
  },
];

export const industries: Industry[] = [
  { slug: "hvac", title: "HVAC", summary: "Help home-service brands win urgent local demand.", description: "Local visibility, paid search, and lead follow-up designed for competitive HVAC service areas." },
  { slug: "cosmetic-surgeon", title: "Cosmetic Surgeon", summary: "Build confidence before the first consultation.", description: "A trust-led patient journey across search, content, reputation, and high-consideration landing pages." },
  { slug: "pest-control", title: "Pest Control", summary: "Turn seasonal local searches into booked service calls.", description: "Fast, focused acquisition and local-search programs for residential and commercial pest-control teams." },
  { slug: "dental", title: "Dental", summary: "Fill schedules with the right mix of high-value patients.", description: "A patient-first system spanning local search, paid media, reputation, and useful treatment content." },
  { slug: "flooring", title: "Flooring", summary: "Show the value behind every surface and installation.", description: "Visual creative and local lead generation designed for showrooms, installers, and specialty contractors." },
  { slug: "landscaping", title: "Landscaping", summary: "Create a dependable pipeline across every season.", description: "Service-area search, project-led creative, and follow-up systems for residential and commercial teams." },
  { slug: "plumbing", title: "Plumbing", summary: "Be visible the moment customers need help.", description: "Urgent-intent advertising, local search, and reputation programs designed to turn demand into calls." },
  { slug: "roofing", title: "Roofing", summary: "Earn trust in a crowded, high-value local market.", description: "A full local-growth system for inspection, repair, replacement, and storm-related demand." },
];

export const caseStudies: CaseStudy[] = [
  { slug: "automotive-digital-marketing-case-study", client: "Summit Auto", industry: "Automotive", title: "Automotive digital marketing case study", summary: "A connected search, content, and conversion program created a more dependable inquiry pipeline.", result: "Qualified inquiries", metric: "+148%" },
  { slug: "dental-digital-marketing-case-study", client: "Dental practice", industry: "Dental", title: "Dental digital marketing case study", summary: "A connected local-search, content, and paid-media system turned digital discovery into measurable patient demand.", result: "Organic growth", metric: "+1,161.76%" },
  { slug: "hvac-digital-marketing-case-study", client: "HVAC business", industry: "HVAC", title: "HVAC digital marketing case study", summary: "A three-month paid-search sprint turned off-season intent into qualified calls and measurable sales growth.", result: "Conversion growth", metric: "+215.79%" },
  { slug: "outdoor-blinds-digital-marketing-case-study", client: "Shade-solutions provider", industry: "Outdoor Blinds", title: "Outdoor blinds digital marketing case study", summary: "A new website and connected local-growth plan created stronger visibility before the client’s busiest season.", result: "Organic lead traffic", metric: "+106%" },
  { slug: "cold-email-outreach-digital-marketing-case-study", client: "US digital agency", industry: "B2B Outreach", title: "Cold email outreach case study", summary: "A managed outbound system turned qualified data and relevant messaging into sixteen commercial opportunities.", result: "Opportunity value", metric: "$8,000" },
  { slug: "auto-dealer-google-ads-case-study", client: "Atlanta auto dealer", industry: "Google Ads", title: "Auto dealer Google Ads case study", summary: "A rebuilt search account increased qualified vehicle enquiries while lowering the cost of conversion.", result: "Conversions", metric: "97.33" },
  { slug: "party-rentals-google-ads-case-study", client: "Long Island rental company", industry: "Party Rentals", title: "Party rentals Google Ads case study", summary: "Focused local targeting generated immediate attention, enquiries, and bookings in the campaign’s first week.", result: "Click-through rate", metric: "39%" },
];

export const testimonials = [
  { quote: "Yellow brought structure to a marketing program that had become impossible to manage. We now know what is working and what comes next.", name: "Maya Chen", role: "VP of Growth, Northstar Dental" },
  { quote: "The team learned our business quickly, challenged our assumptions, and shipped a website our sales team is genuinely proud to use.", name: "Jordan Ellis", role: "Founder, Kinetic Cloud" },
  { quote: "Lead quality improved in the first quarter, but the biggest win was finally having one connected system instead of five disconnected vendors.", name: "Sam Rivera", role: "Operations Director, Bright Air Co." },
  { quote: "They are strategic when it matters and practical when it is time to get the work done. That combination is rare.", name: "Priya Kapoor", role: "Managing Partner, Harbor Legal" },
];

export const posts: Post[] = [
  { slug: "a-practical-guide-to-local-seo", category: "SEO", title: "A practical guide to local SEO that generates real demand", excerpt: "The essential foundations for appearing in the moments nearby customers are ready to buy.", date: "August 18, 2026", readTime: "8 min read" },
  { slug: "landing-pages-that-convert", category: "Web design", title: "What high-converting service landing pages do differently", excerpt: "A plain-language breakdown of hierarchy, proof, friction, and calls to action.", date: "August 8, 2026", readTime: "6 min read" },
  { slug: "stop-reporting-vanity-metrics", category: "Strategy", title: "Stop reporting vanity metrics: a better monthly marketing review", excerpt: "The small set of numbers that connects marketing activity to business outcomes.", date: "July 29, 2026", readTime: "5 min read" },
  { slug: "brand-consistency-without-boredom", category: "Branding", title: "How to build brand consistency without becoming predictable", excerpt: "Simple rules that leave enough room for creative campaigns and fresh ideas.", date: "July 16, 2026", readTime: "7 min read" },
  { slug: "paid-search-account-audit", category: "Paid media", title: "A 30-minute paid search account health check", excerpt: "Six places to look when cost rises, volume falls, or lead quality quietly slips.", date: "July 3, 2026", readTime: "9 min read" },
  { slug: "email-automation-human-touch", category: "Email", title: "Email automation that still feels human", excerpt: "How to use relevance, timing, and restraint to create follow-up people welcome.", date: "June 21, 2026", readTime: "6 min read" },
  { slug: "white-label-partner-playbook", category: "Operations", title: "A practical playbook for choosing the right white-label partner", excerpt: "The questions that reveal delivery quality, communication habits, capacity, and the true cost of a partnership.", date: "June 9, 2026", readTime: "8 min read" },
  { slug: "creative-testing-system", category: "Paid media", title: "Build a creative testing system your whole performance team can use", excerpt: "A repeatable way to turn campaign evidence into sharper concepts, messages, and next-round decisions.", date: "May 26, 2026", readTime: "7 min read" },
  { slug: "ai-workflows-for-agencies", category: "Automation", title: "Where AI workflows genuinely save agency teams time", excerpt: "Five useful automations that remove repetitive work without making the client experience feel robotic.", date: "May 12, 2026", readTime: "6 min read" },
];

export const faqs = [
  { question: "What does a full-service partnership include?", answer: "We shape the plan around your goals. A typical engagement combines strategy, creative, acquisition, website support, reporting, and a dedicated account lead." },
  { question: "Can we start with one service?", answer: "Yes. Many partnerships begin with one clear priority such as a website, SEO, or paid search, then expand once the foundation is producing results." },
  { question: "How soon can we begin?", answer: "Most projects can begin within two to four weeks. After a discovery call, we provide a clear scope, team, timeline, and first-90-day plan." },
  { question: "Do you work with internal marketing teams?", answer: "Absolutely. We can act as a complete outsourced team or fill specific strategy, design, content, and performance gaps inside an existing team." },
  { question: "How do you report results?", answer: "You receive a concise dashboard and a plain-language review focused on business outcomes, decisions, experiments, and next actions—not a pile of unexplained metrics." },
];

export const values = [
  { number: "01", title: "Clarity first", text: "Simple strategy, honest communication, and no mystery around the work." },
  { number: "02", title: "Built together", text: "We work as an extension of your team, not a vendor waiting for instructions." },
  { number: "03", title: "Useful creativity", text: "Ideas have to earn attention and help a customer make a decision." },
  { number: "04", title: "Always learning", text: "Every campaign creates evidence we use to make the next one stronger." },
];

export const footerColumns = [
  { title: "Agency", links: [["About us", "/about-us"], ["Our work", "/case-studies"], ["Testimonials", "/testimonials"], ["Contact", "/contact-us"]] },
  { title: "Services", links: services.slice(0, 5).map((service) => [service.shortTitle, `/white-label/${service.slug}`]) },
  { title: "Resources", links: [["Insights", "/blog"], ["Industries", "/industries"], ["Partnerships", "/partnership"], ["Book a call", "/book-appointment"]] },
] as const;

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function findIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
