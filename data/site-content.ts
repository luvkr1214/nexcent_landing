import type { SiteContent } from "@/types/content";

import navigation from "@/data/content/navigation.json";
import hero from "@/data/content/hero.json";
import clients from "@/data/content/clients.json";
import community from "@/data/content/community.json";
import about from "@/data/content/about.json";
import stats from "@/data/content/stats.json";
import feature from "@/data/content/feature.json";
import testimonial from "@/data/content/testimonial.json";
import blog from "@/data/content/blog.json";
import cta from "@/data/content/cta.json";
import footer from "@/data/content/footer.json";

// Central content object. Every component on the page reads its copy from
// here (or receives it as a prop derived from here) — nothing is
// hardcoded inside a component.
export const siteContent: SiteContent = {
  navigation,
  hero,
  clients,
  community,
  about,
  stats,
  feature,
  testimonial,
  blog,
  cta,
  footer,
};
