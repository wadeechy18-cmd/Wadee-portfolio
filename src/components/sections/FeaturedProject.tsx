import { Sparkles } from "lucide-react";
import { FEATURED_PROJECT } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/icons";

export default function FeaturedProject() {
  const p = FEATURED_PROJECT;

  return (
    <section id="projects" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="02" eyebrow="Featured Software" title="Featured Software" />

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
            {/* Visual showcase placeholder */}
            <div className="relative flex h-64 items-center justify-center border-b border-border bg-[linear-gradient(135deg,rgba(109,139,255,0.08),rgba(255,255,255,0.02))] sm:h-80">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  Project screenshot placeholder
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {p.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 font-mono text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {p.status}
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-foreground/90 sm:text-lg">
                {p.description}
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                    Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                    Technical Approach
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.approach}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                  Key Engineering Areas
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.engineeringAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
                <Button href={p.githubUrl} variant="primary" icon={GithubIcon} external>
                  GitHub
                </Button>
                <Button href={p.liveUrl} variant="secondary" showArrow external>
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
