"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { industries, services } from "@/content/site-data";

function Brand() {
  return (
    <span className="brand" aria-label="Yellow Agency home">
      <span className="brand__word">YELLOW<span className="brand__dot">.</span></span>
      <span className="brand__sub">creative growth agency</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", open);
    return () => document.body.classList.remove("menu-is-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <Brand />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`primary-nav ${open ? "primary-nav--open" : ""}`} aria-label="Primary navigation">
          <Link href="/about-us" onClick={() => setOpen(false)}>About</Link>
          <div className="nav-group">
            <Link href="/white-label" onClick={() => setOpen(false)}>Services <span aria-hidden="true">⌄</span></Link>
            <div className="mega-menu mega-menu--services">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>One team for your whole growth system.</h2>
                <Link href="/white-label" className="text-link">Explore every service <span>↗</span></Link>
              </div>
              <div className="mega-menu__links">
                {services.map((service) => (
                  <Link key={service.slug} href={`/white-label/${service.slug}`} onClick={() => setOpen(false)}>
                    <span>{service.shortTitle}</span><span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="nav-group">
            <Link href="/industries" onClick={() => setOpen(false)}>Industries <span aria-hidden="true">⌄</span></Link>
            <div className="mega-menu mega-menu--industries">
              <div>
                <p className="eyebrow">Built for your market</p>
                <h2>Specialist thinking without the tunnel vision.</h2>
              </div>
              <div className="mega-menu__links mega-menu__links--compact">
                {industries.map((industry) => (
                  <Link key={industry.slug} href={`/industries/${industry.slug}`} onClick={() => setOpen(false)}>
                    <span>{industry.title}</span><span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Our work</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/contact-us" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/book-appointment" className="button button--small button--yellow nav-cta" onClick={() => setOpen(false)}>
            Book a consultation <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
