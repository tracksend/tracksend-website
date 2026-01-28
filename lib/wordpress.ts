const WORDPRESS_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://tracksend.co";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

interface WordPressTag {
  id: number;
  name: string;
  slug: string;
}

export async function fetchPosts(page: number = 1, perPage: number = 10) {
  try {
    const url = new URL(`${WORDPRESS_URL}/wp-json/wp/v2/posts`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("per_page", perPage.toString());
    url.searchParams.append("_embed", "true");

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      console.error("WordPress fetch error:", response.status);
      return null;
    }

    const posts = (await response.json()) as WordPressPost[];
    const totalPages = parseInt(response.headers.get("x-wp-totalpages") || "1");

    return {
      posts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const url = new URL(`${WORDPRESS_URL}/wp-json/wp/v2/posts`);
    url.searchParams.append("slug", slug);
    url.searchParams.append("_embed", "true");

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    console.log({ url, response });

    const posts = (await response.json()) as WordPressPost[];
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export async function fetchPostSlugs() {
  try {
    const url = new URL(`${WORDPRESS_URL}/wp-json/wp/v2/posts`);
    url.searchParams.append("per_page", "100");
    url.searchParams.append("_fields", "slug");

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as Array<{ slug: string }>;
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/categories`, {
      next: { revalidate: 86400 }, // revalidate daily
    });

    if (!response.ok) {
      return [];
    }

    return (await response.json()) as WordPressCategory[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function fetchTags() {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/tags`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return [];
    }

    return (await response.json()) as WordPressTag[];
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
