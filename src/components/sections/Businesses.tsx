import { Building2, ExternalLink } from "lucide-react";
import { BUSINESSES } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Businesses() {
  return (
    <section id="businesses" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading
          index="03"
          eyebrow="Founded Businesses"
          title="Businesses I've Founded"
          description="Three businesses I've founded and built from the ground up, spanning professional services, technology, and consumer products."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {BUSINESSES.map((business, i) => (
            <Reveal key={business.name} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-border-strong">
                <div className="flex h-36 items-center justify-center border-b border-border bg-background/40">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Building2 className="h-5 w-5 text-subtle" aria-hidden="true" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                      {business.name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {business.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                    {business.name}
                  </h3>
                  <p className="mt-1 text-sm text-subtle">{business.role}</p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {business.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {business.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-border">
                    <Button href={business.website} variant="secondary" icon={ExternalLink} external className="w-full justify-center">
                      Visit Website
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
