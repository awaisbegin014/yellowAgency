"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import type { Post } from "@/content/site-data";

function normalize(value: string) {
  return value.trim().toLocaleLowerCase();
}

function PostMeta({ post }: { post: Post }) {
  return (
    <span className="yellow-blog__meta">
      {post.category}<i aria-hidden="true" />{post.date}<i aria-hidden="true" />{post.readTime}
    </span>
  );
}

export function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All insights");
  const categories = useMemo(
    () => ["All insights", ...new Set(posts.map((post) => post.category))],
    [posts],
  );

  const visiblePosts = useMemo(() => {
    const normalizedQuery = normalize(query);

    return posts.filter((post) => {
      const matchesCategory = category === "All insights" || post.category === category;
      const searchableCopy = normalize(`${post.title} ${post.excerpt} ${post.category}`);
      return matchesCategory && (!normalizedQuery || searchableCopy.includes(normalizedQuery));
    });
  }, [category, posts, query]);

  const featured = visiblePosts.slice(0, 2);
  const remaining = visiblePosts.slice(2);
  const recent = visiblePosts.slice(0, 6);

  return (
    <>
      <section className="yellow-blog__discovery" aria-label="Browse Yellow insights">
        <div className="container">
          <div className="yellow-blog__search-panel">
            <div>
              <span className="yellow-blog__search-icon" aria-hidden="true">⌕</span>
              <label className="sr-only" htmlFor="insight-search">Search Yellow insights</label>
              <input
                id="insight-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search strategy, SEO, paid media, creative…"
              />
            </div>
            <span>{visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}</span>
          </div>

          <div className="yellow-blog__categories" aria-label="Filter insights by category">
            <span>Browse by category</span>
            <div>
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  className={category === item ? "is-active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="yellow-blog__articles">
        <div className="container">
          {featured.length > 0 ? (
            <>
              <div className="yellow-blog__section-heading">
                <div>
                  <p className="eyebrow">Featured perspectives</p>
                  <h2>Start with the ideas shaping better decisions.</h2>
                </div>
                <p>Practical thinking for agency leaders who want clearer delivery, stronger client outcomes, and growth that does not add unnecessary complexity.</p>
              </div>

              <div className="yellow-blog__featured-grid">
                {featured.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} className="yellow-blog__featured-card" key={post.slug}>
                    <div className="yellow-blog__featured-media">
                      <MediaPlaceholder label={`${post.title} editorial feature image`} src={post.image} />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <PostMeta post={post} />
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="yellow-blog__read-link">Read the full article <b aria-hidden="true">↗</b></span>
                    </div>
                  </Link>
                ))}
              </div>

              {remaining.length > 0 && (
                <div className="yellow-blog__latest">
                  <div className="yellow-blog__latest-heading">
                    <div><p className="eyebrow">Latest thinking</p><h2>Useful ideas, without the filler.</h2></div>
                    <span>Fresh thinking across strategy, delivery, creative, media, and technology.</span>
                  </div>
                  <div className="yellow-blog__grid">
                    {remaining.map((post, index) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="yellow-blog__card">
                        <div className="yellow-blog__card-media">
                          <MediaPlaceholder label={`${post.title} article image`} src={post.image} />
                          <span>{String(index + 3).padStart(2, "0")}</span>
                        </div>
                        <PostMeta post={post} />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <span className="yellow-blog__read-link">Read more <b aria-hidden="true">↗</b></span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {recent.length > 1 && (
                <div className="yellow-blog__recent">
                  <div className="yellow-blog__recent-heading">
                    <div><p className="eyebrow">Recently published</p><h2>More ideas worth keeping close.</h2></div>
                    <Link href="/contact-us" className="text-link">Suggest a topic <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="yellow-blog__recent-grid">
                    {recent.map((post) => (
                      <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <MediaPlaceholder label={`${post.title} recent article image`} src={post.image} />
                        <div><span>{post.category} · {post.date}</span><h3>{post.title}</h3><b>Read article <i aria-hidden="true">↗</i></b></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="yellow-blog__empty" role="status">
              <span aria-hidden="true">Y+</span>
              <h2>No insight matches that search yet.</h2>
              <p>Try a shorter phrase or explore another category.</p>
              <button type="button" className="button button--dark" onClick={() => { setQuery(""); setCategory("All insights"); }}>
                Show every article
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
