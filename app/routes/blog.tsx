import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - IA Tooling" },
    { name: "description", content: "Latest insights, tutorials, and updates from the IA Tooling team." },
  ];
}

export default function Blog() {
  const posts = [
    {
      title: "Getting Started with AI-Powered Code Generation",
      excerpt: "Learn how to integrate AI code generation into your development workflow for maximum productivity.",
      date: "March 15, 2025",
      author: "Sarah Chen",
      slug: "getting-started-ai-code-generation"
    },
    {
      title: "The Future of Debugging: How AI is Changing the Game",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we find and fix bugs in our code.",
      date: "March 10, 2025",
      author: "Mike Rodriguez", 
      slug: "future-of-ai-debugging"
    },
    {
      title: "Performance Optimization with AI: A Deep Dive",
      excerpt: "Understanding how AI can automatically identify and fix performance bottlenecks in your applications.",
      date: "March 5, 2025",
      author: "Emma Thompson",
      slug: "ai-performance-optimization"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IA Tooling Blog
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the world of AI-powered development.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 hover:text-purple-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="flex items-center text-sm text-slate-500 space-x-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>by {post.author}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Load More Posts
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
