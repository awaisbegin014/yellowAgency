import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading, StandardCta } from "@/components/page-templates";
import { values } from "@/content/site-data";

export const metadata: Metadata = { title: "About Us", description: "Meet the people, principles, and connected agency model behind Yellow Agency." };

export default function AboutPage() {
  return <main id="top" className="inner-page">
    <section className="page-hero page-hero--yellow"><div className="container page-hero__grid"><div><p className="eyebrow">About Yellow</p><AccentHeading as="h1">Serious about growth. Never too serious about ourselves.</AccentHeading><p className="page-hero__lead">Yellow is a connected team of strategists, creatives, media specialists, and technologists who believe clarity makes ambitious work possible.</p></div><MediaPlaceholder label="Yellow Agency team video placeholder" type="video" priority /></div></section>
    <section className="section"><div className="container detail-outcomes"><div><p className="eyebrow">Why Yellow exists</p><AccentHeading>Great marketing should feel joined up.</AccentHeading></div><div><p className="large-copy">We built Yellow because growing teams deserve the depth of a specialist agency without the handoffs, silos, and unnecessary theatre.</p><p>Our model keeps senior people close, connects every discipline to a shared plan, and makes progress easy to see. We ask direct questions, care about the details, and keep the customer in the room—even when they are not.</p><Link href="/dedicated-teams" className="text-link">See how our teams work <span>↗</span></Link></div></div></section>
    <section className="section section--soft"><div className="container"><div className="section-heading"><div><p className="eyebrow">What guides us</p><AccentHeading>Principles with a practical job.</AccentHeading></div></div><div className="process-grid">{values.map((value) => <article className="process-card" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>
    <section className="section section--dark"><div className="container"><div className="section-heading"><div><p className="eyebrow">The people</p><AccentHeading>Different disciplines. Same bright standard.</AccentHeading></div><p>Meet the connected disciplines that turn one clear strategy into dependable delivery across every channel.</p></div><div className="team-grid">{["Strategy & insight", "Creative & content", "Media & performance", "Experience & technology"].map((team, index) => <article key={team}><MediaPlaceholder label={`${team} team image placeholder`} type="portrait" /><span>0{index + 1}</span><h3>{team}</h3></article>)}</div></div></section>
    <StandardCta title="Let's build something people can't ignore." />
  </main>;
}
