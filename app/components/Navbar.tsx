import { useState } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">IA Tooling</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/features" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Features
              </Link>
              <Link to="/pricing" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Pricing
              </Link>
              <Link to="/docs" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Docs
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/login" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              <Link to="/features" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link to="/docs" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Docs
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/login" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-medium mt-2 block text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
