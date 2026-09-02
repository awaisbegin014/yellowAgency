import { supabase } from './supabase';
import { posts as fallbackPosts, type Post } from '@/content/site-data';

export type { Post };

/**
 * Helper to format date strings into human-readable format.
 */
export function formatBlogDate(dateStr?: string): string {
  if (!dateStr) return 'Recent';
  // If it's in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    try {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        return parsed.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch {
      // ignore
    }
  }
  return dateStr;
}

/**
 * Transforms a Supabase row into the Post interface used throughout Yellow Agency.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapDbPostToPost(db: any): Post {
  return {
    id: db.id,
    slug: db.slug,
    title: db.title || 'Untitled Post',
    excerpt: db.excerpt || '',
    content: db.content || '',
    image: db.image || '',
    category: db.category || 'Insights',
    author: db.author || 'Yellow Strategy Team',
    date: formatBlogDate(db.date || db.created_at),
    readTime: db.read_time || '5 min read',
    tags: Array.isArray(db.tags) ? db.tags : [],
    featured: Boolean(db.featured),
    isPinned: Boolean(db.is_pinned),
  };
}

/**
 * Fetches all published blog posts from Supabase.
 * Falls back to local site-data.ts posts if Supabase query fails or returns empty.
 */
export async function getPublishedBlogs(): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('is_pinned', { ascending: false })
      .order('date', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('[Yellow Agency blogService] Supabase error, using fallback:', error.message);
      return fallbackPosts;
    }

    if (data && data.length > 0) {
      // Filter target_sites if present and specified
      const filtered = data.filter((row) => {
        if (!row.target_sites || !Array.isArray(row.target_sites) || row.target_sites.length === 0) {
          return true;
        }
        return (
          row.target_sites.includes('yellowagency') ||
          row.target_sites.includes('all')
        );
      });

      const mapped = (filtered.length > 0 ? filtered : data).map(mapDbPostToPost);
      return mapped;
    }

    return fallbackPosts;
  } catch (err) {
    console.error('[Yellow Agency blogService] unexpected error:', err);
    return fallbackPosts;
  }
}

/**
 * Fetches a single blog post by slug from Supabase.
 * Falls back to local site-data.ts if not found in database.
 */
export async function getBlogBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (!error && data) {
      return mapDbPostToPost(data);
    }

    // Fallback: check fallbackPosts
    const fallback = fallbackPosts.find((p) => p.slug === slug);
    return fallback || null;
  } catch (err) {
    console.error(`[Yellow Agency blogService] error getting blog for slug "${slug}":`, err);
    const fallback = fallbackPosts.find((p) => p.slug === slug);
    return fallback || null;
  }
}

/**
 * Fetches posts filtered by category.
 */
export async function getBlogsByCategory(categorySlug: string): Promise<Post[]> {
  const allBlogs = await getPublishedBlogs();
  const normalizedSlug = categorySlug.toLowerCase().trim();

  const matches = allBlogs.filter((post) => {
    const catSlug = post.category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return catSlug === normalizedSlug || post.category.toLowerCase() === normalizedSlug;
  });

  return matches.length > 0 ? matches : allBlogs;
}

/**
 * Fetches all unique categories from published blogs.
 */
export async function getAllCategories(): Promise<string[]> {
  const allBlogs = await getPublishedBlogs();
  const categories = new Set(allBlogs.map((b) => b.category).filter(Boolean));
  return Array.from(categories);
}
