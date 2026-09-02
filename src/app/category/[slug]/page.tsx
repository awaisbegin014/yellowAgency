import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading } from "@/components/page-templates";
import { getBlogsByCategory, getPublishedBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedBlogs();
  const categories = new Set(posts.map((p) => p.category.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")));
  return Array.from(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  return { title: `${title[0]?.toUpperCase()}${title.slice(1)} Insights | Yellow Agency` };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  const displayTitle = `${title[0]?.toUpperCase()}${title.slice(1)}`;
  const visible = await getBlogsByCategory(slug);

  return (
    <main id="top" className="inner-page">
      <section className="page-hero page-hero--yellow">
        <div className="container article-header">
          <p className="eyebrow">Insight category</p>
          <AccentHeading as="h1">{displayTitle}</AccentHeading>
          <p className="page-hero__lead">
            Useful perspectives, practical guides, and fresh thinking from the Yellow team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container post-grid">
          {visible.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <MediaPlaceholder label={`${post.title} image`} src={post.image} />
              <span>
                {post.category} · {post.readTime}
              </span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <b>Read article ↗</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

