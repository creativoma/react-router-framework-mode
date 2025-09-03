import type { Route } from "./+types/features";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Features - IA Tooling" },
    { name: "description", content: "Explore all the powerful AI features that make development faster and smarter." },
  ];
}

export default function Features() {
  const featureCategories = [
    {
      title: "AI Code Generation",
      description: "Generate high-quality code from natural language descriptions",
      features: [
        "Multi-language support (JavaScript, Python, Go, Rust, etc.)",
        "Context-aware code suggestions",
        "Framework-specific templates",
        "Custom code patterns",
        "Documentation generation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Smart Debugging",
      description: "AI-powered debugging that identifies and fixes issues automatically",
      features: [
        "Automatic error detection",
        "Smart fix suggestions",
        "Performance bottleneck identification",
        "Memory leak detection",
        "Security vulnerability scanning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team using AI-enhanced workflows",
      features: [
        "Real-time code sharing",
        "AI-powered code reviews",
        "Automated merge conflict resolution",
        "Team analytics and insights",
        "Integration with popular tools",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}AI Features
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover all the cutting-edge AI capabilities that will transform your development workflow
          </p>
        </div>
      </section>

      {/* Features Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featureCategories.map((category, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="text-purple-600">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                  <p className="text-xl text-slate-600">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="bg-slate-900 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-green-400">// AI-generated code example</div>
                        <div className="text-blue-400">function <span className="text-yellow-400">generateComponent</span><span className="text-white">(name: string) {"{"}</span></div>
                        <div className="text-white ml-4">return `{"<"}${"{name}"} /{">"}`;</div>
                        <div className="text-white">{"}"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to experience these features?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial and see how AI can transform your development process.
          </p>
          <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Start Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
