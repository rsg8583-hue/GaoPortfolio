import type { ReactNode } from "react";

const isDev = process.env.NODE_ENV === "development";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="reveal mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="font-mono text-xs tracking-widest text-accent">
          {index}
        </span>
        <h2
          id={`${id}-title`}
          className="font-display text-4xl leading-none tracking-tight md:text-5xl"
        >
          {title}
        </h2>
        <span
          aria-hidden
          className="h-px flex-1 translate-y-[-0.35em] bg-line"
        />
      </div>
      {children}
    </section>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-[transform,background-color,color,border-color] duration-200 active:scale-[0.98]";

export const buttonStyles = {
  primary: `${buttonBase} bg-accent text-accent-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_var(--accent)]`,
  secondary: `${buttonBase} border border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-ink`,
  disabled: `${buttonBase} cursor-not-allowed border border-dashed border-line text-muted`,
};

/** Resume download button. Renders a disabled state until the PDF exists in /public. */
export function ResumeButton({
  file,
  available,
  variant = "secondary",
}: {
  file: string;
  available: boolean;
  variant?: "primary" | "secondary";
}) {
  if (available) {
    return (
      <a href={`/${file}`} download className={buttonStyles[variant]}>
        Download resume
        <ArrowIcon direction="down" />
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      className={buttonStyles.disabled}
      title={`Add ${file} to /public to enable this button`}
    >
      Resume coming soon
    </button>
  );
}

/**
 * Only visible during `npm run dev`: marks a link that still needs a URL in
 * src/data/portfolio.ts. Renders nothing in production.
 */
export function DevPlaceholder({ label }: { label: string }) {
  if (!isDev) return null;
  return (
    <span className="inline-flex items-center rounded-md border border-dashed border-accent/60 px-2 py-1 font-mono text-[11px] text-accent">
      + add {label} in portfolio.ts
    </span>
  );
}

export function ArrowIcon({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "down" | "up-right";
  className?: string;
}) {
  const rotate = {
    right: "",
    down: "rotate-90",
    "up-right": "-rotate-45",
  }[direction];
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 ${rotate} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
