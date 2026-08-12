import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "link";
  withArrow?: boolean;
  className?: string;
}

/**
 * Single button/link component used for every call-to-action on the page.
 * Content (label, href) is always passed in from the JSON-driven data layer.
 */
export default function Button({
  label,
  href,
  variant = "primary",
  withArrow = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-600 text-white px-8 py-3.5 text-base hover:bg-brand-700 shadow-sm",
    outline:
      "border border-slate-200 text-slate-700 px-6 py-2.5 text-sm hover:border-brand-600 hover:text-brand-700",
    link: "text-brand-600 font-semibold hover:text-brand-700 gap-1.5",
  };

  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {label}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
