import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconComponent;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary: "border border-border-strong text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-foreground",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  external = false,
  showArrow = false,
  className = "",
}: ButtonProps) {
  const isPlaceholder = href.startsWith("[");
  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" aria-hidden={true} /> : null}
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      ) : null}
    </>
  );

  if (isPlaceholder) {
    return (
      <span
        className={`${base} ${variants[variant]} cursor-not-allowed opacity-50 ${className}`}
        aria-disabled="true"
        title="Add your link in src/lib/config.ts"
      >
        {content}
      </span>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
