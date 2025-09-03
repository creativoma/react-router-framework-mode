import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Home page
    index("routes/home.tsx"),
    
    // Features pages
    route("features", "routes/features.tsx"),
    route("features/code-generation", "routes/features/code-generation.tsx"),
    route("features/debugging", "routes/features/debugging.tsx"),
    route("features/optimization", "routes/features/optimization.tsx"),
    
    // Pricing
    route("pricing", "routes/pricing.tsx"),
    
    // Documentation with nested routes
    route("docs", "routes/docs.tsx", [
        index("routes/docs/overview.tsx"),
        route("quickstart", "routes/docs/quickstart.tsx"),
        route("getting-started", "routes/docs/getting-started.tsx"),
        route("api", "routes/docs/api.tsx"),
        route("examples", "routes/docs/examples.tsx"),
        route("troubleshooting", "routes/docs/troubleshooting.tsx"),
    ]),
    
    // About & Company
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog.tsx"),
    
    // User routes
    route("login", "routes/auth/login.tsx"),
    route("signup", "routes/auth/signup.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("details", "routes/details.tsx"),
] satisfies RouteConfig;
