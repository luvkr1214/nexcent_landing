import Link from "next/link";
import type { FooterContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Link
            href={content.brand.href}
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <polygon points="12,2 22,8 12,14 2,8" fill="#ffffff" />
              <polygon points="12,10 22,16 12,22 2,16" fill="#22C55E" />
            </svg>
            {content.brand.name}
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            {content.copyright}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {content.social.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white transition-colors hover:bg-brand-600"
              >
                <Icon name={social.icon} className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        {content.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-white">
            {content.newsletter.title}
          </h3>
          <form className="mt-5 flex items-center rounded-lg border border-slate-700 bg-slate-800 pr-2">
            <label htmlFor="newsletter-email" className="sr-only">
              {content.newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={content.newsletter.placeholder}
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-brand-600 text-white hover:bg-brand-700"
            >
              <Icon name="send" className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
