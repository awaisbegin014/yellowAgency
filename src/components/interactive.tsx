"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";

type TabItem = {
  title: string;
  summary: string;
  href: string;
  metric?: string;
  metricLabel?: string;
  points?: string[];
};

export function FeatureTabs({ items, label = "Explore" }: { items: TabItem[]; label?: string }) {
  const [active, setActive] = useState(0);
  const tabSetId = useId();
  const item = items[active];

  return (
    <div className="feature-tabs">
      <div className="feature-tabs__list" role="tablist" aria-label={label}>
        {items.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`${tabSetId}-panel-${index}`}
            id={`${tabSetId}-tab-${index}`}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {tab.title}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div
        className="feature-tabs__panel"
        role="tabpanel"
        id={`${tabSetId}-panel-${active}`}
        aria-labelledby={`${tabSetId}-tab-${active}`}
      >
        <div className="feature-tabs__visual">
          <span className="feature-tabs__orbit feature-tabs__orbit--one" />
          <span className="feature-tabs__orbit feature-tabs__orbit--two" />
          <strong>{item.metric ?? "Y+"}</strong>
          <small>{item.metricLabel ?? "made for momentum"}</small>
        </div>
        <div className="feature-tabs__copy">
          <p className="eyebrow">{label}</p>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          {item.points && (
            <ul className="check-list">
              {item.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
          <Link href={item.href} className="text-link">Explore this service <span>↗</span></Link>
        </div>
      </div>
    </div>
  );
}

type Testimonial = { quote: string; name: string; role: string };

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const item = items[active];
  const go = (direction: number) => setActive((current) => (current + direction + items.length) % items.length);

  return (
    <div className="testimonial-carousel" aria-live="polite">
      <div className="testimonial-carousel__quote-mark" aria-hidden="true">“</div>
      <blockquote>“{item.quote}”</blockquote>
      <div className="testimonial-carousel__footer">
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
        <div className="carousel-controls">
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>←</button>
          <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>→</button>
        </div>
      </div>
    </div>
  );
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h3>Thanks — your message is ready.</h3>
        <p>This frontend demo does not send data yet. Connect the form to your CRM or API before launch.</p>
        <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message ↗</button>
      </div>
    );
  }

  return (
    <form className={`lead-form ${compact ? "lead-form--compact" : ""}`} onSubmit={submit}>
      <div className="form-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Company<input name="company" autoComplete="organization" required /></label>
      {!compact && (
        <label>What would you like to improve?<textarea name="message" rows={4} required /></label>
      )}
      <button className="button button--dark" type="submit">Send my request <span aria-hidden="true">↗</span></button>
      <small>By submitting, you agree to our privacy policy. Demo only—no data is sent.</small>
    </form>
  );
}
