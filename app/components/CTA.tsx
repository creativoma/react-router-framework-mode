export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA content */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your development?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with AI-powered tools.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-purple-300 text-purple-100 font-semibold rounded-lg hover:bg-purple-800 transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Talk to Sales
          </button>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-purple-100">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <blockquote className="text-lg text-purple-100 mb-4">
            "IA Tooling has revolutionized our development process. We're shipping features 3x faster and with better quality than ever before."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
              AS
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Alex Smith</div>
              <div className="text-purple-300 text-sm">CTO at TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
