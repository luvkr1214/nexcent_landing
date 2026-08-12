import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexcent | Membership Management Made Simple",
  description:
    "Nexcent helps membership organisations, national associations, and clubs manage renewals, payments, and their entire community in a single system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans text-slate-700">
        {children}
      </body>
    </html>
  );
}
