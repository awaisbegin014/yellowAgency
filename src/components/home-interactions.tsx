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
    partnerFocus: ["Win and onboard new clients", "Lead sales conversations", "Own client relationships", "Guide account strategy"],
  },
  {
    name: "Seth Brown",
    role: "Agency Owner",
    image: "/images/unsplash/portrait-02.jpg",
    quote: "The communication is clear, delivery is dependable, and our clients see consistently stronger results.",
    services: ["Google Ads", "Facebook Ads", "Landing Page Design", "Conversion Tracking", "Campaign Reporting", "Lead Quality Reviews", "Creative Testing", "Retargeting"],
    partnerFocus: ["Define campaign goals", "Approve budgets and offers", "Keep clients informed", "Review growth opportunities"],
  },
  {
    name: "Maya Collins",
    role: "Growth Partner",
    image: "/images/unsplash/portrait-01.jpg",
    quote: "We expanded our services without adding overhead. Yellow feels like a natural extension of our own team.",
    services: ["Technical SEO", "Local SEO", "Content Strategy", "Content Writing", "Link Building", "GBP Optimization", "SEO Reporting", "Competitor Research"],
    partnerFocus: ["Set the growth roadmap", "Share brand knowledge", "Present monthly results", "Identify expansion opportunities"],
  },
  {
    name: "Daniel Foster",
    role: "Digital Agency Founder",
    image: "/images/unsplash/portrait-03.jpg",
    quote: "Their white-label process lets us stay focused on relationships while every campaign is handled with care.",
    services: ["Website Design", "Website Development", "Graphic Design", "Go High Level", "CRM Automation", "Content Writing", "Quality Assurance", "Ongoing Support"],
    partnerFocus: ["Gather client requirements", "Approve creative direction", "Manage client feedback", "Lead launch and retention"],
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
  { slug: "hvac", title: "HVAC", clients: "20+", description: "Local visibility, paid search, and lead follow-up designed for competitive HVAC service areas.", benefits: ["Local growth strategy", "High-intent search campaigns", "Service-area SEO", "Call and lead tracking"] },
  { slug: "cosmetic-surgeon", title: "Cosmetic Surgeon", clients: "12+", description: "A trust-led patient journey across search, content, reputation, and high-consideration landing pages.", benefits: ["Patient acquisition strategy", "Procedure-focused campaigns", "Reputation support", "Consultation conversion tracking"] },
  { slug: "pest-control", title: "Pest Control", clients: "18+", description: "Fast, focused acquisition and local-search programs for residential and commercial pest-control teams.", benefits: ["Seasonal demand campaigns", "Local search optimization", "Emergency-service advertising", "Qualified lead reporting"] },
  { slug: "dental", title: "Dental", clients: "25+", description: "A patient-first system spanning local search, paid media, reputation, and useful treatment content.", benefits: ["New-patient campaigns", "Treatment page SEO", "Local reputation growth", "Appointment conversion tracking"] },
  { slug: "flooring", title: "Flooring", clients: "10+", description: "Visual creative and local lead generation designed for showrooms, installers, and specialty contractors.", benefits: ["Project-led creative", "Local lead generation", "Showroom campaign support", "Quote-request optimization"] },
  { slug: "landscaping", title: "Landscaping", clients: "14+", description: "Service-area search, project-led creative, and follow-up systems for residential and commercial teams.", benefits: ["Seasonal growth planning", "Service-area targeting", "Project portfolio content", "Estimate lead nurturing"] },
  { slug: "plumbing", title: "Plumbing", clients: "22+", description: "Urgent-intent advertising, local search, and reputation programs designed to turn demand into calls.", benefits: ["Emergency search campaigns", "Local SEO coverage", "Call-focused landing pages", "Lead quality monitoring"] },
  { slug: "roofing", title: "Roofing", clients: "16+", description: "A full local-growth system for inspection, repair, replacement, and storm-related demand.", benefits: ["Inspection lead campaigns", "Storm-demand targeting", "Roofing service SEO", "Estimate conversion reporting"] },
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

function MetricCard({ value, label, offset, active }: { value: string; label: string; offset: number; active: boolean }) {
  const chartHeight = Math.min(82, 16 + Number.parseFloat(value) * 0.54);

  return (
    <article className={`hc-metric-card ${active ? "is-after" : "is-before"}`}>
      <b>{value}</b>
      <span>{label}</span>
      <div className="hc-metric-card__mountain" style={{ height: `${chartHeight}%`, clipPath: `polygon(0 ${70 - offset}%, 14% ${78 - offset}%, 28% ${61 + offset}%, 43% 72%, 58% ${53 + offset}%, 72% 68%, 87% ${45 + offset}%, 100% 58%, 100% 100%, 0 100%)` }} />
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
        <div><h3>{activeNiche.title}</h3><span>Worked on {activeNiche.clients} clients</span><p>{activeNiche.description}</p></div>
        <div><h3>What You&apos;ll Get:</h3><ul>{activeNiche.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><Link href={`/industries/${activeNiche.slug}`} className="hc-text-link">Learn More ↗</Link></div>
      </div>
    </>
  );
}

export function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceTabs[activeIndex];

  return (
    <div className="hc-services__grid">
      <div className="hc-service-list" aria-label="Choose a service dashboard">
        {serviceTabs.map((service, index) => (
          <button type="button" className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} key={service.title}>
            <span>{service.title}</span><b aria-hidden="true">→</b>
          </button>
        ))}
      </div>
      <div className="hc-service-detail" key={activeService.title}>
        <div className="hc-browser-shot"><div className="hc-window-bar"><i /><i /><i /><span>{activeService.dashboard}</span></div><Image src={`/images/unsplash/${activeService.image}`} alt={`${activeService.title} dashboard preview`} fill sizes="50vw" /></div>
        <h3>{activeService.title}</h3>
        <p>{activeService.description}</p>
        <ul>{activeService.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        <Link href={`/white-label/${activeService.slug}`} className="hc-text-link">Learn More ↗</Link>
      </div>
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
          <span>{activeIndex + 1} / {testimonials.length}</span>
        </div>
      </article>
    </div>
  );
}
