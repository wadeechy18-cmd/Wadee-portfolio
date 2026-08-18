import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE } from "@/lib/config";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm font-medium text-foreground">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm text-subtle">
              {SITE.tagline} · {SITE.location}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href={SITE.github.startsWith("[") ? "#contact" : SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-subtle transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={SITE.linkedin.startsWith("[") ? "#contact" : SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-subtle transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href={SITE.email.startsWith("[") ? "#contact" : `mailto:${SITE.email}`}
              aria-label="Email"
              className="text-subtle transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-subtle">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
