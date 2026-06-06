import { fetchPostBySlug, stripHtml } from "@/lib/wordpress";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const revalidate = 3600; // ISR: revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const excerpt = stripHtml(post.excerpt.rendered);
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: stripHtml(post.title.rendered),
    description: excerpt || stripHtml(post.content.rendered).substring(0, 160),
    openGraph: {
      title: stripHtml(post.title.rendered),
      description: excerpt,
      type: "article",
      publishedTime: post.date,
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: stripHtml(post.title.rendered),
      description: excerpt,
      ...(image && {
        images: [image],
      }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="py-12 text-center">
              <h1 className="text-3xl font-bold text-navy-dark mb-4">
                Post not found
              </h1>
              <p className="text-gray-600 mb-8">
                The blog post you are looking for does not exist.
              </p>
              <Link
                href="/resources"
                className="text-primary hover:underline font-semibold"
              >
                Back to resources
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const publishDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 border-b border-gray-200 pb-8">
            <Link
              href="/resources"
              className="text-primary hover:underline mb-4 inline-block"
            >
              ← Back to resources
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4 leading-tight">
              {post.title.rendered.replace(/&amp;/g, "&")}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
              <span className="text-sm font-medium">{publishDate}</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-sm">
                {Math.ceil(
                  stripHtml(post.content.rendered).split(" ").length / 200,
                )}{" "}
                min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {featuredImage && (
            <div className="mb-12 rounded-xl overflow-hidden">
              <img
                src={featuredImage.source_url || "/placeholder.svg"}
                alt={featuredImage.alt_text || post.title.rendered}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="wordpress-content mb-12"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />

          {/* Footer CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-navy-dark mb-2">
              Ready to transform your customer engagement?
            </h3>
            <p className="text-gray-700 mb-6">
              Start with Tracksend today and create conversations that convert.
            </p>
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-navy hover:shadow-glow-cyan transition-all">
              <a
                href="https://app.tracksend.co/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
