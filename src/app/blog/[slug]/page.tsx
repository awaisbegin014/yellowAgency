import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading, StandardCta } from "@/components/page-templates";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found | Yellow Agency" };

  return {
    title: `${post.title} | Yellow Agency`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <main id="top" className="inner-page">
      <article>
        <header className="page-hero page-hero--yellow">
          <div className="container article-header">
            <p className="eyebrow">{post.category}</p>
            <AccentHeading as="h1">{post.title}</AccentHeading>
            <p className="page-hero__lead">{post.excerpt}</p>
            <div className="article-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.author || "Yellow Strategy Team"}</span>
            </div>
          </div>
        </header>

        <div className="section">
          <div className="container article-body">
            <MediaPlaceholder
              label={`${post.title} feature image`}
              src={post.image}
              priority
            />

            {post.content ? (
              <div
                className="blog-article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="blog-article-content">
                <p className="large-copy">
                  {post.excerpt ||
                    "Sustainable growth rarely comes from a single clever tactic. It comes from making a few high-value decisions clearly, then connecting the work around them."}
                </p>
                <h2>Start with the customer decision</h2>
                <p>
                  Before choosing a channel or format, understand the decision a
                  customer is trying to make. Useful marketing reduces
                  uncertainty, makes the value concrete, and gives people a
                  natural next step.
                </p>
                <div className="article-callout">
                  The strongest marketing systems make the right action feel
                  obvious—not forced.
                </div>
                <h2>Connect the message to the experience</h2>
                <p>
                  A compelling campaign cannot compensate for a confusing
                  landing page or slow follow-up. Carry the same promise, proof,
                  and tone through every touchpoint so the customer experiences
                  one coherent story.
                </p>
                <h2>Measure what changes a decision</h2>
                <p>
                  Good reporting helps a team decide what to do next. Focus on
                  meaningful movement, document what changed, and use that
                  evidence to improve the next cycle.
                </p>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div style={{ marginTop: "40px", display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/blog" className="article-back-link">
                ← Back to all insights
              </Link>
              <Link href="/contact-us" className="text-link" style={{ marginLeft: "auto" }}>
                Discuss this with our team <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <StandardCta title="Ready to turn useful thinking into useful growth?" />
    </main>
  );
}
