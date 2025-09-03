import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { TrustedBy } from "../components/TrustedBy";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IA Tooling - AI-Powered Development Tools" },
    { name: "description", content: "Transform your development workflow with our cutting-edge AI tooling platform. Build faster, smarter, and more efficiently." },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
