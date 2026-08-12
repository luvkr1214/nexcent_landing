import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogContent } from "@/types/content";
import Container from "@/components/ui/Container";

interface BlogProps {
  content: BlogContent;
}

export default function Blog({ content }: BlogProps) {
  return (
    <section id="faq" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-500">{content.description}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {content.posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-800">
                  {post.title}
                </h3>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {content.readMoreLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
