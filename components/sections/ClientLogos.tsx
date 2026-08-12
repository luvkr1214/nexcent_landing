import Image from "next/image";
import type { ClientsContent } from "@/types/content";
import Container from "@/components/ui/Container";

interface ClientLogosProps {
  content: ClientsContent;
}

export default function ClientLogos({ content }: ClientLogosProps) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-slate-500">{content.subtitle}</p>
        </div>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {content.logos.map((logo) => (
            <li key={logo.name} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src={logo.src} alt={logo.name} width={80} height={32} className="h-8 w-auto" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
