import { ABOUT } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="01" eyebrow="About" title="Background" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {ABOUT.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 80}>
                <p className="leading-relaxed text-foreground/90 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {ABOUT.pillars.map((pillar) => (
                <div key={pillar.label} className="bg-surface p-6">
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {pillar.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
