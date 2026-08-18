import { SKILLS } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="06" eyebrow="Technical Skills" title="Technical Skills" />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.group} delay={i * 60} className="bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
