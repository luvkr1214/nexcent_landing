import type { CommunityContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

interface CommunityProps {
  content: CommunityContent;
}

export default function Community({ content }: CommunityProps) {
  return (
    <section id="service" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-slate-500">{content.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={card.icon} className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-800">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
