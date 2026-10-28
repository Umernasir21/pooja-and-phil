import { type ElementType, type ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
  maxWidth = "max-w-6xl",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Override the default max-w-6xl cap — e.g. a wider value for full-bleed hero/banner art so it isn't boxed in on large screens. */
  maxWidth?: string;
}) {
  return (
    <Tag className={`mx-auto w-full ${maxWidth} px-6 sm:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
