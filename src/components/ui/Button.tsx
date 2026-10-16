import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-cream" | "cream-pill";

const variantClasses: Record<Variant, string> = {
  primary: "rounded-md bg-orange text-cream hover:bg-rust shadow-sm",
  secondary:
    "rounded-md bg-transparent text-ink border border-ink/25 hover:border-orange hover:text-orange",
  "ghost-cream":
    "rounded-md bg-transparent text-cream border border-cream/50 hover:border-saffron hover:text-saffron",
  "cream-pill": "rounded-full bg-cream text-ink hover:bg-white shadow-sm",
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
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${variantClasses[variant]} ${className}`;

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
