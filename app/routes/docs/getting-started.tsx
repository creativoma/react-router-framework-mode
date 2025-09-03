import type { Route } from "./+types/getting-started";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Getting Started - IA Tooling Documentation" },
    { name: "description", content: "Learn how to get started with IA Tooling in minutes." },
  ];
}

export default function GettingStarted() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Getting Started with IA Tooling
        </h1>
        <p className="text-xl text-slate-600">
          Get up and running with IA Tooling in just a few minutes. Generate your first AI-powered code in under 5 minutes.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">

        {/* Prerequisites Section */}
        <div className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prerequisites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 border border-slate-200 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Node.js 16+</h3>
                <p className="text-sm text-slate-600">Latest LTS recommended</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-slate-200 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Package Manager</h3>
                <p className="text-sm text-slate-600">npm, yarn, or pnpm</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-slate-200 rounded-lg">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Code Editor</h3>
                <p className="text-sm text-slate-600">VS Code preferred</p>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 not-prose mb-8">
            {/* CLI Installation */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">CLI Installation</h3>
              </div>
              <p className="text-slate-600 mb-4">Install globally for command-line access</p>
              
              <div className="space-y-3">
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    <span className="text-slate-400"># Using npm</span><br/>
                    npm install -g ia-tooling
                  </code>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    <span className="text-slate-400"># Using yarn</span><br/>
                    yarn global add ia-tooling
                  </code>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    <span className="text-slate-400"># Using pnpm</span><br/>
                    pnpm add -g ia-tooling
                  </code>
                </div>
              </div>
            </div>

            {/* VS Code Extension */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">VS Code Extension</h3>
              </div>
              <p className="text-slate-600 mb-4">Get AI assistance directly in your editor</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">1. Open VS Code</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">2. Extensions (Ctrl+Shift+X)</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">3. Search "IA Tooling"</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">4. Click Install</span>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Start Guide</h2>
          
          <div className="space-y-8 not-prose">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                  1
                </div>
                <div className="w-px h-16 bg-slate-200"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Authentication</h3>
                <p className="text-slate-600 mb-4">Sign in to your IA Tooling account to get started:</p>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">$ ia-tooling auth login</code>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Tip:</strong> This will open your browser to complete OAuth authentication
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                  2
                </div>
                <div className="w-px h-16 bg-slate-200"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Initialize Project</h3>
                <p className="text-slate-600 mb-4">Set up IA Tooling in your project:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">New Project</h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        $ ia-tooling init my-project<br/>
                        $ cd my-project
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Existing Project</h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        $ cd my-existing-project<br/>
                        $ ia-tooling init
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Generate Your First Code</h3>
                <p className="text-slate-600 mb-4">Try AI code generation with natural language:</p>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">
                    $ ia-tooling generate "Create a React component for user profile"
                  </code>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">🎉 Success!</h4>
                  <p className="text-green-800 text-sm">
                    This generates a complete React component with TypeScript, props, styling, and proper structure!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Configuration</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 not-prose">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Config File</h3>
              <p className="text-slate-600 mb-4">
                Create <code className="bg-slate-100 px-2 py-1 rounded text-sm">ia-tooling.config.js</code> in your project root:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">
                  <span className="text-purple-400">module</span><span className="text-white">.</span><span className="text-blue-400">exports</span> <span className="text-white">=</span> <span className="text-white">&#123;</span><br/>
                  &nbsp;&nbsp;<span className="text-slate-400">// Language preferences</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">language</span><span className="text-white">:</span> <span className="text-green-400">'typescript'</span><span className="text-white">,</span><br/><br/>
                  &nbsp;&nbsp;<span className="text-slate-400">// Framework settings</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">framework</span><span className="text-white">:</span> <span className="text-green-400">'react'</span><span className="text-white">,</span><br/><br/>
                  &nbsp;&nbsp;<span className="text-slate-400">// Style preferences</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">styling</span><span className="text-white">:</span> <span className="text-green-400">'tailwind'</span><span className="text-white">,</span><br/><br/>
                  &nbsp;&nbsp;<span className="text-slate-400">// AI model settings</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">model</span><span className="text-white">:</span> <span className="text-green-400">'gpt-4'</span><span className="text-white">,</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">creativity</span><span className="text-white">:</span> <span className="text-yellow-400">0.7</span><span className="text-white">,</span><br/><br/>
                  &nbsp;&nbsp;<span className="text-slate-400">// Output settings</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">output</span><span className="text-white">:</span> <span className="text-white">&#123;</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">directory</span><span className="text-white">:</span> <span className="text-green-400">'./src/generated'</span><span className="text-white">,</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">overwrite</span><span className="text-white">:</span> <span className="text-yellow-400">false</span><br/>
                  &nbsp;&nbsp;<span className="text-white">&#125;</span><br/>
                  <span className="text-white">&#125;;</span>
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuration Options</h3>
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Language Support</h4>
                  <div className="flex flex-wrap gap-2">
                    {['typescript', 'javascript', 'python', 'go', 'rust'].map(lang => (
                      <span key={lang} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['react', 'vue', 'angular', 'svelte', 'next.js'].map(framework => (
                      <span key={framework} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Styling</h4>
                  <div className="flex flex-wrap gap-2">
                    {['tailwind', 'styled-components', 'css-modules', 'scss'].map(style => (
                      <span key={style} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <a href="/docs/api" className="group block p-6 border border-slate-200 rounded-xl hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">API Reference</h3>
              <p className="text-sm text-slate-600">Complete documentation for all endpoints</p>
            </a>
            
            <a href="/docs/examples" className="group block p-6 border border-slate-200 rounded-xl hover:border-green-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Examples</h3>
              <p className="text-sm text-slate-600">Real-world code examples and use cases</p>
            </a>
            
            <a href="/features" className="group block p-6 border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">All Features</h3>
              <p className="text-sm text-slate-600">Discover what IA Tooling can do</p>
            </a>
            
            <a href="/pricing" className="group block p-6 border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Pricing</h3>
              <p className="text-sm text-slate-600">Choose the right plan for you</p>
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 not-prose">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Help Getting Started?</h3>
              <p className="text-slate-700 mb-4">
                Join our community and get help from other developers and our support team.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://discord.gg/ia-tooling" className="inline-flex items-center bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.617 4.4c-3.095 4.61-3.935 9.1-3.52 13.537a.08.08 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </a>
                <a href="/docs/troubleshooting" className="inline-flex items-center border border-yellow-600 text-yellow-700 px-4 py-2 rounded-lg font-medium hover:bg-yellow-50 transition-colors">
                  Troubleshooting Guide
                </a>
                <a href="mailto:support@ia-tooling.com" className="inline-flex items-center text-yellow-700 font-medium hover:text-yellow-800">
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
