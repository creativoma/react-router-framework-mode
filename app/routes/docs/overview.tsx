export default function DocsOverview() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Documentation Overview
        </h1>
        <p className="text-xl text-slate-600">
          Transform your development workflow with AI-powered tools. Get started in minutes, scale to enterprise.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        {/* Quick Start Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors group">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick Start</h3>
            <p className="text-slate-600 mb-4">Get up and running with IA Tooling in under 5 minutes.</p>
            <a href="/docs/getting-started" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 group">
              Start here 
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors group">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">API Reference</h3>
            <p className="text-slate-600 mb-4">Complete API documentation with interactive examples.</p>
            <a href="/docs/api" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
              View API docs
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:border-green-200 transition-colors group">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Code Examples</h3>
            <p className="text-slate-600 mb-4">Real-world examples and use cases to get inspired.</p>
            <a href="/docs/examples" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group">
              Browse examples
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 not-prose">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Code Generation</h3>
                  <p className="text-slate-600 leading-relaxed">Transform natural language into production-ready code. Support for React, Vue, Node.js, Python, and 20+ frameworks.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Debugging</h3>
                  <p className="text-slate-600 leading-relaxed">AI-powered error detection with suggested fixes. Reduces debugging time by 80% with contextual solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Performance Optimization</h3>
                  <p className="text-slate-600 leading-relaxed">Automatic code optimization for speed and efficiency. Bundle analysis and performance recommendations.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Collaboration</h3>
                  <p className="text-slate-600 leading-relaxed">Real-time code sharing and collaborative AI sessions. Built-in code review and team knowledge base.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security</h3>
                  <p className="text-slate-600 leading-relaxed">SOC 2 compliant with end-to-end encryption. On-premises deployment and custom model training available.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">IDE Integration</h3>
                  <p className="text-slate-600 leading-relaxed">Native support for VS Code, IntelliJ, and Vim. Seamless workflow integration with your favorite tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Use Cases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
            {[
              { title: "Frontend Components", desc: "React, Vue, Angular components", color: "bg-blue-500" },
              { title: "API Endpoints", desc: "REST, GraphQL, WebSocket APIs", color: "bg-green-500" },
              { title: "Database Schemas", desc: "SQL, NoSQL, ORM models", color: "bg-purple-500" },
              { title: "Test Suites", desc: "Unit, integration, e2e tests", color: "bg-orange-500" },
              { title: "DevOps Scripts", desc: "CI/CD, Docker, Kubernetes", color: "bg-red-500" },
              { title: "Documentation", desc: "README, API docs, guides", color: "bg-indigo-500" }
            ].map((useCase, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                <div className={`w-8 h-8 ${useCase.color} rounded-lg flex items-center justify-center mb-3`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">{useCase.title}</h4>
                <p className="text-sm text-slate-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 not-prose">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Help Getting Started?</h3>
              <p className="text-slate-700 mb-4">
                Our support team and community are here to help. Get answers to your questions and connect with other developers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/docs/getting-started" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
                <a href="https://discord.gg/ia-tooling" className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Join Discord
                </a>
                <a href="mailto:support@ia-tooling.com" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
