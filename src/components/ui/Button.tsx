import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-cream";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange text-cream hover:bg-rust focus-visible:bg-rust shadow-sm",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-orange hover:text-orange",
  "ghost-cream":
    "bg-transparent text-cream border border-cream/50 hover:border-saffron hover:text-saffron",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  [key: string]: unknown;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${variantClasses[variant]} ${className}`;

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
