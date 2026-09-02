import type { Metadata } from "next";
import Link from "next/link";
import { BlogExplorer } from "@/components/blog-explorer";
import { getPublishedBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Marketing Insights",
  description: "Practical ideas for agency strategy, creative, performance, delivery, and sustainable growth.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogs();

  return (
    <main id="top" className="yellow-blog">
      <section className="yellow-blog__hero">
        <div className="container">
          <p className="eyebrow">Yellow insights</p>
          <h1>Ideas that make <span>agency growth</span> easier to act on.</h1>
          <p>Clear perspectives on the strategy, creative, media, technology, and delivery systems behind better client outcomes.</p>
          <div className="yellow-blog__hero-actions">
            <a href="#browse-insights" className="button button--yellow">Browse the latest <span aria-hidden="true">↓</span></a>
            <Link href="/contact-us" className="text-link">Bring us a challenge <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <div id="browse-insights"><BlogExplorer posts={posts} /></div>

      <section className="yellow-blog__cta">
        <div className="container">
          <div><p className="eyebrow">Turn thinking into momentum</p><h2>Want these ideas applied to your agency?</h2><p>Bring us the goal, the bottleneck, or the half-formed plan. We&apos;ll help make the next move practical.</p></div>
          <Link href="/book-appointment" className="button button--dark">Book a free consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
