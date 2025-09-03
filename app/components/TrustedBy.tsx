export function TrustedBy() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-8">
            Trusted by developers at
          </p>
          
          {/* Company logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Logo placeholders - in a real project these would be actual company logos */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TechCorp</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DevCo</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">InnoSoft</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CodeLab</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-red-600 to-red-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BuildIt</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">StartUp</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="text-center">
          <p className="text-slate-600 text-lg">
            Join <strong className="text-purple-600">50,000+</strong> developers building the future
          </p>
        </div>
      </div>
    </section>
  );
}
