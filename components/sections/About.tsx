import Image from "next/image";
import type { AboutContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface AboutProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="feature" className="bg-white py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-md">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={480}
            height={420}
            className="h-auto w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-6 leading-relaxed text-slate-500">{content.paragraph}</p>
          <Button
            href={content.cta.href}
            label={content.cta.label}
            variant="primary"
            className="mt-8"
          />
        </div>
      </Container>
    </section>
  );
}
