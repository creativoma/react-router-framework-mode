export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Now Available - AI-Powered Development
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block">Build with</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Tooling
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
          Transform your development workflow with our cutting-edge AI platform. 
          Generate code, optimize performance, and ship faster than ever before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Get Started Free
          </button>
          <button className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-white mb-2">10x</div>
            <div className="text-slate-400">Faster Development</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50k+</div>
            <div className="text-slate-400">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
