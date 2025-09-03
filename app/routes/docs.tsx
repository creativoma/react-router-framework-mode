import type { Route } from "./+types/docs";
import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentation - IA Tooling" },
    { name: "description", content: "Complete documentation for IA Tooling API and features." },
  ];
}

export default function DocsLayout() {
  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Overview", href: "/docs" },
        { name: "Quick Start", href: "/docs/quickstart" },
        { name: "Getting Started", href: "/docs/getting-started" },
      ]
    },
    {
      title: "API Reference", 
      items: [
        { name: "API Documentation", href: "/docs/api" },
        { name: "Examples", href: "/docs/examples" },
      ]
    },
    {
      title: "Help & Support",
      items: [
        { name: "Troubleshooting", href: "/docs/troubleshooting" },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <nav className="space-y-8">
                  {navigation.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href={item.href}
                              className="block text-slate-600 hover:text-purple-600 py-1 transition-colors duration-200"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <div className="bg-white rounded-lg shadow">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
