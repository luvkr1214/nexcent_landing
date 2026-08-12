import Link from "next/link";
import type { NavigationContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";

interface HeaderProps {
  content: NavigationContent;
}

export default function Header({ content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href={content.brand.href}
          className="flex items-center gap-2 text-xl font-bold text-slate-800"
        >
          <BrandMark />
          {content.brand.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {content.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href={content.actions.login.href}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {content.actions.login.label}
          </Link>
          <Button
            href={content.actions.signup.href}
            label={content.actions.signup.label}
            variant="primary"
            className="px-6 py-2.5 text-sm"
          />
        </div>

        <MobileNav content={content} />
      </Container>
    </header>
  );
}

function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <polygon points="12,2 22,8 12,14 2,8" fill="#1F2937" />
      <polygon points="12,10 22,16 12,22 2,16" fill="#22C55E" />
    </svg>
  );
}
