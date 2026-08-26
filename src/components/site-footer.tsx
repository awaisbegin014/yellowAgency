import Link from "next/link";

const industries = ["HVAC Marketing", "Dental Marketing", "Flooring Marketing", "Landscaping Marketing", "Pest Control Marketing", "Roofing Marketing", "Plastic Surgeon Marketing", "Plumbing Marketing"];
const services = ["Content Writing Agency", "Facebook Ads Agency", "Google Ads Agency", "SEO Agency", "PPC Agency", "Social Media Agency", "Web Design Agency", "Web Development Agency", "Graphic Design Agency", "VA Agency", "Go High Level Agency"];

export function SiteFooter() {
  return (
    <footer className="site-footer reference-footer">
      <div className="hc-shell reference-footer__grid">
        <div className="reference-footer__signup">
          <span className="brand"><span className="brand__mark" aria-hidden="true">Y</span><span className="brand__copy"><span className="brand__word">Yellow</span><span className="brand__sub">white label growth agency</span></span></span>
          <h3>Get Free Strategy Audit</h3>
          <form><input type="email" aria-label="Email address" placeholder="Enter your email" /><button type="submit">Subscribe</button></form>
          <a href="mailto:hello@yellowagency.co">✉ hello@yellowagency.co</a>
          <div className="reference-footer__social">● ◉</div>
        </div>
        <div><h3>Industries</h3>{industries.map((item) => <Link href="/industries" key={item}>{item}</Link>)}</div>
        <div><h3>White Label Agency</h3>{services.map((item) => <Link href="/white-label" key={item}>White Label {item}</Link>)}</div>
        <div className="reference-footer__partnership"><h3>6 Months To Agency Success.</h3><span className="reference-footer__chess">♟</span><Link href="/partnership" className="hc-btn hc-btn--dark">Partnership Programs</Link></div>
      </div>
      <div className="reference-footer__bottom"><div className="hc-shell"><p>Yellow Agency © {new Date().getFullYear()}. All Rights Reserved.</p><div><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div></div></div>
    </footer>
  );
}
