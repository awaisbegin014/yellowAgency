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
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const services: Service[] = [
  {
    slug: "search-engine-optimization",
    shortTitle: "SEO",
    title: "Search Engine Optimization",
    summary: "Build sustainable visibility and turn high-intent searches into qualified opportunities.",
    description:
      "We combine technical foundations, useful content, local search, and authority building into one practical organic growth system.",
    points: ["Technical and on-page SEO", "Content strategy and production", "Local search optimization", "Transparent monthly reporting"],
    metric: "3.2×",
    metricLabel: "average organic growth potential",
  },
  {
    slug: "paid-search",
    shortTitle: "Paid search",
    title: "Paid Search Management",
    summary: "Reach buyers at the moment they are ready to act—with less waste and clearer reporting.",
    description:
      "From account structure to landing-page alignment, every campaign is shaped around qualified demand and measurable return.",
    points: ["Google and Microsoft Ads", "Keyword and competitor research", "Conversion tracking", "Ongoing testing and optimization"],
    metric: "41%",
    metricLabel: "lower cost per qualified lead",
  },
  {
    slug: "social-media-marketing",
    shortTitle: "Social media",
    title: "Social Media Marketing",
    summary: "Make your brand useful, memorable, and easy to trust across the channels your customers use.",
    description:
      "We plan, create, publish, and optimize organic and paid social content around a clear brand narrative.",
    points: ["Channel strategy", "Content calendars", "Creative direction", "Paid social campaigns"],
    metric: "2.8×",
    metricLabel: "stronger audience engagement",
  },
  {
    slug: "web-design-development",
    shortTitle: "Web design",
    title: "Web Design & Development",
    summary: "Fast, polished websites built to explain your value and move visitors toward action.",
    description:
      "We design conversion-focused experiences with thoughtful content hierarchy, responsive layouts, and clean technical delivery.",
    points: ["UX and interface design", "Responsive development", "CMS implementation", "Performance and accessibility"],
    metric: "68%",
    metricLabel: "average speed improvement",
  },
  {
    slug: "branding-design",
    shortTitle: "Branding",
    title: "Branding & Creative Design",
    summary: "A distinct visual and verbal system that makes your business recognizable at a glance.",
    description:
      "We turn your positioning into a flexible identity system designed to work across websites, campaigns, and sales materials.",
    points: ["Brand strategy", "Visual identity", "Campaign creative", "Practical brand guidelines"],
    metric: "1 system",
    metricLabel: "for every customer touchpoint",
  },
  {
    slug: "content-marketing",
    shortTitle: "Content",
    title: "Content Marketing",
    summary: "Helpful content that earns attention, answers questions, and supports the complete buyer journey.",
    description:
      "Our strategists and writers translate real customer needs into search-led editorial plans and conversion-ready assets.",
    points: ["Editorial strategy", "Articles and guides", "Case studies", "Content refresh programs"],
    metric: "90 days",
    metricLabel: "to a repeatable publishing engine",
  },
  {
    slug: "email-automation",
    shortTitle: "Email & CRM",
    title: "Email, CRM & Automation",
    summary: "Keep leads moving with thoughtful follow-up, useful automation, and a clean view of your pipeline.",
    description:
      "We connect forms, campaigns, and customer data into practical workflows your team can understand and own.",
    points: ["Lifecycle email", "CRM configuration", "Lead nurturing", "Pipeline reporting"],
    metric: "24/7",
    metricLabel: "lead follow-up coverage",
  },
  {
    slug: "reputation-management",
    shortTitle: "Reputation",
    title: "Online Reputation Management",
    summary: "Build a steady flow of credible reviews and turn customer feedback into an advantage.",
    description:
      "Our review systems help teams request feedback at the right moment, respond consistently, and spot service issues early.",
    points: ["Review generation", "Response workflows", "Listing consistency", "Sentiment reporting"],
    metric: "4.8★",
    metricLabel: "target customer experience",
  },
];

export const industries: Industry[] = [
  { slug: "dental", title: "Dental", summary: "Fill schedules with the right mix of high-value patients.", description: "A patient-first growth system spanning local search, paid media, reputation, and helpful treatment content." },
  { slug: "healthcare", title: "Healthcare", summary: "Build trust before the first appointment.", description: "Clear, compliant digital experiences that help patients understand their options and take the next step." },
  { slug: "hvac", title: "HVAC", summary: "Be the obvious local choice when demand spikes.", description: "Local visibility, urgent-intent paid search, and review programs designed for competitive service areas." },
  { slug: "home-services", title: "Home services", summary: "Turn local demand into a predictable job pipeline.", description: "A practical mix of local SEO, conversion-led landing pages, follow-up, and reputation management." },
  { slug: "legal", title: "Legal", summary: "Earn confidence in high-consideration searches.", description: "Authoritative content and disciplined acquisition systems for firms that need quality over empty volume." },
  { slug: "saas", title: "SaaS", summary: "Connect positioning, product value, and pipeline.", description: "Content, paid acquisition, and lifecycle campaigns that explain complex products in a simple way." },
  { slug: "ecommerce", title: "Ecommerce", summary: "Create more reasons to discover, buy, and return.", description: "Performance creative, shopping campaigns, lifecycle email, and conversion improvements working together." },
  { slug: "professional-services", title: "Professional services", summary: "Make expertise easy to see and trust.", description: "A credibility-led system for consultants, advisors, accountants, and specialized B2B teams." },
];

export const caseStudies: CaseStudy[] = [
  { slug: "northstar-dental-growth", client: "Northstar Dental", industry: "Dental", title: "From scattered campaigns to a dependable patient pipeline", summary: "A new website, local search program, and smarter paid media made every channel easier to measure.", result: "Qualified appointment requests", metric: "+184%" },
  { slug: "bright-air-local-search", client: "Bright Air Co.", industry: "HVAC", title: "Owning local demand through a record summer", summary: "Service-area pages, review automation, and high-intent search campaigns captured urgent demand.", result: "Booked service calls", metric: "+96%" },
  { slug: "kinetic-saas-launch", client: "Kinetic Cloud", industry: "SaaS", title: "A clearer story for a complex product launch", summary: "Sharper positioning and a focused campaign gave sales a stronger starting point with every prospect.", result: "Demo conversion rate", metric: "+63%" },
  { slug: "harbor-legal-authority", client: "Harbor Legal", industry: "Legal", title: "Building authority in a crowded regional market", summary: "High-value guides and technical SEO improved discoverability without relying on generic content.", result: "Organic consultations", metric: "+127%" },
  { slug: "kindred-commerce-retention", client: "Kindred Goods", industry: "Ecommerce", title: "Turning first purchases into lasting relationships", summary: "Lifecycle email, paid creative, and on-site improvements lifted both acquisition and retention.", result: "Email-attributed revenue", metric: "+212%" },
  { slug: "oak-and-stone-rebrand", client: "Oak & Stone", industry: "Home services", title: "A modern identity for a trusted local name", summary: "A complete brand and website refresh made twenty years of experience feel current and premium.", result: "Quote completion rate", metric: "+71%" },
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
