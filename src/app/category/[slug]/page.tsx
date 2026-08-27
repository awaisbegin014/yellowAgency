import type { Metadata } from "next";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading } from "@/components/page-templates";
import { posts } from "@/content/site-data";

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> { const { slug } = await params; const title = slug.replaceAll("-", " "); return { title: `${title[0]?.toUpperCase()}${title.slice(1)} Insights` }; }
export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) { const { slug } = await params; const title = slug.replaceAll("-", " "); const displayTitle = `${title[0]?.toUpperCase()}${title.slice(1)}`; const matches = posts.filter((post) => post.category.toLowerCase().replaceAll(" ", "-") === slug); const visible = matches.length ? matches : posts; return <main id="top" className="inner-page"><section className="page-hero page-hero--yellow"><div className="container article-header"><p className="eyebrow">Insight category</p><AccentHeading as="h1">{displayTitle}</AccentHeading><p className="page-hero__lead">Useful perspectives, practical guides, and fresh thinking from the Yellow team.</p></div></section><section className="section"><div className="container post-grid">{visible.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card"><MediaPlaceholder label={`${post.title} image placeholder`} /><span>{post.category} · {post.readTime}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read article ↗</b></Link>)}</div></section></main>; }
