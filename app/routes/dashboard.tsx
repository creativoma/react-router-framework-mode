import type { Route } from "./+types/dashboard";
import { Link } from "react-router";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface Project {
  id: number;
  name: string;
  language: string;
  lastUpdated: string;
  status: string;
}

interface Stats {
  totalProjects: number;
  codeGenerated: string;
  timeSaved: string;
  apiCalls: string;
}

interface DashboardData {
  user: User;
  projects: Project[];
  stats: Stats;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - IA Tooling" },
    { name: "description", content: "Your IA Tooling dashboard with project overview and recent activity." },
  ];
}

// Loader para obtener datos del dashboard
export async function loader({ request }: Route.LoaderArgs): Promise<DashboardData> {
  // Aquí normalmente verificarías la autenticación
  // y cargarías los datos del usuario desde la base de datos
  
  return {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    projects: [
      { id: 1, name: "E-commerce API", language: "TypeScript", lastUpdated: "2 hours ago", status: "active" },
      { id: 2, name: "Mobile App", language: "React Native", lastUpdated: "1 day ago", status: "active" },
      { id: 3, name: "Data Pipeline", language: "Python", lastUpdated: "3 days ago", status: "completed" },
    ],
    stats: {
      totalProjects: 12,
      codeGenerated: "45.2k",
      timeSaved: "128h",
      apiCalls: "2.1k"
    }
  };
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { user, projects, stats } = loaderData || {
    user: { name: "Guest", email: "", avatar: "" },
    projects: [],
    stats: { totalProjects: 0, codeGenerated: "0", timeSaved: "0h", apiCalls: "0" }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-slate-900">IA Tooling</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full" src={user.avatar} alt={user.name} />
                <span className="ml-2 text-sm font-medium text-slate-700">{user.name}</span>
              </div>
              <button className="text-slate-500 hover:text-slate-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user.name}!</h1>
          <p className="mt-1 text-slate-600">Here's what's happening with your AI-powered development projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Total Projects", value: stats.totalProjects, icon: "📁", color: "bg-blue-500" },
            { name: "Code Generated", value: stats.codeGenerated, icon: "💻", color: "bg-green-500" },
            { name: "Time Saved", value: stats.timeSaved, icon: "⏰", color: "bg-yellow-500" },
            { name: "API Calls", value: stats.apiCalls, icon: "🚀", color: "bg-purple-500" },
          ].map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 ${stat.color} rounded-md flex items-center justify-center text-white`}>
                      <span className="text-sm">{stat.icon}</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-slate-500 truncate">{stat.name}</dt>
                      <dd className="text-lg font-semibold text-slate-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
              <p className="mt-2 text-sm text-slate-700">
                Your most recently updated AI-powered development projects.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                New Project
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-slate-300">
                    <thead className="bg-slate-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Project
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Language
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Last Updated
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {projects.map((project) => (
                        <tr key={project.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                            {project.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            {project.language}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                              project.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-slate-100 text-slate-800'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            {project.lastUpdated}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-purple-600 hover:text-purple-900">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-medium text-slate-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Generate Code
              </button>
              <Link 
                to="/docs/api" 
                className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View API Docs
              </Link>
              <button className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Debug Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
