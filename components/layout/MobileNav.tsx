"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavigationContent } from "@/types/content";

interface MobileNavProps {
  content: NavigationContent;
}

/**
 * Small client island for the mobile menu toggle. Kept isolated so the
 * rest of the header (and the whole page) can stay server-rendered.
 */
export default function MobileNav({ content }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 z-40 border-b border-slate-100 bg-white px-6 pb-6 shadow-lg">
          <ul className="flex flex-col gap-1 pt-2">
            {content.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <Link
              href={content.actions.login.href}
              className="text-sm font-semibold text-brand-600"
            >
              {content.actions.login.label}
            </Link>
            <Link
              href={content.actions.signup.href}
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              {content.actions.signup.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
