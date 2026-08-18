import { LEARNING } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Learning() {
  return (
    <section id="learning" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading
          index="07"
          eyebrow="Currently Learning"
          title="Currently Learning"
          description="An active, ongoing learning journey — not a finished skill set."
        />

        <Reveal delay={100}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {LEARNING.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
