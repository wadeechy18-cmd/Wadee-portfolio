import { Mail } from "lucide-react";
import { HERO, SITE } from "@/lib/config";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section id="home" className="relative border-b border-border">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-8 py-28 sm:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {HERO.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {HERO.headline}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="max-w-2xl text-lg text-foreground/90 sm:text-xl">
            {HERO.subheading}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-2xl leading-relaxed text-muted">{HERO.body}</p>
        </Reveal>

        <Reveal delay={260}>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#projects" variant="primary" showArrow>
              View My Work
            </Button>
            <Button href={SITE.github} variant="secondary" icon={GithubIcon} external>
              GitHub
            </Button>
            <Button href="#contact" variant="ghost" icon={Mail}>
              Contact Me
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
