import type { StatsContent } from "@/types/content";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

interface StatsProps {
  content: StatsContent;
}

export default function Stats({ content }: StatsProps) {
  return (
    <section id="product" className="bg-slate-50 py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            {content.eyebrowTitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-brand-600">{content.highlightPhrase}</span>
          </h2>
          <p className="mt-4 text-slate-500">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={stat.icon} className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
