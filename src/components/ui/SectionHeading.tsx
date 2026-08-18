import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted leading-relaxed">{description}</p>
      ) : null}
    </Reveal>
  );
}
