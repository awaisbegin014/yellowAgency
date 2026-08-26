"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { caseStudies, services } from "@/content/site-data";

function Brand() {
  return (
    <span className="brand" aria-label="Yellow Agency home">
      <span className="brand__mark" aria-hidden="true">Y</span>
      <span className="brand__copy"><span className="brand__word">Yellow</span><span className="brand__sub">white label growth agency</span></span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "cases" | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", open);
    return () => document.body.classList.remove("menu-is-open");
  }, [open]);

  function closeNavigation() {
    setOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" onClick={closeNavigation}>
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
          <Link href="/about-us" onClick={closeNavigation}>About Us</Link>

          <div className={`nav-group ${openDropdown === "services" ? "is-open" : ""}`}>
            <button type="button" className="nav-group__trigger" aria-expanded={openDropdown === "services"} onClick={() => setOpenDropdown((current) => current === "services" ? null : "services")}>
              White Label Services <span aria-hidden="true">⌄</span>
            </button>
            <div className="mega-menu mega-menu--services">
              <div className="mega-menu__links">
                {services.map((service) => (
                  <Link key={service.slug} href={`/white-label/${service.slug}`} onClick={closeNavigation}>{service.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className={`nav-group ${openDropdown === "cases" ? "is-open" : ""}`}>
            <button type="button" className="nav-group__trigger" aria-expanded={openDropdown === "cases"} onClick={() => setOpenDropdown((current) => current === "cases" ? null : "cases")}>
              Case Studies <span aria-hidden="true">⌄</span>
            </button>
            <div className="mega-menu mega-menu--cases">
              <div className="mega-menu__links">
                {caseStudies.map((study) => (
                  <Link key={study.slug} href={`/case-studies/${study.slug}`} onClick={closeNavigation}>{study.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" onClick={closeNavigation}>Blog</Link>
          <Link href="/contact-us" onClick={closeNavigation}>Contact Us</Link>
          <Link href="/book-appointment" className="button button--yellow mobile-nav-cta" onClick={closeNavigation}>Book A Consultation <span aria-hidden="true">↗</span></Link>
        </nav>

        <Link href="/book-appointment" className="button button--small button--yellow nav-cta" onClick={closeNavigation}>
          Book A Consultation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
