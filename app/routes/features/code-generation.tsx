import type { Route } from "./+types/code-generation";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Code Generation - IA Tooling" },
    { name: "description", content: "Generate high-quality code from natural language with our advanced AI models." },
  ];
}

export default function CodeGeneration() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex">
              <ol className="flex items-center space-x-2 text-sm">
                <li><Link to="/" className="text-purple-600 hover:text-purple-800">Home</Link></li>
                <li>/</li>
                <li><Link to="/features" className="text-purple-600 hover:text-purple-800">Features</Link></li>
                <li>/</li>
                <li className="text-slate-500">Code Generation</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Code Generation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transform your ideas into production-ready code with our advanced AI models. 
              Support for 20+ programming languages and frameworks.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Features List */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Powerful Code Generation Features
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Multi-Language Support",
                      description: "Generate code in JavaScript, Python, TypeScript, Go, Rust, Java, C++, and more."
                    },
                    {
                      title: "Framework-Aware",
                      description: "Context-aware generation for React, Vue, Angular, Django, Flask, Express, and other frameworks."
                    },
                    {
                      title: "Smart Completions",
                      description: "Intelligent code suggestions based on your existing codebase and patterns."
                    },
                    {
                      title: "Documentation Generation",
                      description: "Automatically generate comprehensive documentation for your generated code."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Code Example */}
              <div>
                <div className="bg-slate-900 rounded-lg p-6 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-auto text-slate-400 text-sm">example.tsx</span>
                  </div>
                  <div className="text-green-400 text-sm mb-2">// Prompt: "Create a React hook for API data fetching with loading states"</div>
                  <pre className="text-slate-300 text-sm overflow-x-auto">
{`import { useState, useEffect } from 'react';

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Code Generation by the Numbers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Programming Languages" },
                { number: "50+", label: "Frameworks Supported" },
                { number: "95%", label: "Code Accuracy" },
                { number: "10x", label: "Faster Development" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to accelerate your coding?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Try our AI code generation today and experience the future of development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Start Free Trial
              </Link>
              <Link
                to="/docs/getting-started"
                className="px-8 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
