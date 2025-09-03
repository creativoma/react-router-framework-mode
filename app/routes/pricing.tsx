import type { Route } from "./+types/pricing";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pricing - IA Tooling" },
    { name: "description", content: "Choose the perfect plan for your team. Flexible pricing for every stage of your journey." },
  ];
}

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI development tools",
      features: [
        "Basic AI code completion",
        "5 projects",
        "Community support",
        "Basic templates",
        "1GB storage"
      ],
      limitations: [
        "Limited API calls (100/day)",
        "Basic models only"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "slate"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional developers who want advanced features",
      features: [
        "Advanced AI models",
        "Unlimited projects",
        "Priority support",
        "Custom templates",
        "100GB storage",
        "Team collaboration",
        "Advanced debugging",
        "Performance optimization"
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      popular: true,
      color: "purple"
    },
    {
      name: "Team",
      price: "$99",
      period: "per month",
      description: "For teams that need collaboration and advanced management",
      features: [
        "Everything in Pro",
        "Advanced team management",
        "SSO integration",
        "Advanced analytics",
        "Custom integrations",
        "1TB storage",
        "24/7 support",
        "Custom AI models",
        "On-premise deployment"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
      color: "blue"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple,
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Fair Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800 p-1 rounded-lg">
            <button className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 text-slate-300 text-sm font-medium">
              Annual (2 months free)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-slate-600">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations */}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={`limit-${limitIndex}`} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-slate-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Can I change plans anytime?</h3>
                <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Is there a free trial?</h3>
                <p className="text-slate-600">Yes, we offer a 14-day free trial for all paid plans. No credit card required.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">What payment methods do you accept?</h3>
                <p className="text-slate-600">We accept all major credit cards, PayPal, and wire transfers for enterprise plans.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Do you offer refunds?</h3>
                <p className="text-slate-600">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
