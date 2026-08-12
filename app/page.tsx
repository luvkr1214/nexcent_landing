import { siteContent } from "@/data/site-content";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Community from "@/components/sections/Community";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Feature from "@/components/sections/Feature";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import Cta from "@/components/sections/Cta";

// Server-rendered by default (no "use client"). Every section receives
// its copy from the single, typed content object — no strings are
// hardcoded here or in the section components themselves.
export default function Home() {
  return (
    <>
      <Header content={siteContent.navigation} />
      <main className="flex-1">
        <Hero content={siteContent.hero} />
        <ClientLogos content={siteContent.clients} />
        <Community content={siteContent.community} />
        <About content={siteContent.about} />
        <Stats content={siteContent.stats} />
        <Feature content={siteContent.feature} />
        <Testimonial content={siteContent.testimonial} />
        <Blog content={siteContent.blog} />
        <Cta content={siteContent.cta} />
      </main>
      <Footer content={siteContent.footer} />
    </>
  );
}
