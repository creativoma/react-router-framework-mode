import type { Route } from "./+types/quickstart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quick Start - IA Tooling Documentation" },
    { name: "description", content: "Get started with IA Tooling in 5 minutes with this quick start guide." },
  ];
}

export default function QuickStart() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Quick Start Guide
        </h1>
        <p className="text-lg text-slate-600">
          Get IA Tooling running in 5 minutes and generate your first AI-powered code.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">What You'll Learn</h2>
          <ul className="text-blue-800 space-y-1">
            <li>" Install IA Tooling CLI</li>
            <li>" Authenticate your account</li>
            <li>" Generate your first code</li>
            <li>" Basic configuration</li>
          </ul>
        </div>

        <h2>Step 1: Install IA Tooling</h2>
        <div className="bg-slate-900 rounded-lg p-4 mb-6">
          <code className="text-green-400">npm install -g ia-tooling</code>
        </div>

        <h2>Step 2: Login to Your Account</h2>
        <div className="bg-slate-900 rounded-lg p-4 mb-6">
          <code className="text-green-400">ia-tooling auth login</code>
        </div>

        <h2>Step 3: Generate Your First Code</h2>
        <p>Try this simple example:</p>
        <div className="bg-slate-900 rounded-lg p-4 mb-6">
          <code className="text-green-400">ia-tooling generate "Create a simple React button component"</code>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
          <p className="text-green-800 mb-2">
            <strong>🎉 Success!</strong> You should see generated React component code.
          </p>
        </div>

        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/getting-started">Complete Getting Started Guide</a></li>
          <li><a href="/docs/examples">Browse Code Examples</a></li>
          <li><a href="/docs/api">API Reference</a></li>
        </ul>
      </div>
    </div>
  );
}