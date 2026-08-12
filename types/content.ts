// Shared content types.
// All page copy lives in JSON under /data/content and is typed here so
// components never contain hardcoded strings — only presentation logic.

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationContent {
  brand: {
    name: string;
    href: string;
  };
  links: NavLink[];
  actions: {
    login: NavLink;
    signup: NavLink;
  };
}

export interface HeroSlide {
  eyebrow?: string;
  titleLines: string[];
  highlightLine: string;
  description: string;
  cta: NavLink;
  image: {
    src: string;
    alt: string;
  };
}

export interface HeroContent {
  slides: HeroSlide[];
}

export interface Logo {
  name: string;
  src: string;
}

export interface ClientsContent {
  title: string;
  subtitle: string;
  logos: Logo[];
}

export interface CommunityCard {
  icon: string;
  title: string;
  description: string;
}

export interface CommunityContent {
  title: string;
  subtitle: string;
  cards: CommunityCard[];
}

export interface AboutContent {
  title: string;
  paragraph: string;
  cta: NavLink;
  image: {
    src: string;
    alt: string;
  };
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatsContent {
  eyebrowTitleLines: string[];
  highlightPhrase: string;
  subtitle: string;
  stats: StatItem[];
}

export interface FeatureContent {
  title: string;
  paragraph: string;
  cta: NavLink;
  image: {
    src: string;
    alt: string;
  };
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface TestimonialContent {
  testimonial: Testimonial;
  logos: Logo[];
  logosCta: NavLink;
}

export interface BlogPost {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface BlogContent {
  title: string;
  description: string;
  readMoreLabel: string;
  posts: BlogPost[];
}

export interface CtaContent {
  title: string;
  cta: NavLink;
}

export interface FooterLinkColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface NewsletterContent {
  title: string;
  placeholder: string;
}

export interface FooterContent {
  brand: {
    name: string;
    href: string;
  };
  copyright: string;
  social: SocialLink[];
  columns: FooterLinkColumn[];
  newsletter: NewsletterContent;
}

export interface SiteContent {
  navigation: NavigationContent;
  hero: HeroContent;
  clients: ClientsContent;
  community: CommunityContent;
  about: AboutContent;
  stats: StatsContent;
  feature: FeatureContent;
  testimonial: TestimonialContent;
  blog: BlogContent;
  cta: CtaContent;
  footer: FooterContent;
}
