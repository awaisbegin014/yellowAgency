"use client";

import { FormEvent, useState } from "react";
import { services } from "@/content/site-data";

export function ContactSalesForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="yellow-contact__form-success" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">Message prepared</p>
        <h2>Thanks. Let&apos;s make the next move clearer.</h2>
        <p>This local preview does not send data yet. Connect the form to your CRM or inbox before launch.</p>
        <button type="button" className="button button--dark" onClick={() => setSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="yellow-contact__form" onSubmit={submit}>
      <div className="yellow-contact__form-heading">
        <span>02</span>
        <div><p className="eyebrow">Tell us what you need</p><h2>Start with the challenge.</h2></div>
      </div>

      <div className="yellow-contact__form-row">
        <label>First name<input name="firstName" autoComplete="given-name" placeholder="Awais" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" placeholder="Ahmed" required /></label>
      </div>
      <div className="yellow-contact__form-row">
        <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@agency.com" required /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" required /></label>
      </div>
      <label>Agency or company<input name="company" autoComplete="organization" placeholder="Your agency" required /></label>
      <label>
        What can we help with?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          {services.map((service) => <option value={service.slug} key={service.slug}>{service.shortTitle}</option>)}
          <option value="not-sure">I&apos;m not sure yet</option>
        </select>
      </label>
      <fieldset className="yellow-contact__choice-set">
        <legend>Where are you in the process?</legend>
        <div className="yellow-contact__choice-grid">
          <label><input type="radio" name="stage" value="immediate" required /><span>Immediate need—let&apos;s talk</span></label>
          <label><input type="radio" name="stage" value="research" /><span>Researching options</span></label>
          <label><input type="radio" name="stage" value="agency" /><span>Agency partnership</span></label>
          <label><input type="radio" name="stage" value="business" /><span>Business owner</span></label>
        </div>
      </fieldset>
      <label>Tell us about the opportunity<textarea name="message" rows={6} placeholder="What are you trying to grow, fix, launch, or make easier?" required /></label>
      <label className="yellow-contact__consent"><input type="checkbox" name="consent" required /><span>I agree to Yellow&apos;s privacy policy and consent to being contacted about this request.</span></label>
      <div className="yellow-contact__form-footer">
        <button className="button button--dark" type="submit">Send my request <span aria-hidden="true">↗</span></button>
        <small>We usually reply within one business day. Demo only—no data is sent.</small>
      </div>
    </form>
  );
}
