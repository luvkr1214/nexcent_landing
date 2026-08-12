import Image from "next/image";
import type { HeroContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const slide = content.slides[0];
  if (!slide) return null;

  return (
    <section id="home" className="bg-slate-50">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
            {slide.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-brand-600">{slide.highlightLine}</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500">{slide.description}</p>
          <Button
            href={slide.cta.href}
            label={slide.cta.label}
            variant="primary"
            className="mt-8"
          />
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            width={560}
            height={480}
            priority
            className="h-auto w-full"
          />
        </div>
      </Container>

      {content.slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-10">
          {content.slides.map((s, index) => (
            <span
              key={s.highlightLine}
              className={
                index === 0
                  ? "h-2 w-2 rounded-full bg-brand-600"
                  : "h-2 w-2 rounded-full bg-brand-200"
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
