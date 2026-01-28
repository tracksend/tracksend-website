import { fetchPosts } from "@/lib/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog - Tracksend",
  description: "Latest articles, tips, and insights from the Tracksend team.",
  openGraph: {
    title: "Blog - Tracksend",
    description: "Latest articles, tips, and insights from the Tracksend team.",
    type: "website",
  },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const result = await fetchPosts(page, 10);

  if (!result) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="py-12 text-center">
              <h1 className="text-3xl font-bold text-navy-dark mb-4">Blog</h1>
              <p className="text-gray-600 mb-8">
                Unable to load blog posts. Please try again later.
              </p>
              <Link
                href="/"
                className="text-primary hover:underline font-semibold"
              >
                Return to home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { posts, totalPages } = result;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Insights, tips, and best practices for customer engagement and
              communication.
            </p>
          </div>

          {/* Blog Grid */}
          {posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => {
                  const featuredImage =
                    post._embedded?.["wp:featuredmedia"]?.[0];
                  const excerpt =
                    post.excerpt.rendered
                      .replace(/<[^>]*>/g, "")
                      .substring(0, 150)
                      .trim() + "...";
                  const publishDate = new Date(post.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  );

                  return (
                    <Link
                      key={post.id}
                      href={`/resources/${post.slug}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      {/* Featured Image */}
                      {featuredImage ? (
                        <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                          <img
                            src={featuredImage.source_url || "/placeholder.svg"}
                            alt={featuredImage.alt_text || post.title.rendered}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="relative h-48 w-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center">
                          <span className="material-symbols-outlined text-4xl text-white">
                            article
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          {publishDate}
                        </p>
                        <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title.rendered.replace(/&amp;/g, "&")}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {excerpt}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mb-12">
                  {page > 1 && (
                    <Link
                      href={`/blog?page=${page - 1}`}
                      className="px-4 py-2 rounded-lg bg-white text-navy-dark hover:bg-gray-100 transition-colors font-semibold"
                    >
                      ← Previous
                    </Link>
                  )}

                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum: number;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (page <= 3) {
                        pageNum = i + 1;
                      } else if (page >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = page - 2 + i;
                      }

                      return (
                        <Link
                          key={pageNum}
                          href={`/blog?page=${pageNum}`}
                          className={`px-3 py-2 rounded-lg transition-colors font-semibold ${
                            page === pageNum
                              ? "bg-primary text-navy"
                              : "bg-white text-navy-dark hover:bg-gray-100"
                          }`}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}
                  </div>

                  {page < totalPages && (
                    <Link
                      href={`/blog?page=${page + 1}`}
                      className="px-4 py-2 rounded-lg bg-white text-navy-dark hover:bg-gray-100 transition-colors font-semibold"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No blog posts found.</p>
              <Link
                href="/"
                className="text-primary hover:underline font-semibold"
              >
                Return to home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
