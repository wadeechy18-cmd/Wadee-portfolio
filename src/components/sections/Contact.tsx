import { Mail } from "lucide-react";
import { SITE } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="container-px mx-auto max-w-6xl py-24">
        <SectionHeading index="09" eyebrow="Contact" title="Let's build something." />

        <Reveal delay={100}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Open to conversations about software, AI, and product work. The
            best way to reach me is by email.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={SITE.email.startsWith("[") ? SITE.email : `mailto:${SITE.email}`}
              variant="primary"
              icon={Mail}
            >
              {SITE.email}
            </Button>
            <Button href={SITE.github} variant="secondary" icon={GithubIcon} external>
              GitHub
            </Button>
            <Button href={SITE.linkedin} variant="secondary" icon={LinkedinIcon} external>
              LinkedIn
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
