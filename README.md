# IA Tooling - AI-Powered Development Platform

A modern landing page showcasing AI development tools built with React Router Framework Mode, featuring a sleek UI and responsive design.

[![Built with React Router](https://img.shields.io/badge/Built%20with-React%20Router-purple?style=flat-square)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38bdf8?style=flat-square)](https://tailwindcss.com/)

## 🚀 Features

- 🤖 **AI-First Design** - Modern UI showcasing AI development tools
- ⚡️ **React Router Framework Mode** - Server-side rendering with HMR
- 🎨 **Beautiful UI** - Modern design with gradients and animations  
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🔒 **TypeScript** - Type-safe development experience
- 🎉 **TailwindCSS** - Utility-first CSS framework
- 📦 **Asset Optimization** - Bundling and optimization out of the box

## 🛠️ Tech Stack

- **Framework**: React Router (Framework Mode)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd react-router-framework-mode
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

### Production Build

Create an optimized production build:

```bash
pnpm build
```

### Start Production Server

Run the production server:

```bash
pnpm start
```

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Features showcase
│   ├── CTA.tsx         # Call-to-action section
│   ├── Footer.tsx      # Site footer
│   └── TrustedBy.tsx   # Trusted companies section
├── routes/             # Route components
│   ├── home.tsx        # Main landing page
│   ├── about.tsx       # About page
│   ├── blog.tsx        # Blog page
│   ├── pricing.tsx     # Pricing page
│   ├── dashboard.tsx   # User dashboard
│   ├── details.tsx     # Details page
│   ├── auth/           # Authentication routes
│   │   ├── login.tsx   # Login page
│   │   └── signup.tsx  # Signup page
│   ├── docs/           # Documentation routes
│   │   ├── overview.tsx        # Docs overview
│   │   ├── quickstart.tsx      # Quick start guide
│   │   ├── getting-started.tsx # Complete setup guide
│   │   ├── api.tsx             # API documentation
│   │   ├── examples.tsx        # Code examples
│   │   └── troubleshooting.tsx # Troubleshooting guide
│   └── features/       # Feature pages
│       ├── code-generation.tsx # AI code generation
│       ├── debugging.tsx       # Smart debugging
│       └── optimization.tsx    # Performance optimization
├── root.tsx            # App root component
├── routes.ts           # Route configuration
├── seo.ts             # SEO configuration
└── app.css            # Global styles & Tailwind imports
```

## 📄 Pages Overview

### Main Pages
- **Home** (`/`) - Landing page with hero, features, and call-to-action
- **About** (`/about`) - Company information, mission, and values
- **Pricing** (`/pricing`) - Subscription plans and pricing tiers
- **Blog** (`/blog`) - Latest insights and tutorials
- **Dashboard** (`/dashboard`) - User dashboard with project overview

### Documentation (`/docs`)
- **Overview** - Introduction and feature highlights
- **Quick Start** - Get started in 5 minutes
- **Getting Started** - Complete setup and configuration guide
- **API Reference** - Complete API documentation with examples
- **Examples** - Code examples and use cases
- **Troubleshooting** - Common issues and solutions

### Features (`/features`)
- **Code Generation** - AI-powered code generation capabilities
- **Debugging** - Smart debugging with AI assistance
- **Optimization** - Performance optimization tools

### Authentication (`/auth`)
- **Login** - User authentication with social login options
- **Signup** - User registration with email verification

## 🎨 UI Components

The project includes several modern UI components:

- **Navbar**: Responsive navigation with mobile menu
- **Hero Section**: Eye-catching header with gradient backgrounds and animations
- **Features Grid**: Showcases AI tool capabilities with icons and descriptions  
- **TrustedBy**: Company logos and testimonials
- **Call-to-Action**: Conversion-focused section with testimonials
- **Footer**: Comprehensive site footer with links and social media

## 🚀 Deployment

### Docker Deployment

The project includes a Dockerfile for containerized deployment:

```bash
docker build -t ia-tooling .
docker run -p 3000:3000 ia-tooling
```

Deploy to any Docker-compatible platform:
- AWS ECS / Fargate
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Traditional Deployment

For Node.js hosting platforms:

1. Build the project: `pnpm build`
2. Upload the `build/` directory and `package.json`
3. Set start command: `node build/server/index.js`
4. Make sure to install production dependencies: `pnpm install --prod`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Learn More

- [React Router Documentation](https://reactrouter.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

Built with ❤️ by the IA Tooling team
