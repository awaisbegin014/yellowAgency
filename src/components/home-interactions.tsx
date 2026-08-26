"use client";

import Image from "next/image";
import { useState } from "react";

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
  },
  {
    name: "Seth Brown",
    role: "Agency Owner",
    image: "/images/unsplash/portrait-02.jpg",
    quote: "The communication is clear, delivery is dependable, and our clients see consistently stronger results.",
  },
  {
    name: "Maya Collins",
    role: "Growth Partner",
    image: "/images/unsplash/portrait-01.jpg",
    quote: "We expanded our services without adding overhead. Yellow feels like a natural extension of our own team.",
  },
  {
    name: "Daniel Foster",
    role: "Digital Agency Founder",
    image: "/images/unsplash/portrait-03.jpg",
    quote: "Their white-label process lets us stay focused on relationships while every campaign is handled with care.",
  },
];

function MetricCard({ value, label, offset, active }: { value: string; label: string; offset: number; active: boolean }) {
  return (
    <article className={`hc-metric-card ${active ? "is-after" : "is-before"}`}>
      <b>{value}</b>
      <span>{label}</span>
      <div className="hc-metric-card__mountain" style={{ clipPath: `polygon(0 ${70 - offset}%, 14% ${78 - offset}%, 28% ${61 + offset}%, 43% 72%, 58% ${53 + offset}%, 72% 68%, 87% ${45 + offset}%, 100% 58%, 100% 100%, 0 100%)` }} />
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

export function PartnerEquation({ services }: { services: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];
  const move = (direction: number) => setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <div className="hc-model-cards">
      <article className="hc-equation-card hc-equation-card--yellow">
        <div className="hc-equation-brand"><span aria-hidden="true">Y</span><b>Yellow</b></div>
        <ul>{services.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <span className="hc-equation-symbol hc-equation-symbol--plus" aria-hidden="true"><b>+</b></span>
      <article className="hc-equation-card">
        <h3>You As Our Partner</h3>
        <ul><li>Focus on getting more business</li><li>Drive sales</li><li>Ensure client satisfaction</li><li>Oversee project success</li></ul>
      </article>
      <span className="hc-equation-symbol hc-equation-symbol--equals" aria-hidden="true"><b>=</b></span>
      <article className="hc-equation-card is-yellow" aria-live="polite">
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
