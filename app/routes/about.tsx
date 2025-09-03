import type { Route } from "./+types/about";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - IA Tooling" },
    { name: "description", content: "Learn about IA Tooling's mission to revolutionize development with AI." },
  ];
}

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About IA Tooling
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're revolutionizing software development with AI-powered tools that make coding faster, smarter, and more efficient.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                To democratize access to advanced AI development tools and empower developers worldwide to build better software faster.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-slate-600">Developers using IA Tooling</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                <div className="text-slate-600">Lines of code generated</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-slate-600">Developer satisfaction rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide everything we build and do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Innovation First</h3>
                <p className="text-slate-600">We constantly push the boundaries of what's possible with AI and development tools.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Developer-Centric</h3>
                <p className="text-slate-600">Every feature is built with the developer experience as our top priority.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Security & Privacy</h3>
                <p className="text-slate-600">Your code and data are protected with enterprise-grade security standards.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
