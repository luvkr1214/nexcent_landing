import {
  Users,
  Building2,
  Handshake,
  Sparkles,
  TrendingUp,
  CreditCard,
  Send,
  type LucideProps,
} from "lucide-react";

// lucide-react dropped brand/social glyphs from its default icon set, so
// the social icons are small hand-rolled SVGs kept in the same shape
// (currentColor stroke, size-driven) as the lucide icons around them.
function Instagram(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Dribbble(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14-1-16.38.61" />
    </svg>
  );
}

function Twitter(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="currentColor"
      className={props.className}
    >
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L1 2h7.3l5.1 6.7L18.9 2zm-1.3 18h2L7.5 4H5.4L17.6 20z" />
    </svg>
  );
}

function Youtube(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5 -2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons = {
  users: Users,
  building: Building2,
  handshake: Handshake,
  sparkles: Sparkles,
  "trending-up": TrendingUp,
  "credit-card": CreditCard,
  instagram: Instagram,
  dribbble: Dribbble,
  twitter: Twitter,
  youtube: Youtube,
  send: Send,
} as const;

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: string;
}

/** Renders a named icon so JSON content can reference icons by string id. */
export default function Icon({ name, ...props }: IconProps) {
  const Cmp = icons[name as IconName];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
