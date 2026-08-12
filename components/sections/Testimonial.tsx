import Image from "next/image";
import type { TestimonialContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface TestimonialProps {
  content: TestimonialContent;
}

export default function Testimonial({ content }: TestimonialProps) {
  const { testimonial, logos, logosCta } = content;

  return (
    <section id="testimonial" className="bg-slate-50">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={testimonial.image.src}
            alt={testimonial.image.alt}
            width={400}
            height={260}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="leading-relaxed text-slate-500">{testimonial.quote}</p>
          <p className="mt-6 text-lg font-bold text-brand-600">
            {testimonial.authorName}
          </p>
          <p className="text-sm text-slate-500">{testimonial.authorRole}</p>

          <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-slate-200 pt-8">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={70}
                height={28}
                className="h-6 w-auto opacity-70"
              />
            ))}
            <Button
              href={logosCta.href}
              label={logosCta.label}
              variant="link"
              withArrow
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
