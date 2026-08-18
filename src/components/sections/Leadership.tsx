import { LEADERSHIP } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="04" eyebrow="Leadership" title="Leadership" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col">
              <span className="font-mono text-6xl font-semibold tracking-tight text-foreground sm:text-7xl">
                {LEADERSHIP.stat}
              </span>
              <span className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {LEADERSHIP.statLabel}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
              {LEADERSHIP.description}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {LEADERSHIP.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
