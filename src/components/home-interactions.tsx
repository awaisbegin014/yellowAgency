"use client";

import Image from "next/image";
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
