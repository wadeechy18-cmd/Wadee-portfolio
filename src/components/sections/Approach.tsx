import { APPROACH } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Approach() {
  return (
    <section id="approach" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="08" eyebrow="How I Work" title="Personal Approach" />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((principle, i) => (
            <Reveal key={principle.label} delay={i * 70} className="bg-surface p-6">
              <span className="font-mono text-xs text-accent">{`0${i + 1}`}</span>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
                {principle.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
