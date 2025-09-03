import type { Route } from "./+types/debugging";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Debugging - IA Tooling" },
    { name: "description", content: "AI-powered debugging that identifies and fixes issues automatically." },
  ];
}

export default function SmartDebugging() {
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
                <li className="text-slate-500">Smart Debugging</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart AI Debugging
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Let AI find, analyze, and fix bugs in your code automatically. 
              Reduce debugging time by 80% with intelligent error detection.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                How Smart Debugging Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our AI analyzes your code, runtime errors, and execution patterns to provide intelligent debugging assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Error Detection",
                  description: "AI scans your codebase and runtime logs to identify potential issues and errors.",
                  icon: "🔍"
                },
                {
                  step: "02", 
                  title: "Root Cause Analysis",
                  description: "Advanced algorithms trace back to find the exact source and cause of each bug.",
                  icon: "🎯"
                },
                {
                  step: "03",
                  title: "Automated Fix Suggestions",
                  description: "Get specific, actionable solutions with code snippets to resolve the issues.",
                  icon: "🔧"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Advanced Debugging Features
                </h2>
                <div className="space-y-6">
                  {[
                    "Runtime error analysis and stack trace interpretation",
                    "Memory leak detection and performance bottleneck identification", 
                    "Cross-platform compatibility issue detection",
                    "Integration with popular IDEs and debugging tools",
                    "Real-time error monitoring and alerts",
                    "Historical bug pattern analysis"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-auto text-slate-400 text-sm">Debug Console</span>
                </div>
                <pre className="text-slate-300 text-sm overflow-x-auto">
{`🔍 AI Debug Analysis Complete

❌ Error Found: TypeError at line 42
   Cannot read property 'map' of undefined

🎯 Root Cause:
   Variable 'items' is undefined when component renders
   before data loads from API

🔧 Suggested Fix:
   Add null check: items?.map() or provide default []

💡 Prevention Tip:
   Consider using loading states for async data`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Debug Faster, Ship Better Code
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of developers who've reduced their debugging time with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Try Smart Debugging
              </Link>
              <Link
                to="/docs/api"
                className="px-8 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200"
              >
                API Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
