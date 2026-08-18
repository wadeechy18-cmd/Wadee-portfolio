import { EXPERIENCE } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="05" eyebrow="Experience" title="Experience" />

        <ol className="mt-12 space-y-0">
          {EXPERIENCE.map((item, i) => (
            <Reveal as="li" key={item.role} delay={i * 90}>
              <div className="grid gap-4 border-t border-border py-8 first:border-t-0 sm:grid-cols-[180px_1fr] sm:gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {item.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-subtle">{item.place}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
