import type { Route } from "./+types/troubleshooting";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Troubleshooting - IA Tooling Documentation" },
    { name: "description", content: "Common issues and solutions when using IA Tooling." },
  ];
}

export default function Troubleshooting() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Troubleshooting Guide
        </h1>
        <p className="text-lg text-slate-600">
          Common issues and solutions when using IA Tooling.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Installation Issues</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 not-prose">
          <h3 className="font-semibold text-red-900 mb-2">❌ Permission denied during global install</h3>
          <p className="text-red-800 mb-3">Error: EACCES permission denied when running npm install -g</p>
          <div className="bg-slate-900 rounded-lg p-3">
            <code className="text-green-400 text-sm">sudo npm install -g ia-tooling</code>
          </div>
          <p className="text-red-800 text-sm mt-2">Or configure npm to use a different directory for global packages.</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 not-prose">
          <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Command not found: ia-tooling</h3>
          <p className="text-yellow-800 mb-3">After installation, the command isn't recognized</p>
          <div className="space-y-2">
            <p className="text-sm text-yellow-700">1. Check if it's in your PATH:</p>
            <div className="bg-slate-900 rounded-lg p-3">
              <code className="text-green-400 text-sm">which ia-tooling</code>
            </div>
            <p className="text-sm text-yellow-700">2. Try restarting your terminal</p>
            <p className="text-sm text-yellow-700">3. Use npx if global install failed:</p>
            <div className="bg-slate-900 rounded-lg p-3">
              <code className="text-green-400 text-sm">npx ia-tooling generate "your prompt"</code>
            </div>
          </div>
        </div>

        <h2>Authentication Problems</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 not-prose">
          <h3 className="font-semibold text-red-900 mb-2">❌ Login failed or expired token</h3>
          <div className="space-y-2">
            <p className="text-red-800 text-sm">1. Clear stored credentials:</p>
            <div className="bg-slate-900 rounded-lg p-3">
              <code className="text-green-400 text-sm">ia-tooling auth logout</code>
            </div>
            <p className="text-red-800 text-sm">2. Login again:</p>
            <div className="bg-slate-900 rounded-lg p-3">
              <code className="text-green-400 text-sm">ia-tooling auth login</code>
            </div>
          </div>
        </div>

        <h2>Generation Issues</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 not-prose">
          <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Poor code quality or unexpected results</h3>
          <div className="space-y-2 text-yellow-800 text-sm">
            <p><strong>Try these improvements:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Be more specific in your prompts</li>
              <li>Include technology stack (React, TypeScript, etc.)</li>
              <li>Mention styling framework (Tailwind, CSS modules)</li>
              <li>Specify complexity level (simple, intermediate, advanced)</li>
            </ul>
          </div>
        </div>

        <h2>Rate Limiting</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 not-prose">
          <h3 className="font-semibold text-orange-900 mb-2">🚫 Rate limit exceeded</h3>
          <div className="space-y-2 text-orange-800 text-sm">
            <p>If you're hitting rate limits:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check your current plan limits</li>
              <li>Wait for the limit to reset</li>
              <li>Consider upgrading your plan</li>
              <li>Use more efficient prompts</li>
            </ul>
          </div>
        </div>

        <h2>Common Error Codes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <code className="px-2 py-1 bg-red-600 text-white rounded text-sm">400</code>
              <span className="font-semibold text-slate-900">Bad Request</span>
            </div>
            <p className="text-sm text-slate-600">Check your prompt format and parameters</p>
          </div>
          
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <code className="px-2 py-1 bg-red-600 text-white rounded text-sm">401</code>
              <span className="font-semibold text-slate-900">Unauthorized</span>
            </div>
            <p className="text-sm text-slate-600">Re-authenticate with ia-tooling auth login</p>
          </div>
          
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <code className="px-2 py-1 bg-orange-600 text-white rounded text-sm">429</code>
              <span className="font-semibold text-slate-900">Rate Limited</span>
            </div>
            <p className="text-sm text-slate-600">Wait or upgrade your plan</p>
          </div>
          
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <code className="px-2 py-1 bg-slate-600 text-white rounded text-sm">500</code>
              <span className="font-semibold text-slate-900">Server Error</span>
            </div>
            <p className="text-sm text-slate-600">Try again or contact support</p>
          </div>
        </div>

        <h2>Still Need Help?</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose">
          <h3 className="font-semibold text-blue-900 mb-3">Get Support</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.617 4.4c-3.095 4.61-3.935 9.1-3.52 13.537a.08.08 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-blue-900">Discord Community</p>
                <a href="https://discord.gg/ia-tooling" className="text-sm text-blue-700 hover:text-blue-800">Join our Discord server</a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-blue-900">Email Support</p>
                <a href="mailto:support@ia-tooling.com" className="text-sm text-blue-700 hover:text-blue-800">support@ia-tooling.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}