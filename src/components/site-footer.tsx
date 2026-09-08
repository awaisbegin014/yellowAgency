import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const industries = [
  { label: "HVAC Marketing", slug: "hvac" },
  { label: "Dental Marketing", slug: "dental" },
  { label: "Flooring Marketing", slug: "flooring" },
  { label: "Landscaping Marketing", slug: "landscaping" },
  { label: "Pest Control Marketing", slug: "pest-control" },
  { label: "Roofing Marketing", slug: "roofing" },
  { label: "Plastic Surgeon Marketing", slug: "cosmetic-surgeon" },
  { label: "Plumbing Marketing", slug: "plumbing" },
];
const services = [
  { label: "Content Writing Agency", slug: "content-writing-services" },
  { label: "Facebook Ads Agency", slug: "facebook-ads-services" },
  { label: "Google Ads Agency", slug: "google-ads-services" },
  { label: "SEO Agency", slug: "seo-services" },
  { label: "PPC Agency", slug: "ppc-services" },
  { label: "Social Media Agency", slug: "social-media-management-services" },
  { label: "Web Design Agency", slug: "web-design-services" },
  { label: "Web Development Agency", slug: "web-development-services" },
  { label: "Graphic Design Agency", slug: "graphics-design-services" },
  { label: "VA Agency", slug: "va-services" },
  { label: "Go High Level Agency", slug: "go-high-level-services" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer reference-footer">
      <div className="hc-shell reference-footer__grid">
        <div className="reference-footer__signup">
          <Link href="/" aria-label="The Yellow Clicks home">
            <BrandLogo />
          </Link>
          <h3>Get Free Strategy Audit</h3>
          <form><input type="email" aria-label="Email address" placeholder="Enter your email" /><button type="submit">Subscribe</button></form>
          <a href="mailto:hello@yellowagency.co">✉ hello@yellowagency.co</a>
          <div className="reference-footer__social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Yellow Agency on Facebook">f</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Yellow Agency on Instagram">◎</a>
          </div>
          <div className="reference-footer__badges" aria-label="Technology partnerships">
            <div className="reference-footer__badge">
              <svg className="google-badge-icon" viewBox="0 0 48 48" width="38" height="38" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M46.145 24.524c0-1.636-.145-3.21-.417-4.724H24v9.062h12.441c-.538 2.89-2.17 5.342-4.628 6.985v5.807h7.495c4.385-4.037 6.837-9.98 6.837-17.13z"/>
                <path fill="#34A853" d="M24 47c6.236 0 11.467-2.067 15.289-5.603l-7.495-5.807c-2.071 1.388-4.724 2.21-7.794 2.21-5.992 0-11.066-4.048-12.879-9.493H3.345v5.995C7.165 41.874 15.004 47 24 47z"/>
                <path fill="#FBBC05" d="M11.121 28.307c-.463-1.388-.727-2.872-.727-4.307s.264-2.919.727-4.307V13.7H3.345C1.815 16.74 1 20.264 1 24s.815 7.26 2.345 10.3l7.776-5.993z"/>
                <path fill="#EA4335" d="M24 9.2c3.393 0 6.438 1.168 8.834 3.456l6.63-6.63C35.462 2.378 30.231 0 24 0 15.004 0 7.165 5.126 3.345 12.7l7.776 5.993C12.934 13.248 18.008 9.2 24 9.2z"/>
              </svg>
              <strong>Google Partner</strong>
            </div>
            <div className="reference-footer__badge">
              <svg className="google-badge-icon" viewBox="0 0 128 128" width="40" height="40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"/>
                <path fill="#4285f4" d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"/>
                <path fill="#34a853" d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"/>
                <path fill="#fbbc05" d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"/>
              </svg>
              <strong><small>Google Cloud</small>Partner</strong>
            </div>
          </div>
        </div>
        <div><h3>Industries</h3>{industries.map((item) => <Link href={`/industries/${item.slug}`} key={item.slug}>{item.label}</Link>)}</div>
        <div><h3>White Label Agency</h3>{services.map((item) => <Link href={`/white-label/${item.slug}`} key={item.slug}>White Label {item.label}</Link>)}</div>
        <div className="reference-footer__partnership"><h3>6 Months To Agency Success.</h3><span className="reference-footer__chess">♟</span><Link href="/partnership" className="hc-btn hc-btn--dark">Partnership Programs</Link></div>
      </div>
      <div className="reference-footer__bottom"><div className="hc-shell"><p>Yellow Agency © {new Date().getFullYear()}. All Rights Reserved.</p><div><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div></div></div>
    </footer>
  );
}
