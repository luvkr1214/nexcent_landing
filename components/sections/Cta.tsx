import type { CtaContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CtaProps {
  content: CtaContent;
}

export default function Cta({ content }: CtaProps) {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
          {content.title}
        </h2>
        <Button
          href={content.cta.href}
          label={content.cta.label}
          variant="primary"
          withArrow
          className="mt-8"
        />
      </Container>
    </section>
  );
}
