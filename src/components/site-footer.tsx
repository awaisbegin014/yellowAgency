import Link from "next/link";
import { footerColumns } from "@/content/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <span className="brand brand--light">
              <span className="brand__word">YELLOW<span className="brand__dot">.</span></span>
              <span className="brand__sub">creative growth agency</span>
            </span>
            <h2>Make your next stage of growth impossible to miss.</h2>
            <Link href="/book-appointment" className="button button--yellow">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="site-footer__nav">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="site-footer__title">{column.title}</p>
                {column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Yellow Agency. All rights reserved.</p>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
