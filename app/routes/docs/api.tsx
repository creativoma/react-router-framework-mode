import type { Route } from "./+types/api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "API Reference - IA Tooling Documentation" },
    { name: "description", content: "Complete API reference for IA Tooling integration." },
  ];
}

export default function APIReference() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          API Reference
        </h1>
        <p className="text-xl text-slate-600">
          Complete reference for the IA Tooling REST API and SDK integrations. Build amazing applications with AI-powered code generation.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Authentication</h3>
            <p className="text-sm text-slate-600">Secure API key authentication with rate limiting</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">REST API</h3>
            <p className="text-sm text-slate-600">RESTful endpoints with JSON request/response</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">SDKs</h3>
            <p className="text-sm text-slate-600">Official SDKs for popular languages</p>
          </div>
        </div>

        {/* Authentication Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Authentication</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6 not-prose">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Base URL</h3>
                <code className="bg-slate-800 text-green-400 px-4 py-2 rounded-lg inline-block text-sm font-mono">
                  https://api.ia-tooling.com/v1
                </code>
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-4">All API requests require authentication using API keys. Include your API key in the Authorization header:</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 not-prose">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">cURL Example</h4>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  <span className="text-yellow-400">curl</span> <span className="text-blue-400">-H</span> <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> <span className="text-white">\</span><br/>
                  &nbsp;&nbsp;<span className="text-blue-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> <span className="text-white">\</span><br/>
                  &nbsp;&nbsp;<span className="text-green-400">https://api.ia-tooling.com/v1/generate</span>
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">JavaScript Example</h4>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  <span className="text-purple-400">const</span> <span className="text-white">response</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-400">fetch</span><span className="text-white">(</span><br/>
                  &nbsp;&nbsp;<span className="text-green-400">'https://api.ia-tooling.com/v1/generate'</span><span className="text-white">,</span> <span className="text-white">&#123;</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">headers</span><span className="text-white">:</span> <span className="text-white">&#123;</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Authorization'</span><span className="text-white">:</span> <span className="text-green-400">'Bearer YOUR_API_KEY'</span><span className="text-white">,</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Content-Type'</span><span className="text-white">:</span> <span className="text-green-400">'application/json'</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&#125;</span><br/>
                  &nbsp;&nbsp;<span className="text-white">&#125;</span><br/>
                  <span className="text-white">);</span>
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Endpoints Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">API Endpoints</h2>
          
          <div className="space-y-8">
            {/* Code Generation Endpoint */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">POST</span>
                    <code className="text-lg font-mono text-slate-900">/generate</code>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Most Popular
                  </div>
                </div>
                <p className="text-slate-700">Generate code from natural language descriptions with AI</p>
              </div>
              
              <div className="p-6 not-prose">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Request</h4>
                    <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
                      <code className="text-sm">
                        <span className="text-white">&#123;</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"prompt"</span><span className="text-white">:</span> <span className="text-green-400">"Create a React hook for data fetching"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"language"</span><span className="text-white">:</span> <span className="text-green-400">"typescript"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"framework"</span><span className="text-white">:</span> <span className="text-green-400">"react"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"style"</span><span className="text-white">:</span> <span className="text-green-400">"functional"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"complexity"</span><span className="text-white">:</span> <span className="text-yellow-400">"intermediate"</span><br/>
                        <span className="text-white">&#125;</span>
                      </code>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="font-medium text-slate-700">prompt</span>
                        <span className="text-sm text-slate-500">string (required)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="font-medium text-slate-700">language</span>
                        <span className="text-sm text-slate-500">string (optional)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="font-medium text-slate-700">framework</span>
                        <span className="text-sm text-slate-500">string (optional)</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="font-medium text-slate-700">complexity</span>
                        <span className="text-sm text-slate-500">enum (optional)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Response</h4>
                    <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
                      <code className="text-sm">
                        <span className="text-white">&#123;</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"id"</span><span className="text-white">:</span> <span className="text-green-400">"gen_1234567890"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"code"</span><span className="text-white">:</span> <span className="text-green-400">"function useData(url) &#123; ... &#125;"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"language"</span><span className="text-white">:</span> <span className="text-green-400">"typescript"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"confidence"</span><span className="text-white">:</span> <span className="text-yellow-400">0.95</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"suggestions"</span><span className="text-white">:</span> <span className="text-white">[</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Add error handling"</span><span className="text-white">,</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Add loading state"</span><br/>
                        &nbsp;&nbsp;<span className="text-white">],</span><br/>
                        &nbsp;&nbsp;<span className="text-red-400">"tokens_used"</span><span className="text-white">:</span> <span className="text-yellow-400">150</span><br/>
                        <span className="text-white">&#125;</span>
                      </code>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="font-medium text-green-900 mb-2">Status Codes</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <code className="text-green-700">200</code>
                          <span className="text-green-700">Success</span>
                        </div>
                        <div className="flex justify-between">
                          <code className="text-red-700">400</code>
                          <span className="text-red-700">Bad Request</span>
                        </div>
                        <div className="flex justify-between">
                          <code className="text-red-700">401</code>
                          <span className="text-red-700">Unauthorized</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Debug Analysis Endpoint */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">POST</span>
                  <code className="text-lg font-mono text-slate-900">/debug</code>
                </div>
                <p className="text-slate-700">Analyze code for potential bugs and performance issues</p>
              </div>
              
              <div className="p-6 not-prose">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <h4 className="text-green-400 font-semibold mb-2">Request</h4>
                    <code className="text-sm">
                      <span className="text-white">&#123;</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"code"</span><span className="text-white">:</span> <span className="text-green-400">"function buggyFunction() &#123; ... &#125;"</span><span className="text-white">,</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"language"</span><span className="text-white">:</span> <span className="text-green-400">"javascript"</span><span className="text-white">,</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"context"</span><span className="text-white">:</span> <span className="text-green-400">"web-app"</span><br/>
                      <span className="text-white">&#125;</span>
                    </code>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <h4 className="text-green-400 font-semibold mb-2">Response</h4>
                    <code className="text-sm">
                      <span className="text-white">&#123;</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"issues"</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-white">...</span><span className="text-white">],</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"suggestions"</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-white">...</span><span className="text-white">],</span><br/>
                      &nbsp;&nbsp;<span className="text-red-400">"severity"</span><span className="text-white">:</span> <span className="text-green-400">"medium"</span><br/>
                      <span className="text-white">&#125;</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Analysis Endpoint */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">POST</span>
                  <code className="text-lg font-mono text-slate-900">/optimize</code>
                </div>
                <p className="text-slate-700">Analyze and optimize code performance with AI recommendations</p>
              </div>
              
              <div className="p-6 text-center not-prose">
                <div className="inline-flex items-center gap-2 text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Similar structure to /debug endpoint</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Official SDKs</h2>
          <p className="text-slate-600 mb-8">Use our official SDKs for seamless integration with your applications:</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 not-prose">
            {/* Node.js SDK */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 border-b border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Node.js SDK</h3>
                    <p className="text-sm text-slate-600">For Node.js and JavaScript applications</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Installation</h4>
                <div className="bg-slate-900 rounded-lg p-3 mb-4">
                  <code className="text-green-400 text-sm">npm install @ia-tooling/node-sdk</code>
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-3">Usage</h4>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm">
                    <span className="text-purple-400">const</span> <span className="text-white">&#123;</span> <span className="text-yellow-400">IATooling</span> <span className="text-white">&#125;</span> <span className="text-white">=</span> <span className="text-yellow-400">require</span><span className="text-white">(</span><span className="text-green-400">'@ia-tooling/node-sdk'</span><span className="text-white">);</span><br/><br/>
                    <span className="text-purple-400">const</span> <span className="text-white">client</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-400">IATooling</span><span className="text-white">(&#123;</span><br/>
                    &nbsp;&nbsp;<span className="text-red-400">apiKey</span><span className="text-white">:</span> <span className="text-blue-400">process</span><span className="text-white">.</span><span className="text-blue-400">env</span><span className="text-white">.</span><span className="text-yellow-400">IA_TOOLING_API_KEY</span><br/>
                    <span className="text-white">&#125;);</span><br/><br/>
                    <span className="text-purple-400">const</span> <span className="text-white">result</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-white">client</span><span className="text-white">.</span><span className="text-yellow-400">generate</span><span className="text-white">(&#123;</span><br/>
                    &nbsp;&nbsp;<span className="text-red-400">prompt</span><span className="text-white">:</span> <span className="text-green-400">'Create user auth system'</span><span className="text-white">,</span><br/>
                    &nbsp;&nbsp;<span className="text-red-400">language</span><span className="text-white">:</span> <span className="text-green-400">'typescript'</span><br/>
                    <span className="text-white">&#125;);</span>
                  </code>
                </div>
              </div>
            </div>

            {/* Python SDK */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13L16.17 2.5c-.01.13-.05.26-.13.37s-.21.19-.35.25l-1.35.66c-.58.28-1.15.52-1.72.71L11.87 5c-.16.05-.32.03-.44-.03-.12-.06-.21-.16-.24-.27L10.75 3c-.05-.22-.03-.45.06-.66L11.24.95c.09-.2.25-.37.44-.49L12.4.18c.26-.08.53-.05.78.03.23.08.42.21.57.38l.56.59zm-8.1 9.6c.18-.05.37-.03.53.06l.56.32c.14.08.26.2.34.34.08.14.12.3.11.45 0 .13-.04.26-.11.37-.07.11-.17.2-.28.26l-.75.26c-.33.11-.66.16-1 .14-.32-.01-.64-.1-.93-.25-.29-.15-.54-.37-.73-.63-.18-.26-.29-.56-.32-.87-.02-.3.04-.6.17-.87.13-.27.33-.51.58-.69.24-.18.53-.31.83-.37z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Python SDK</h3>
                    <p className="text-sm text-slate-600">For Python and Django/Flask apps</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Installation</h4>
                <div className="bg-slate-900 rounded-lg p-3 mb-4">
                  <code className="text-green-400 text-sm">pip install ia-tooling</code>
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-3">Usage</h4>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm">
                    <span className="text-purple-400">from</span> <span className="text-white">ia_tooling</span> <span className="text-purple-400">import</span> <span className="text-yellow-400">IATooling</span><br/><br/>
                    <span className="text-white">client</span> <span className="text-white">=</span> <span className="text-yellow-400">IATooling</span><span className="text-white">(</span><span className="text-red-400">api_key</span><span className="text-white">=</span><span className="text-green-400">"your-api-key"</span><span className="text-white">)</span><br/><br/>
                    <span className="text-white">result</span> <span className="text-white">=</span> <span className="text-white">client</span><span className="text-white">.</span><span className="text-yellow-400">generate</span><span className="text-white">(</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">prompt</span><span className="text-white">=</span><span className="text-green-400">"Create a FastAPI endpoint"</span><span className="text-white">,</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">language</span><span className="text-white">=</span><span className="text-green-400">"python"</span><br/>
                    <span className="text-white">)</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-slate-600 mb-4">More SDKs coming soon:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Go', 'Rust', 'PHP', 'Ruby', 'Java', 'C#'].map(lang => (
                <span key={lang} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rate Limits and Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Rate Limits</h2>
            <div className="space-y-4 not-prose">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Free Plan</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">$0/month</span>
                </div>
                <div className="text-slate-600 text-sm">
                  <div className="flex justify-between">
                    <span>Requests per day</span>
                    <span className="font-medium">100</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Requests per minute</span>
                    <span className="font-medium">10</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Pro Plan</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">$29/month</span>
                </div>
                <div className="text-slate-700 text-sm">
                  <div className="flex justify-between">
                    <span>Requests per day</span>
                    <span className="font-medium">10,000</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Requests per minute</span>
                    <span className="font-medium">100</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Enterprise</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Custom</span>
                </div>
                <div className="text-slate-700 text-sm">
                  <div className="flex justify-between">
                    <span>Requests</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Support</span>
                    <span className="font-medium">24/7 Dedicated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Error Codes</h2>
            <div className="space-y-3 not-prose">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <code className="px-2 py-1 bg-green-600 text-white rounded font-mono text-sm">200</code>
                  <span className="font-medium text-green-900">Success</span>
                </div>
                <span className="text-sm text-green-700">Request completed</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <code className="px-2 py-1 bg-red-600 text-white rounded font-mono text-sm">400</code>
                  <span className="font-medium text-red-900">Bad Request</span>
                </div>
                <span className="text-sm text-red-700">Invalid parameters</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <code className="px-2 py-1 bg-yellow-600 text-white rounded font-mono text-sm">401</code>
                  <span className="font-medium text-yellow-900">Unauthorized</span>
                </div>
                <span className="text-sm text-yellow-700">Invalid API key</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <code className="px-2 py-1 bg-orange-600 text-white rounded font-mono text-sm">429</code>
                  <span className="font-medium text-orange-900">Rate Limited</span>
                </div>
                <span className="text-sm text-orange-700">Too many requests</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <code className="px-2 py-1 bg-slate-600 text-white rounded font-mono text-sm">500</code>
                  <span className="font-medium text-slate-900">Server Error</span>
                </div>
                <span className="text-sm text-slate-700">Internal error</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
