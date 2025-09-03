import type { Route } from "./+types/optimization";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Performance Optimization - IA Tooling" },
    { name: "description", content: "Automatically optimize your code for better performance and resource efficiency." },
  ];
}

export default function PerformanceOptimization() {
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
                <li className="text-slate-500">Performance Optimization</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Performance Optimization
            </h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Automatically optimize your code for maximum performance. 
              Reduce load times, improve efficiency, and enhance user experience.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Performance Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "70%", description: "Faster Load Times", icon: "⚡" },
                { metric: "50%", description: "Reduced Memory Usage", icon: "💾" },
                { metric: "85%", description: "Better Core Web Vitals", icon: "📊" },
                { metric: "60%", description: "Less Network Requests", icon: "🌐" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                  <div className="text-slate-600">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Types */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Types of Optimizations
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  category: "Code Optimization",
                  items: [
                    "Dead code elimination",
                    "Loop optimization and vectorization",
                    "Algorithm complexity reduction",
                    "Memory allocation optimization"
                  ],
                  icon: "🔧",
                  color: "from-orange-500 to-red-500"
                },
                {
                  category: "Bundle Optimization",
                  items: [
                    "Tree shaking and code splitting",
                    "Dependency analysis and reduction",
                    "Asset compression and minification",
                    "Lazy loading implementation"
                  ],
                  icon: "📦",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  category: "Database Optimization",
                  items: [
                    "Query optimization and indexing",
                    "Connection pooling strategies",
                    "Caching layer implementation",
                    "Data structure optimization"
                  ],
                  icon: "🗄️",
                  color: "from-green-500 to-yellow-500"
                },
                {
                  category: "Frontend Optimization",
                  items: [
                    "Critical CSS extraction",
                    "Image optimization and formats",
                    "Service worker implementation",
                    "Prefetching and preloading"
                  ],
                  icon: "🎨",
                  color: "from-blue-500 to-green-500"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-600">
                        <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Example */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Before & After Optimization
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Before Optimization
                </h3>
                <div className="bg-slate-900 rounded-lg p-6 shadow-xl">
                  <pre className="text-red-300 text-sm overflow-x-auto">
{`// Inefficient code
function processUsers(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].orders.length; j++) {
      if (users[i].orders[j].status === 'active') {
        result.push({
          userId: users[i].id,
          orderId: users[i].orders[j].id,
          total: users[i].orders[j].total
        });
      }
    }
  }
  return result;
}

// O(n²) complexity
// Multiple object allocations
// No memoization`}</pre>
                </div>
              </div>

              {/* After */}
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  After AI Optimization
                </h3>
                <div className="bg-slate-900 rounded-lg p-6 shadow-xl">
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`// Optimized code
const processUsers = memoize((users) => {
  return users.flatMap(user => 
    user.orders
      .filter(order => order.status === 'active')
      .map(order => ({
        userId: user.id,
        orderId: order.id,
        total: order.total
      }))
  );
});

// O(n) complexity
// Functional approach
// Built-in memoization
// 70% performance improvement`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Supercharge Your Performance?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Start optimizing your code automatically and see immediate performance improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Start Optimizing Now
              </Link>
              <Link
                to="/docs/getting-started"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
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