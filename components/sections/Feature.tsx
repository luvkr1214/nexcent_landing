import Image from "next/image";
import type { FeatureContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface FeatureProps {
  content: FeatureContent;
}

export default function Feature({ content }: FeatureProps) {
  return (
    <section className="bg-white py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-md lg:order-1">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={480}
            height={420}
            className="h-auto w-full"
          />
        </div>

        <div className="lg:order-2">
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
